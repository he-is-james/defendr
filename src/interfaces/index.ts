export type User = {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    friendsHearts: number,
    strangersHearts: number,
    careersHearts: number,
}

// export type Persona = {
//     name: string,
//     type: string,
//     clue1: string[],
// }

export type ErrorMessage = {
    message: string
}