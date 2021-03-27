import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FileInput from "../../components/UI/Form/FileInput";
import Button from "@material-ui/core/Button";

const useStyle = makeStyles({
	title: {
		marginBottom: '30px'
	}
});

const AddPost = () => {
	const classes = useStyle();

	return (
		<>
			<Typography
				variant="h3"
				className={classes.title}
			>
				Add New Post
			</Typography>
			<form>
				<Grid container md={6} direction="column" spacing={3}>
					<Grid item spacing={2}>
						<TextField fullWidth label="Title" variant="outlined" />
					</Grid>
					<Grid item spacing={2}>
						<TextField
							multiline
							fullWidth
							label="Content"
							variant="outlined"
							rows={4}
						/>
					</Grid>
					<Grid item spacing={2}>
						<FileInput
							label="Image"
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