import { Box, Grid, Typography, Stack, Button } from "@mui/material";
import React, { useRef, createRef, useEffect, useState } from "react";
import "./RoofTypes.css";

const roofOptions = [
  {
    name: "PATIOS",
    img: "/PATIOS.jpg",
    description:
      "Our insulated patio roof panels let you make the most out of your outdoor spaces by shielding them from the elements and keeping them cool with superior insulation",
  },
  {
    name: "VERANDAHS",
    img: "/VERANDAHS.png",
    description:
      "Our insulated patio roof panels let you make the most out of your outdoor spaces by shielding them from the elements and keeping them cool with superior insulation",
  },
  {
    name: "PERGOLAS",
    img: "/PERGOLAS.png",
    description:
      "Our insulated patio roof panels let you make the most out of your outdoor spaces by shielding them from the elements and keeping them cool with superior insulation",
  },
  {
    name: "ALFRESCOS",
    img: "/ALFRESCOS.png",
    description:
      "Our insulated patio roof panels let you make the most out of your outdoor spaces by shielding them from the elements and keeping them cool with superior insulation",
  },
  {
    name: "CARPORTS",
    img: "/CARPORTS.jpg",
    description:
      "Our insulated patio roof panels let you make the most out of your outdoor spaces by shielding them from the elements and keeping them cool with superior insulation",
  },
  {
    name: "OUTDOOR ROOMS",
    img: "/OUTDOOR ROOMS.png",

    description:
      "Our insulated patio roof panels let you make the most out of your outdoor spaces by shielding them from the elements and keeping them cool with superior insulation",
  },
  {
    name: "COMMERCIAL",
    img: "/COMMERCIAL.png",
    description:
      "Our insulated patio roof panels let you make the most out of your outdoor spaces by shielding them from the elements and keeping them cool with superior insulation",
  },
];

export default function RoofTypes() {
  const refs = useRef([]);
  refs.current = roofOptions.map((_, index) => refs[index] || createRef());
  const currentVisibleIndexRef = useRef(0);
  const [visibleIndex, setVisibleIndex] = useState(0);

  const handleScroll = () => {
    const visibleIndex = refs.current.findIndex((ref) => {
      // if (ref.current) {
      const rect = ref?.current?.getBoundingClientRect();
      return rect?.top >= 0 && rect?.bottom <= window.innerHeight;
      // }
    });
    if (visibleIndex > -1 && currentVisibleIndexRef.current != visibleIndex) {
      currentVisibleIndexRef.current = visibleIndex;
      setVisibleIndex(visibleIndex);
    }
  };
  window.addEventListener("scroll", handleScroll);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target;
            setTimeout(() => {
              section.classList.add("roof-section-animate");
            }, 100); // add a 100ms delay before adding the animation class
          }
        });
      },
      { threshold: 0.3 }
    ); // observe when the element is fully visible

    refs.current.forEach((ref) => {
      observer.observe(ref.current);
    });

    return () => {
      observer.disconnect();
    };
  }, [refs]);

  return (
    <Stack style={{ width: "100%" }}>
      {/* <RoofTypesHeader roofOptions={roofOptions} /> */}
      <Box className="roof-type-header">
        <Grid
          container
          className="header-grid"
          style={{ background: "#FFFFFF" }}
        >
          {roofOptions.map((item, index) => (
            <Grid lg={12 / roofOptions.length} key={index}>
              <Typography
                fontSize={13}
                fontWeight={500}
                style={{ cursor: "pointer" }}
                className={visibleIndex == index ? "active" : "non-active"}
                onClick={() => {
                  refs.current[index].current.scrollIntoView({
                    behavior: "smooth",
                  });
                  window.scrollTo({
                    top:
                      window.scrollY +
                      refs.current[index].current.getBoundingClientRect().top -
                      (20 * window.innerHeight) / 100,
                    behavior: "smooth",
                  });
                }}
              >
                {item?.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      {roofOptions.map((item, index) => (
        <Stack style={{ width: "100%" }}>
          <section ref={refs.current[index]} className="roof-section">
            {/* {item?.name} */}
            <Grid
              container
              style={{
                // height: "80vh",
                width: "100%",
                display: "flex",
                padding: "5vh 7vw",
                // flexDirection: "column",
              }}
            >
              {index % 2 == 0 && (
                <Grid item lg={8} md={8}>
                  <img
                    style={{
                      maxHeight: "60vh",
                      position: "absolute",
                      left: "3vw",
                    }}
                    src={item?.img}
                  />
                </Grid>
              )}

              <Grid
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "65vh",
                  placeContent: "center",
                }}
                item
                lg={4}
                md={4}
              >
                <Typography color={"545759"} mb={4} fontSize={30}>
                  {item.name}
                </Typography>
                <Typography color={"545759"} fontSize={12} mb={4}>
                  {item?.description}
                </Typography>
                <Button variant="contained" className="dealers-button">
                  DISCOVER {item.name}
                </Button>
              </Grid>
              {index % 2 == 1 && (
                <Grid item lg={8} md={8}>
                  <img
                    style={{
                      maxHeight: "60vh",
                      position: "absolute",
                      right: "3vh",
                    }}
                    src={item?.img}
                  />
                </Grid>
              )}
            </Grid>
          </section>
        </Stack>
      ))}
    </Stack>
  );
}
