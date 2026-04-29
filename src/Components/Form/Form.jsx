import React from "react";
import { useForm } from "react-hook-form";

export const Form = () => {
	const { register, handleSubmit } = useForm();

	const fnSubmit = (data) => {
		console.log(data);
	};

	return (
		<div>
			<h1>User Form</h1>
			<br />
			<div className="form">
				<form onSubmit={handleSubmit(fnSubmit)}>
					<div className="field">
						<label htmlFor="name">Name</label>
						<input
							id="name"
							type="text"
							placeholder="Enter Name"
							{...register("name")}
						/>
					</div>

					<div className="field">
						<label htmlFor="password">Password</label>
						<input
							id="password"
							type="password"
							placeholder="Enter password"
							{...register("password")}
						/>
					</div>

					<div className="field">
						<label htmlFor="email">Email</label>
						<input
							id="email"
							type="email"
							placeholder="Enter Email"
							{...register("email")}
						/>
					</div>

					<div className="field">
						<label htmlFor="mobile">Mobile</label>
						<input
							id="tel"
							type="tel"
							placeholder="Enter Mobile"
							{...register("mobile")}
						/>
					</div>

					<button type="submit" onClick={handleSubmit(fnSubmit)}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
