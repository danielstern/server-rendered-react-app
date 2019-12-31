import React from 'react';

const App = ({username})=>(
    <div>
        <h1>Welcome to Server Rendered Content</h1>
        <h2>Welcome, {username || "N/A"}</h2>
    </div>
)