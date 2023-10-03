import { Card, CardContent, Grid, Rating } from "@mui/material";
import React from "react";

export const ProductItem=({item})=>{
    return(
        <Grid item xs={4} align="center">
            <Card sx={{boxShadow:"10px 10px 10px black",border:"1px solid black", borderRadius:"0px 20px", bgcolor:"lightgray"}}>
                <CardContent>
                    <img height={200} src={item.image} alt="" />
                    <p style={{fontSize:18}}><b>Rs:</b> {item.price} </p>
                    <span style={{color:"red"}}><u> 10% discount</u></span>
                    <br />
                    <br />
                    <Rating value={item.rating.rate} />
                    <h3>{item.title.slice(0,15)}...</h3>
                    <p>{item.description.slice(0,30)}...</p>
                    
                </CardContent>
            </Card>
        </Grid>
    )
}