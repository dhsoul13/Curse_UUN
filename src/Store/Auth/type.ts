/* eslint-disable import/export */
export type UserName = {
    name: string
}
export type AllTypeType= {
    UserAdd: 'ADD_USER',
    UserRemove: 'REMOVE_USER',
}
type UserNameAddType = {
    type: AllTypeType['UserAdd'],
    payload: string
}
// eslint-disable-next-line no-unused-vars
type UserNameRemovetType = {
    type: AllTypeType['UserRemove'],
}

export type ActionType = UserNameAddType | UserNameRemovetType
