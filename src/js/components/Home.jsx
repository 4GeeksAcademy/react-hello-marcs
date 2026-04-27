import React, { useState } from "react";

// componente principal
const Home = () => {

	const [light, setLight] = useState("red");

	return (
		<div className="text-center mt-5">

			<div
				style={{
					background: "black",
					width: "120px",
					padding: "20px",
					margin: "auto",
					borderRadius: "15px"
				}}
			>

				<div
					onClick={() => setLight("red")}
					style={{
						background: "red",
						width: "70px",
						height: "70px",
						borderRadius: "50%",
						margin: "15px auto",
						boxShadow:
							light === "red"
								? "0px 0px 25px red"
								: "none"
					}}
				></div>

				<div
					onClick={() => setLight("yellow")}
					style={{
						background: "yellow",
						width: "70px",
						height: "70px",
						borderRadius: "50%",
						margin: "15px auto",
						boxShadow:
							light === "yellow"
								? "0px 0px 25px yellow"
								: "none"
					}}
				></div>

				<div
					onClick={() => setLight("green")}
					style={{
						background: "green",
						width: "70px",
						height: "70px",
						borderRadius: "50%",
						margin: "15px auto",
						boxShadow:
							light === "green"
								? "0px 0px 25px green"
								: "none"
					}}
				></div>

			</div>

		</div>
	);
};

export default Home;