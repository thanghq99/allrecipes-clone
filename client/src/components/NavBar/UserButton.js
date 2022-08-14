import { Box, Divider, Typography, List, ListItem } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from "react-router-dom";

const fakeId = 1

function UserButton() {
    const navigate = useNavigate();

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.down('md'));

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Box position='relative'>
            <Box
                display='flex'
                alignItems='center'
                style={{ cursor: 'pointer' }}
                onClick={() => isMd ? navigate(`/user/${fakeId}`) : setIsOpen(!isOpen)}
            >
                <AccountCircleIcon />
                {!isMd &&
                    <>
                        <Typography
                            variant='body2'
                        >
                            My account
                        </Typography>
                        <ArrowDropDownIcon />
                    </>
                }
            </Box>
            {isOpen && <Box
                position='absolute'
                top={30}
                p={1}
                bgcolor='white'
                boxShadow={2}
            >
                <Typography
                    variant='subtitle1'
                >
                    Account
                </Typography>
                <List>
                    <ListItem style={{ cursor: 'pointer' }}>Profile</ListItem>
                    <ListItem style={{ cursor: 'pointer' }}>Logout</ListItem>
                </List>
                <Divider sx={{ my: 1 }} />
                <Typography
                    variant='subtitle1'
                >
                    Recipe
                </Typography>
                <List>
                    <ListItem style={{ cursor: 'pointer' }}>Add a Recipe</ListItem>
                </List>
            </Box>}
        </Box>
    )
}

export default UserButton