import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./utils/firebase";
import { setLoading, setUser } from "./redux/features/authenication/authSlice";
import { Toaster } from "react-hot-toast";

function App() {
  const dispath = useDispatch();
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      dispath(
        setUser({
          email: user?.email,
          displayName: user?.displayName,
          photoUrl: user?.photoURL,
        })
      );
      dispath(setLoading(false));
    });
    return () => subscribe();
  }, [dispath]);
  return (
    <div className="bg-white">
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
