import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	expression: {
		fontSize: "3rem",
	},
	meaning: {
		fontSize: "2rem",
	},
}));

const Question = ({ vocab, questionType, setQuestionType }) => {
	const classes = useStyles();

	const handleQuestionToggle = () => {
		if (questionType === "expression") {
			setQuestionType("meaning");
		} else {
			setQuestionType("expression");
		}
	};

	return (
		<div onClick={handleQuestionToggle}>
			{questionType === "expression" ? (
				<Typography
					className={classes.expression}
					variant="h2"
					align="center"
				>
					{vocab[questionType]}
				</Typography>
			) : (
				<Typography
					className={classes.meaning}
					variant="h2"
					align="center"
				>
					{vocab[questionType].join(", ")}
				</Typography>
			)}
		</div>
	);
};

export default Question;
