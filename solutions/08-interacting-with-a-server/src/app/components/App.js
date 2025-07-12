import axios from "axios";
import Header from "./Header";
import Home from "./Home";

async function App() {
  // Server-side rendering
  const result = await axios.get("http://localhost:3030/api/items");
  const items = result.data;

  // Server-side rendering with Next.js fetch
  // const data = await fetch("http://localhost:3030/api/items", { cache: "no-store" });
  // const items = await data.json();

  // Static site generation
  // const items = await fetch("http://localhost:3030/api/items");
  // const items = await data.json();

  return (
    <div>
      <Header />
      <Home items={items} />
    </div>
  );
}

export default App;
