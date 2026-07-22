const BASE_URL = "https://www.swapi.tech/api";

export const getPeople = async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/people`);
    if (response.ok) {
      const data = await response.json();
      dispatch({
        type: "set_people",
        payload: data.results
      });
    }
  } catch (error) {
    console.error("Error al obtener personajes:", error);
  }
};

export const getVehicles = async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/vehicles`);
    if (response.ok) {
      const data = await response.json();
      dispatch({
        type: "set_vehicles",
        payload: data.results
      });
    }
  } catch (error) {
    console.error("Error al obtener vehículos:", error);
  }
};

export const getPlanets = async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/planets`);
    if (response.ok) {
      const data = await response.json();
      dispatch({
        type: "set_planets",
        payload: data.results
      });
    }
  } catch (error) {
    console.error("Error al obtener planetas:", error);
  }
};

export const addFavorite = (item, dispatch) => {
  dispatch({
    type: "add_favorite",
    payload: item
  });
};

export const deleteFavorite = (name, dispatch) => {
  dispatch({
    type: "delete_favorite",
    payload: name
  });
};