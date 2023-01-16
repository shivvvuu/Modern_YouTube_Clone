import React from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import {Feed,NavBar,VideoDetail,ChannelDetail,SearchFeed} from './components'

const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor:'#000' }}>
            <NavBar/>
            <Routes>
                <Route path='/' exact element={<Feed/>}/>
                <Route path='/video/:id' element={<VideoDetail/>} />
                <Route path='/channel/:id' element={<ChannelDetail/>} />
                <Route path='/search/:searchTerm' element={<SearchFeed/>} />    
            </Routes>
        </Box>
    </BrowserRouter>
)


export default App