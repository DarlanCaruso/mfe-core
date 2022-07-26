import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Profile = React.lazy(() => import('profile/Module'));

const Products = React.lazy(() => import('products/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="root" />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/products" element={<Products />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
