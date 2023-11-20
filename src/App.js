import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Bonus from "./pages/bonus";
import Notfound from "./pages/404";
import Redirect from "./pages/iframe";
import Privacy from "./pages/privacy";

import Test1 from "./pages/test1";
import Test2 from "./pages/test2";
import Test3 from "./pages/test3";
import Test4 from "./pages/test4";
import Test5 from "./pages/test5";
import Test6 from "./pages/test6";
import Test7 from "./pages/test7";
import Test8 from "./pages/test8";
import Test9 from "./pages/test9";
import Test10 from "./pages/test10";

import Notfoundsoft from "./pages/notfoundsoft";


import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/article/:slug" element={<ReadArticle />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/bonus" element={<Bonus />} />
				<Route path="/iframe" element={<Redirect />} />
				<Route path="/privacy" element={<Privacy />} />

				<Route path="/test1" element={<Test1 />} />
				<Route path="/test2" element={<Test2 />} />
				<Route path="/test3" element={<Test3 />} />
				<Route path="/test4" element={<Test4 />} />
				<Route path="/test5" element={<Test5 />} />
				<Route path="/test6" element={<Test6 />} />
				<Route path="/test7" element={<Test7 />} />
				<Route path="/test8" element={<Test8 />} />
				<Route path="/test9" element={<Test9 />} />
				<Route path="/test10" element={<Test10 />} />

				<Route path="/notfoundsoft" element={<Notfoundsoft />} />


				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
