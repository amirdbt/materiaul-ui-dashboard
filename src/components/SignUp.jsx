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

const SignUp = () => {
  const classes = useStyles();
  return (
    <div className="sign-in">
      <Card className={classes.root} elevation={0}>
        <CardContent>
          <div>
            <div className={classes.display}>
              <Typography variant="h5">Get started</Typography>
              <Typography variant="caption">
                Start creating the best possible user experience for you
                customers
              </Typography>
            </div>

            <TextField label="Name *" fullWidth className={classes.text} />
            <div style={{ marginTop: "20px" }}></div>

            <TextField label="Company *" fullWidth className={classes.text} />
            <div style={{ marginTop: "20px" }}></div>

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
              Sign up
            </Button>

            <div style={{ marginTop: "10px", cursor: "pointer" }}></div>

            <Link href="/sign-in" variant="body2">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
