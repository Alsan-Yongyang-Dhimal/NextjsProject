import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import React from "react";

const ProtecteRoute = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get('token');
      if (!token) {
        router.replace('/login');  
      }
    }, [router]);

    // Render the wrapped component if token exists
    return <WrappedComponent {...props} />;
  };
};

export default ProtecteRoute;
