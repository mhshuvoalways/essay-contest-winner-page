import Axios from "axios";

const intence = Axios.create({
  baseURL: `https://essaycontest.herokuapp.com`
});

export default intence;
