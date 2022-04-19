import { AllType } from './action';
import { ActionType, UserInfoReducerType } from './type';

const initialStateName: UserInfoReducerType = {
  email: '',
  age: '',
};

const UserInfoReducer = (state = initialStateName, action: ActionType) => {
  switch (action.type) {
    case AllType.UserInfoAdd:
      return {
        ...state,
        email: action.payload.email,
        age: action.payload.age
      };
    case AllType.UserInfoCLear:
      return {
        ...initialStateName,
      };
    default:
      return state;
  }
};

export default UserInfoReducer;
