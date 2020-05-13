import React from "react";
import {
  Typography,
  Breadcrumbs,
  Link,
  makeStyles,
  Divider,
  Card,
  CardContent,
  Chip,
  CardActions,
  Avatar,
  Button,
  CardMedia,
  CardActionArea
} from "@material-ui/core";
import {AvatarGroup} from "@material-ui/lab"

const useStyles = makeStyles((theme) => ({
  link: {
    cursor: "pointer",
    fontSize: "15px",
  },
  media:{
      height: 200
  }
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <div className="content">
      <div style={{ marginBottom: "15px" }}>
        <Typography variant="h5" style={{ marginBottom: "12px" }}>
          Projects
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
            Projects
          </Link>
        </Breadcrumbs>
      </div>
      <Divider />

      <div style={{ marginTop: "20px" }}></div>
      <Card elevation={0}>
        <CardContent>
          <Typography>Landing page redesign</Typography>
          <Chip
            label="Finished"
            style={{ backgroundColor: "#2e7d32", color: "white", marginTop:"10px", marginBottom:"10px" }}
            size="small"
          />

          <Typography variant="subtitle1" style={{marginBottom:"10px"}}>
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing sem neque sed ipsum.
          </Typography>

          <AvatarGroup>
            <Avatar alt="Amir dbt" src="https://i.picsum.photos/id/1011/5472/3648.jpg" />
            <Avatar alt="Sadiq dbt" src="https://i.picsum.photos/id/1014/6016/4000.jpg" />
            <Avatar alt="Karima dbt" src="https://i.picsum.photos/id/1025/4951/3301.jpg" />
          </AvatarGroup>
        </CardContent>
        <Divider />
        <CardActions>
            <Button color="primary">Share</Button>
            <Button color="primary">Learn More</Button>
        </CardActions>
      </Card>


      <div style={{ marginTop: "20px" }}></div>
      <Card elevation={0}>
        <CardContent>
          <Typography>Company posters</Typography>
          <Chip
            label="In progress"
            style={{ backgroundColor: "#f57c00", color: "white", marginTop:"10px", marginBottom:"10px" }}
            size="small"
          />

          <Typography variant="subtitle1" style={{marginBottom:"10px"}}>
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing sem neque sed ipsum.
          </Typography>

          <AvatarGroup>
            <Avatar alt="Amir dbt" src="https://i.picsum.photos/id/1011/5472/3648.jpg" />
            <Avatar alt="Sadiq dbt" src="https://i.picsum.photos/id/1014/6016/4000.jpg" />
            <Avatar alt="Karima dbt" src="https://i.picsum.photos/id/1025/4951/3301.jpg" />
          </AvatarGroup>
        </CardContent>
        <Divider />
        <CardActions>
            <Button color="primary">Share</Button>
            <Button color="primary">Learn More</Button>
        </CardActions>
      </Card>

      <div style={{ marginTop: "20px" }}></div>
      <Card elevation={0}>
        <CardContent>
          <Typography>Product page redesign</Typography>
          <Chip
            label="Finished"
            style={{ backgroundColor: "#2e7d32", color: "white", marginTop:"10px", marginBottom:"10px" }}
            size="small"
          />

          <Typography variant="subtitle1" style={{marginBottom:"10px"}}>
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing sem neque sed ipsum.
          </Typography>

          <AvatarGroup>
            <Avatar alt="Amir dbt" src="https://i.picsum.photos/id/1011/5472/3648.jpg" />
            <Avatar alt="Sadiq dbt" src="https://i.picsum.photos/id/1014/6016/4000.jpg" />
            <Avatar alt="Karima dbt" src="https://i.picsum.photos/id/1025/4951/3301.jpg" />
          </AvatarGroup>
        </CardContent>
        <Divider />
        <CardActions>
            <Button color="primary">Share</Button>
            <Button color="primary">Learn More</Button>
        </CardActions>
      </Card>


      <div style={{ marginTop: "20px" }}></div>
      <Card elevation={0}>
        <CardContent>
          <Typography>Upgrade CRM software</Typography>
          <Chip
            label="In progress"
            style={{ backgroundColor: "#f57c00", color: "white", marginTop:"10px", marginBottom:"10px" }}
            size="small"
          />

          <Typography variant="subtitle1" style={{marginBottom:"10px"}}>
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing sem neque sed ipsum.
          </Typography>

          <AvatarGroup>
            <Avatar alt="Amir dbt" src="https://i.picsum.photos/id/1011/5472/3648.jpg" />
            <Avatar alt="Sadiq dbt" src="https://i.picsum.photos/id/1014/6016/4000.jpg" />
            <Avatar alt="Karima dbt" src="https://i.picsum.photos/id/1025/4951/3301.jpg" />
          </AvatarGroup>
        </CardContent>
        <Divider />
        <CardActions>
            <Button color="primary">Share</Button>
            <Button color="primary">Learn More</Button>
        </CardActions>
      </Card>

      <div style={{ marginTop: "20px" }}></div>
      <Card elevation={0}>
          <CardActionArea>
          <CardMedia src="https://i.picsum.photos/id/0/5616/3744.jpg" component="img" title="bg image" className={classes.media} />
        <CardContent>
          <Typography>Fix form validation</Typography>
          <Chip
            label="In progress"
            style={{ backgroundColor: "#f57c00", color: "white", marginTop:"10px", marginBottom:"10px" }}
            size="small"
          />

          <Typography variant="subtitle1" style={{marginBottom:"10px"}}>
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing sem neque sed ipsum.
          </Typography>

          <AvatarGroup>
            <Avatar alt="Amir dbt" src="https://i.picsum.photos/id/1011/5472/3648.jpg" />
            <Avatar alt="Sadiq dbt" src="https://i.picsum.photos/id/1014/6016/4000.jpg" />
            <Avatar alt="Karima dbt" src="https://i.picsum.photos/id/1025/4951/3301.jpg" />
          </AvatarGroup>
        </CardContent>
          </CardActionArea>
         
        <Divider />
        <CardActions>
            <Button color="primary">Share</Button>
            <Button color="primary">Learn More</Button>
        </CardActions>
      </Card>


      <div style={{ marginTop: "20px" }}></div>
      <Card elevation={0}>
          <CardActionArea>
          <CardMedia src="https://i.picsum.photos/id/1048/5616/3744.jpg" component="img" title="bg image" className={classes.media} />
        <CardContent>
          <Typography>Refactor backend templaes</Typography>
          <Chip
            label="On hold"
            style={{ backgroundColor: "#e53935", color: "white", marginTop:"10px", marginBottom:"10px" }}
            size="small"
          />

          <Typography variant="subtitle1" style={{marginBottom:"10px"}}>
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing sem neque sed ipsum.
          </Typography>

          <AvatarGroup>
            <Avatar alt="Amir dbt" src="https://i.picsum.photos/id/1011/5472/3648.jpg" />
            <Avatar alt="Sadiq dbt" src="https://i.picsum.photos/id/1014/6016/4000.jpg" />
            <Avatar alt="Karima dbt" src="https://i.picsum.photos/id/1025/4951/3301.jpg" />
          </AvatarGroup>
        </CardContent>
          </CardActionArea>
         
        <Divider />
        <CardActions>
            <Button color="primary">Share</Button>
            <Button color="primary">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Projects;
