//Instalar o MATERIAL-UI: npm install @material-ui/core @material-ui/icons @material-ui/styles
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,//Cria "imagem ou icones" arrendodados
  Divider,//Um divisor é uma linha fina que agrupa conteúdo em listas e layoutes
  List,
  Typography,
  Box//Box serve como um componente encapsulador
} from '@material-ui/core';

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail
} from '@material-ui/icons';

import {Link} from "react-router-dom";
import avatar from '../assets/avatar.png';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import Footer from './Footer';


//CSS STYLES
const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%"
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),//define a largura considerando todo o makeStyles
    height: theme.spacing(13),

  },
  ListItemColor: {
    color: "tan"
  }
}));

//Função com os icones para o menu sideBar
const menuItens = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume"
  },
  {
    listIcon: <Apps />,
    listText: "Portifólio",
    listPath: "/portifolio"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contatos",
    listPath: "/contacts"
  }
]

const Navbar = () => {
  const [state, setState] = useState({
    right: false
  });

  const toogleSlider = ((slider, open) => () => {
    setState({...state, [slider]: open});
  });

  const classes = useStyles();

  //Separa o side bar do body
  const sideList = slider => (
    <Box 
    className={classes.menuSliderContainer} 
    component="div" 
    onClick={toogleSlider(slider, false)}//quando clicar no menu fecha automaticamente
    >
      <Avatar className={classes.avatar} src={avatar} alt="GreenCode" />
      <Divider />
      <List>
        {menuItens.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.ListItemColor}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText className={classes.ListItemColor} primary={lsItem.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  )


  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toogleSlider("right", true)}>{/**coloca o arrowback dentro do IconButton para dar opção de botão a ele */}
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5">
              Portifólio Will.Dev
          </Typography>
          <MobilRightMenuSlider 
            anchor="right"//Define a posição que fica o sideBar
            open={state.right}
            onClose={toogleSlider("right", false)}
            >
            {sideList("right")}
            <Footer />
          </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar


