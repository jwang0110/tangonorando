import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	title: {
		[theme.breakpoints.down("sm")]: {
			fontSize: "2rem",
		},
	},
	subtitle: {
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.8rem",
		},
	},
}));

const Title = () => {
	const classes = useStyles();

	return (
		<>
			<Typography
				className={classes.subtitle}
				variant="subtitle1"
				color="textPrimary"
				align="right"
			>
				単語のランド
			</Typography>
			<Typography
				className={classes.title}
				variant="h1"
				color="textPrimary"
				align="center"
				gutterBottom
			>
				Tango No Rando
			</Typography>
		</>
	);
};

export default Title;
