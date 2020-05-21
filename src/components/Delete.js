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
      <div>
        <Container component="main" maxWidth="sm">
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="businessName"
                  variant="outlined"
                  required
                  fullWidth
                  id="businessName"
                  label="Business Name"
                  type="string"
                  //onChange={(e) => this.handleChange(e)}
                  //value={retailerInfo.businessName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  type="string"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  //onChange={(e) => this.handleChange(e)}
                  //value={retailerInfo.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  type="string"
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  //onChange={(e) => this.handleChange(e)}
                  //value={retailerInfo.lastName}
                />
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="string"
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  //onChange={(e) => this.handleChange(e)}
                  //value={retailerInfo.address}
                />
                {/* <GoogleGeocoding /> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="number"
                  id="pincode"
                  label="Pincode"
                  name="pincode"
                  autoComplete="pincode"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  //onChange={(e) => this.handleChange(e)}
                  //value={retailerInfo.pincode}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="number"
                  id="contactNumber"
                  label="Contact Number"
                  name="contactNumber"
                  autoComplete="contactNumber"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  //onChange={(e) => this.handleChange(e)}
                  //value={retailerInfo.contactNumber}
                />
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    );
  }
}
export default compose(
  withStyles(useStyles),
  //   connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Post);
