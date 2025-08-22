import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/UploadSmall.module.css";

export default function UploadSmall({ onUploadedChange }) {
	const [uploadedFile, setUploadedFile] = useState(null);
	const fileInputRef = useRef(null);

	const handleFileUpload = (event) => {
		const file = event.target.files[0];
		if (file && file.type === "application/pdf") {
			setUploadedFile(file);
			if (typeof onUploadedChange === 'function') onUploadedChange(true);
		} else {
			alert("Please select a PDF file");
			if (typeof onUploadedChange === 'function') onUploadedChange(false);
		}
	};

	const handleUploadClick = () => {
		fileInputRef.current.click();
	};

	const formatFileSize = (bytes) => {
		return (bytes / (1024 * 1024)).toFixed(2);
	};

	const formatTimestamp = (date) => {
		const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		const month = months[date.getMonth()];
		const day = date.getDate();
		const hours = date.getHours().toString().padStart(2, '0');
		const minutes = date.getMinutes().toString().padStart(2, '0');
		return `${day} ${month} ${hours}:${minutes}`;
	};

	return (
		<div className={styles.smallUpload}>
			<input
				ref={fileInputRef}
				type="file"
				accept=".pdf"
				onChange={handleFileUpload}
				style={{ display: 'none' }}
			/>
			<div className={styles.leftText}>
				{uploadedFile ? (
					<img src={new URL("../assets/svg/pdf_icon.svg", import.meta.url).href} width={47} height={48} alt="pdf" />
				) : (
					<img src={new URL("../assets/svg/upload-circle.svg", import.meta.url).href} width={47} height={48} alt="cloud" />
				)}
				<div className={styles.texts}>
					<div className={styles.title}>
						{uploadedFile ? uploadedFile.name : "Choose File"}
					</div>
					<div className={styles.hint}>
						{uploadedFile ? (
							<>
								<span>PDF format</span>
								<span className={styles.dot} />
								<span>{formatTimestamp(new Date())} · {formatFileSize(uploadedFile.size)} MB</span>
							</>
						) : (
							<>
								<span>PDF format</span>
								<span className={styles.dot} />
								<span>Max. 4MB</span>
							</>
						)}
					</div>
				</div>
			</div>
			{uploadedFile ? (
				<img onClick={handleUploadClick} style={{ cursor: 'pointer', width: 28, height: 28 }} src={new URL("../assets/svg/upload_icon.svg", import.meta.url).href} width={28} height={28} alt="uploaded" />
			) : (
				<button className={styles.uploadBtn} type="button" onClick={handleUploadClick}>
					<img src={new URL("../assets/svg/upload.svg", import.meta.url).href} alt="Upload" />
				</button>
			)}
		</div>
	);
}


