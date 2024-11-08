// This component contains the main logic for displaying users and handling user interactions.
import React, { useState } from "react";
import UserCard from "./UserCard";
import UserDetailsDialog from "./UserDetailsDialog";
import mockUserData from "../Utils/UserList";

const UserManagement = () => {
	const [users, setUsers] = useState(mockUserData.data.members);
	const [selectedUser, setSelectedUser] = useState(null);

	const handleSaveUser = (updatedUser) => {
		setUsers((prevUsers) =>
			prevUsers.map((user) =>
				user.user.userId === updatedUser.userId
					? { user: updatedUser }
					: user
			)
		);
		setSelectedUser(null);
	};

	return (
		<div className="max-w-lg w-full border-2 h-[50vh] border-stone-300 rounded-lg bg-white ">
			<h1 className="mb-4 border-b-2 border-stone-300 rounded-md leading-10 pl-6 py-2 font-semibold text-lg">
				User Management ({mockUserData.data.memberCount})
			</h1>
			{users.map((user) => (
				<UserCard
					key={user.user.userId}
					user={user.user}
					onClick={() => setSelectedUser(user.user)}
				></UserCard>
			))}
			{selectedUser && (
				<UserDetailsDialog
					user={selectedUser}
					onSave={handleSaveUser}
					onClose={() => setSelectedUser(null)}
				></UserDetailsDialog>
			)}
		</div>
	);
};

export default UserManagement;
