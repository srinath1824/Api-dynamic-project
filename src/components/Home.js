import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Post from "./Post";
import Delete from "./Delete";
import { Grid } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={5}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100%",
    position: "absolute",
    top: "20%",
    zIndex: "-1",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2} style={{ position: "fixed" }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="Post Call" {...a11yProps(0)} />
            <Tab label="Delete Call" {...a11yProps(1)} />
          </Tabs>
        </Grid>
        <Grid item xs={10} style={{ position: "relative", left: "10%" }}>
          <Grid container>
            <Grid item xs={8}>
              <TabPanel value={value} index={0}>
                <Post />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Delete />
              </TabPanel>
            </Grid>
            <Grid item xs={4} style={{ padding: "20px" }}>
              {`
              "solutionId": "deleteme1",
              "solutionOrganizationId": "deleteme1",
              "publishingEndpoint": "deleteme1",
              "pricingLevel": "bundle",
              "pricing": {
                "type": "tiered",
                "rates": [
                  {
                    "endUnit": 5000,
                    "rate": 0,
                    "startUnit": 0
                  }
                ]
              }
            `}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
