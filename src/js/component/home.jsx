import React from "react";
import ReactDOM  from "react-dom";
import Proptypes from "prop-types";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			{/* {navbar} */}
			<div className="container-fluid">
				{/* {Jumbotron} */}
				{/* {Cardbox} */}
			</div>	
				<Footer />		
		</div>
	);
};

export default Home;
