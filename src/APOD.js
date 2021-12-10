import { Typography, Link } from "@mui/material";
import { useState, useEffect } from "react";

export default function APOD() {
	const [pic, setPic] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		fetch(
			"https://api.nasa.gov/planetary/apod?api_key=7DEpjfAdNvLrVQayzTp0VKRpzXAgGVBMismCL6r2"
		)
			.then((response) => response.json())
			.then((json) => {
				setIsLoading(false);
				setPic(json);
			})
			.catch(() => console.log("request failed"));
	}, []);

	console.log(pic.hdurl);

	return (
		<>
			<Typography
				mb={2}
				textAlign="center"
				gutterBottom="true"
				variant="subtitle1"
			>
				Astronomy Picture of the Day
			</Typography>

			<Link href="https://apod.nasa.gov/apod/astropix.html" target="_blank">
				<img width="100%" src={pic.hdurl} alt="astronomy picture of the day" />
			</Link>
			<Typography textAlign="center" mt={2}>
				<Link
					href="https://apod.nasa.gov/apod/astropix.html"
					target="_blank"
					variant="body2"
				>
					More Info
				</Link>
			</Typography>
		</>
	);
}
