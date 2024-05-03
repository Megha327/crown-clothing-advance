import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation/Navigation.component";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/shop.component";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element = {<Shop/>} />
        <Route path="auth" element = {<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;