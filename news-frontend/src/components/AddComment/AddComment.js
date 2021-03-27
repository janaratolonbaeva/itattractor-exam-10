import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const AddComment = () => {
	return (
		<form>
			<Grid container direction="column" spacing={3}>
				<Grid item md={6}>
					<TextField fullWidth label="Name" variant="outlined" />
				</Grid>
				<Grid item md={6}>
					<TextField
						multiline
						fullWidth
						label="Comment"
						variant="outlined"
						rows={4}
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
	);
};

export default AddComment;