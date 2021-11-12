import * as actionType from "../../constants/action";

const initState = {
    slug: "ndphu-XxN4Z08vk",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGUyZmMxMmM0ODlhZDgwY2Q4M2RhNCIsInNsdWciOiJuZHBodS1YeE40WjA4dmsiLCJpYXQiOjE2MzY3MjI1NzYsImV4cCI6MTYzNjcyOTc3Nn0.Vbx_skba4m1mg_rsDpSDVeeiU9C96IHs0h4c5CUlvis",
};
export default (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_USER_SLUG:
            return { ...state, slug: action.payload };
        case actionType.SET_TOKEN:
            return { ...state, token: action.payload };
        default:
            return state;
    }
};
