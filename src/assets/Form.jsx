import React from "react";

function Form() {
	const [details, setDetails] = React.useState({
		name: "",
		email: "",
		contact: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(details);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					id="name"
					type="text"
					name="name"
					className="form-contact"
					onChange={handleChange}
				/>
				<label htmlFor="email" className="form-label">
					Email
				</label>
				<input
					id="email"
					type="text"
					name="email"
					className="form-contact"
					onChange={handleChange}
				/>
				<label htmlFor="contact" className="form-label">
					Contact
				</label>
				<input
					id="contact"
					type="text"
					name="contact"
					className="form-contact"
					onChange={handleChange}
				/>
				<button type="submit" className="submit-btn">
					Update
				</button>
			</form>
		</div>
	);
}

export default Form;
