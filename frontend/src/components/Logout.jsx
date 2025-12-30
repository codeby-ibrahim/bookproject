// import React from "react";
// import { useAuth } from "../context/AuthProvider";
// import toast from "react-hot-toast";

// function Logout() {
//   const [authUser, setAuthUser] = useAuth();
//   const handleLogout = () => {
//     try {
//       setAuthUser({
//         ...authUser,
//         user: null,
//       });
//       localStorage.removeItem("Users");
//       toast.success("Logout successfully");

//       setTimeout(() => {
//         window.location.reload();
//       }, 3000);
//     } catch (error) {
//       toast.error("Error: " + error);
//       setTimeout(() => {}, 2000);
//     }
//   };
//   return (
//     <div>
//       <button
//         className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
//         onClick={handleLogout}
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

// export default Logout;


import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear auth state
    setAuthUser(null);

    // clear localStorage (use SAME key as login)
    localStorage.removeItem("authUser");

    toast.success("Logout successful");

    // redirect to login
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <button
      onClick={handleLogout}
      className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
    >
      Logout
    </button>
  );
}

export default Logout;
