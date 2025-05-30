import React from "react";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Transpost from "./component/Transpost";
import Objective from "./component/Objective";
import Testimonals from "./component/Testimonals";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Transpost />
      <Objective />
      <Testimonals />
    </div>
  );
};

export default App;
