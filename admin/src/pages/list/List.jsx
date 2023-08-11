import { useState, useContext, useEffect } from "react";
import { updateList, getLists } from "../../context/listContext/apiCalls";
import { ListContext } from "../../context/listContext/ListContext";
import { Link, useLocation } from "react-router-dom";
import "./list.css";

export default function List() {
  const { dispatch, lists: listArray } = useContext(ListContext);
  const [lists, setLists] = useState({ type: "", title: "", genre: "" });
  const [updated, setUpdated] = useState(false);
  const location = useLocation();
  const list = location.list;

  useEffect(() => {
    getLists(dispatch);
  }, [updated]);

  const handleUpdateList = (e) => {
    e.preventDefault();
    setLists({ ...lists, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdated((item) => !item);
    updateList(list._id, lists, dispatch);
  };
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newList">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        {listArray
          .filter((item) => item._id === list._id)
          .map((it) => (
            <div className="productTopRight">
              <div className="productInfoTop">
                <span className="productName">{it?.title}</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfoKey">id:</span>
                  <span className="productInfoValue">{it?._id}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">genre:</span>
                  <span className="productInfoValue">{it?.genre}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">type:</span>
                  <span className="productInfoValue">{it?.type}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="productBottom">
        <form className="productForm" onChange={handleUpdateList}>
          <div className="productFormLeft">
            <label>List Title</label>
            <input type="text" placeholder={list?.title} name="title" />
            <label>Type</label>
            <input type="text" placeholder={list?.type} name="type" />
            <label>Genre</label>
            <input type="text" placeholder={list?.genre} name="genre" />
          </div>

          <div className="productFormRight">
            <button className="productButton" onClick={handleSubmit}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
