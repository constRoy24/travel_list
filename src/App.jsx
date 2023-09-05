import Form from "./Form";
import Header from "./Header";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "S", quantity: 12, packed: true },
  { id: 4, description: "O", quantity: 12, packed: false },
  { id: 5, description: "C", quantity: 12, packed: false },
];

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Form />
        <PackingList initialItems={initialItems} />
        <Stats />
      </div>
    </>
  );
};

export default App;
