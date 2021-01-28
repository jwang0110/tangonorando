import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		padding: "0.5rem",
	},
});

const FlashCard = ({ vocab, count, setCount }) => {
	if (!vocab) {
		return null;
	}

	const classes = useStyles();
	const [answer, setAnswer] = useState("");
	const [error, setError] = useState(false);

	const checkAnswer = () => {
		return answer === vocab["romaji"][0];
	};

	const submitAnswer = () => {
		if (checkAnswer()) {
			setCount(count + 1);
			setAnswer("");
		} else {
			setError(true);
		}
	};

	const onInputChange = (event) => {
		setAnswer(event.target.value);
		setError(false);
	};

	const onEnterKey = (event) => {
		const code = event.keyCode ? event.keyCode : event.which;
		if (code === 13) {
			submitAnswer();
		}
	};

	const onSubmitButton = () => {
		submitAnswer();
	};

	return (
		<Container component="main" maxWidth="xs">
			<Card className={classes.root}>
				<CardContent>
					<Typography
						variant="h1"
						component="h2"
						align="center"
						gutterBottom
					>
						{vocab["expression"]}
					</Typography>
				</CardContent>
				<CardActions>
					<TextField
						id="answer"
						label="Answer"
						value={answer}
						error={error}
						fullWidth
						onChange={onInputChange}
						onKeyPress={onEnterKey}
					/>
					<Button size="small" onClick={onSubmitButton}>
						Submit
					</Button>
				</CardActions>
			</Card>
		</Container>
	);
};

export default FlashCard;
