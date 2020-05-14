import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import {
  Card,
  CardContent,
  Button,
  Avatar,
  Typography,
  makeStyles,
  TextField,
  Link,
  LinearProgress
} from "@material-ui/core";
import logo from "./outsource-logo-wide.png"

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  let history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    if (!loading) {
      setLoading(true);
    }
    setTimeout(() => {
      if (email === "" || password === "") {
        setErr(true);
      }
      setLoading(false);
      console.log(user);
      history.push("/")
    }, 2000);
  };

  const classes = useStyles();
  return (
    <div className="sign-in">
      <Card className={classes.root} elevation={0}>
        <CardContent>
          <form onSubmit={handleSubmit}>
          <div>
            <div className={classes.display}>
              <Avatar
                alt="Profile image"
                src={logo}
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
              type="text"
              className={classes.text}
              error={err}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div style={{ marginTop: "20px" }}></div>
            <TextField
              label="Password *"
              fullWidth
              className={classes.text}
              type="password"
              error={err}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div style={{ marginTop: "30px" }}></div>

            <Button
              variant="contained"
              color="primary"
              className={classes.text}
              onClick={handleSubmit}
              disabled={loading}
    
            >
              Sign in
            </Button>
          
            {loading && (
                 <LinearProgress variant="query" style={{ marginTop: "10px" }} />
              )}

            <div style={{ marginTop: "20px" }}></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link href="/reset-password" variant="body2">
                Forgot password
              </Link>
              <Link href="/sign-up" variant="body2">
                Sign up
              </Link>
            </div>
          </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
