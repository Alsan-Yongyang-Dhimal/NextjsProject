import ProtecteRoute from "../HOC/protectedRoute"
import React from 'react'


const index = () => {
  return (
    <div>
    <h1 className="text-4xl">Welcome!</h1>
    </div>
  )
};

export default ProtecteRoute(index);
