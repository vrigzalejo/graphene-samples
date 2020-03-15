import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
// import ExitToApp from "@material-ui/icons/ExitToApp";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";

const Signout = ({ classes }) => {
  return <div>Signout</div>;
};

const styles = {
  root: {
    cursor: "pointer",
    display: "flex"
  },
  buttonIcon: {
    marginLeft: "5px"
  }
};

Signout.propTypes = {
  classes: PropTypes.any.isRequired
};

export default withStyles(styles)(Signout);
