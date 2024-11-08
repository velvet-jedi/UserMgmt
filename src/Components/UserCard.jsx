import React from "react";
import useClipboardCopy from "../Utils/hooks/useClipboardCopy";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";

const UserCard = ({ user, onClick }) => {
	const { copied, copyToClipboard } = useClipboardCopy();
	const [isTooltipVisible, setIsTooltipVisible] = useState(false);

	const handleCopyClick = (e) => {
		e.stopPropagation();
		copyToClipboard(`${user.firstName} ${user.lastName} (${user.email})`);
		setIsTooltipVisible(true);
		setTimeout(() => setIsTooltipVisible(false), 2000);
	};

	return (
		<div
			onClick={onClick}
			className="relative flex flex-col sm:flex-row items-start sm:items-center border-stone-300 rounded-md p-4 m-2 cursor-pointer transition hover:bg-slate-100 focus-within:bg-slate-100 border-2 h-auto justify-between"
			role="button"
			tabIndex="0"
			onKeyPress={(e) => e.key === "Enter" && onClick()}
		>
			<div className="w-full sm:w-auto">
				<p className="font-semibold text-lg">
					{user.firstName} {user.lastName}
				</p>
				<p className="text-neutral-600">{user.email}</p>
			</div>
			<div className="relative">
				<button
					aria-label="Copy user details"
					className="p-2 hover:bg-gray-100 rounded-full text-slate-500 focus:outline-none"
					onClick={handleCopyClick}
				>
					<FaRegCopy className="h-6" />
				</button>
				{isTooltipVisible && (
					<div
						className="absolute -bottom-4 right-0 sm:right-[10px] transform translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded shadow-md"
						role="status"
						aria-live="polite"
					>
						Copied!
					</div>
				)}
			</div>
		</div>
	);
};

export default UserCard;
