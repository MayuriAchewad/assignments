import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { categories } from "../data";
import { CateItem } from "./CateItem";
import axios from "axios";

export const CateList=()=>{
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
                        <CateItem item={item}/>
                    ))
                }
            </Grid>
    )
}