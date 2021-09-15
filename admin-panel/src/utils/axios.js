import Axios from "axios";

const intence = Axios.create({
  baseURL: `https://essaycontest-monomousumi.herokuapp.com`
});

export default intence;
