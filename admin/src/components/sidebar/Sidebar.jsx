import "./sidebar.css";
import {
  PermIdentity,
  PlayCircleOutline,
  List,
  AddToQueue,
  QueuePlayNext,
  ExitToApp,
} from "@material-ui/icons";
import {logoutSuccess} from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function Sidebar() {
  const {dispatch} = useContext(AuthContext);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/movies" className="link">
              <li className="sidebarListItem">
                <PlayCircleOutline className="sidebarIcon" />
                Movies
              </li>
            </Link>
            <Link to="/lists" className="link">
              <li className="sidebarListItem">
                <List className="sidebarIcon" />
                Lists
              </li>
            </Link>
            <Link to="/newMovie" className="link">
              <li className="sidebarListItem">
                <AddToQueue className="sidebarIcon" />
                Add Movie
              </li>
            </Link>
            <Link to="/newList" className="link">
              <li className="sidebarListItem">
                <QueuePlayNext className="sidebarIcon" />
                Add List
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <div className="sidebarList">
            <Link to='/login'>
              <button className="sidebarListItem" type="submit" onClick={() => {
                logoutSuccess(dispatch);
              }}>
                  <ExitToApp className="sidebarIcon" />
                  Logout
              </button>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}
