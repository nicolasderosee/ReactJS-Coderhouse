import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import VideoOverlay from "./components/VideoOverlay";
import ItemDetailContainer from "./components/ItemDetailContainer";
import PromoBanner from "./components/PromoBanner";

import Footer from "./components/Footer";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./contexts/CartConext";
import { Cart } from "./components/Cart";

function App() {
  return (
    <>
    <Provider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={
            <>
              <VideoOverlay />
              <ItemListContainer />
              <PromoBanner />
              <Footer />
            </>
          } />
          <Route path="/shop" element={<ItemListContainer />} />
          <Route path="/shop/:id" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element="oops 404" />
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
