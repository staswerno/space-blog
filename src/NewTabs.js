import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NewsSearch from "./NewsSearch";
import Live3 from "./Live3";
import APOD from "./APOD";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function NewTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="tabs"
					variant="fullWidth"
				>
					<Tab label="APOD" {...a11yProps(0)} />
					<Tab label="ISS Live" {...a11yProps(1)} />
					<Tab label="Search" {...a11yProps(2)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<APOD />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Live3 />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<NewsSearch />
			</TabPanel>
		</Box>
	);
}
