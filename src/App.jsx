import React from "react";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Transpost from "./component/Transpost";
import Objective from "./component/Objective";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Transpost />
      <Objective />
    </div>
  );
};

export default App;
