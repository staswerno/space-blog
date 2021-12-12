import { Typography, Link, Fade } from "@mui/material";
import { useState, useEffect } from "react";

export default function APOD() {
	const [pic, setPic] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}`;

	useEffect(() => {
		fetch(nasaUrl)
			.then((response) => response.json())
			.then((json) => {
				setIsLoading(false);
				setPic(json);
			})
			.catch(() => setIsError(true));
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
			{isLoading ? (
				<Fade in={true} timeout={700}>
					<Typography textAlign="center" variant="body2">
						loading...
					</Typography>
				</Fade>
			) : isError ? (
				<Fade in={true} timeout={700}>
					<Typography textAlign="center" variant="body2">
						nasa's api is not responding. please refresh or try again later
					</Typography>
				</Fade>
			) : (
				<Fade in={true} timeout={700}>
					<Link href="https://apod.nasa.gov/apod/astropix.html" target="_blank">
						<img
							width="100%"
							src={pic.url}
							alt="astronomy picture of the day"
						/>
					</Link>
				</Fade>
			)}
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
