import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

//Action creator

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  try {
    const popularData = await axios.get(popularGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    dispatch({
      type: "FETCH_GAMES",
      payload: {
        popular: popularData.data.results,
        upcoming: upcomingData.data.results,
        newGames: newGamesData.data.results,
      },
    });
  } catch (error) {
    console.log("FETCH_GAMES: " + error);
  }
};
