import makeRequest from '../../network';
import { AllTypeType } from './type';

export const AllType :AllTypeType = {
  UserAdd: 'User__Add'
};
export const UserAddDate = () => async (dispatch:any) => {
  const date = await makeRequest({ url: 'https://jsonplaceholder.typicode.com/users' });
  dispatch({
    type: AllType.UserAdd,
    payload: date
  });
};
