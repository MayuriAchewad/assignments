import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { ProdList } from "./ProdList";
import { NavList } from "./NavList";
import { CateList } from "./CateList";
import { CommentsList } from "./CommentsList";

export const Landing=()=>{
    return(
        <BrowserRouter>
        <Card>
            <CardContent>
                <NavList/>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/prodlist" element={<ProdList/>}/>
            <Route path="/catelist" element={<CateList/>}/>
            <Route path="/comments" element={<CommentsList/>}/>
        </Routes>
        </CardContent>
        </Card>
        </BrowserRouter>
    )
}