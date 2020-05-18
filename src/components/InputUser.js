import React, { Fragment, useState } from "react";

const InputUser = () => {
  const [allValues, setValues] = useState({
    first: "First name",
    last: "Last name",
    email: "Email address",
    phone: "Phone number",
    location: "Location",
    hobby: "Hobby",
  });

  const addNewUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
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
      window.location = '/'
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Fragment>
      <div className="container">
        <button
          type="button"
          className="btn btn-success"
          data-toggle="modal"
          data-target="#myModal"
        >
          Add item
        </button>

        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Modal Heading</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <input type="text" className="form-control" name="first" value={allValues.first} onChange={(e) => setValues({...allValues, [e.target.name]: e.target.value})} />
                <input type="text" className="form-control mt-3" name="last" value={allValues.last} onChange={(e) => setValues({...allValues, [e.target.name]: e.target.value})} />
                <input type="text" className="form-control mt-3" name="email" value={allValues.email} onChange={(e) => setValues({...allValues, [e.target.name]: e.target.value})} />
                <input type="text" className="form-control mt-3" name="phone" value={allValues.phone} onChange={(e) => setValues({...allValues, [e.target.name]: e.target.value})} />
                <input type="text" className="form-control mt-3" name="location" value={allValues.location} onChange={(e) => setValues({...allValues, [e.target.name]: e.target.value})} />
                <input type="text" className="form-control mt-3" name="hobby" value={allValues.hobby} onChange={(e) => setValues({...allValues, [e.target.name]: e.target.value})} />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={(e) => addNewUser(e)}
                >
                  Add item
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
      </div>
    </Fragment>
  );
};

export default InputUser;
