import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
    const [showData, setShowData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/users").then((response) => {
      setShowData(response.data);
    });
  }, []);
  return (
    <div className="container w-75" style={{marginTop:'80px'}}>
      {showData.map((data) => (
        <div className="table-responsisve" key={data.id}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">E-mail</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{data.id}</th>
                <td key={data.username}>{data.username}</td>
                <td key={data.email}>{data.email}</td>
                <td key={data.password}>{data.password}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}
