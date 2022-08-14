import { Box } from "@mui/material"
import { Outlet } from "react-router-dom";

import NavBar from './NavBar';

function Layout() {
  return (
    <>
        <NavBar></NavBar>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default Layout