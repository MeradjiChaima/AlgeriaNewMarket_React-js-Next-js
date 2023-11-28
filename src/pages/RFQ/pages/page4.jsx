/************************ Benabadji Abdelkader Tarik ************************
 *
 *
 * Ratings page
 *
 *
 ****************************************************************************/
import {
	Box,
	Button,
	ButtonBase,
	Fab,
	Paper,
	Rating,
	Stack,
	Tab,
	Tabs,
	Typography,
	useTheme,
} from "@mui/material";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import CheckIcon from "@mui/icons-material/Check";
import React, { useState, useEffect } from "react";
import { Virtuoso } from "react-virtuoso";

/* Generate example data */
const sample = [
	["example@gmail.com", ""],
	["example@gmail.com", ""],
	["example@gmail.com", ""],
];

const Approved = Array.from({ length: 2589 }, (_, index) => {
	const randomSelection = sample[Math.floor(Math.random() * sample.length)];
	let randomRating1 = Math.floor(Math.random() * 10);
	let randomRating2 = Math.floor(Math.random() * 10);
	let randomRating3 = Math.floor(Math.random() * 10);
	return createData(
		index,
		randomRating1,
		randomRating2,
		randomRating3,
		...randomSelection
	);
});

const NotApproved = Array.from({ length: 1267 }, (_, index) => {
	const randomSelection = sample[Math.floor(Math.random() * sample.length)];
	let randomRating1 = Math.floor(Math.random() * 10);
	let randomRating2 = Math.floor(Math.random() * 10);
	let randomRating3 = Math.floor(Math.random() * 10);
	return createData(
		index,
		randomRating1,
		randomRating2,
		randomRating3,
		...randomSelection
	);
});

function createData(index, R1, R2, R3, mail, ChatLink) {
	return { index, R1, R2, R3, mail, ChatLink };
}
/* Generate example data */

/* main component */
const Page4 = () => {
	const [activeButton, setActiveButton] = React.useState("toutes");

	const buttons = ["Achteur", "Vendeur"];

	const handleClick = (button) => {
		setActiveButton(button);
	};
	return (
		<Stack className="w-full" sx={{ height: 1000 }}>
			<Stack flex={2}>
				<div
					style={{
						display: "flex",
					}}
				>
					{buttons.map((button) => (
						<button
							key={button}
							onClick={() => handleClick(button)}
							style={{
								backgroundColor:
									activeButton === button
										? "#F84B0E"
										: "white",
								color:
									activeButton === button
										? "white"
										: "#F84B0E",
								border: "1px solid white",
								borderRadius: "15px", // Rounded corners
								padding: "7px 35px", // Default padding for normal screens
								margin: "5px",
								cursor: "pointer",
								boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)", // Box shadow
								fontSize: "16px", // Default font size for normal screens
							}}
						>
							{button}
						</button>
					))}
				</div>
				<Stack justifyContent="center" sx={{ pl: 2, my: "auto" }}>
					<Typography variant="h4">Mes avis</Typography>
				</Stack>
			</Stack>
			<Box
				flex={10}
				component={Paper}
				sx={{ px: 2, pt: 2 }}
				variant="outlined"
			>
				<Stack sx={{ height: "100%" }}>
					<OverallReviews Overall={Approved} />
					<AllReviews />
				</Stack>
			</Box>
		</Stack>
	);
};
/* main component */

