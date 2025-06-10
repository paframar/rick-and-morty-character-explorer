import "./App.css";
import AppLayout from "./components/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FavoritesPage from "./pages/FavoritesPage";
import CharactersListPage from "./pages/CharactersListPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<CharactersListPage />} />
          <Route path="/characters" element={<CharactersListPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/characters/:id" element={<CharacterDetailPage />} />
          <Route path="/favorites/:id" element={<CharacterDetailPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
