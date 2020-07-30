import { SET_APP_DATA } from "./AsyncStorage";

const SET_USER_INFO = "SET_USER_INFO";

export const MODULE_NAME = "settings";
export const getUserInfo = (state) => state[MODULE_NAME].userInfo;

const initialState = {
  userInfo: {
    username: "John",
    imgUri: "",
  },
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_APP_DATA:
      return {
        ...state,
        ...payload.settings,
      };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: {
          username: payload?.username,
          imgUri: payload?.imgUri,
        },
      };
    default:
      return state;
  }
}

export const setUserInfo = (payload) => ({
  type: SET_USER_INFO,
  payload,
});
