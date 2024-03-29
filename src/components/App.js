import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Catalog from '../pages/Catalog/Catalog';
import Favorites from '../pages/Favorites/Favorites';
import Layout from './Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
