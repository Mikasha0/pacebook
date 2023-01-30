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
    <div
      className="container w-75"
      style={{ marginTop: "100px", marginBottom: "100px" }}
    >
      {showData.map((data) => (
        <div className="table-responsisve" key={data.id}>
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th class="col-md-8">Usename</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td key={data.username}>{data.username}</td>
                <td key={data.email}>{data.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