/* header section */
function OverallReviews({ Overall }) {
	const theme = useTheme();
	const [Average, setAverage] = useState(0);
	const [Average1, setAverage1] = useState(0);
	const [Average2, setAverage2] = useState(0);
	const [Average3, setAverage3] = useState(0);
	/* calculate rating averages */
	useEffect(() => {
		let total = Approved.length + NotApproved.length;
		let total1 = 0;
		let total2 = 0;
		let total3 = 0;
		Approved.forEach((obj) => {
			total1 += obj.R1;
			total2 += obj.R2;
			total3 += obj.R3;
		});
		NotApproved.forEach((obj) => {
			total1 += obj.R1;
			total2 += obj.R2;
			total3 += obj.R3;
		});
		setAverage1(Math.round(total1 / total));
		setAverage2(Math.round(total2 / total));
		setAverage3(Math.round(total3 / total));
		setAverage(
			Math.round((total1 / total + total2 / total + total3 / total) / 3)
		);
	}, [Approved, NotApproved]);
	/* calculate rating averages */
	return (
		<Box flex={4}>
			<Paper sx={{ height: "100%", p: 2, backgroundColor: "#D87B0F08" }}>
				<Stack
					gap={2}
					alignItems="center"
					sx={{
						[theme.breakpoints.up("sm")]: {
							flexDirection: "row",
						},
					}}
				>
					<Typography variant="h5">Note globale</Typography>
					<Stack
						direction="row"
						gap={1}
						flex={1}
						justifyContent="flex-start"
						alignItems="center"
					>
						<Stack
							justifyContent="center"
							sx={{
								backgroundColor: "#FAB25E4D",
								borderRadius: "15px",
								p: 1,
							}}
						>
							<Typography variant="h6" color="#FA865E">
								<b>{Average / 2} / 5</b>
							</Typography>
						</Stack>
						<Stack>
							<Box flex={11}>
								<Typography variant="h6" color="#FA865E">
									<b>{labels[Math.round(Average / 2)]}</b>
								</Typography>
							</Box>
							<Box flex={1}>
								<Typography variant="caption" textAlign="right">
									{Approved.length + NotApproved.length} Avis
								</Typography>
							</Box>
						</Stack>
					</Stack>
				</Stack>
				<Stack justifyContent="center">
					<ReviewItem
						Rating1={Average1}
						Rating2={Average2}
						Rating3={Average3}
						Overall
					/>
				</Stack>
			</Paper>
		</Box>
	);
}
/* header section */

/* accessibility props */
function a11yProps(index) {
	return {
		id: `tab-${index}`,
		"aria-controls": `tabpanel-${index}`,
	};
}
/* accessibility props */

/* Main list component */
function AllReviews() {
	const [TabNum, setTabNum] = React.useState(0);

	const handleChange = (event, newValue) => {
		/* Tabs management */
		setTabNum(newValue);
	};
	return (
		<Box flex={8}>
			<Stack sx={{ height: "100%" }}>
				<Box flex={1}>
					<Tabs
						value={TabNum}
						onChange={handleChange}
						variant="scrollable"
						scrollButtons
						allowScrollButtonsMobile
					>
						<Tab
							label={"En attente (" + NotApproved.length + ")"}
							{...a11yProps(0)}
						/>
						<Tab
							label={"Approuvé (" + Approved.length + ")"}
							{...a11yProps(1)}
						/>
					</Tabs>
				</Box>
				<Box flex={11}>
					{TabNum ? (
						<Box sx={{ height: "100%" }}>
							<Virtuoso
								style={{ height: "100%" }}
								data={Approved}
								totalCount={Approved.length}
								itemContent={(index, Review) => (
									<ReviewItem
										Rating1={Review.R1}
										Rating2={Review.R2}
										Rating3={Review.R3}
										Email={Review.mail}
									/>
								)}
							/>
						</Box>
					) : (
						<Box sx={{ height: "100%" }}>
							<Virtuoso
								style={{ height: "100%" }}
								data={NotApproved}
								totalCount={NotApproved.length}
								itemContent={(index, Review) => (
									<ReviewItem
										Rating1={Review.R1}
										Rating2={Review.R2}
										Rating3={Review.R3}
										Email={Review.mail}
									/>
								)}
							/>
						</Box>
					)}
				</Box>
			</Stack>
		</Box>
	);
}
/* Main list component */

