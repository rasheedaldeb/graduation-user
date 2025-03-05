import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Favorite from "./Pages/Favorite";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";
import RealEstate from "./Pages/RealEstate";
import SingleEstate from "./Pages/SingleEstate";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/estates" element={<RealEstate />} />
        <Route path="/estates/single-estate" element={<SingleEstate />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
