import * as React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GrHomeRounded } from "react-icons/gr";
import { SlUserFemale } from "react-icons/sl";
import { FaLaptop } from "react-icons/fa";
import { BsEnvelopeAt } from "react-icons/bs";
import Home from "../Home/Home.js";
import AboutMe from "../AboutMe/AboutMe.js";
import ContactMe from "../ContactMe/ContactMe.js";
import Projects from "../Projects/Projects.js";
import bgImage from "../../../images/bg.jpg";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "100vw",
        minHeight: "100vh",
      }}
    >
      <AppBar
        sx={{ height: { xs: "auto", md: "70px" }, bgcolor: "transparent" }}
        position="static"
        color="transparent"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="inherit"
          aria-label="full width tabs example"
          orientation={isSmall ? "vertical" : "horizontal"}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#fff",
              height: "4px",
            },
          }}
          sx={{
            width: "100%",
            display: "flex",
            ...(isSmall
              ? {
                  flexDirection: "column",
                  alignItems: "stretch",
                }
              : {
                  flexDirection: "row",
                  alignItems: "center",
                  minHeight: "70px",
                }),
          }}
        >
          <Tab
            sx={{
              bgcolor: value === 0 ? "#1F1204" : "#2b2b2b",
              height: { xs: "auto", md: "70px" },
              fontWeight: value === 0 ? "bold" : "normal",
              color: "#fcfcfc",
              borderBottom: { xs: "none", md: "1px solid gray" },
            }}
            label={
              <span className="flex items-center justify-center gap-2 whitespace-nowrap text-[16px] lg:text-[18px] ">
                <GrHomeRounded className="w-[20px] h-[20px] mb-1" />
                Home
              </span>
            }
            className="whitespace-nowrap"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              bgcolor: value === 1 ? "#291c03" : "#2b2b2b",
              height: { xs: "auto", md: "70px" },
              fontWeight: value === 1 ? "bold" : "normal",
              color: "#fcfcfc",
              borderBottom: { xs: "none", md: "1px solid gray" },
            }}
            label={
              <span className="flex items-center justify-center gap-2 whitespace-nowrap text-[16px] lg:text-[18px]">
                <SlUserFemale className="w-[23px] h-[23px] mb-1" />
                About me
              </span>
            }
            className="whitespace-nowrap"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              bgcolor: value === 2 ? "#291c03" : "#2b2b2b",
              height: { xs: "auto", md: "70px" },
              fontWeight: value === 2 ? "bold" : "normal",
              color: "#fcfcfc",
              borderBottom: { xs: "none", md: "1px solid gray" },
            }}
            label={
              <span className="flex items-center justify-center gap-2 whitespace-nowrap text-[16px] lg:text-[18px]">
                <FaLaptop className="w-[25px] h-[25px] mb-1" />
                Projects
              </span>
            }
            className="whitespace-nowrap"
            {...a11yProps(2)}
          />
          <Tab
            sx={{
              bgcolor: value === 3 ? "#291c03" : "#2b2b2b",
              height: { xs: "auto", md: "70px" },
              fontWeight: value === 3 ? "bold" : "normal",
              color: "#fcfcfc",
              borderBottom: { xs: "none", md: "1px solid gray" },
            }}
            label={
              <span className="flex items-center justify-center gap-2 whitespace-nowrap text-[16px] lg:text-[18px]">
                <BsEnvelopeAt className="w-[25px] h-[25px] mb-1" />
                Contact Me
              </span>
            }
            className="whitespace-nowrap"
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <Box
          sx={{
            p: 3,
            background: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maxHeight: "calc(100vh - 70px)",
            overflowY: "hidden",
            overflowX: "hidden",
          }}
        >
          <Typography>
            <Home />
          </Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Box
          sx={{
            p: 3,
            background: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "calc(100vh - 70px)",
          }}
        >
          <Typography>
            <AboutMe />
          </Typography>
        </Box>{" "}
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Box
          sx={{
            p: 3,
            background: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "calc(100vh - 70px)",
          }}
        >
          <Typography>
            <Projects />
          </Typography>
        </Box>{" "}
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <Box
          sx={{
            p: 3,
            background: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "calc(100vh - 70px)",
            overflow: "hidden"
          }}
        >
          <Typography>
            <ContactMe />
          </Typography>
        </Box>{" "}
      </TabPanel>
    </Box>
  );
}
