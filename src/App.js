import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Chatpage from "./pages/ChatPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/chats" element={<Chatpage />} exact />
      </Routes>
    </div>
  );
}

export default App;
