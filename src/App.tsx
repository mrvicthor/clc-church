// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import Banner from "./components/banner";
import Cursor from "./components/cursor";
import Events from "./components/events";
import Header from "./components/header";

function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Cursor />
      <Header />
      <main>
        <Banner />
        <Events />
      </main>
    </div>
  );
}

export default App;
