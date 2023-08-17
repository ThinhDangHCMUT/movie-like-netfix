import axios from "axios";
import {
    getUsersFailure,
    getUsersStart,
    getUsersSuccess,
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess
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

export const updateUser = async(id, user, dispatch) => {}