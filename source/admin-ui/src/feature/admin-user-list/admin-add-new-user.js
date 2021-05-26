import React, { useReducer } from "react";
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setAddUserFormClosed } from "./slice/admin-user-list-common-slice";
import { addNewAdminUser } from '../services/index';

const initialState = {
  formValues: {
    firstName: 'Thavaseelan',
    lastName: 'Rajenderan',
    email: 'rthavaseelan@gmail.com',
    roleName: 'admin',
    date: "2021-05-25",
    active: 'active',
  },
  isFormSubmit: false
};

// let emailErrorMessage;
// if (fieldName == 'email') {
//   const emailVerify = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(fieldValue);
//   emailErrorMessage = emailVerify;
// }

const addAdminUserSlice = createSlice({
  name: "addAdminUserSlice",
  reducers: {
    setFormInputValue(state, action) {
      const { fieldName, fieldValue } = action.payload;
      state.formValues[fieldName] = fieldValue;
    },
    inputValueSubmit(state, action) {
      const { isFormSubmit } = action.payload;
      state.isFormSubmit = isFormSubmit;
    }
  },
  initialState,
});

const { setFormInputValue, inputValueSubmit } = addAdminUserSlice.actions;

const addAdminUserReducer = addAdminUserSlice.reducer;

function AdminAddNewUser() {

  const [page, pageDispatch] = useReducer(addAdminUserReducer, initialState);

  const {
    formValues: { firstName, lastName, email, roleName, date, active },
    isFormSubmit } = page;

  if (isFormSubmit) {
    
  }

  const dispatch = useDispatch();

  const fieldChange = (fieldName) => {
    return (e) => {
      const value = e.target.value;
      pageDispatch(
        setFormInputValue({
          fieldName,
          fieldValue: value,
        })
      );
    };
  };

  const formSubmit = (e) => {
    e.preventDefault();
    pageDispatch(inputValueSubmit({ isFormSubmit: true }));
    addNewAdminUser(firstName, lastName, email, roleName, date);
  };

  const formClosed = () => {
    dispatch(setAddUserFormClosed(true));
  };

  return (
    <div>
      <div id="addEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={formSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Add Employee</h4>
                <button
                  type="button"
                  onClick={formClosed}
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    onChange={fieldChange("firstName")}
                    type="text"
                    className="form-control"
                    value={firstName}
                  />
                  {firstName ? null : (
                    <div className="add-admin-error-msg">Enter Firstname</div>
                  )}
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    onChange={fieldChange("lastName")}
                    type="text"
                    className="form-control"
                    value={lastName}
                  />
                  {lastName ? null : (
                    <div className="add-admin-error-msg">Enter Lastname</div>
                  )}
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={fieldChange("email")}
                    value={email}
                  />
                  {email ? null : (
                    <div className="add-admin-error-msg">Enter Email</div>
                  )}
                  {/* {emailErrorMessage ? null : <div className="add-admin-error-msg">Invalid Email</div>} */}
                </div>
                <div className="form-group">
                  <label>Role Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={fieldChange("roleName")}
                    value={roleName}
                  />
                  {roleName ? null : (
                    <div className="add-admin-error-msg">Enter Rolename</div>
                  )}
                </div>
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    className="form-control"
                    onChange={fieldChange("date")}
                    value={date}
                  />
                  {date ? null : (
                    <div className="add-admin-error-msg">Enter Date</div>
                  )}
                </div>
                <div className="form-group">
                  <select
                    className="custom-select"
                    id="dropdown-active"
                    name="active"
                    style={{ width: "340px" }}
                  >
                    <option value="" onChange={fieldChange("active")} value={active}>Choose Active</option>

                    <option name="choess_active" value="Active">
                      Active
                    </option>
                    <option name="choess_active" value="Inactive">
                      Inactive
                    </option>
                  </select>
                  {/* {active ? null : <div className="add-admin-error-msg">Select Active</div>} */}

                </div>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                />
                <input type="submit" className="btn btn-success" value="Add" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAddNewUser;
