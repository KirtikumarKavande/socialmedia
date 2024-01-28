import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function PostCard(props) {
  const { image, description, firstName, likes } = props;
  const [isLiked, setIsLiked] = React.useState(false);
  const increaseLikeCount = () => {
    setIsLiked(!isLiked);
  };
  const decreaseLikeCount = () => {
    setIsLiked(!isLiked);
  };
  return (
    <Card sx={{ maxWidth: 500, marginBottom: "10px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {firstName?.substring(0, 1)}
          </Avatar>
        }
        title={firstName}
        subheader="September 14, 2016"
      />
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {!isLiked ? (
            <FavoriteBorderIcon onClick={increaseLikeCount} />
          ) : (
            <FavoriteIcon onClick={decreaseLikeCount} sx={{ color: red[500] }} />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
}
