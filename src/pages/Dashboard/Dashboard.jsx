import React from 'react';
import './css/Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="left-card">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Assign Projects</h5>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Team Size</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>AI Project</td>
                                    <td>3</td>
                                    <td>3-04-24</td>
                                    <td>5-05-24</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>AWT project</td>
                                    <td>5</td>
                                    <td>4-04-24</td>
                                    <td>5-02-25</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>BDA Project</td>
                                    <td>3</td>
                                    <td>2-03-24</td>
                                    <td>4-05-24</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="right-card">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Assigned Tasks</h5>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Task</th>
                                    <th scope="col">Priority</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>AI Project</td>
                                    <td>Frontend-Home_Page</td>
                                    <td>P1</td>
                                    <td>4-04-24</td>
                                    <td>10-04-24</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>AWT Project</td>
                                    <td>Frontend-ChatBot_Page</td>
                                    <td>P2</td>
                                    <td>3-04-24</td>
                                    <td>7-04-24</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>BDA Project</td>
                                    <td>Dashboard - Data Visualization</td>
                                    <td>P3</td>
                                    <td>2-03-24</td>
                                    <td>28-04-24</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
