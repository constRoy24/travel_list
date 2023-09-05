import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onToggleItem }) => {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              item={item}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default PackingList;
