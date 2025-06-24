import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import BuyAWatch from "./pages/BuyAWatch";
import Profile from "./pages/Profile";
import LearnMore from "./pages/learnMore";
import WatchBrands from "./components/WatchBrands";
import BrandPage from "./pages/BrandPage";
import ScrollToTop from "./components/ScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./components/Loading";
import ErrorNotif from "./components/ErrorNotif";
import SuccessNotif from "./components/SuccessNotif";
import { currentUser } from "./JS/actions/authActions";
import Settings from "./pages/Settings";

  

const App = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.authReducer.isAuth);

  const isLoading = useSelector((state) => state.watchReducer.load);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentUser());
    }
  }, [dispatch]);

  const authSuccess = useSelector((state) => state.authReducer.success);
  const authErrors = useSelector((state) => state.authReducer.errors);

  const watchSuccess = useSelector((state) => state.watchReducer.success);
  const watchErrors = useSelector((state) => state.watchReducer.errors);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop />

      {authSuccess &&
        authSuccess.map((success) => (
          <SuccessNotif key={success.id} success={success} />
        ))}
      {authErrors &&
        authErrors.map((error) => <ErrorsNotif key={error.id} error={error} />)}

      {watchSuccess &&
        watchSuccess.map((success) => (
          <SuccessNotif key={success.id} success={success} />
        ))}
      {watchErrors &&
        watchErrors.map((error) => <ErrorNotif key={error.id} error={error} />)}
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<Home />} />
        {isAuth && <Route path="/brand" element={<BuyAWatch />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
        {isAuth && <Route path="/profile" element={<Profile />} />}
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/learn_more" element={<LearnMore />} />
        <Route path="/" element={<WatchBrands />} />
        <Route path="/brand/:brand" element={<BrandPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
