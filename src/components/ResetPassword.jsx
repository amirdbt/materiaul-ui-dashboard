import React from "react";
import {
  Card,
  CardContent,
  Button,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    height: "45%"
  },
  text: {
    width: "550px",
  },
  display:{
      marginTop: "30px"
  }
}));

const ResetPassword = () => {
  const classes = useStyles();
  return (
    <div className="sign-in">
      <Card className={classes.root} elevation={0}>
        <CardContent className={classes.display}>
          <Typography variant="h5">Reset Password</Typography>
          <Typography variant="subtitle1">Enter your email to reset your password</Typography>

          <TextField
            type="text"
            placeholder="Email Address *"
            label="Email Address *"
            fullWidth
            className={classes.text}
            style={{ marginBottom: "20px" }}
          />
          <Link to="/" style={{textDecoration: "none"}}>
          <Button variant="contained" color="primary" className={classes.text}>
            Reset password
          </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;
