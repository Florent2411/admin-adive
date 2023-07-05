const initialState = {
    blogs: [],
    loading: true,
  };
  
  export const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_BLOGS_SUCCESS':
        return {
          ...state,
          blogs: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  