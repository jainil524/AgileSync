import React, { useState, useEffect } from 'react';
import '../css/inviteUser.css';

import Button from '../../../../components/UI/Button/Button';
import { useCookies } from 'react-cookie';

function InviteMember() {
    const [cookies, setCookie] = useCookies();
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUsers, setSelectedUsers] = useState([]);

    useEffect(() => {
        // Fetch users from the server
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        // Fetch users from the server and set the state
        fetch('https://backend.agilesync.co/get-all-users', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                // Assuming data is an array of user objects with 'name' and 'email' properties
                setUsers(data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    };

    const handleUserSelect = (user) => {
        // Toggle user selection
        const isSelected = selectedUsers.some(u => u.email === user.email);
        if (isSelected) {
            setSelectedUsers(selectedUsers.filter(u => u.email !== user.email));
        } else {
            setSelectedUsers([...selectedUsers, user]);
        }
    };

    const handleInviteClick = () => {
        let selectedUserEmails = selectedUsers.map(user => user.email);
        let project_id = window.location.pathname.split('/')[3];
        console.log(selectedUsers, cookies);
        fetch('https://backend.agilesync.co/add-team-member', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": cookies.token,
            },
            body: JSON.stringify({
                project_id: project_id,
                team_member: selectedUserEmails,
            })
        }).then(response => response.json()).then(data => {
            console.log(data);
            if (data.status === "success") {
                alert("Team Members Added Successfully");
                window.location.reload();
            } else {
                alert("Error Adding Team Members");
            }
        }).catch(error => {
            console.error('Error adding team members:', error);
        });
    };

    const handleAddUser = (target, user) => {
        // Add the selected user to the list
        setSelectedUsers([...selectedUsers, user]);
        target.closest('tr').remove();

    };

    return (
        <div className="invite-member-container" style={{ width: "100%" }}>
            <button onClick={handleInviteClick}>Invite</button>
            <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
                <div style={{ width: "30%" }}>
                    <div className="selected-users">
                        <h2>Selected Users</h2>
                        <ul>
                            {selectedUsers.map((user) => (
                                <li key={user.id} data-email={user.email}>{user.name} - {user.email}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <h1>Invite Members</h1>
                    <div className="user-list">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button onClick={({ target }) => handleAddUser(target, user)}>Add</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default InviteMember;
