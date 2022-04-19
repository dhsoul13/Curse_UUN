export type UserInfoReducerType = {
    email: string,
    age: string,
}
export type AllTypeType = {
    UserInfoAdd: 'ADD_INFO',
    UserInfoCLear: 'CLEAR_INFO',
}

type UserInfoAddType = {
    type: AllTypeType['UserInfoAdd'];
    payload: any
}

type UserInfoClearType = {
    type: AllTypeType['UserInfoCLear'];
}

export type ActionType = UserInfoAddType | UserInfoClearType;
