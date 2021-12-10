import { useRef, useState } from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function NewsSearch() {
	const [search, Setsearch] = useState("");
	const inputValue = useRef("");

	const requestSearch = function (e) {
		console.log(inputValue.current.value);
		if (e.keyCode === 13)
			Setsearch(
				`https://www.space.com/search?searchTerm=${inputValue.current.value}`
			);
	};

	return (
		<Box sx={{ justifyContent: "center" }}>
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<TextField
					label="Search Space.com"
					variant="outlined"
					onKeyDown={(e) => {
						requestSearch(e);
					}}
					inputRef={inputValue}
					margin="dense"
				/>
			</Box>
			{search && (
				<iframe src={search} width="100%" height="600vh" key={search}></iframe>
			)}
		</Box>
	);
}
