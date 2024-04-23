import React, { useState, useEffect, useContext } from "react";
import "./Userdetailpage.css";
import { DetailContext } from "../../context/DetailContext";
import UserDetail from "../../apis/UserDetail";

// icons
import { MdContactEmergency } from "react-icons/md";

import { FaUser } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";

const UserDetailPage = (props) => {
  const { details, setDetails } = useContext(DetailContext);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await UserDetail.get("/userdetail");
        setDetails(response.data.data.people);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, []);

  const [searchText, setSearchText] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const handleSearch = () => {
    const user = details.find((user) =>
      user.firstname.toLowerCase().includes(searchText.toLowerCase())
    );
    setUserInfo(user);
  };

  return (
    <>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search User"
      />
      <button onClick={handleSearch}>Search</button>
      <div className="whole">
        {userInfo ? (
          <div className="user-detail-wrapper">
            <div className="user-picture">
              <img
                className="picture"
                src={userInfo.picture}
                alt="test-image"
              />
            </div>
            <div className="user-info">
              <h2>Information</h2>
              <ul className="info">
                <li>
                  <MdContactEmergency className="icons" />
                </li>
                <li className="first-item">Identification</li>
                <li className="second-item">{userInfo.id}</li>
              </ul>
              <ul className="info">
                <li>
                  <FaUser className="icons" />
                </li>
                <li className="first-item">Name</li>
                <li className="second-item">{userInfo.firstname}</li>
              </ul>
              <ul className="info">
                <li>
                  <FaUser className="icons" />
                </li>
                <li className="first-item">Lastname</li>
                <li className="second-item">{userInfo.lastname}</li>
              </ul>
              <ul className="info">
                <li>
                  <MdOutlineWork className="icons" />
                </li>
                <li className="first-item">Role</li>
                <li className="second-item">{userInfo.role}</li>
              </ul>
              <ul className="info">
                <li>
                  <MdConnectWithoutContact className="icons" />
                </li>
                <li className="first-item">Contact</li>
                <li className="second-item">{userInfo.contact}</li>
              </ul>
            </div>
          </div>
        ) : (
          <p>No User Found !!!!</p>
        )}
      </div>
    </>
  );
};

export default UserDetailPage;
