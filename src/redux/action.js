import axios from "axios";
import { CALCULATE_SUCCESS } from "./types";

export const calculate = ({ a, b, op }) => async (dispatch) => {
    try {
      const res = await axios({
        url: `http://localhost:8080?a=${a}&b=${b}&op=${op}`,
        method: "GET",
      });
      dispatch({ type: CALCULATE_SUCCESS, payload: res.data });
    } 
    catch (err) {
      console.log(err);
    }
};
