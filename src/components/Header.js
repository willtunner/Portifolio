import React from 'react';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import avatar from '../assets/avatar.png';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';

//CSS
const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  },
  title: {
    color: "tomato"
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem"
  },
  typedConteiner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1
  }
}));

const Header = () => {
  const classes = useStyles();//Pega os css e passa para uma vareavel

  return (
    <Box className={classes.typedConteiner}>
      <Grid container justify="center">{/**Grid criado apenas para centralizar o avatar */}
        <Avatar className={classes.avatar} src={avatar} alt="GreenCode" />
      </Grid>

      <Typography className={classes.title} variant="h4">
        <Typed strings={["William Pereira"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Web Design", "Web Developer", "React", "React Native", "Java Desktop", "Firebase"]}
          typeSpeed={40}//Velocidade que aparece o texto
          backSpeed={60}//Velocidade que volta para mostrar o novo texto
          loop          //Deixa em Loop o efeito typed
        />
      </Typography>
    </Box>
  )
}

export default Header
