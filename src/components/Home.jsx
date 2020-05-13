import React,{useState} from "react";
import { Typography, Button, IconButton, makeStyles,Divider,Menu,MenuItem } from "@material-ui/core";
import { Refresh, FilterList } from "@material-ui/icons";
import CardDetails from "./CardDetails"
import TableDetails from "./Table"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: 'space-between',

  },
  title: {
    display: "flex",
    
  },
}));

const Home = () => {
    const [open, setopen] = useState(false);

    const handleMenu = () => {
      setopen(true);
    };
    const handleClose = () => {
      setopen(false);
    };
  const classes = useStyles();
  return (
    <div className="content">
      <div className={classes.root}>
        <div className={classes.title}>
          <Typography variant="h4">Welcome back, Amir</Typography>
          <Typography
            variant="caption"
            style={{ marginTop: "10px", marginLeft: "7px" }}
          >
            Monday, 29 April 2020
          </Typography>
        </div>
        <div>
          <IconButton>
            <Refresh />
          </IconButton>
          <IconButton>
            <FilterList />
          </IconButton>
          <Button size="small" variant="contained" color="primary" onClick={handleMenu}>
            Today: April 29
          </Button>
          <Menu
              open={open}
              onClose={handleClose}
              keepMounted
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              elevation={0}
            >
              <MenuItem onClick={handleClose}>Today</MenuItem>
              <MenuItem onClick={handleClose}>Yesterday</MenuItem>
              <MenuItem onClick={handleClose}>Last 7 days</MenuItem>
              <MenuItem onClick={handleClose}>Last 30 days</MenuItem>
              <MenuItem onClick={handleClose}>This month</MenuItem>
              <MenuItem onClick={handleClose}>Last month</MenuItem>
            </Menu>
        </div>
      </div>
     <Divider />

     <CardDetails />

     <TableDetails />
    </div>
  );
};

export default Home;
