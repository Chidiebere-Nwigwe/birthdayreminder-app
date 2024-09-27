import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Item } from "./components/Item";
import initialData from "./data";
import { Button } from "./components/Button";

function App() {
  const [data, setData] = useState(initialData);
  const [isCleared, setIsCleared] = useState(false); // to track when clear button is clicked

  function handleClear() {
    setData([]);
    setIsCleared([true]); // lets me know page is cleared
  }

  return (
    <div className="App">
      <div className={`App-header ${isCleared ? "cleared" : "default"}`}>
        <Header data={data}>Birthdays Today</Header>
        {data.map((person) => (
          <Item
            key={person.id}
            name={person.name}
            age={person.age}
            image={person.image}
          ></Item>
        ))}

        <Button onSelect={handleClear}>Clear All</Button>
      </div>
    </div>
  );
}

export default App;
