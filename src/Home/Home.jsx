import React from "react";
import Header from "../Header/Header";
import { Box } from "@mui/material";
import OutdoorRoofing from "../OutdoorRoofing/OutdoorRoofing";
import RoofTypes from "../RoofTypes/RoofTypes";

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Header />
      <Box style={{ position: "absolute", top: "10vh", width: "100%" }}>
        <OutdoorRoofing />
        <RoofTypes />
      </Box>
    </div>
  );
}
