import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ec0b8c9e21ac22451a99a46c4253be8771529ce79470af15770ba521f2c02b00"
  }
});
