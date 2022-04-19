import { UserName } from './Auth/type';
import { UserInfoReducerType } from './UserInfo/type';
import { UserDateReducerType } from './Users/type';

export type RootType = {
    auth: UserName,
    info: UserInfoReducerType,
    users:UserDateReducerType
}
