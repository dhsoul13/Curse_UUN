import { AllTypeType } from './type';

export const AllType: AllTypeType = {
  UserInfoAdd: 'ADD_INFO',
  UserInfoCLear: 'CLEAR_INFO',
};

export const UserInfoAdd = (email: string, age: string) => ({
  type: AllType.UserInfoAdd,
  payload: { email, age }
});

export const UserInfoClear = () => ({
  type: AllType.UserInfoCLear,
});
