import { Card, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import profile from '../../images/profile.svg'

const Review = ({ reviews }) => {
    const { img, name, comment, rating } = reviews;
    return (

        <Card sx={{ maxWidth: 375 }}>
            <CardMedia
                component="img"
                height="80"
                image={img ? img : profile}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ textAlign: 'start' }} variant="body2" color="text.secondary">
                    {comment}
                </Typography>
                <Rating name="read-only" value={rating} readOnly />
            </CardContent>
        </Card>
    );
};

export default Review;