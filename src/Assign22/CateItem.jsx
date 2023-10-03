import { Button, Card, CardContent, Grid } from "@mui/material";
import React from "react";

export const CateItem=({item})=>{
    return(
            <Grid item xs={3}>
                <Card>
                    <CardContent>
                        <h2>
                            {item.toUpperCase()}
                        </h2>
                    </CardContent>
                </Card>
            </Grid>
    )
}