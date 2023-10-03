import { Grid } from "@mui/material";
import React from "react";
import { NavItem } from "./NavItem";
import { Navdata } from "../data";

export const NavList=()=>{

    return(
        <Grid container spacing={2}>
            {
                Navdata.map((item)=>(
                    <NavItem item={item}/>
                ))
            }
        </Grid>
    )
}