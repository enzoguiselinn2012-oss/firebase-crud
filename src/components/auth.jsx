import { useState } from "react";
import { auth, googleProvider } from "../firebase/config.js";
import { signInWithPopup, signOut } from "firebase/auth";

function Auth({ user }) {

    const [loginLoading, setLoginLoading] = useState(false);

    /*
    ========================================
    LOGIN (GOOGLE)
    ========================================
    */

    const login = async () => {

        try {
            setLoginLoading(true);
            const result = await signInWithPopup(auth, googleProvider);
            console.log("Login successful:", result.user);

        } catch (error) {
            alert("Login error: " + (error.message || "Failed to login"));
            console.error("Login error:", error);
        } finally {
            setLoginLoading(false);
        }

    };

    /*
    ========================================
    LOGOUT
    ========================================
    */

    const logout = async () => {

        try {
            await signOut(auth);
            console.log("Logout successful");

        } catch (error) {
            alert("Logout error: " + (error.message || "Failed to logout"));
            console.error("Logout error:", error);
        }

    };

    return (
        <div className="p-4 border rounded bg-gray-100 mb-4">

            {!user ? (
                <div>
                    <h2 className="text-lg mb-3">User Not Logged In</h2>
                    <button onClick={login} disabled={loginLoading}
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50">
                        {loginLoading ? "Logging in..." : "Sign in with Google"}
                    </button>
                </div>
            ) : (

                <div>
                    <h2 className="text-lg mb-3">Welcome, <strong>{user.displayName || user.email}</strong>!</h2>
                    <div className="flex items-center gap-3">
                        {user.photoURL && (
                            <img src={user.photoURL} alt="Profile"
                                className="w-10 h-10 rounded-full" />
                        )}
                        <button onClick={logout} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
                            Sign Out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Auth;
