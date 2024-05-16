import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation/Navigation.component";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop.component";
import CheckOut from "./routes/checkout/checkout.component";
import { setCurrentUser } from "./store/user/user-action";
import { useDispatch } from "react-redux";
import { createUserDocumentFromAuth, getcategoriesAndDocuments, onAuthStateChangedListner } from "./utils/firebase/firebase.utils";
import { setCategoriesMap } from "./store/categories/category.action";


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("calling use effect of app")
    const unsubscribe =   onAuthStateChangedListner((user) => {
          if(user){
            createUserDocumentFromAuth(user);
          }
          dispatch(setCurrentUser(user));
    })

    return unsubscribe
  }, []);

 


  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        {/* <Route index element={<Shop/>}></Route> */}
        <Route index element={<Home />}></Route>
        <Route path="shop/*" element = {<Shop/>} />
        <Route path="auth" element = {<Authentication />} />
        <Route path="checkout" element = {<CheckOut />} />
      </Route>
    </Routes>
  );
}

export default App;