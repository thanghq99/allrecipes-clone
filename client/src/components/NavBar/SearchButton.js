import SearchIcon from '@mui/icons-material/Search';
import { Drawer, TextField, Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';

function SearchButton() {
    const [isOpen, setIsOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    function toggleDrawer(event, isOpen) {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(isOpen)
    }
    return (
        <>
            <SearchIcon onClick={(event) => toggleDrawer(event, true)} />
            <Drawer
                anchor='top'
                open={isOpen}
                onClose={(event) => {
                    toggleDrawer(event, false)
                    setSearchValue('')
                }}
            >
                <Box p={2}>
                    <Typography variant='h6'>What recipe are you looking for?</Typography>
                    <Box my={2} display='flex'>
                        <TextField placeholder='Find a Recipe' sx={{ flexGrow: 1, mr: 1}}></TextField>
                        <Button variant="contained">Find</Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    )
}

export default SearchButton