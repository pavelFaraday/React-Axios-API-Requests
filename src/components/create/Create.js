import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

export const Create = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const sendDataToApi = (e) => {
		e.preventDefault();
		axios.post("https://63ee5293d466e0c18bade922.mockapi.io/Crud", {
			firstName,
			lastName,
		});
		console.log(firstName, lastName);
	};

	return (
		<div>
			<Form onSubmit={sendDataToApi}>
				<Form.Field>
					<label>First Name</label>
					<input
						name="fname"
						onChange={(e) => setFirstName(e.target.value)}
						placeholder="First Name"
					/>
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<input
						name="lname"
						onChange={(e) => setLastName(e.target.value)}
						placeholder="Last Name"
					/>
				</Form.Field>
				<Button type="submit">Submit</Button>
			</Form>
		</div>
	);
};
