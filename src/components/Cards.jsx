import React, { useEffect, useState } from "react";
import "./Cards.css";

const Cards = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const FinalData = await response.json();
    setUsers(FinalData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="header">
      {users.map((e) => {
        return (
          <div className="card" key={e.id}>
            <div className="card_inner">
              <img src={e.avatar_url} alt="" />
              <div className="userName">{e.login}</div>
              <div className="userUrl">{e.url}</div>
              <div className="detail_box">
                <div className="detail">
                  <span>Posts</span><p>13</p>
                </div>
                <div className="detail">
                  <span>Following</span><p>156</p>
                </div>
                <div className="detail">
                  <span>Followers</span><p>178</p>
                </div>
              </div>
              <button className="seeMore">See More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
