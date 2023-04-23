import { ErrorMessage, Persona } from '@/interfaces'
import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../firebase'

export default async function personaHandler(
  req: NextApiRequest,
  res: NextApiResponse<Persona | ErrorMessage>
) {
  const { query, body, method } = req
  const { id } = query
  const personaId = Array.isArray(id) ? id[0] : id

  switch (method) {
    case 'GET':
      try {
        const documentSnapshot = await db.collection('personas').doc(personaId).get()
        if (!documentSnapshot.exists) {
          res.status(404).json({ message: 'Persona not found' })
          return
        }
        const personaData = documentSnapshot.data() as Persona
        res.status(200).json(personaData)
      } catch (err) {
        res.status(404).json({ message: `Get Persona ${id} failed` })
      }
      break
    case 'POST':
      try {
        const newPersona: Persona = body
        // might need to do some changes with the id creation
        if (newPersona) {
          const response = await db
            .collection('personas')
            .doc(personaId)
            .set(newPersona)
          console.log(response)
          res.status(200).json(newPersona)
          return
        }
        res.status(404).json({ message: 'Persona not created' })
      } catch (err) {
        res.status(404).json({ message: `Add Persona ${id} failed` })
      }
  }
}
