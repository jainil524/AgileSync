import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Project() {
    const { id } = useParams();
    return (
        <div>
        <h1>Project {id}</h1>
        <Link to="/app/projects">Back to Projects</Link>
        </div>
    );
}

