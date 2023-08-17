import "./newUser.css";
import { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUser } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";

export default function NewUser() {
  const { dispatch } = useContext(UserContext);
  const [user, setUser] = useState(null);
  console.log(user);
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const notifySuccess = () =>
    toast.success("User created successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  const notifyError = (err) =>
    toast.error(`Error creating user! ${err}`, {
      position: toast.POSITION.TOP_RIGHT,
    });

  const handleCreateUser = (e) => {
    e.preventDefault();
    createUser(user, dispatch, notifySuccess, notifyError);
    // setUser(null);
  };

  return (
    <>
      <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm" onChange={handleChange}>
          <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder="john" name="username" />
          </div>
          <div className="newUserItem">
            <label>Full Name</label>
            <input type="text" placeholder="John Smith" name="fullname" />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder="john@gmail.com" name="email" />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder="password" name="password" />
          </div>
          <div className="newUserItem">
            <label>Phone</label>
            <input type="text" placeholder="+1 123 456 78" name="phone" />
          </div>
          <div className="newUserItem">
            <label>Address</label>
            <input type="text" placeholder="New York | USA" name="address" />
          </div>
          <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
              <input type="radio" name="gender" id="male" value="male" />
              <label for="male">Male</label>
              <input type="radio" name="gender" id="female" value="female" />
              <label for="female">Female</label>
              <input type="radio" name="gender" id="other" value="other" />
              <label for="other">Other</label>
            </div>
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <select className="newUserSelect" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button
            className="newUserButton"
            type="submit"
            onClick={handleCreateUser}
          >
            Create
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
