import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useDebounce } from "../hooks/debounceHook";
import { useState } from "react";
import axios from "axios";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {
    const [searchQuery,setSearchQuery] = useState("");
    const [noTvShows, setNoTvShows] = useState(false);
    const changeHandler = (e) => {
        e.preventDefault();
        if (e.target.value.trim() === "") setNoTvShows(false);
    
        setSearchQuery(e.target.value);
      };
    
    const prepareSearchQuery = (query) => {
        const url = `http://api.tvmaze.com/search/shows?q=${query}`;
    
        return encodeURI(url);
      };
      const searchTvShow = async () => {
        if (!searchQuery || searchQuery.trim() === "") return;
    
      
    
        const URL = prepareSearchQuery(searchQuery);
    
        const response = await axios.get(URL).catch((err) => {
          console.log("Error: ", err);
        });
        if (response) {
            console.log('Res ',response.data);
        }
   
      };
      useDebounce(searchQuery, 500, searchTvShow);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                       
                            placeholder="Search…"
                             inputProps={{ 'aria-label': 'search' }}
                             value={searchQuery}
                             onChange={changeHandler}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}