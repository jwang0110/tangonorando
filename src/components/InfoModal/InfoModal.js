import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	root: {
		width: 300,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		position: "absolute",
		top: "30%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	},
}));

const convertToString = (str) => {
	return `"${str}"`;
};

const InfoModal = ({ open, onClose, vocab }) => {
	const classes = useStyles();

	const expression = convertToString(vocab["expression"]);
	const kana = vocab["kana"].map((x) => convertToString(x)).join(", ");
	const romaji = vocab["romaji"].map((x) => convertToString(x)).join(", ");
	const meaning = vocab["meaning"].map((x) => convertToString(x)).join(", ");

	return (
		<Modal open={open} onClose={onClose}>
			<div className={classes.root}>
				<Typography gutterBottom>
					<strong>Expression:</strong> {expression}
				</Typography>
				<Typography gutterBottom>
					<strong>Kana:</strong> {kana}
				</Typography>
				<Typography gutterBottom>
					<strong>Romaji:</strong> {romaji}
				</Typography>
				<Typography gutterBottom>
					<strong>Meaning:</strong> {meaning}
				</Typography>
			</div>
		</Modal>
	);
};

export default InfoModal;
