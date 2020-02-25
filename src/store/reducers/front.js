const initialState = {
  lang: 'en',
  loading: false
};

export default function frontReducers(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: action.payload };
    case "SET_LANG":
      return { ...state, lang: action.payload };
    default:
      return state;
  }
}
