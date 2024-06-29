import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-primary" id="navigation">
        <div className="container">
          <h4 className="nb">Trip</h4>
          <h4 className="nb2">Explore</h4>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Journey <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mobil">
                  Car
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/stories">
                  Story
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/penawaran">
                  Office
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trick">
                  About
                </Link>
                </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="pesanan-container">
        <Link to="/pembelian" className="pesanan">
          <b>Kelola Pesanan</b>
        </Link>
      </div>
    </div>
  );
}
