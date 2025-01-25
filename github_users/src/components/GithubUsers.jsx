import React, { useEffect, useState } from 'react';
import '../css/GithubUsers.css';

export default function GithubUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchUsers() {
        try {
            const response = await fetch('https://api.github.com/users');
            const data = await response.json();
            setUsers(data);
            setLoading(false);
        } catch (err) {
            console.error('Failed to fetch users:', err);
            setLoading(false); // Still set loading to false even if error occurs
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            fetchUsers();
        }, 3000); // Delay API call by 3 seconds

        return () => clearTimeout(timeout); // Clean up the timeout if component unmounts
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="boxes">
            <h1>Github Users</h1>
            <div className="list">
                {users.map((item) => {
                    const { id, avatar_url, login, html_url } = item;
                    return (
                        <li key={id} className="user-card">
                            <img src={avatar_url} alt={login} className="avatar" />
                            <p>{login}</p>
                            <a href={html_url} target="_blank" rel="noopener noreferrer">
                                View Profile
                            </a>
                        </li>
                    );
                })}
            </div>
        </div>
    );
}
