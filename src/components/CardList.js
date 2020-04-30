import React from "react";
import Card from "./Card";

const CardList = ({ robots}) => {
  // if (true){
  //   throw new Error('oooooop errro occur');
  // }
  const card = robots.map((user) => (
    <Card key={user.id} id={user.id} name={user.username} email={user.email} />
  ));
  return card;
};

export default CardList;
