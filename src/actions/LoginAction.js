//@flow
import * as ActionTypes from './ActionTypes';

export const setLoginData = (userName: string) :Function => dispatch  => {
        dispatch(fetchLoginData(userName));
    };


export const fetchLoginData = (userName: string)  :Function  => ({
        type: ActionTypes.LOGIN_SUCCESS,
        userName
    });
