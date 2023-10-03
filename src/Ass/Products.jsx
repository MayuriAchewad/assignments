import { Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductItem } from "./ProductItem";

export const Products=()=>{
    const[data,setData]=useState([])

    const getData= async()=>{
        const result = await axios.get("https://fakestoreapi.com/products")
        setData(result.data)
    }       

    useEffect(()=>{
        getData()
    },[])
    return(
        <Card>
                <CardContent>
                <Grid container spacing={2}>

                
            <Grid item xs={12}>
                <TextField fullWidth variant="outlined" placeholder="Search Here..."/>
            </Grid>
            {
                data.map((item)=>(
                    <ProductItem item={item}/>
                ))
            }
        </Grid>
            </CardContent>
            </Card>
    )
}