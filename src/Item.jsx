import React from "react";

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  const { description, quantity, packed } = item;
  return (
    <>
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => {
            onToggleItem(item.id);
          }}
        />
        <span style={packed ? { textDecoration: "line-through" } : {}}>
          {description} {quantity}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>&times;</button>
      </li>
    </>
  );
};

export default Item;
