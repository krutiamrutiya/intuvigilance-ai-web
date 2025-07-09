const INITIAL_STATE = {
  accessToken: "",
};

const loginReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        accessToken: action.accessToken,
      };
    case "REMOVE_TOKEN":
      return {
        ...state,
        accessToken: "",
      };
    default:
      return state;
  }
};

export default loginReducer;
