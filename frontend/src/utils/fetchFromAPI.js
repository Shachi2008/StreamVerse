import axios from 'axios';
const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
 // method:'GET',
   
    url:BASE_URL,
    params: {
      // relatedToVideoId: '7ghhRHRP6t4',
      // part: 'id,snippet',
      // type: 'video',
      maxResults: '50'
    },
    headers: { 
    //  'x-rapidapi-key': '2f9caf0c6emshe24feccff497dd5p184a3bjsnbaaf524ebb80',
      'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'

    }
  };

  export const fetchFromAPI=async (url)=>{
  const {data}=  await axios.get(`${BASE_URL}/${url}`,options);
  // console.log(data);
   return data;
   
  }

