import React, { useState, useEffect } from "react";

const UserDetailsDialog = ({ user, onSave, onClose }) => {
	const [firstName, setFirstName] = useState(user.firstName);
	const [lastName, setLastName] = useState(user.lastName);
	const [email, setEmail] = useState(user.email);

	const handleSave = () => {
		onSave({ ...user, firstName, lastName, email });
	};

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") {
				onClose();
			}
		};
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [onClose]);

	return (
		<div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div
				className="bg-white sm:mx-0 p-8 flex flex-col gap-2  rounded-lg shadow-lg max-w-md mx-4 w-full relative"
				role="dialog"
				aria-labelledby="dialog-title"
				aria-describedby="dialog-description"
			>
				<h2
					id="dialog-title"
					className="text-xl font-bold mb-4"
				>
					Edit User Details
				</h2>
				<label
					htmlFor="first-name"
					className="text-gray-700"
				>
					First Name
				</label>
				<input
					id="first-name"
					onChange={(e) => setFirstName(e.target.value)}
					value={firstName}
					className="w-full mb-2 p-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300 rounded"
				/>
				<label
					htmlFor="last-name"
					className="text-gray-700"
				>
					Last Name
				</label>
				<input
					onChange={(e) => setLastName(e.target.value)}
					value={lastName}
					id="last-name"
					className="w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 border border-gray-300 rounded"
				/>
				<label
					htmlFor="email"
					className="text-gray-700"
				>
					Email
				</label>
				<input
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="w-full mb-4 p-2 border border-gray-300 rounded"
				/>
				<div className="flex justify-end space-x-2">
					<button
						onClick={handleSave}
						className="px-4 py-2 bg-blue-500 focus:outline-none  text-white rounded"
					>
						Save
					</button>
					<button
						onClick={onClose}
						className="px-4 py-2 focus:outline-none   bg-gray-300 rounded"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserDetailsDialog;
