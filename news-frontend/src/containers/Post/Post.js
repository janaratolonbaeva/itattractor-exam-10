import React from 'react';
import Typography from "@material-ui/core/Typography";
import CommentItem from "../../components/CommentItem/CommentItem";
import AddComment from "../../components/AddComment/AddComment";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyle = makeStyles({
	title: {
		marginBottom: '20px'
	},
	section: {
		marginBottom: '30px'
	}
});

const Post = () => {
	const classes = useStyle();

	return (
		<>
			<div className={classes.section}>
				<Typography variant="h4" className={classes.title}>Title</Typography>
				<Typography>Date</Typography>
				<Typography>Lorem	Ipsum</Typography>
			</div>
			<div className={classes.section}>
				<Typography variant="h4" className={classes.title}>Comments</Typography>
				<CommentItem/>
			</div>
			<div className={classes.section}>
				<Typography variant="h4" className={classes.title}>Add Comment</Typography>
				<AddComment/>
			</div>
		</>
	);
};

export default Post;