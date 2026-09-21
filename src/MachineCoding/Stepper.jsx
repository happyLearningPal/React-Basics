import { useState } from "react";

const steps = ["Personal Details", "Address", "Payment", "Confirmation"];

function Stepper() {
	const [currentStep, setCurrentStep] = useState(0);

	const nextStep = () => {
		if (currentStep < steps.length - 1) {
			setCurrentStep((prev) => prev + 1);
		}
	};

	const previousStep = () => {
		if (currentStep > 0) {
			setCurrentStep((prev) => prev - 1);
		}
	};

	return (
		<div style={{ width: "700px", margin: "50px auto" }}>
			{/* Stepper */}
			<div
				style={{
					display: "flex",
					alignItems: "center",
				}}
			>
				{steps.map((step, index) => (
					<div
						key={step}
						style={{
							display: "flex",
							alignItems: "center",
							flex: index !== steps.length - 1 ? 1 : "unset",
						}}
					>
						{/* Circle + label */}
						<div style={{ textAlign: "center" }}>
							<div
								style={{
									width: "40px",
									height: "40px",
									borderRadius: "50%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									margin: "auto",
									background:
										index < currentStep
											? "green"
											: index === currentStep
												? "blue"
												: "lightgray",
									color: "white",
								}}
							>
								{index < currentStep ? "✓" : index + 1}
							</div>

							<p>{step}</p>
						</div>

						{/* Connecting line */}
						{index !== steps.length - 1 && (
							<div
								style={{
									height: "4px",
									flex: 1,
									margin: "0 10px",
									marginBottom: "25px",
									background: index < currentStep ? "green" : "lightgray",
								}}
							/>
						)}
					</div>
				))}
			</div>

			{/* Content */}
			<div style={{ marginTop: "40px" }}>
				<h2>{steps[currentStep]}</h2>

				<p>
					Current step: {currentStep + 1} of {steps.length}
				</p>
			</div>

			{/* Buttons */}
			<div>
				<button onClick={previousStep} disabled={currentStep === 0}>
					Previous
				</button>

				<button
					onClick={nextStep}
					disabled={currentStep === steps.length - 1}
					style={{ marginLeft: "10px" }}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default Stepper;
