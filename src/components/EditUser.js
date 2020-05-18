import React, { Fragment, useState } from "react";

const EditUser = ({ user }) => {
  const [allValues, setAllValues] = useState({
    first: user.first,
    last: user.last,
    email: user.email,
    phone: user.phone,
    location: user.location,
    hobby: user.hobby,
  });

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first: allValues.first,
          last: allValues.last,
          email: allValues.email,
          phone: allValues.phone,
          location: allValues.location,
          hobby: allValues.hobby,
        }),
      });

      //console.log(response);
      window.location = "/";
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Fragment>
        <button
          type="button"
          className="btn btn-warning"
          data-toggle="modal"
          data-target={`#id${user.id}`}
        >
          Edit
        </button>

        <div className="modal" id={`id${user.id}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit user info</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  name="first"
                  value={allValues.first}
                  onChange={(e) =>
                    setAllValues({ ...allValues, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="last"
                  value={allValues.last}
                  onChange={(e) =>
                    setAllValues({ ...allValues, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="email"
                  value={allValues.email}
                  onChange={(e) =>
                    setAllValues({ ...allValues, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="phone"
                  value={allValues.phone}
                  onChange={(e) =>
                    setAllValues({ ...allValues, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="location"
                  value={allValues.location}
                  onChange={(e) =>
                    setAllValues({ ...allValues, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="hobby"
                  value={allValues.hobby}
                  onChange={(e) =>
                    setAllValues({ ...allValues, [e.target.name]: e.target.value })
                  }
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={e => updateUser(e)}
                >
                  Edit item
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
};

export default EditUser;
