import { useState, useEffect } from "react";
import "fontsource-roboto";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Title from "./components/Title/Title";
import Flashcard from "./components/Flashcard/Flashcard";
import Copyright from "./components/Copyright/Copyright";
import "./App.css";

const useStyles = makeStyles({
	main: {
		minHeight: "90%",
		marginBottom: -10,
	},
	footer: {
		height: 10,
	},
});

function App() {
	useEffect(() => {
		fetchData();
	}, []);

	const classes = useStyles();
	const [count, setCount] = useState(0);
	const [database, setDatabase] = useState([""]);

	const fetchData = async () => {
		const response = await fetch("http://localhost:3001/phrases");
		const data = await response.json();
		setDatabase(data);
	};

	return (
		<>
			<Container className={classes.main} component="main" maxWidth="md">
				<Title />
				<Flashcard
					vocab={database[count]}
					count={count}
					setCount={setCount}
				/>
			</Container>
			<Container
				className={classes.footer}
				component="footer"
				maxWidth="xs"
			>
				<Copyright />
			</Container>
		</>
	);
}

export default App;
