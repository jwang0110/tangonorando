import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
});

const Loading = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root} maxWidth="xs">
			<Typography align="center" gutterBottom>
				Fetching database...
			</Typography>
			<CircularProgress />
		</Container>
	);
};

export default Loading;
