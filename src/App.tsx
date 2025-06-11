import "./App.css";
import AppLayout from "./components/AppLayout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import FavoritesPage from "./pages/FavoritesPage";
import CharactersListPage from "./pages/CharactersListPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import { CharactersProvider } from "./hooks/useCharacters";

function App() {
  return (
    <CharactersProvider>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/characters" replace />} />
            <Route path="/characters" element={<CharactersListPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/characters/:id" element={<CharacterDetailPage />} />
            <Route path="/favorites/:id" element={<CharacterDetailPage />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </CharactersProvider>
  );
}

export default App;
