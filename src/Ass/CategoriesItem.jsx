import { Button, Grid } from "@mui/material";
import React from "react";

export const CategoriesItem=({item})=>{
    return(
            <Grid item xs={3}>
               
                        <Button variant="contained" fullWidth color="secondary">
                            {item.toUpperCase()}
                        </Button>
               
            </Grid>
    )
}