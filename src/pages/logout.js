import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import React from "react";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    // Remove token and redirect to login
    Cookies.remove("token");
    router.push("/login");
  }, [router]);

  return <div>Logging out...</div>;
};

export default Logout;
