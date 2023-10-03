import { Card, CardContent, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CommentsItem } from "./CommentsItem";
import axios from "axios";

export const CommentsList=()=>{
    const[data,setData]=useState([])

    const getData= async()=>{
        const result = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
        setData(result.data)
    }       

    useEffect(()=>{
        getData()
    },[])
    return(
        <Grid container spacing={2}>
            {
                data.map((item)=>(
                    <CommentsItem item={item}/>
                ))
            }
        </Grid>
    )
}