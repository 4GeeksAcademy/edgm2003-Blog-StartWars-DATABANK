export const initialStore = () => {
  return {
    people: [],
    vehicles: [],
    planets: [],
    favorites: []
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'set_people':
      return {
        ...store,
        people: action.payload
      };

    case 'set_vehicles':
      return {
        ...store,
        vehicles: action.payload
      };

    case 'set_planets':
      return {
        ...store,
        planets: action.payload
      };

    case 'add_favorite':
      if (store.favorites.some(fav => fav.name === action.payload.name)) {
        return store;
      }
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };

    case 'delete_favorite':
      return {
        ...store,
        favorites: store.favorites.filter(fav => fav.name !== action.payload)
      };

    default:
      return store;
  }
}