import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { NavList } from "./NavList";
import { About } from "./About";
import { Contact } from "./Contact";
import { Services } from "./Services";

export const Landing=()=>{
    return(
        <BrowserRouter>
        <Card sx={{bgcolor:"navy"}}>
            <CardContent>
                <NavList/>
            </CardContent>
        </Card>
        <Card sx={{bgcolor:"navy"}}>
            <CardContent>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/services" element={<Services/>}/>
        </Routes>
        </CardContent>
        </Card>
        </BrowserRouter>
    )
}