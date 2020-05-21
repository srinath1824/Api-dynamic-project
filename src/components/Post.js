import React, { Component } from "react";
import {
  Avatar,
  Button,
  Card,
  FormLabel,
  Grid,
  Typography,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import Link from "@material-ui/core/Link";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

class Post extends Component {
  render() {
    const { classes, history } = this.props;
    return (
      <Container component="main" maxWidth="md">
        <h3>Post call</h3>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="solutionId"
                variant="outlined"
                type="string"
                required
                fullWidth
                id="solutionId"
                label="solutionId"
                //onChange={(e) => this.handleChange(e)}
                //value={retailerInfo.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                type="string"
                id="solutionOrganizationId"
                label="solutionOrganizationId"
                name="solutionOrganizationId"
                autoComplete="lname"
                //onChange={(e) => this.handleChange(e)}
                //value={retailerInfo.lastName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="publishingEndpoint"
                variant="outlined"
                type="string"
                required
                fullWidth
                id="publishingEndpoint"
                label="publishingEndpoint"
                //onChange={(e) => this.handleChange(e)}
                //value={retailerInfo.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                type="string"
                id="pricingLevel"
                label="pricingLevel"
                name="pricingLevel"
                autoComplete="pricingLevel"
                //onChange={(e) => this.handleChange(e)}
                //value={retailerInfo.lastName}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={10}>
              <h3>Rates</h3>
            </Grid>
            <Grid item xs={2} style={{ padding: "10px" }}>
              <Fab size="small" color="primary" aria-label="add">
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {/* <Grid item xs={12} sm={4}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">
                  Select Business Category
                </InputLabel>
                <Select
                  native
                  name="category"
                  type="string"
                  label="Select Business Category"
                  inputProps={{
                    name: "category",
                    id: "outlined-age-native-simple",
                  }}
                  //onChange={(e) => this.handleChange(e)}
                  //value={retailerInfo.category}
                >
                  <option aria-label="None" value="" />
                  <option value={"Medical"}>Medical Shop</option>
                  <option value={"Groceries"}>Food/Grocery Shop</option>
                  <option value={"Fruits & Vegetables"}>
                    Fruits & Vegetables
                  </option>
                </Select>
              </FormControl>
            </Grid> */}
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="string"
                id="type"
                label="type"
                name="type"
                autoComplete="type"
                //onChange={(e) => this.handleChange(e)}
                //value={retailerInfo.address}
              />
              {/* <GoogleGeocoding /> */}
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                id="endUnit"
                label="endUnit"
                name="endUnit"
                autoComplete="endUnit"
                //onChange={(e) => this.handleChange(e)}
                //value={retailerInfo.pincode}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                id="rate"
                label="rate"
                name="rate"
                autoComplete="rate"
                //onChange={(e) => this.handleChange(e)}
                //value={retailerInfo.contactNumber}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                id="startUnit"
                label="startUnit"
                name="startUnit"
                autoComplete="startUnit"
                //onChange={(e) => this.handleChange(e)}
                //value={retailerInfo.contactNumber}
              />
            </Grid>
          </Grid>
          <Button
            //fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            Post call
          </Button>
        </form>
      </Container>
    );
  }
}
export default compose(
  withStyles(useStyles),
  //   connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Post);
