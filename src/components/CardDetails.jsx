import React from "react";
import {
  Grid,
  Card,
  Chip,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop: '20px'
    },
  det: {
    display: "flex",
  },
}));

const CardDetails = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card elevation={0}>
            <CardContent>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h5">
                      Sales Today
                    </Typography>
                    <Typography gutterBottom variant="h5">
                      2.532
                    </Typography>
                    <div className={classes.det}>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        style={{ color: "green" }}
                      >
                        +26%
                      </Typography>
                      <Typography
                        variant="caption"
                        style={{ marginLeft: "5px", marginTop: "3px" }}
                      >
                        Since last week
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
                <Grid item>
                  <Chip label="Today" color="primary" size="small" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Card elevation={0}>
            <CardContent>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h5">
                      Visitors
                    </Typography>
                    <Typography gutterBottom variant="h5">
                      170.212
                    </Typography>
                    <div className={classes.det}>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        style={{ color: "red" }}
                      >
                        -14%
                      </Typography>
                      <Typography
                        variant="caption"
                        style={{ marginLeft: "5px", marginTop: "3px" }}
                      >
                        Since last week
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
                <Grid item>
                  <Chip label="Annual" color="primary" size="small" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Card elevation={0}>
            <CardContent>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h5">
                      Total Earnings
                    </Typography>
                    <Typography gutterBottom variant="h5">
                      $ 24.300
                    </Typography>
                    <div className={classes.det}>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        style={{ color: "green" }}
                      >
                        +18%
                      </Typography>
                      <Typography
                        variant="caption"
                        style={{ marginLeft: "5px", marginTop: "3px" }}
                      >
                        Since last week
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
                <Grid item>
                  <Chip label="Monthly" color="primary" size="small" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Card elevation={0}>
            <CardContent>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h5">
                      Pendiing Orders
                    </Typography>
                    <Typography gutterBottom variant="h5">
                      45
                    </Typography>
                    <div className={classes.det}>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        style={{ color: "red" }}
                      >
                        -9%
                      </Typography>
                      <Typography
                        variant="caption"
                        style={{ marginLeft: "5px", marginTop: "3px" }}
                      >
                        Since last week
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
                <Grid item>
                  <Chip label="Yearly" color="primary" size="small" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardDetails;
