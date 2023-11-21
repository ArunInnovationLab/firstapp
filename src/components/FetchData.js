import React, { useEffect, useState } from "react";

export default function RandomUser() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=1`)
      .then((response) => response.json())
      .then((jsonData) => {
        setUser({
          name:
            jsonData.results[0].name.first +
            " " +
            jsonData.results[0].name.last,
          img: jsonData.results[0].picture.medium,
        });
      });
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Customer data</h1>
      <h2>Name: {user.name}</h2>
      <span>
        Image: <img src={user.img} alt="" />
      </span>
    </div>
  ) : (
    <h2>Data loading</h2>
  );
}
