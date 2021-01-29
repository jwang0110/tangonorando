import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
	formControl: {
		marginTop: theme.spacing(2),
		minWidth: 80,
	},
}));

const SelectMenu = ({ answerType, setAnswerType }) => {
	const classes = useStyles();

	const handleChange = (event) => {
		setAnswerType(event.target.value);
	};

	return (
		<FormControl className={classes.formControl}>
			<Select id="select-menu" value={answerType} onChange={handleChange}>
				<MenuItem value={"romaji"}>Romaji</MenuItem>
				<MenuItem value={"kana"}>Kana</MenuItem>
			</Select>
		</FormControl>
	);
};

export default SelectMenu;
