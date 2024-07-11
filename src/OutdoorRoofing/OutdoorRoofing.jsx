import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./OutdoorRoofing.css";

export default function OutdoorRoofing() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Box className="outdoor-roofing-container">
      <Stack className="outdoor-roofing-text-container">
        <Typography
          fontSize={24}
          letterSpacing={3.6}
          fontWeight={600}
          color={"#89D0D0"}
          className={animate ? "animate-1" : ""}
        >
          PREMIUM
        </Typography>
        <Typography
          fontSize={50}
          color={"#FFFFFF"}
          fontWeight={700}
          className={animate ? "animate-2" : ""}
        >
          OUTDOOR ROOFING{" "}
        </Typography>
        <Typography
          color={"#FFFFFF"}
          fontSize={18}
          className={animate ? "animate-3" : ""}
        >
          Outdoor spaces custom designed and installed using quality Australian
          made Shademaster roofing.
        </Typography>
        <Button variant="contained" className="dealers-button">
          <Typography letterSpacing={"0.2vw"} fontSize={14}>
            {" "}
            LOCATE DEALERS
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
}
