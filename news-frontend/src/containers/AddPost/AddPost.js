import React, {useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FileInput from "../../components/UI/Form/FileInput";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {postPost} from "../../store/actions/newsActions";

const useStyle = makeStyles({
	title: {
		marginBottom: '30px'
	}
});

const AddPost = () => {
	const dispatch = useDispatch();
	// const loading = useSelector(state => state.news.loading);
	const [post, setPost] = useState({
		title: '',
		description: '',
		image: ''
	});
	const classes = useStyle();

	const changeHandler = (e) => {
		const {name, value} = e.target;

		setPost(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	const fileChangeHandler = e => {
		const name = e.target.name;
		const file = e.target.files[0];

		setPost(prevState => ({
			...prevState,
			[name]: file
		}))
	};

	const sendPost = (e) => {
		e.preventDefault();

		dispatch(postPost(post));
	};

	return (
		<>
			<Typography
				variant="h3"
				className={classes.title}
			>
				Add New Post
			</Typography>
			<form onSubmit={sendPost}>
				<Grid container md={6} direction="column" spacing={3}>
					<Grid item spacing={2}>
						<TextField
							fullWidth label="Title"
							variant="outlined"
							value={post.title}
							name="title"
							onChange={changeHandler}
						/>
					</Grid>
					<Grid item spacing={2}>
						<TextField
							multiline
							fullWidth
							label="Content"
							variant="outlined"
							rows={4}
							value={post.description}
							name="description"
							onChange={changeHandler}
						/>
					</Grid>
					<Grid item spacing={2}>
						<FileInput
							label="Image"
							onChange={fileChangeHandler}
							name="image"
						/>
					</Grid>
					<Grid item spacing={2}>
						<Button
							type="submit"
							variant="contained"
							color="primary"
						>Saved</Button>
					</Grid>
				</Grid>
			</form>
		</>
	);
};

export default AddPost;