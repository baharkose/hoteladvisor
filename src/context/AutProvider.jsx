// - context apinin diğerlerinden en büyül farkı hazır olarak bize gelebiliyor. Yükleme yapmamız gerekmiyor.

// - ilk olarak bir context create ediyoruz.

import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

// - bir authprovider yapısı oluştur.

//-bu componentin amacı, şu oluşturduğum contextin sarmalayıcısını return et. İçeriye provide et. Burada da bir nested komponent yapısı var bu sarmalayıcı içerisine ne alıyor bi çocuk alıyor. Komponent ile sarmaladığım çocuğu bana yakala. Gelen childrenları içeriye yerleştir. En kolay kısım ne lazımsa onları oluştur.


const AutProvider = ({children}) => {
    const [user, setUser] = useState("");

// - şimdi burada bir simulasyon yapacağız. Login diye bir fonksiyon oluşturduk ve setUSerın içerisine aldığı parametreyi atmasını istedik. Şimdi logine göre yönlendirme yapmamız lazım component düzeyinde değilse bunun için useNavigate hookuna ihtiyacımız var.

const navigate = useNavigate();

// - burada başarılı bi şekilde giriş yapılmış mı kontrol etmek için login ve user bilgisine ihtiyaç var bunun için değerlerimizi value kısmına aktarıyoruz.

const login = (info) => {
  setUser(info);
  // - kullanıcı giriş yapabildiyse onu dashboarda gönder
  navigate("/dashboard");
};

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AutProvider;


// - şimdi biz bu yapıyı nerde kullanacağız içeride useNavigate kullandığımız için ne olması lazım browserrouter sarmalının altında olması lazım. 


//- sonrasında da bunları consume edeceğimiz yere gelmemiz gerekiyor. Neresi orası login.

//- oradan gelen bilgilerin doğruluğuna göre autcontext içeirisindeki logini çağırıp private routerı artı kdinamik hale getirebiliriz.

//- önce logine bak, ardından private routera