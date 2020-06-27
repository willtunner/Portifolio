import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { LinkedIn, GitHub, Instagram } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem"
      }
    }
  }
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://www.instagram.com/willtunner/';
        }}
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Instagram />}
      />
      <BottomNavigationAction
        onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://www.linkedin.com/in/william-pereira-8a256321/';
        }}
        className={classes.root}
        style={{ padding: 0 }}
        icon={<LinkedIn />}
      />
      <BottomNavigationAction
        onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://github.com/willtunner';
        }}
        className={classes.root}
        style={{ padding: 0 }}
        icon={<GitHub />}
      />
    </BottomNavigation>
  )
}

export default Footer
