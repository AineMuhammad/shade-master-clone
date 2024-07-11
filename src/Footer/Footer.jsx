import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const footerItems = [
  {
    name: "Resources",
    items: ["Gift Cards", "Find A Store", "Become A Member", "Site Feedback"],
  },
  {
    name: "Help",
    items: ["Get Help", "Order Status", "Returns", "Cancel Order"],
  },
  {
    name: "Company",
    items: ["About", "News", "Career", "Purpose"],
  },
  {
    name: "Promotions",
    items: ["Students", "Military", "Teachers", "Engineers"],
  },
  {
    name: "Discounts",
    items: ["Cards", "Baseball Players", "Members", "Shareholders"],
  },
];

export default function Footer() {
  return (
    <Box my={"8vh"}>
      <Grid container textAlign={"left"}>
        {footerItems.map((item, index) => (
          <Grid lg={2.4} md={2.4} item key={index}>
            <Stack textAlign={"center"}>
              <Typography mb={"3vh"}>{item.name}</Typography>
              {item.items.map((childItem, indexChild) => (
                <Typography mb={"1vh"} key={indexChild}>
                  {childItem}
                </Typography>
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ marginTop: "6vh" }} />
    </Box>
  );
}
