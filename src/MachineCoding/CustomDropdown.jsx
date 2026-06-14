import React, { useState } from "react";

export const CustomDropdown = () => {
	const options = ["React", "Angular", "Vue", "Svelte"];
	const [selected, setSelected] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (option) => {
		setSelected(option);
	};

	return (
		<>
			<h2>Dropdown</h2>
			<br />

			<div
				style={{
					width: "200px",
				}}
			>
				<div
					onClick={() => setIsOpen(!isOpen)}
					style={{
						padding: "10px",
						border: "1px solid white",
						cursor: "pointer",
						margin: "0 auto",
						textAlign: "center",
					}}
				>
					{selected || "Select option"}
				</div>

				{isOpen && (
					<div
						style={{
							border: "1px solid red",
							marginTop: "5px",
						}}
					>
						{options.map((option) => {
							return (
								<div
									style={{
										padding: "10px",
										cursor: "pointer",
									}}
									key={option}
									onSelect={() => handleSelect(option)}
								>
									{option}
								</div>
							);
						})}
					</div>
				)}
			</div>
		</>
	);
};
