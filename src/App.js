import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import Category from "./pages/Category";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SiginUp from "./pages/SiginUp";
import ForgotPassword from "./pages/ForgotPassword";
import CreateListing from "./pages/CreateListing";
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";
import EditListing from "./pages/EditListing";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Explore/>} />
          <Route path="/offers" element={<Offers/>} />
          <Route path="/category/:categoryName" element={<Category/>} />
          <Route path="/profile" element={<PrivateRoute/>}>
            <Route path="/profile" element={<Profile/>} />
          </Route>
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/sign-up" element={<SiginUp/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/create-listing" element={<CreateListing/>} />
          <Route path="/category/:categoryName/:listingId" element={<Listing/>} />
          <Route path='/contact/:landlordId' element={<Contact />} />
          <Route path="/edit-listing/:listingId" element={<EditListing/>} />
        </Routes>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
