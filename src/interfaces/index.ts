export type User = {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    friendsHearts: number,
    strangersHearts: number,
    careersHearts: number,
}

// TODO: replace the question marks once more finalized
export type Persona = {
    name: string,
    category: string,
    scammer: boolean,
    type: string,
    background: string,
    properties?: string[],
    image?: string,
    bond: number,
    prompts?: string[],
    responses?: string[],
    clues?: string[]
    userChoices?: string[],
    misidentified?: string[]
}

export type ErrorMessage = {
    message: string
}