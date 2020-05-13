import React from "react";
import {
  Card,
  CardContent,
  Button,
  Avatar,
  Typography,
  makeStyles,
  TextField,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    width: "100px",
    height: "100px",
    marginLeft: "220px",
    marginBottom: "10px",
  },
  text: {
    width: "550px",
  },
  display: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    textAlign: "center",
  },
}));

const SignIn = () => {
  const classes = useStyles();
  return (
    <div className="sign-in">
      <Card className={classes.root} elevation={0}>
        <CardContent>
          <div>
            <div className={classes.display}>
              <Avatar
                alt="Profile image"
                src="https://i.picsum.photos/id/1005/5760/3840.jpg"
                className={classes.image}
              />
              <Typography variant="h5">Welcome back, Amir!</Typography>
              <Typography variant="caption">
                Sign in to your account to continue
              </Typography>
            </div>

            <TextField
              label="Email Address *"
              fullWidth
              className={classes.text}
            />
            <div style={{ marginTop: "20px" }}></div>
            <TextField label="Password *" fullWidth className={classes.text} />

            <div style={{ marginTop: "30px" }}></div>

            <Button
              variant="contained"
              color="primary"
              className={classes.text}
              href="/"
            >
              Sign in
            </Button>

            <div style={{ marginTop: "20px" }}></div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <Typography style={{ textAlign: "center" }} color="primary">
                Forgot password
              </Typography>
              <Link href="/sign-up" variant="body2">
                Sign up
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
