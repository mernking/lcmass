"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Page() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/login"); // Redirect to login if token is not found
      return;
    }

    // Send token to the protected route for validation
    fetch("/api/users/jwt", {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setUser(data.user); // Set user data if token is valid
        } else {
          router.push("/login"); // Redirect to login if token is invalid
        }
      })
      .catch((error) => {
        console.error("Error validating token:", error);
        router.push("/login"); // Redirect to login if there's an error
      });
  }, []);

  if (!user) {
    return null; // Or display loading/spinner
  }

  return (
    <div>
      <h1>Welcome to Page, {user.name}!</h1>
    </div>
  );
}
