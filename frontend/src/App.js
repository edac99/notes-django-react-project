import {
	BrowserRouter as Router,
	Route, Routes
} from "react-router-dom"

import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'

function App() {
	return (
		<Router>
			<div className="App">
				<Header/>
				
				<Routes>
					<Route path="/" element={<NotesListPage/>}></Route>
					<Route path="note/:id" element={<NotePage/>}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
