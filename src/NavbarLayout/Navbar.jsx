

import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <main>
          <nav>
            <div className="logo">
              <h1>logo</h1>
            </div>
            <div className="ul-box">
              <ul>
                <Link to="/Bosh">
                  <li>Bosh</li>
                </Link>
                <Link to="/Akademiklar">
                <li>Akademiklar</li>
                </Link>
                <Link to="/Tadqiqod">
                <li>Tadqiqod</li>
                </Link>
              </ul>
            </div>
            <Link to="Contact"> 
        <button>Ryhatdan utish</button>

        </Link>
          </nav>
          <Outlet />
        </main>
      </header>
    </>
  );
}

export default Navbar;
