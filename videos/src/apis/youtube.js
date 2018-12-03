import axios from "axios";

const KEY = "AIzaSyArWOXy2iOsjxLDFvptXhrE4zWyY2D9jFs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
