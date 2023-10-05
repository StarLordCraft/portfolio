"use client"
import { useState } from "react";

export default function StatusMessage({ message }: { message: string }) {
    const [showMessage, setShowMessage] = useState(message !== "");
  
    const handleClose = () => {
      setShowMessage(false);
    };
  
    return (
      <>
        {showMessage && (
          <div className="fixed top-0 left-0 right-0 bg-blue-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <div>{message}</div>
              <button
                onClick={handleClose}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </>
    );
  }