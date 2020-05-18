import React, { Fragment, useState, useEffect } from "react";
import EditUser from './EditUser';

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3001/users");
      const jsonData = await response.json();
      setUsers(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/users/${id}`, {
        method: "DELETE",
      });
      console.log(response);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Fragment>
      <div className="container">
        <h1 className="mt-3">CRUD Database</h1>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>First</th>
              <th>Last</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Hobby</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td> {user.id} </td>
                <td> {user.first} </td>
                <td> {user.last} </td>
                <td> {user.email} </td>
                <td> {user.phone} </td>
                <td> {user.location} </td>
                <td> {user.hobby} </td>
                <td>
                  <EditUser user={user} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Del
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ListUsers;
