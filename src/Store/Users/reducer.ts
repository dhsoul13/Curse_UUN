/* eslint-disable consistent-return */
/* eslint-disable default-case */
import { AllType } from './action';
import { ActionType, UserDateReducerType } from './type';

const initialStateDate:UserDateReducerType = {
  date: []
};
const UserDateReducer = (state = initialStateDate, action: ActionType) => {
  switch (action.type) {
    case AllType.UserAdd:
      return {
        ...state,
        date: action.payload
      };
    default:
      return state;
  }
};

export default UserDateReducer;
