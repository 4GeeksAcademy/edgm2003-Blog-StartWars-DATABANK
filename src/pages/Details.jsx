import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const Details = () => {
  const { type, id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.swapi.tech/api/${type}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data.result.properties);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener los detalles:", err);
        setLoading(false);
      });
  }, [type, id]);

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="card mb-4 border-0">
        <div className="row g-0 align-items-center">
          <div className="col-md-6 text-center">
                <div 
                className="bg-secondary text-white d-flex align-items-center justify-content-center rounded w-100"
                style={{ height: "300px" }}
                >
                <span className="fs-2">{details?.name}</span>
                </div>
           </div>
          <div className="col-md-6 p-4 text-center">
            <h1 className="card-title mb-3">{details?.name}</h1>
            <p className="card-text text-muted">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>

      <hr className="text-danger my-4" style={{ height: "2px" }} />

      <div className="row text-danger text-center fw-bold">
        <div className="col-2">
          <p className="mb-1">Nombre</p>
          <span className="text-dark fw-normal">{details?.name}</span>
        </div>

        {type === "people" && (
          <>
            <div className="col-2">
              <p className="mb-1">Cumpleaños</p>
              <span className="text-dark fw-normal">{details?.birth_year}</span>
            </div>
            <div className="col-2">
              <p className="mb-1">Genero</p>
              <span className="text-dark fw-normal">{details?.gender}</span>
            </div>
            <div className="col-2">
              <p className="mb-1">Altura</p>
              <span className="text-dark fw-normal">{details?.height}</span>
            </div>
            <div className="col-2">
              <p className="mb-1">Color de Piel</p>
              <span className="text-dark fw-normal">{details?.skin_color}</span>
            </div>
            <div className="col-2">
              <p className="mb-1">Color de Ojos</p>
              <span className="text-dark fw-normal">{details?.eye_color}</span>
            </div>
          </>
        )}

        {type === "planets" && (
          <>
            <div className="col-2">
              <p className="mb-1">Clima</p>
              <span className="text-dark fw-normal">{details?.climate}</span>
            </div>
            <div className="col-2">
              <p className="mb-1">Poblacion</p>
              <span className="text-dark fw-normal">{details?.population}</span>
            </div>
            <div className="col-2">
              <p className="mb-1">Periodo Orbital</p>
              <span className="text-dark fw-normal">{details?.orbital_period}</span>
            </div>
            <div className="col-2">
              <p className="mb-1">Perdiodo de Rotacion</p>
              <span className="text-dark fw-normal">{details?.rotation_period}</span>
            </div>
            <div className="col-2">
              <p className="mb-1">Diametro</p>
              <span className="text-dark fw-normal">{details?.diameter}</span>
            </div>
          </>
        )}

        {type === "vehicles" && (
          <>
            <div className="col-2">
              <p className="mb-1">Modelo</p>
              <span className="text-dark fw-normal">{details?.model}</span>
            </div>
            <div className="col-2">
              <p className="mb-1">Clase</p>
              <span className="text-dark fw-normal">{details?.vehicle_class}</span>
            </div>
            <div className="col-2">
              <p className="mb-1">Pasajero</p>
              <span className="text-dark fw-normal">{details?.passengers}</span>
            </div>
            <div className="col-2">
              <p className="mb-1">Costo</p>
              <span className="text-dark fw-normal">{details?.cost_in_credits}</span>
            </div>
            <div className="col-2">
              <p className="mb-1">Fabricado</p>
              <span className="text-dark fw-normal">{details?.manufacturer}</span>
            </div>
          </>
        )}
      </div>

      <div className="mt-4 text-center">
        <Link to="/" className="btn btn-primary">
          VOLVER AL INICIO
        </Link>
      </div>
    </div>
  );
};