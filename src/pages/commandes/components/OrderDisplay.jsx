import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableVirtuoso } from "react-virtuoso";
import { Package } from "@phosphor-icons/react";

const sample = [
	[
		"example@gmail.com",
		"car",
		"",
		"",
		5000000,
		5000000,
		5000000,
		"overseas",
		"done",
		"",
		"",
		"#12ABC",
	],
	[
		"client@gmail.com",
		"truck",
		"",
		"",
		8800,
		8800,
		8800,
		"overseas",
		"waiting for payment",
		"",
		"",
		"#24AFC",
	],
	[
		"test@gmail.com",
		"machine",
		"",
		"",
		2400,
		2400,
		2400,
		"overseas",
		"waiting for payment",
		"",
		"",
		"#34BD",
	],
];

function createData(
	index,
	Bemail, //buyer email
	Productname,
	chatLink,
	actionLink,
	tAmount, // Total amount
	price, //Unit price
	montant, // Total price
	exportType, //overseas or the other types
	status, //whether it is done or not
	buyerImg, //user picture
	productImg, //product picture
	orderId //orderId
) {
	return {
		index,
		Bemail, //buyer email
		Productname,
		chatLink,
		actionLink,
		tAmount, // Total amount
		price, //Unit price
		montant, // Total price
		exportType, //overseas or the other types
		status, //whether it is done or not
		buyerImg, //user picture
		productImg, //product picture
		orderId, //orderId
	};
}
const rows = Array.from({ length: 10000 }, (_, index) => {
	const randomSelection = sample[Math.floor(Math.random() * sample.length)];
	return createData(index, ...randomSelection);
});
const VirtuosoTableComponents = {
	Scroller: React.forwardRef((props, ref) => (
		<TableContainer component={Paper} {...props} ref={ref} />
	)),
	Table: (props) => (
		<Table
			{...props}
			sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
		/>
	),
	TableHead,
	TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
	TableBody: React.forwardRef((props, ref) => (
		<TableBody {...props} ref={ref} />
	)),
};

const CustomTableCell = ({ children, key, width }) => (
	<TableCell
		key={key}
		variant="head"
		align="left"
		style={{ width: width }}
		sx={{
			backgroundColor: "background.paper",
		}}
	>
		{children}
	</TableCell>
);
export default function OrderDisplay() {
	const [Avatars, setAvatars] = React.useState([]);
	const getImg = () => {
		return fetch("https://randomuser.me/api/?gender=male&results=3", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((responseData) => {
				setAvatars(responseData.results);
			});
	};
	React.useEffect(() => {
		getImg();
	}, []);
	return (
		<>
			<Paper
				style={{ height: "90vh", maxWidth: "100vw", overflow: "auto" }}
			>
				<div style={{ height: "100%", minWidth: 1200 }}>
					<TableVirtuoso
						data={rows}
						components={VirtuosoTableComponents}
						fixedHeaderContent={() => (
							<TableRow>
								<CustomTableCell width={10} key="num">
									#
								</CustomTableCell>
								<CustomTableCell width={100} key="Acheteur">
									Acheteur
								</CustomTableCell>
								<CustomTableCell width={200} key="Produit">
									Produit
								</CustomTableCell>
								<CustomTableCell width={100} key="Montant">
									Montant
								</CustomTableCell>
								<CustomTableCell width={50} key="Exportation">
									Exportation | Livraison
								</CustomTableCell>
								<CustomTableCell width={50} key="Status">
									Status
								</CustomTableCell>
								<CustomTableCell width={50} key="Action">
									Action
								</CustomTableCell>
							</TableRow>
						)}
						itemContent={(_index, row) => (
							<>
								<OrdersRow
									row={row}
									index={_index}
									Avatars={Avatars}
								/>
							</>
						)}
					/>
				</div>
			</Paper>
		</>
	);
}

function OrdersRow({ index, row, Avatars }) {
	const [randomAvatar, setRandomAvatar] = React.useState(0);
	React.useEffect(() => {
		let randomNumber = Math.floor(Math.random() * 3);
		if (Avatars.length > 0) {
			setRandomAvatar(Avatars[randomNumber]?.picture?.large);
		}
	}, []);
	return (
		<>
			{/*represents the whole grid*/}
			<TableCell component="th" scope="row">
				{index + 1}
			</TableCell>
			{/*section 1 buyer's contact */}
			<TableCell>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="center"
					gap={1}
				>
					<Typography component="h6">
						Order ID: {rows[index].orderId}
					</Typography>
					<Avatar
						key={index}
						alt="Avatar"
						src={randomAvatar}
						sx={{ width: 56, height: 56 }}
					/>
					<ButtonBase
						component="a"
						href={`mailto:${rows[index].Bemail}`}
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<img
							src="https://img.icons8.com/color/48/gmail--v1.png"
							style={{ flex: 1 }}
						/>
						<Typography
							variant="caption"
							style={{ flex: 5 }}
							textAlign="center"
						>
							{" "}
							{rows[index].Bemail}{" "}
						</Typography>
					</ButtonBase>
					<a
						href=""
						style={{
							textDecoration: "none",
							display: "inline-block",
						}}
					>
						<Button
							variant="contained"
							sx={{
								flexBasis: "15%",
								wordBreak: "break-all",
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
			</TableCell>

			{/*section 2 product brief details */}
			<TableCell>
				<Stack direction="row" gap={1}>
					<Package size={100} alt="Package" src="" />

					<Stack direction="column">
						<Typography> {rows[index].Productname}</Typography>
						<Typography
							variant="body1"
							sx={{ color: "rgba(248, 75, 14, 1)" }}
						>
							{rows[index].price} ${" "}
						</Typography>
						<Typography variant="caption">
							Total amount: {rows[index].tAmount}
						</Typography>
					</Stack>
				</Stack>
			</TableCell>

			{/*section 3 the total price */}
			<TableCell>
				<Stack direction="column">
					<Typography
						variant="h5"
						sx={{ color: "rgba(248, 75, 14, 1)" }}
					>
						{rows[index].montant} $
					</Typography>
				</Stack>
			</TableCell>

			{/*section 4 the Export type */}
			<TableCell>
				<Typography variant="body1">
					{" "}
					{rows[index].exportType}
				</Typography>
			</TableCell>

			{/*section 5 the status about the shipping/ order*/}
			<TableCell>
				<Stack justifyContent="center" alignItems="center">
					<Typography variant="body1">
						{rows[index].status}
					</Typography>
				</Stack>
			</TableCell>

			{/*section 6 the action button */}
			<TableCell>
				<Stack justifyContent="center" alignItems="center">
					<a
						href={rows[index].actionLink}
						style={{ textDecoration: "none" }}
					>
						<Button
							variant="contained"
							sx={{
								backgroundColor: "rgba(248, 75, 14, 1)",
								color: "white",
							}}
						>
							Action
						</Button>
					</a>
				</Stack>
			</TableCell>
		</>
	);
}
