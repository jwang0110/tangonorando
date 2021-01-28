import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InfoModal from "../InfoModal/InfoModal";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		padding: "0.5rem",
	},
	cardContent: {
		display: "flex",
		flexDirection: "column",
	},
});

const FlashCard = ({ vocab, incrementCount }) => {
	const classes = useStyles();
	const [show, setShow] = useState(false);
	const [answer, setAnswer] = useState("");
	const [error, setError] = useState(false);

	const handleShow = () => {
		setShow(true);
	};

	const handleHide = () => {
		console.log("hiding");
		setShow(false);
	};

	const checkAnswer = () => {
		return answer === vocab["romaji"][0];
	};

	const submitAnswer = () => {
		if (checkAnswer()) {
			incrementCount();
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
		<Container maxWidth="xs">
			<Card className={classes.root}>
				<CardContent className={classes.cardContent}>
					<Typography variant="h1" component="h2" align="center">
						{vocab["expression"]}
					</Typography>
					<Button variant="text" size="small" onClick={handleShow}>
						Show More
					</Button>
					<InfoModal open={show} onClose={handleHide} vocab={vocab} />
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
