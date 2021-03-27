import React from 'react';
import {NavLink} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PostItem from "../../components/PostItem/PostItem";

const Home = () => {
	return (
		<>
			<Grid container justify="space-between" alignItems="center" spacing={3}>
				<Grid item>
					<Typography variant="h3" gutterBottom>
						Posts
					</Typography>
				</Grid>
				<Grid item>
					<Button
						variant="contained" color="primary"
						component={NavLink} to="/add-post"
					>
						Add new post
					</Button>
				</Grid>
			</Grid>
			<Grid container>
				<PostItem
					title="Lorem"
					date="1234"
					id="item"
				/>
			</Grid>
		</>
	);
};

export default Home;