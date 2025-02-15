import { Route, Routes } from 'react-router-dom';
import { Blog, Header, Home, PathParam, Query } from './index';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/path/:id" element={<PathParam />} />
        <Route path="/query" element={<Query />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
