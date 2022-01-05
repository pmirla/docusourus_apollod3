import { useState, useEffect, useReducer } from "react";
import axios from "axios";

const fetchDataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case "FETCH_FAILED":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
};

const useFetchData = ({ initialFetchUrl }) => {
  const [{ data, isLoading, isError }, dispatch] = useReducer(
    fetchDataReducer,
    {
      data: [],
      isLoading: false,
      isError: false
    }
  );

  const [fetchUrl, setFetchUrl] = useState(initialFetchUrl);
  const cors_header = {
    mode: 'cors',
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Origin': 'https://secret-ocean-49799.herokuapp.com/https://storage.googleapis.com/chapters-ifm/'
     }
  }
  useEffect(() => {
    const fetchData = async () => {
      dispatch({
        type: "FETCH_INIT"
      });
      try {
        const response = await axios.get(fetchUrl, cors_header);
        console.log("func_useFetchData var_fetchURL" + fetchUrl);
        dispatch({
          type: "FETCH_SUCCESS",
          payload: {
            res: response.data.data
          }
        });
      } catch (error) {
        dispatch({
          type: "FETCH_FAILED"
        });
      }
    };

    fetchData();
  }, [fetchUrl]);

  return [
    {
      data,
      isLoading,
      isError
    },
    setFetchUrl
  ];
};

export default useFetchData;
