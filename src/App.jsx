import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import VideoOverlay from "./components/VideoOverlay";
import ItemDetailContainer from "./components/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={
          <>
            <VideoOverlay />
            <ItemListContainer />
          </>
        } />
        <Route path="/shop/:id" element={<ItemListContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="*" element="oops 404" />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
