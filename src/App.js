import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ChatList } from "./ChatList";
import DrawerRight from "./DrawerRight";
import Header from "./Header";
import Profile from "./Profile";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Header />
            <div className="content">
              <ChatList />
              <DrawerRight />
            </div>
          </div>
        }
      />
      <Route path="/profile" element={<Profile />}/>
    </Routes>
  );
}

export default App;
