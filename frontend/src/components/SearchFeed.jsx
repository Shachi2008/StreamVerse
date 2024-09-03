import { useState, useEffect} from 'react';
import { Box,Typography } from '@mui/material';
import{useParams} from 'react-router-dom'
//import Sidebar from './Sidebar';
 import {Videos} from './';
 import { fetchFromAPI } from '../utils/fetchFromAPI';
const SearchFeed=()=>{
   // const [selectedCategory,setSelectedCategory]=useState('New');
    const [videos,setVideos]=useState([]);
    const {searchTerm}=useParams();
    useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)//template string
    .then((data) => //
       // console.log(data.items);  // Log the entire response to see its structure
        setVideos(data.items)) // Assuming `items` is the correct property
    
    
    },[searchTerm]);
    return (
       
            <Box p={2} sx={{overflowY:'auto' , height : '90vh' , flex:2 }}>  
                <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
                    Search Results for: <span style={{color:'#F31503'}}>{searchTerm}</span> videos
                </Typography>
                <Videos videos={videos}/>
            </Box>
    
    ); 
};
export default SearchFeed