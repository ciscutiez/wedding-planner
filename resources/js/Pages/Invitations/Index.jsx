import React from "react";
import { Inertia } from "@inertiajs/inertia";


const Invitations = ({ invitations }) => {
    const handleSendInvitation = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        Inertia.post("/invitations", {
            email: formData.get("email"),
            role: formData.get("role"),
            message: formData.get("message"),
        });
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold">Invitations</h1>

            <form onSubmit={handleSendInvitation} className="my-4 p-4 bg-gray-100 rounded">
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="block w-full p-2 border rounded"
                    />
                </div>
                <div className="mt-4">
                    <label>Role:</label>
                    <select name="role" className="block w-full p-2 border rounded">
                        <option value="">Select a Role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div className="mt-4">
                    <label>Message:</label>
                    <textarea
                        name="message"
                        className="block w-full p-2 border rounded"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="mt-4 p-2 bg-blue-500 text-white rounded"
                >
                    Send Invitation
                </button>
            </form>

            <div className="mt-8">
                <h2 className="text-lg font-semibold">Invitation List</h2>
                <table className="w-full border">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Sent At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invitations.data.map((invitation) => (
                            <tr key={invitation.id}>
                                <td>{invitation.email}</td>
                                <td>{invitation.role || "N/A"}</td>
                                <td>{invitation.used ? "Used" : "Pending"}</td>
                                <td>{new Date(invitation.created_at).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Invitations;
