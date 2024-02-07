import { Header } from './Header';
import { Container } from './Container';
import { Home } from 'pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Cart } from 'pages/Cart';
import { NotFound } from 'pages/NotFound';
import { useState } from 'react';

export const App = () => {
  const [search, setSearch] = useState('');
  return (
    <div>
      <Container>
        <Header search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
};
