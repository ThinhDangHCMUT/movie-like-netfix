import axios from "axios";
import {
    getUsersFailure,
    getUsersStart,
    getUsersSuccess,
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    updateUserFailure,
    updateUserStart,
    updateUserSuccess,
    createUserFailure,
    createUserStart,
    createUserSuccess
} from './UserAction'

export const getAllUsers = async (dispatch) => {
    dispatch(getUsersStart());
  try {
    const res = await axios.get("/users", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    console.log('User ---> ', res.data)
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailure());
  }
}

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete("/users/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const updateUser = async(id, user, dispatch, onSuccess, onError) => {
  dispatch(updateUserStart());
  try {
    const res = await axios.put("/users" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    console.log('User ---> ', res.data)
    dispatch(updateUserSuccess(res.data._id));
    onSuccess()
  } catch (err) {
    dispatch(updateUserFailure());
    onError(err.message)
  }
}

export const createUser = async(user, dispatch, onSuccess, onError) => {
  dispatch(createUserStart());
  console.log('User ---> ', user)
  try {
    const res = await axios.post("/auth/register", user, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createUserSuccess(res.data));
    onSuccess()
  } catch (err) {
    dispatch(createUserFailure());
    onError(err.message);
  }
}
