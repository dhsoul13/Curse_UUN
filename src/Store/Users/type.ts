export type AllTypeType = {
      UserAdd: 'User__Add'
}

export type UserDateReducerType = {
    date: any[]
}

type UserAddDateType = {
    type: AllTypeType['UserAdd'],
    payload: any[]
}
export type ActionType = UserAddDateType;
