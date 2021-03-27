import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  mainLink: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: 'inherit'
    }
  },
  staticToolbar: {
    marginBottom: theme.spacing(2)
  },
  paddingToolbar: {
    paddingLeft: 0,
    paddingRight: 0
  }
}));


const AppToolbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar className={classes.paddingToolbar}>
            <Typography variant="h6">
              <Link to="/" className={classes.mainLink}>News</Link>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar className={classes.staticToolbar}/>
    </>
  );
};

export default AppToolbar;