"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailItem from "./DetailItem";
import Details from "./Details";
import Header from "./Header";
import Home from "./Home";
import NotFound from "./NotFound";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/api/items")
      .then((result) => setItems(result.data))
      .catch(console.error);
  }, []);

  return (
    <Router>
      <Header />
      {items.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <Routes>
          <Route path="/details" element={<Details items={items} />}>
            <Route path=":id" element={<DetailItem items={items} />} />
            <Route index element={<div>No Item Selected</div>} />
          </Route>
          <Route path="/" element={<Home items={items} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
