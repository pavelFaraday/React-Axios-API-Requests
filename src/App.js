import "./App.css";
import { Create } from "./components/create/Create";

function App() {
	return (
		<div className="main">
			<div>
				<h1>React CRUD Operations</h1>
			</div>
			<div>
				<Create />
			</div>
		</div>
	);
}

export default App;
