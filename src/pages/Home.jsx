import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getPeople, getVehicles, getPlanets } from "../actions.js";
import { Card } from "../components/Card";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    getPeople(dispatch);
    getVehicles(dispatch);
    getPlanets(dispatch);
  }, []);

  return (
    <div className="container mt-3">
      <h1 className="text-danger my-3">PERSONAJES</h1>
      <div className="d-flex flex-row flex-nowrap overflow-auto pb-3">
        {store.people && store.people.length > 0 ? (
          store.people.map((person) => (
            <Card key={person.uid} item={person} type="people" />
          ))
        ) : (
          <p>Cargando personajes...</p>
        )}
      </div>

      <h1 className="text-danger my-4">PLANETAS</h1>
      <div className="d-flex flex-row flex-nowrap overflow-auto pb-3">
        {store.planets && store.planets.length > 0 ? (
          store.planets.map((planet) => (
            <Card key={planet.uid} item={planet} type="planets" />
          ))
        ) : (
          <p>Cargando planetas...</p>
        )}
      </div>

      <h1 className="text-danger my-4">VEHICULOS</h1>
      <div className="d-flex flex-row flex-nowrap overflow-auto pb-3">
        {store.vehicles && store.vehicles.length > 0 ? (
          store.vehicles.map((vehicle) => (
            <Card key={vehicle.uid} item={vehicle} type="vehicles" />
          ))
        ) : (
          <p>Cargando vehículos...</p>
        )}
      </div>
    </div>
  );
};