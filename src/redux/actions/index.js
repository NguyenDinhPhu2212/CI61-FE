import * as actionType from "../../constants/action";
export const SetUserSlug = (payload) => async (dispatch) => {
    dispatch({ type: actionType.SET_USER_SLUG, payload: payload });
};
export const SetToken = (payload) => async (dispatch) => {
    dispatch({ type: actionType.SET_TOKEN, payload: payload });
};
