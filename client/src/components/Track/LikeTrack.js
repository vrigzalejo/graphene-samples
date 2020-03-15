import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
// import IconButton from "@material-ui/core/IconButton";
// import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const LikeTrack = ({ classes }) => {
  return <div>LikeTrack</div>;
};

const styles = theme => ({
  iconButton: {
    color: "deeppink"
  },
  icon: {
    marginLeft: theme.spacing.unit / 2
  }
});

LikeTrack.propTypes = {
  classes: PropTypes.any.isRequired
};

export default withStyles(styles)(LikeTrack);
