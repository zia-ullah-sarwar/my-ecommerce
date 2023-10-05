"use client";
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";

const page = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="p-10">
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <p>Welcome, {user.displayName} you are logged in to profile.</p>
      ) : (
        <p>You must be logged in for profile page.</p>
      )}
    </div>
  );
};

export default page;
