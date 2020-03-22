import React, { useState } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

const Error = ({ classes, error }) => {
  const [open, setOpen] = useState(true);

  return (
    <Snackbar
      open={open}
      className={classes.snackbar}
      message={error.message}
      action={
        <Button onClick={() => setOpen(false)} color="secondary" size="small">
          Close
        </Button>
      }
    />
  );
};

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit
  }
});

Error.propTypes = {
  classes: PropTypes.any.isRequired,
  error: PropTypes.object.isRequired
};

export default withStyles(styles)(Error);
