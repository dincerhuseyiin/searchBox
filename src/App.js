import "./App.css";
import Alllist from "./components/Alllist";
import SearchList from "./components/SearchList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; /* Route Dom 6 kullandım. */
import React, {  useState } from "react";
import Layout from "./components/Layout";

function App() {
  const [search, setSearch] = useState("");
  return (
    <Layout>
      <Router>
        <Routes>
          <Route
            index
            element={<SearchList search={search} setSearch={setSearch} />}
          />
          <Route
            path="alllist"
            element={<Alllist search={search} setSearch={setSearch} />}
          />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
