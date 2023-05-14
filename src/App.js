import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Reviews from './components/Reviews';
import ContactMe from './components/ContactMe';
import MenuBar from './components/MenuBar';

function App() {
	return (
		<Router>
			<div>
				<MenuBar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutMe />} />
					<Route path="/reviews" element={<Reviews />} />
					<Route path="/contact" element={<ContactMe />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
