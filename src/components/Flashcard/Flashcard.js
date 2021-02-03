import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Question from "../Question/Question";
import SelectMenu from "../SelectMenu/SelectMenu";
import InfoModal from "../InfoModal/InfoModal";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 250,
		padding: theme.spacing(1),
		marginBottom: theme.spacing(2),
	},
	cardContent: {
		display: "flex",
		flexDirection: "column",
	},
	submit: {
		marginTop: theme.spacing(2),
	},
}));

const FlashCard = ({ vocab, incrementCount }) => {
	const classes = useStyles();
	const [show, setShow] = useState(false);
	const [questionType, setQuestionType] = useState("expression");
	const [answerType, setAnswerType] = useState("romaji");
	const [answer, setAnswer] = useState("");
	const [error, setError] = useState(false);

	const handleShowInfo = () => {
		setShow(true);
	};

	const handleHideInfo = () => {
		setShow(false);
	};

	const checkAnswer = () => {
		return vocab[answerType].includes(answer);
	};

	const submitAnswer = () => {
		if (checkAnswer()) {
			setError(false);
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
					<Question
						vocab={vocab}
						questionType={questionType}
						setQuestionType={setQuestionType}
					/>
					<Button
						variant="text"
						size="small"
						onClick={handleShowInfo}
					>
						Show More
					</Button>
					<InfoModal
						open={show}
						onClose={handleHideInfo}
						vocab={vocab}
					/>
				</CardContent>
				<CardActions>
					<SelectMenu
						answerType={answerType}
						setAnswerType={setAnswerType}
					/>
					<TextField
						id="answer"
						label="Answer"
						value={answer}
						error={error}
						fullWidth
						onChange={onInputChange}
						onKeyPress={onEnterKey}
					/>
					<Button
						className={classes.submit}
						size="small"
						onClick={onSubmitButton}
					>
						Submit
					</Button>
				</CardActions>
			</Card>
		</Container>
	);
};

export default FlashCard;
