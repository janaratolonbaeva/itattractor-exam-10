import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CardActions from "@material-ui/core/CardActions";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import imageNotAvailable from '../../assets/images/imageNotAvailable.png';
import {apiUrl} from "../../config";
import Button from "@material-ui/core/Button";

const useStyle = makeStyles({
	card: {
		display: 'flex',
		alignItems: 'center',
		padding: '10px',
	},
	content: {
		flexGrow: '1'
	},
	contentBottom: {
		display: 'flex',
		alignItems: 'center'
	},
	media: {
		marginRight: '10px',
		width: '200px',
		height: '200px'
	},
	svg: {
		verticalAlign: 'middle'
	}
});

const PostItem = ({title, date, image, id}) => {
	const classes = useStyle();

	let cardImage = imageNotAvailable;

	if (image) {
		cardImage = apiUrl + '/' + image;
	}

	return (
		<Grid item xs>
			<Card className={classes.card}>
				<CardMedia
					image={cardImage}
					title={title}
					className={classes.media}
				/>
				<div className={classes.content}>
					<CardHeader title={title}/>
					<div className={classes.contentBottom}>
						<CardContent>
							<strong style={{marginLeft: '10px'}}>
								{date}
							</strong>
						</CardContent>
						<CardActions>
							<NavLink to='/news'>
								<span>Read Full Post</span>
								<NavigateNextIcon className={classes.svg}/>
							</NavLink>
						</CardActions>
					</div>
				</div>
				<div>
					<Button variant="contained" color="secondary">Delete</Button>
				</div>
			</Card>
		</Grid>
	);
};

export default PostItem;