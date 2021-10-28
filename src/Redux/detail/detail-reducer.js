const INITIAL_STATE = {
  moviedetail: [],
};

const detailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "getdetail":
      return {
        ...state,
        moviedetail: action.payload,
      };
    default:
      return state;
  }
};
export default detailReducer;
