import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../firebase'
import { User, ErrorMessage } from '@/interfaces'

export default async function userHandler(
    req: NextApiRequest,
    res: NextApiResponse<User | ErrorMessage>
  ) {
    const { query, method } = req   
    const { uid } = query
    const userId = Array.isArray(uid) ? uid[0] : uid

    switch (method) {
        case 'GET':
            try {
                const documentSnapshot = await db.collection('users').doc(userId).get()
                if (!documentSnapshot.exists) {
                    res.status(404).json({ message: 'User not found'})
                    return
                }
                const user = documentSnapshot.data() as User;
                res.status(200).json(user)
            } catch (err) {
                res.status(404).json({ message: 'Get User failed'})
            }

            break
        case 'POST':
            try {
                console.log('here')
                const newUser: User = req.body
                await db.collection('users').add(newUser)
            } catch (err) {
                res.status(404).json({ message: 'Add User failed'})
            }
    }
  }