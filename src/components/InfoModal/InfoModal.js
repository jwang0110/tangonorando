import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	root: {
		width: 400,
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

const InfoModal = ({ open, onClose, vocab }) => {
	const classes = useStyles();
	let { expression, kana, romaji, meaning } = vocab;

	return (
		<Modal open={open} onClose={onClose}>
			<div className={classes.root}>
				<Typography>
					<strong>Expression:</strong> {expression}
				</Typography>
				<Typography>
					<strong>Kana:</strong> {kana}
				</Typography>
				<Typography>
					<strong>Romaji:</strong> {romaji}
				</Typography>
				<Typography>
					<strong>Meaning:</strong> {meaning}
				</Typography>
			</div>
		</Modal>
	);
};

export default InfoModal;
