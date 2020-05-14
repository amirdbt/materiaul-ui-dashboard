import React from "react";
import {
  Typography,
  Breadcrumbs,
  makeStyles,
  Link,
  Divider,
  Card,
  CardContent,
  TextField,
  Button,
  Avatar,
} from "@material-ui/core";
import {CloudUpload} from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  link: {
    cursor: "pointer",
    fontSize: "15px",
  },
  root: {
    display: "flex",
    justifyContent: "space-between"
  },
  public: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
    width: "350%",
    
  },
  image: {
    display: "flex",
    width: "130px",
    height: "130px",
    // marginLeft: "360px",
    marginBottom: "10px",
  },
  display: {
    display: "flex",
    flexDirection: "column",
    marginRight: "7%",
    textAlign: "center",
  },
  input:{
      display:"flex",
      justifyContent: "space-between",
  }
}));

const Settings = () => {
  const classes = useStyles();

  return (
    <div className="content">
      <div style={{ marginBottom: "15px" }}>
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
            User Settings
          </Link>
        </Breadcrumbs>
      </div>

      <Divider />

      <div style={{ marginTop: "20px" }}></div>

      <Card elevation={0}>
        <CardContent>
          <Typography>Public info</Typography>
          <div className={classes.root}>
            <div>
              <div className={classes.public}>
                <TextField
                  label="username"
                  defaultValue="Amir Dambatta"
                  variant="outlined"
                  style={{ marginBottom: "20px" }}
                />
                <TextField
                  label="Biography"
                  defaultValue="Amir is a Freelance Writer and Social Media Manager who helps finance professionals and Fin-tech startups build an audience and get more paying clients online."
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginTop: "20px" }}
              >
                Save changes
              </Button>
            </div>

            <div className={classes.display}>
              <Avatar
                alt="Profile image"
                src="https://i.picsum.photos/id/1005/5760/3840.jpg"
                className={classes.image}
              />
            
              <div style={{ marginTop: "5px" }}>
                <Button variant="contained" size="small" color="primary" startIcon={ <CloudUpload /> }>
                  Upload
                </Button>
              </div>
              <Typography variant="caption">For best results, Import JPEG</Typography>
            </div>
            
          </div>
        </CardContent>
      </Card>

      <div style={{ marginTop: "20px" }}></div>

      <Card elevation={0}>
          <CardContent>
              <div className={classes.input}>
              <TextField
                  label="First name"
                  defaultValue="Amir"
                  variant="outlined"
                  fullWidth
                  style={{ marginBottom: "20px", marginRight:"10px" }}
                />
                 <TextField
                  label="Last name"
                  defaultValue="Dambatta"
                  variant="outlined"
                  fullWidth
                  style={{ marginBottom: "20px" }}
                />
              </div>
              <div>
              <TextField
                  label="Email"
                  defaultValue="amyboy32@yahoo.com"
                  variant="outlined"
                  fullWidth
                  style={{ marginBottom: "20px" }}
                />
              </div>
              <div>
              <TextField
                  label="Address"
                 placeholder="Address"
                  variant="outlined"
                  fullWidth
                  style={{ marginBottom: "20px" }}
                />
              </div>
              <div>
              <TextField
                  label="Apartment,studio, or floor"
                 placeholder="Apartment,studio, or floor"
                  variant="outlined"
                  fullWidth
                  style={{ marginBottom: "20px" }}
                />
              </div>
              <div className={classes.input}>
              <TextField
                  label="City"
                 placeholder="City"
                  variant="outlined"
                  fullWidth
                  style={{ marginBottom: "20px", marginRight: "10px" }}
                />
              <TextField
                  label="State"
                 placeholder="State"
                  variant="outlined"
                  fullWidth
                  style={{ marginBottom: "20px",marginRight: "10px"  }}
                />
              <TextField
                  label="Zip"
                 placeholder="Zip"
                  variant="outlined"
                  fullWidth
                  style={{ marginBottom: "20px" }}
                />
              </div>
              <Button variant="contained" color="primary">Save changes</Button>
          </CardContent>
      </Card>


    </div>
  );
};

export default Settings;
