import React from "react";
import styles from "../styles/ChildDetailsTable.module.css";

export default function ChildDetailsTable({ data = [], onRemoveRow, showActions = true }) {
	return (
		<div className={styles.tableCard}>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Name</th>
						<th>D.O.B</th>
						<th>Age(Y/M)</th>
						<th>Name Of Day Care Centre</th>
						<th>Admission Type</th>
						<th>Day Care Fees</th>
						<th>No of Invoice</th>
						<th>Invoice Date of Bill 1</th>
						<th>Mode of Payment</th>
						<th>Hard Copy</th>
						<th>Team Duration</th>
						<th>Bill Type</th>
						{showActions && <th>Action</th>}
					</tr>
				</thead>
				<tbody>
					{data.map((row) => (
						<tr key={row.id}>
							<td>{row.name}</td>
							<td>{row.dob}</td>
							<td>{row.age}</td>
							<td>{row.dayCareCentre}</td>
							<td>{row.admissionType}</td>
							<td>{row.dayCareFees}</td>
							<td>{row.numInvoices}</td>
							<td>{row.invoiceDate}</td>
							<td>{row.modeOfPayment}</td>
							<td>{row.hardCopy}</td>
							<td>{row.termDuration}</td>
							<td>{row.billType}</td>
							{showActions && (
								<td>
									<div className={styles.actionIcons}>
										<img 
											src={new URL("../assets/svg/edit_pen.svg", import.meta.url).href}
											alt="Edit"
											className={styles.actionIcon}
										/>
										<img 
											src={new URL("../assets/svg/delete.svg", import.meta.url).href}
											alt="Delete"
											className={`${styles.actionIcon} ${styles.deleteIcon}`}
											onClick={() => onRemoveRow && onRemoveRow(row.id)}
										/>
									</div>
								</td>
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}


