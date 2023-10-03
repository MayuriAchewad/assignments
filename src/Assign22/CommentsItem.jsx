import { Card, CardContent, Grid } from "@mui/material";
import React from "react";

export const CommentsItem=({item})=>{
    return(
        <Grid item xs={12}>
            <Card>
                <CardContent>
                    <h1>{item.id}.{item.name}</h1>
                    <h4>{item.email}</h4>
                    <p>{item.body}</p>
                </CardContent>
            </Card>
        </Grid>
    )
}