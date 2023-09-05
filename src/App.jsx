import { useState } from "react";

import Form from "./Form";
import Header from "./Header";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "S", quantity: 12, packed: true },
//   { id: 4, description: "O", quantity: 12, packed: false },
//   { id: 5, description: "C", quantity: 12, packed: false },
// ];

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  return (
    <>
      <div className="app">
        <Header />
        <Form onAddItems={handleAddItems} />
        <PackingList items={items} />
        <Stats />
      </div>
    </>
  );
};

export default App;
