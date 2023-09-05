import React from "react";

const Item = ({ item }) => {
  const { description, quantity, packed } = item;
  return (
    <>
      <li>
        <span style={packed ? { textDecoration: "line-through" } : {}}>
          {description} {quantity}
        </span>
        <button>&times;</button>
      </li>
    </>
  );
};

export default Item;
