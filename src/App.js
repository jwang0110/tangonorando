import { useState, useEffect } from "react";
import "fontsource-roboto";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Title from "./components/Title/Title";
import Flashcard from "./components/Flashcard/Flashcard";
import Loading from "./components/Loading/Loading";
import Copyright from "./components/Copyright/Copyright";
import "./App.css";

const useStyles = makeStyles({
	main: {
		minHeight: "90%",
		marginBottom: "1rem",
	},
});

function App() {
	useEffect(() => {
		fetchData();
	}, []);

	const classes = useStyles();
	const [count, setCount] = useState(0);
	const [database, setDatabase] = useState(null);

	const fetchData = async () => {
		const response = await fetch(
			"https://secret-stream-52891.herokuapp.com/database"
		);
		const data = await response.json();
		setDatabase(data);
	};

	const incrementCount = () => {
		setCount(count + 1 !== database.length ? count + 1 : 0);
	};

	return (
		<>
			<Container className={classes.main} component="main" maxWidth="md">
				<Title />
				{!database ? (
					<Loading />
				) : (
					<Flashcard
						vocab={database[count]}
						incrementCount={incrementCount}
					/>
				)}
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
