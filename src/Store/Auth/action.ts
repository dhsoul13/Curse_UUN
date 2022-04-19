import { AllTypeType } from './type';

export const AllType: AllTypeType = {
  UserAdd: 'ADD_USER',
  UserRemove: 'REMOVE_USER',
};

export const UserNameAdd = (name: string) => ({
  type: AllType.UserAdd,
  payload: name
});

export const UserNameRemove = () => ({
  type: AllType.UserRemove,
});
