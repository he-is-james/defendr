import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../firebase'
import { User, ErrorMessage } from '../../../interfaces/index'

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<User | ErrorMessage>
) {
  const { query, method } = req
  const { email } = query

  switch (method) {
    case 'GET':
      try {
        const querySnapshot = await db
          .collection('users')
          .where('email', '==', email)
          .get()
        if (querySnapshot.empty) {
          res.status(404).json({ message: 'User not found' })
          return
        }
        const documentSnapshot = querySnapshot.docs[0]
        const user = documentSnapshot.data() as User
        res.status(200).json(user)
      } catch (err) {
        res.status(404).json({ message: 'Get User failed' })
      }

      break
    case 'POST':
      try {
        console.log('here')
        const newUser: User = req.body
        await db.collection('users').add(newUser)
      } catch (err) {
        res.status(404).json({ message: 'Add User failed' })
      }
  }
}
