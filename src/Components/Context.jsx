import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";

let API = `https://hn.algolia.com/api/v1/search?`;

const initialState = {
  isLoading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApi = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removePost = (postId) => {
    dispatch({ type: "REMOVE_POST", payload: postId });
  };
  const getSearchedData = (query) => {
    dispatch({ type: "SET_QUERY", payload: query });
  };
  const getPrevPage = () => {
    dispatch({ type: "SET_DECRPAGE"});
  };
  const getNextPage = () => {
    dispatch({ type: "SET_INCRPAGE"});
  };

  useEffect(() => {
    fetchApi(`${API}&query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider value={{ ...state, removePost, getSearchedData, getPrevPage, getNextPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
