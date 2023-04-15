import Axios from "axios";

const intence = Axios.create({
  baseURL: `https://essay-contest-winner-page.onrender.com`,
});

export default intence;
