import {React} from 'react';
import './SearchBar.css';
import { Box, TextField } from '@mui/material';



const SearchBar = () => {
 
  return (
  <div className='search'>
      <Box sx = {{width:500,maxWidth:'100%', }} >
          <TextField fullWidth label="Search" id="search" />
      </Box>    
  </div>
  )
}

export default SearchBar