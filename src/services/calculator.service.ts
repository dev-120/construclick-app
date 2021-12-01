import axios from 'axios';

//import { configEnvirontment } from '../config/environtment';

// const basePath = '/calculator';
// const { apiUrl } = configEnvirontment;

// export const getCalculatorResultService = (data: any) => {
//   return axios.get(`${apiUrl}/${basePath}`, {
//     ...data
//   })
// }

export const getCalculatorResultService = (data: any) => {
  console.log("Llamado")
  console.log(data)
  return axios.post(`https://CourageousDisgustingDatum.juanfezagacol.repl.co/getResult`, {
    ...data
  })
}