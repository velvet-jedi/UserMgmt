import { useState } from "react";
import UserManagement from "./Components/UserManagement";

function App() {
	return (
		<div className="flex select-none bg-slate-200 justify-center items-center min-h-screen p-4">
			<UserManagement></UserManagement>
		</div>
	);
}

export default App;
