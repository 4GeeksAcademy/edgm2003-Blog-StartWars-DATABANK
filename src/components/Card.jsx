import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { addFavorite, deleteFavorite } from "../actions.js";

export const Card = ({ item, type }) => {
  const { store, dispatch } = useGlobalReducer();

  const isFavorite = store.favorites.some((fav) => fav.name === item.name);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      deleteFavorite(item.name, dispatch);
    } else {
      addFavorite({ ...item, type, uid: item.uid }, dispatch);
    }
  };

  return (
    <div className="card m-2" style={{ minWidth: "18rem", width: "18rem" }}>
      <div 
        className="bg-secondary text-white d-flex align-items-center justify-content-center rounded-top"
        style={{ height: "200px" }}
      >
        <span className="fs-4 text-light">{item.name}</span>
      </div>

      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text text-muted">
          Entidad de SWAPI ({type})
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/details/${type}/${item.uid}`} className="btn btn-outline-primary">
            LEER MAS!
          </Link>

          <button
            className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
            onClick={handleFavoriteClick}
          >
            {isFavorite ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </div>
  );
};