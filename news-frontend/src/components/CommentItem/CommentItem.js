import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

const useStyle = makeStyles({
	content: {
		display: 'flex',
		alignItems: 'center'
	},
	text: {
		marginRight: '20px',
		marginLeft: '20px',
		flexGrow: '1'
	}
});

const CommentItem = () => {
	const classes = useStyle();
	return (
		<>
			<Card>
				<CardContent className={classes.content}>
					<Typography variant="subtitle1">Author: </Typography>
					<Typography variant="body1" color="textSecondary" component="p" className={classes.text}>
						This impressive paella is a perfect party dish and a fun meal to cook together with your
						guests. Add 1 cup of frozen peas along with the mussels, if you like.
					</Typography>
					<Button variant="text" color="primary">Delete</Button>
				</CardContent>
			</Card>
		</>
	);
};

export default CommentItem;