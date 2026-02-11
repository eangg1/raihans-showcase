import { Routes, Route } from "react-router-dom";
import MusicList from "./Music/MusicList";
import ArtistSongs from "./Music/ArtistSongs";

export default function Music() {
  return (
    <Routes>
      <Route index element={<MusicList />} />
      <Route path=":id" element={<ArtistSongs />} />
    </Routes>
  );
}
