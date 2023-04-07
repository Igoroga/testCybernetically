import axios from 'axios';


export function getReports(token, fromNews) {
   return axios.get(`https://cloud.iexapis.com/v1/stock/market/news/last/${fromNews}?token=${token}`);
  }