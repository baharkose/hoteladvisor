import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AutProvider";

const PrivateRouter = () => {
  //- eğer gelen değer true ise yani login olunduysa o zaman outleti yani private routerın içerisine yazdığım şeyleri çağır. Değilse Login açılsın.

  // - burda illaki logini çağırmamız gerekmez navigate ile de yönlendirme yapabiliriz. Login yerine <Navigate to="/" /> da diyebiliriz.


  // ! şimdi contexti kullanalım - userı al

  const {user} = useContext(AuthContext)

  // - eğer email varsa yönlendirme yap vs diyebiliriz.

  return user.email ? (
    <>
      {/* navbarın sadece privates routeslarda görünmeisni istiyoruz bunun için  ne yapmamız lazım */}
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Login />
  );
};

export default PrivateRouter;
