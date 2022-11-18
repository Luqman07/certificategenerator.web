import { Route, Routes } from "react-router-dom";

import "./App.css";
import Team from "./Component/Team";
import Layout from "./Component/Layout";
import Navbar from "./Component/Navbar";
// import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
		<Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/genetrate" element={<Generate />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
