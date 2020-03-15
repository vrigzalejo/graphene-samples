import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

const App = ({ classes }) => {
  return <div>App</div>;
};

const styles = theme => ({
  container: {
    margin: "0 auto",
    maxWidth: 960,
    padding: theme.spacing.unit * 2
  }
});

App.propTypes = {
  classes: PropTypes.any.isRequired
};

export default withStyles(styles)(App);
