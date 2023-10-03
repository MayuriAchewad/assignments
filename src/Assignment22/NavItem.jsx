import { Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import Select from 'react-select'


export const NavItem=({item})=>{
    return(
            <Grid item xs={item.xs}>
                <Link to={item.path}>
                    {/* <Select placeholder={item.title} > */}
                    <Button variant="contained" fullWidth>{item.title}</Button>
                    {/* </Select> */}
                </Link>
            </Grid>
    )
}