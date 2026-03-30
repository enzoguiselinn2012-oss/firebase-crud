import { useEffect, useState } from "react";
import Table from "./components/table"
import Auth from "./components/auth"
import { auth } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <>
      <Auth user={user} />
      <Table user={user} />
    </>
  )
}

export default App