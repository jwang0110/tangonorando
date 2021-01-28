import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	center: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
});

const Loading = () => {
	const classes = useStyles();

	return (
		<Container maxWidth="xs">
			<Typography align="center" gutterBottom>
				Fetching database...
			</Typography>
			<div className={classes.center}>
				<CircularProgress />
			</div>
		</Container>
	);
};

export default Loading;
