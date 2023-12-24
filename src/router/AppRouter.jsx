import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRouter from "../router/PrivateRouter";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Hotels from "../pages/Hotels";
import HotelDetail from "../pages/HotelDetail";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <>

      <Routes>
        {/* 
        //- Routes içerisinde çocukları tanımla sayfa açıldığında ne gelmesini istiyorsak ona / işareti koyuyoruz.
        //- Loginde ve notfound'da sayfalar görünmesin ama diğer sayfalarda görünsün.
        //- Diğer sayfaların açılmaması için private routera takılması gerekeiyor bu nedenle bir private router yapısına da ihtiyacımız var.
        //- Nested route yapmamız için neye ihtiyacımız var Route'a ihtiyacımız var.
        */}
        <Route path="/" element={<Login />} />

        {/* //- koşula bağlı olarak gmrüntülenecek olan sayfalar. */}

        <Route path="/dashboard" element={<PrivateRouter />}>
          {/** //- araya kontrol mekanizması koyduk */}
          <Route path="" element={<Home />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="hoteldetail/:id" element={<HotelDetail />} />
          <Route path="about" element={<About />} />
          {/* //! burada eğer slash işareti kullanarak yazmak istersek pathi uzun
          şekilde yazmamız gerekir. napathi de vermemiz gererkir. Yani
          /dashboard/home gibi //! eğer useParams ile bir ifade yakalamak
          istersek ne yapmamız gerekir başlangıç kısmına : koymalıyız. artık
          geri kalan kısma ne koymak istersek onu koyabiliriz. */}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>


      {/* //! routesun içerisinde direk olarak bir komponent çağıramayız bananın veya annenin kardeşi olarak bir komponent olarak çağırabiliriz. O nedenle gittik navbarı outletin üstünde verdik. Navbar footer scrollup gibi yapılar için..  Üst kısımda çağırabiliriz ama direk olarak routesun içerisinde çağıramayız.*/}
    </>
  );
};

export default AppRouter;
