import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/blog">Blog</Link>
      <br />
      <Link to="/path/123">Path param</Link>
      <br />
      <Link to="/query?param=123">Query param</Link>
    </div>
  );
}

export default Header;
