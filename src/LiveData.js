import { Box, Paper, Fade } from "@mui/material";
import NewTabs from "./NewTabs";

export default function LiveDataComp() {
	return (
		<Box m={2}>
			<Fade in={true} timeout={700}>
				<Paper>
					<NewTabs />
				</Paper>
			</Fade>
		</Box>
	);
}
