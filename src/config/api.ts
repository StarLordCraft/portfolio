import axios from 'axios';
import { AxiosInstance } from 'axios';

export default function API(): AxiosInstance 
{
  console.log(process.env.APP_URL);
  
  return axios.create({
    baseURL: `${process.env.APP_URL}/api`,
  });
}
