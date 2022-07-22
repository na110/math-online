import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="home">
            رياضيات اونلاين
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="home">
                  الرئيسية
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="first">
                  الصف الاول الاعداي
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="second">
                  الصف الثاني الاعدادي
                </Link>
              </li>
              <li>
                <Link className="nav-link text-white" to="third">
                  الصف الثالث الاعدادي
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
