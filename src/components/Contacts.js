import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';//não acha o theme.breakpoints.up se não tiver o core
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from "@material-ui/icons/Send";
import Navbar from './Navbar';

const useStyles = makeStyles( theme =>({
  form:{
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button:{
    marginTop: "1rem",
    color: "tomato",
    borderColor:"tomato"
  }
}));

//Usado para personalizar os inputs
const InputField = withStyles({
  root: {
    "& label.Mui-focused": {//MUDA O LABEL QUANDO CLICA NO INPUT
      color: "tomato",
    },
    "& label":{//COR DA LABEL NORMAL
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {//MUDA A COR DA BORDA
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset":{//MUDA COR DA BORDA QUANDO O MOUSE PASSA E QUANDO TA SELECIONADO
        borderColor: "tan",
      },
      "& .Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contacts = () => {
  const classes = useStyles();

  return (
    <>
      <Box component="div">
      <Navbar />
        <Grid container justify="center">
          <Box component="form" className={classes.form}>

            <Typography 
            variant="h5" 
            style={{color: "tomato", textAlign: "center", 
            textTransform: "uppercase"}}>
              Entre em contato comigo
              </Typography>

            <InputField fullWidth={true} label="Nome" variant="outlined" margin="dense" size="medium" inputProps={{style: {color: "white"}}}/>
            <br />
            <InputField fullWidth={true} label="E-Mail" variant="outlined" margin="dense" size="medium" inputProps={{style: {color: "white"}}}/>
            <br />
            <InputField fullWidth={true} label="Telefone" variant="outlined" margin="dense" size="medium" inputProps={{style: {color: "white"}}}/>
            <br />

            <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
              Enviar
            </Button>
          </Box>
        </Grid>
      </Box>
    </>
  )
}

export default Contacts
