import React from "react";
import Header from "../Header/Header";
import { Box, Divider } from "@mui/material";
import OutdoorRoofing from "../OutdoorRoofing/OutdoorRoofing";
import RoofTypes from "../RoofTypes/RoofTypes";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Header />
      <Box style={{ position: "absolute", top: "10vh", width: "100%" }}>
        <OutdoorRoofing />
        <RoofTypes />
        <Divider />
        <Footer />
      </Box>
    </div>
  );
}
