import { removeToken } from "@utils/common";

export const SET_TOKEN = "SET_TOKEN";

export const REMOVE_TOKEN = "REMOVE_TOKEN";

export const setAccessToken = (token: string) => async (dispatch: any) => {
  const formatedToken = "Bearer " + token;
  dispatch({
    type: SET_TOKEN,
    accessToken: formatedToken,
  });
};

export const removeAccessToken = () => async (dispatch: any) => {
  await removeToken();
  dispatch({
    type: REMOVE_TOKEN,
    accessToken: "",
  });
};
