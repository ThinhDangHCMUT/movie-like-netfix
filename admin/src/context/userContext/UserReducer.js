const UserReducer = (state, action) => {
    switch (action.type) {
      case "GET_USERS_START":
        return {
          userList: [],
          isFetching: true,
          error: false,
        };
      case "GET_USERS_SUCCESS":
        return {
          userList: action.payload,
          isFetching: false,
          error: false,
        };
      case "GET_USERS_FAILURE":
        return {
          userList: [],
          isFetching: false,
          error: true,
        };
      case "CREATE_USER_START":
        return{
          ...state,
          isFetching: true,
          error: false,
        };
      case "CREATE_USER_SUCCESS":
        return{
          userList: [...state.userList, action.payload],
          isFetching: false,
          error: false,
        };
      case "CREATE_USER_FAILURE":
        return{
          ...state,
          isFetching: false,
          error: true,
        };
     default: return {...state};
    }
}

export default UserReducer;