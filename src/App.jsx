import { useState } from "react";

import Form from "./Form";
import Header from "./Header";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useLocalStorageState } from "./useLocalStorage";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "S", quantity: 12, packed: true },
//   { id: 4, description: "O", quantity: 12, packed: false },
//   { id: 5, description: "C", quantity: 12, packed: false },
// ];

const App = () => {
  // const [items, setItems] = useState([]);
  const [items, setItems] = useLocalStorageState([], "items");

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleClearList = () => {
    setItems([]);
  };
  return (
    <>
      <div className="app">
        <Header />
        <Form onAddItems={handleAddItems} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItems}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
        />
        <Stats items={items} />
      </div>
    </>
  );
};

export default App;