/* Label text */
const labels = {
	0.5: "Trés mauvais",
	1: "Mauvais",
	1.5: "Trés faible",
	2: "Faible",
	2.5: "Pas satisfait",
	3: "Moyen",
	3.5: "Bien",
	4: "Satisfait",
	4.5: "Trés Satisfait",
	5: "Trés Satisfait",
};

function getLabelText(value) {
	return `${value} étoile${value > 1 ? "s" : ""}, ${
		labels[Math.round(value)]
	}`;
}
/* Label text */

/* Rating stars along with label and title */
function CustomRating({ Score, Overall, Label }) {
	const theme = useTheme();
	return (
		<Stack
			sx={{
				[theme.breakpoints.up("md")]: {
					alignItems: "center",
					gap: 2,
					width: 500,
					flexDirection: "row",
				},
			}}
		>
			<Stack
				sx={{
					order: 2,
					flexDirection: "column",
					[theme.breakpoints.up("sm")]: {
						flexDirection: Overall && "row",
						gap: Overall && 2,
					},
				}}
				alignItems="center"
				justifyContent="center"
				flex={9}
			>
				<Typography
					flex={5}
					sx={{ order: 2, lineHeight: "30px", color: "#FA865E" }}
				>
					{getLabelText(Score / 2)}
				</Typography>
				<Rating
					flex={8}
					sx={{ order: 1 }}
					value={Score / 2}
					precision={0.5}
					getLabelText={getLabelText}
					readOnly
				/>
			</Stack>
			<Typography
				sx={{ lineHeight: "30px", order: 1 }}
				flex={4}
				textAlign="center"
			>
				{Label}
			</Typography>
		</Stack>
	);
}
/* Rating stars along with label and title */

/* Review list item */
function ReviewItem({ Rating1, Rating2, Rating3, Email, ChatLink, Overall }) {
	const theme = useTheme();
	return (
		<Stack
			sx={{
				py: 2,
				[theme.breakpoints.up("sm")]: {
					flexDirection: "row",
				},
			}}
			gap={2}
			justifyContent="center"
			alignItems="center"
		>
			{Overall || (
				<Stack flex={3} gap={2} alignItems="center">
					<ButtonBase component="a" href={`mailto:${Email}`}>
						<Typography
							variant="caption"
							style={{ flex: 5 }}
							textAlign="center"
						>
							{Email}
						</Typography>
					</ButtonBase>
					<a
						href={ChatLink}
						style={{
							textDecoration: "none",
						}}
					>
						<Button
							variant="contained"
							sx={{
								backgroundColor: "white",
								color: "blue",
								boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
								"&:hover": {
									//limiting the hover color changing
									backgroundColor: "white",
									color: "blue",
								},
							}}
							startIcon={<MapsUgcOutlinedIcon color="primary" />}
						>
							Chat now
						</Button>
					</a>
				</Stack>
			)}
			<Stack
				direction="column"
				flex={Overall || 7}
				sx={{
					[theme.breakpoints.up("sm")]: {
						alignItems: "center",
					},
				}}
			>
				<CustomRating
					Score={Rating1}
					Overall={Overall}
					Label="Services des ventes"
				/>
				<CustomRating
					Score={Rating2}
					Overall={Overall}
					Label="Livraison à temps"
				/>
				<CustomRating
					Score={Rating3}
					Overall={Overall}
					Label="Qualité de produits"
				/>
			</Stack>
			{Overall || (
				<Stack flex={2} sx={{ width: "100%" }} alignItems="center">
					<Fab
						color="success"
						variant="extended"
						sx={{
							[theme.breakpoints.down("sm")]: {
								width: "90%",
							},
						}}
					>
						<span style={{ marginTop: "4px" }}>Approver</span>
						<CheckIcon size={32} sx={{ ml: 1 }} />{" "}
					</Fab>
				</Stack>
			)}
		</Stack>
	);
}
/* Review list item */

export default Page4;
