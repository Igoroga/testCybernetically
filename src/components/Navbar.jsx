import { Link } from 'react-router-dom';
import { NEWS_ROUTE } from '../utils/consts';
import { STOCK_ROUTE } from '../utils/consts';
function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Cybernetically Inc</Link>
      </div>
      <ul className="nav-links">
        <li><Link to={NEWS_ROUTE}>News</Link></li>
        <li><Link to={STOCK_ROUTE}>Stock History</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;