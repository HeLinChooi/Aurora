import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "@Pages/Home";
import Explore from "@Pages/Explore";
import Profile from "@Pages/Profile";
import MyCart from "@Pages/MyCart";
import HabitDetails from "@Pages/HabitDetails";
import NFTCreation from "@Pages/NFTCreation";
import CssBaseline from "@mui/material/CssBaseline";
import Notification from "./pages/Notification";
import Research from "./pages/Research";
import Reward from "./pages/Reward";
import League from "./pages/League";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/achievements"} element={<Reward />} />
        <Route path={"/league"} element={<League />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/my-cart"} element={<MyCart />} />
        <Route path={"/habit"} element={<HabitDetails />} />
        <Route path={"/nft-creation"} element={<NFTCreation />} />
        <Route path={"/notification"} element={<Notification />} />
      </Routes>
    </>
  );
}

export default App;
