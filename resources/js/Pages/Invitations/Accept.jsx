import React from "react";

const AcceptInvitation = ({ email, role }) => {
    return (
        <div className="max-w-md mx-auto p-4 bg-gray-100 rounded">
            <h1 className="text-xl font-bold">Accept Invitation</h1>
            <p>
                You were invited as <strong>{role || "a user"}</strong> with the
                email <strong>{email}</strong>.
            </p>
            <button
                onClick={() => alert("Complete your registration process here.")}
                className="mt-4 p-2 bg-green-500 text-white rounded"
            >
                Complete Registration
            </button>
        </div>
    );
};

export default AcceptInvitation;
