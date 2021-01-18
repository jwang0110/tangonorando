import Container from "@material-ui/core/Container";
import "fontsource-roboto";
import Flashcard from "./components/Flashcard/Flashcard";
import "./App.css";

function App() {
	return (
		<Container component="main" maxWidth="xs">
			<Flashcard />
		</Container>
	);
}

export default App;
