import React from "react";
import {
  Typography,
  Divider,
  Breadcrumbs,
  Link,
  makeStyles,
  Card,
  CardContent,
  Avatar,
  Button,
  Chip,
  LinearProgress
} from "@material-ui/core";
import {HomeOutlined,WorkOutline,LocationOnOutlined } from "@material-ui/icons";
import TableDetails from "./Table"

const useStyles = makeStyles((theme) => ({
  link: {
    cursor: "pointer",
    fontSize: "15px",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    width: "130px",
    height: "130px",
    marginLeft: "360px",
    marginBottom: "10px",
  },
  display: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    textAlign: "center",
  },
  skills: {
    display: "flex",
    justifyContent: "center",
  },
  about:{
      display: "flex",
      
  }
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <div className="content">
      <div style={{ marginBottom: "15px"}}>
        <Typography variant="h5" style={{ marginBottom: "12px" }}>
          Profile
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            color="inherit"
            className={classes.link}
            style={{ color: "#1565c0" }}
          >
            Dashboard
          </Link>
          <Link color="textPrimary" className={classes.link}>
            Profile
          </Link>
        </Breadcrumbs>
      </div>

      <Divider />
      <div style={{ marginTop: "20px" }}></div>
      <Card elevation={0}>
        <CardContent>
          <Typography>Profile Detials</Typography>
          <div className={classes.display}>
            <Avatar
              alt="Profile image"
              src="https://i.picsum.photos/id/1005/5760/3840.jpg"
              className={classes.image}
            />
            <Typography>Amir Dambatta</Typography>
            <Typography variant="caption">Software Developer</Typography>
            <div style={{ marginTop: "10px" }}>
              <Button variant="contained" size="small">
                Follow
              </Button>
              <Button
                color="primary"
                variant="contained"
                style={{ marginLeft: "10px" }}
                size="small"
              >
                Message
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div style={{ marginTop: "20px" }}></div>
      <Card elevation={0}>
        <CardContent>
          <Typography>Skills</Typography>
          <div className={classes.skills}>
            <Chip label="HTML" color="primary" style={{ marginLeft: "5px" }} />
            <Chip label="JavaScript" style={{ marginLeft: "5px" }} />
            <Chip label="React" style={{ marginLeft: "5px" }} />
            <Chip label="Material UI" style={{ marginLeft: "5px" }} />
            <Chip label="Rails" style={{ marginLeft: "5px" }} />
            <Chip label="Node.js" style={{ marginLeft: "5px" }} />
          </div>
        </CardContent>
      </Card>

      <div style={{ marginTop: "20px" }}></div>
      <Card elevation={0}>
        <CardContent>
          <Typography style={{ marginBottom: "10px" }}>About</Typography>
          <div className={classes.about}>
            <HomeOutlined />
            <Typography style={{ marginLeft: "5px"}} variant="caption">
              Lives in <span style={{color:"#1565c0"}}>FCT Abuja, Nigeria</span>
            </Typography>
          </div>

          <div  className={classes.about}>
            <WorkOutline />
            <Typography style={{ marginLeft: "5px" }} variant="caption">
              Works at <span style={{color:"#1565c0"}}>Outsource Global</span>
            </Typography>
          </div>
          <div  className={classes.about}>
            <LocationOnOutlined />
            <Typography style={{ marginLeft: "7px" }} variant="caption">
              Lives in <span style={{color:"#1565c0"}}>Kubwa</span>
            </Typography>
          </div>
        </CardContent>
      </Card>

      <div style={{ marginTop: "20px" }}></div>
      <Card elevation={0}>
          <CardContent>
              <Typography variant="h5" style={{marginBottom: "5px"}}> $ 200</Typography>
              <Typography variant="caption" style={{marginBottom: "15px"}}>Total Earnings</Typography>
              <LinearProgress variant="determinate" value={60} style={{marginTop:"10px"}} />
          </CardContent>
      </Card>

      <div style={{ marginTop: "20px" }}></div>
      <Card elevation={0}>
          <CardContent>
              <Typography variant="h5" style={{marginBottom: "5px"}}>30</Typography>
              <Typography variant="caption" style={{marginBottom: "15px"}}>Orders Today</Typography>
              <LinearProgress variant="determinate" value={20} style={{marginTop:"10px"}} />
          </CardContent>
      </Card>

      <div style={{ marginTop: "20px" }}></div>
      <Card elevation={0}>
          <CardContent>
              <Typography variant="h5" style={{marginBottom: "5px"}}> $ 1.224</Typography>
              <Typography variant="caption" style={{marginBottom: "15px"}}>Total Revenue</Typography>
              <LinearProgress variant="determinate" value={80} style={{marginTop:"10px"}} />
          </CardContent>
      </Card>

        <TableDetails />

    </div>
  );
};

export default Profile;
