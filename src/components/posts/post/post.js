import React from "react";
import UseStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from "react-redux";
import moment from "moment"; //for .fromNow() function
import { deletePost, likedPost } from "../../../actions/posts";
//{post.tags.map((tag)=>`#${tag} `)}= lists all the tags and dispalys with a # before it
//&nbsp; is the same as a space character
const Post = ({ post, setCurrentId }) => {
  //we destructured the props:post
  const classes = UseStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <button
          style={{
            color: "white",
            "background-color": "Transparent",
            border: "none",
          }}
          size="small"
          onClick={() => setCurrentId(post._id)} //we are setting setCurrentId to be equal to post._id,its goin to change in the post form and app
        >
          <MoreHorizIcon fontSize="default" />
        </button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(likedPost(post._id));
          }}
        >
          <ThumbUpAltIcon fontSize="small" />
          Like &nbsp;
          {post.likedcount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(deletePost(post._id));
          }}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
export default Post;
