import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import {
  Card,
  CardContent,
  Button,
  Typography,
  makeStyles,
  TextField,
  Link,
  LinearProgress
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
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  let history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      company,
      email,
      password,
    };
    if (!loading) {
      setLoading(true);
    }
    setTimeout(() => {
      if (name === "" || company === "" || email === "" || password === "") {
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
                <Typography variant="h5">Get started</Typography>
                <Typography variant="caption">
                  Start creating the best possible user experience for you
                  customers
                </Typography>
              </div>

              <TextField
                label="Name *"
                fullWidth
                type="text"
                className={classes.text}
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={err}
              />
              <div style={{ marginTop: "20px" }}></div>

              <TextField
                label="Company *"
                fullWidth
                type="text"
                className={classes.text}
                value={company}
                error={err}
                onChange={(e) => setCompany(e.target.value)}
              />
              <div style={{ marginTop: "20px" }}></div>

              <TextField
                label="Email Address *"
                fullWidth
                type="email"
                className={classes.text}
                error={err}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div style={{ marginTop: "20px" }}></div>

              <TextField
                label="Password *"
                fullWidth
                type="password"
                className={classes.text}
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
                Sign up
              </Button>
              {loading && (
               <LinearProgress variant="query" style={{ marginTop: "10px" }} />
              )}

              <div style={{ marginTop: "10px", cursor: "pointer" }}></div>

              <Link href="/sign-in" variant="body2">
                Sign in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
