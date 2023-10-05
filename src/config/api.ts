import axios from 'axios';
import { AxiosInstance } from 'axios';

export default function API(): AxiosInstance 
{
  console.log(process.env);
  
  return axios.create({
    baseURL: `https://starlordcraft.vercel.app/api`,
  });
}
