import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/dashboard')
    }

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:shadow-lg transition-all duration-200 ease-in-out" onClick={handleButtonClick}>Explore Widgets</button>
            </div>
        </>
    )
}

export default Home;