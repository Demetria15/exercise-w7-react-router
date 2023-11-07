import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import { NotFoundPage } from "../NotFoundPage";
import { SongInfo } from "../pages/SongInfo";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/song/:songTitle" element={<SongInfo/>} />
  </Routes>
);

export default routes;
