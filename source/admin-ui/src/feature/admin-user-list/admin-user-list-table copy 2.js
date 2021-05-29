import React, { useState, useEffect, useReducer } from 'react';
import { createSlice } from "@reduxjs/toolkit";
import DataTable from "react-data-table-component";
import { adminUserList } from '../services';


const initialState = {
    perPage: 10,
    pageNumber: 1,
    totalRows: null
}

const columns = [
    {
        name: 'First Name',
        selector: 'first_name',
        sortable: true,
    },
    {
        name: 'Last Name',
        selector: 'last_name',
        sortable: true,
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true,
    },
];

const adminUserListCreateSlice = createSlice({
    name: "adminUserListCreateSlice",
    reducers: {
        getNumberOfRecordPerPage(state, action) {
            state.pageNumber = action.payload;
        },
        recordPerPage(state, action) {
            state.perPage = action.payload;
        }
    }
});

const adminUserListReducer = adminUserListCreateSlice.reducer;

const { getNumberOfRecordPerPage, recordPerPage } = adminUserListCreateSlice.actions;

function AdminUserListTable() {
    const [page, pageDispatch] = useReducer(adminUserListReducer, initialState)

    const { perPage, pageNumber, totalRows} = page;
    adminUserList(perPage, pageNumber);
    debugger
    const handlePageChange = page => {
        pageDispatch(getNumberOfRecordPerPage(page))
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        pageDispatch(recordPerPage(newPerPage));
        pageDispatch(getNumberOfRecordPerPage(page));
    };

    return (
        <DataTable
            columns={columns}
            // data={data}
            pagination
            paginationServer
            paginationTotalRows={totalRows}
            selectableRows
            onChangeRowsPerPage={handlePerRowsChange}
            onChangePage={handlePageChange}
        />
    );

}

export default AdminUserListTable;
