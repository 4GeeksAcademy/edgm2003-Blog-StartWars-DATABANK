import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { deleteFavorite } from "../actions.js";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <nav className="navbar navbar-light bg-light mb-4 px-5">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
          alt="Star Wars Logo"
          style={{ width: "80px" }}
        />
      </Link>

      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle d-flex align-items-center gap-2"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            MIS FAVORITOS!
            <span className="badge bg-secondary">
              {store.favorites.length}
            </span>
          </button>

          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
            {store.favorites.length > 0 ? (
              store.favorites.map((fav, index) => (
                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                  <Link
                    to={`/details/${fav.type}/${fav.uid}`}
                    className="text-decoration-none text-dark me-3"
                  >
                    {fav.name}
                  </Link>
                  <i
                    className="fas fa-trash text-danger cursor-pointer"
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteFavorite(fav.name, dispatch)}
                  >
                  </i>
                </li>
              ))
            ) : (
              <li className="dropdown-item text-center text-muted">vacio</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};