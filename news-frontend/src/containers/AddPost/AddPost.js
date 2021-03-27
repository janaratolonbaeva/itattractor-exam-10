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
		}));
	};

	const submitFormHandler = e => {
		e.preventDefault();

		const formData = new FormData();

		Object.keys(post).forEach(key => {
			formData.append(key, post[key]);
		});

		dispatch(postPost(formData));
	};

	return (
		<>
			<Typography
				variant="h3"
				className={classes.title}
			>
				Add New Post
			</Typography>
			<form onSubmit={submitFormHandler}>
				<Grid container direction="column" spacing={3}>
					<Grid item md={6}>
						<TextField
							fullWidth label="Title"
							variant="outlined"
							value={post.title}
							name="title"
							onChange={changeHandler}
						/>
					</Grid>
					<Grid item md={6}>
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
					<Grid item md={6}>
						<FileInput
							label="Image"
							onChange={fileChangeHandler}
							name="image"
						/>
					</Grid>
					<Grid item md={6}>
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