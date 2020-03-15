import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
// import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = ({ classes }) => <div>Loading</div>;

const styles = theme => ({
  root: {
    width: "100vw",
    textAlign: "center"
  },
  progress: {
    margin: theme.spacing.unit * 2,
    color: theme.palette.secondary.dark
  }
});

Loading.propTypes = {
  classes: PropTypes.any.isRequired
};

export default withStyles(styles)(Loading);
