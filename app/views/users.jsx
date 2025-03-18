import React from 'react';

export default function Users(props) {
    return (
        <html>
            <head>
                <title>{props.title}</title>
            </head>
            <body>
                <h1>{props.title}</h1>
                {props.users && (
                    <ul>
                        {props.users.map(user => (
                            <li key={user.id}>
                                {user.name} - {user.email}
                            </li>
                        ))}
                    </ul>
                )}
            </body>
        </html>
    );
} 