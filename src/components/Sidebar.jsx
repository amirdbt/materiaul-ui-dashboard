import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Menu,
  MenuItem,
} from "@material-ui/core";
import {
  Inbox,
  Mail,
  Dashboard,
  AccountCircle,
  Search,
  Notifications,
  LocalMall,
  Settings
} from "@material-ui/icons";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#3f51b5",
    color: "#ffffff",
  },
  header: {
    fontSize: "22px",
    textAlign: "center",
    lineHeight: "63px",
    userSelect: "none",
    backgroundColor: "#303f9f",
  },
  listItems: {
    padding: "15px",
  },
  iconColor: {
    color: "#bcbcbc",
    fontSize: "20px",
  },
  topBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: "#ffffff",
  },
  search: {
    display: "flex",
    flexGrow: 1,
  },
  searchIcon: {
    marginRight: "10px",
  },
  appIcons: {
    display: "flex",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
  },
  men:{
    top: 0
  }
}));

const Sidebar = () => {
  const [open, setopen] = useState(false);

  const handleMenu = () => {
    setopen(true);
  };
  const handleClose = () => {
    setopen(false);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.topBar} color="default" elevation={0}>
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase placeholder="Search..." />
          </div>
          <div />
          <div className={classes.appIcons}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="primary">
                <Mail />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="primary">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleMenu}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              open={open}
              onClose={handleClose}
              className={classes.men}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              elevation={0}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Log out</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <header className={classes.header}>My Sidebar</header>
          <Divider />
          <List>
            <Link className={classes.link} to="/">
              <ListItem button className={classes.listItems}>
                <ListItemIcon className={classes.iconColor}>
                  <Dashboard />
                </ListItemIcon>
                <Typography variant="h5">Dashboard</Typography>
              </ListItem>
            </Link>

            <ListItem button className={classes.listItems}>
              <ListItemIcon className={classes.iconColor}>
                <Inbox />
              </ListItemIcon>
              <Typography variant="h5">Inbox</Typography>
            </ListItem>

            <Link className={classes.link} to="/profile">
              <ListItem button className={classes.listItems}>
                <ListItemIcon className={classes.iconColor}>
                  <AccountCircle />
                </ListItemIcon>
                <Typography variant="h5">Profile</Typography>
              </ListItem>
            </Link>

            <ListItem button className={classes.listItems}>
              <ListItemIcon className={classes.iconColor}>
                <Mail />
              </ListItemIcon>
              <Typography variant="h5">All Mails</Typography>
            </ListItem>

            <Link className={classes.link} to="/projects">
              <ListItem button className={classes.listItems}>
                <ListItemIcon className={classes.iconColor}>
                  <LocalMall />
                </ListItemIcon>
                <Typography variant="h5">Projects</Typography>
              </ListItem>
            </Link>

            <Link className={classes.link} to="/settings">
              <ListItem button className={classes.listItems}>
                <ListItemIcon className={classes.iconColor}>
                  <Settings />
                </ListItemIcon>
                <Typography variant="h5">User Settings</Typography>
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </nav>
    </div>
  );
};

export default Sidebar;
