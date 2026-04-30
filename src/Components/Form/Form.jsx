import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { formSchema } from "../../schemas/form-schema";

export const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onSubmit",
		reValidateMode: "onSubmit",
		resolver: zodResolver(formSchema),
	});

	const fnSubmit = (data) => {
		console.log("Form Data:", data);
	};

	return (
		<div className="container">
			<h1>User Form</h1>

			<div className="form">
				<form onSubmit={handleSubmit(fnSubmit)}>
					{/* Name */}
					<div className="field">
						<label htmlFor="name">Name</label>
						<input
							id="name"
							type="text"
							placeholder="Enter Name"
							{...register("name", {
								required: "Name is required",
								minLength: { value: 3, message: "Min length is 3" },
								maxLength: { value: 30, message: "Max length is 30" },
							})}
						/>
						{errors.name && <p className="error">{errors.name.message}</p>}
					</div>

					{/* Password */}
					<div className="field">
						<label htmlFor="password">Password</label>
						<input
							id="password"
							type="password"
							placeholder="Enter password"
							{...register("password", {
								required: "Password is required",
								minLength: { value: 8, message: "Min length is 8" },
							})}
						/>
						{errors.password && (
							<p className="error">{errors.password.message}</p>
						)}
					</div>

					{/* Email */}
					<div className="field">
						<label htmlFor="email">Email</label>
						<input
							id="email"
							type="email"
							placeholder="Enter Email"
							{...register("email", {
								required: "Email is required",
								pattern: {
									value: /^\S+@\S+$/i,
									message: "Invalid email",
								},
							})}
						/>
						{errors.email && <p className="error">{errors.email.message}</p>}
					</div>

					{/* Mobile */}
					<div className="field">
						<label htmlFor="mobile">Mobile</label>
						<input
							id="mobile"
							type="tel"
							placeholder="Enter Mobile"
							maxLength={10}
							{...register("mobile", {
								required: "Mobile is required",
								minLength: { value: 10, message: "Must be 10 digits" },
								maxLength: { value: 10, message: "Must be 10 digits" },
								pattern: {
									value: /^[0-9]+$/,
									message: "Only numbers allowed",
								},
							})}
						/>
						{errors.mobile && <p className="error">{errors.mobile.message}</p>}
					</div>

					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
};
