export type User = {
  email: string
  firstName: string
  lastName: string
  hearts: number[]
  progress: number[]
}

// TODO: replace the question marks once more finalized
export type Persona = {
  name: string
  pronouns: string
  category: string
  scammer: boolean
  type: string
  background: string
  properties: string[]
  // image: string,
  bond: number
  prompts: string[]
  responses: string[]
  clues: string[]
  userChoices: string[]
  blocked: number
  matched: number
  misidentified: number
}

export type ErrorMessage = {
  message: string
}
