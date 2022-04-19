/* eslint-disable no-unused-vars */
import { AllType } from './action';
import { ActionType, UserName } from './type';

const initialStateName: UserName = {
  name: '',
};

const UserNameReducer = (state = initialStateName, action: ActionType) => {
  switch (action.type) {
    case AllType.UserAdd:
      return {
        ...state,
        name: action.payload
      };
    case AllType.UserRemove: return {
      ...initialStateName
    };
    default:
      return state;
  }
};

export default UserNameReducer;
