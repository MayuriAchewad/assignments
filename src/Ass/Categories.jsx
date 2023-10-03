import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CategoriesItem } from "./CategoriesItem";

export const Categories=()=>{
    const[data, setData]=useState([]);
    const getData=async()=>{
        const result= await axios.get("https://fakestoreapi.com/products/categories");
        setData(result.data)
    }
    useEffect(()=>{
        getData()
    },[])
    return(
            <Grid container spacing={2}>
                {
                    data.map((item)=>(
                        <CategoriesItem item={item}/>
                    ))
                }
            </Grid>
    )
}