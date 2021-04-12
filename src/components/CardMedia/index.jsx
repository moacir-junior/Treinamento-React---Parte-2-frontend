import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './CardMedia.scss';

function MediaCard(props) {
  const { title, description, videoUrl } = props;

  return (
    <Card className="card">
      <CardMedia component="iframe" title={title} image={videoUrl} allowFullScreen />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MediaCard;