import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import movies from "./movies";
import "bootstrap";
import "./styles.css";
import { adminUserList } from '../services';

const columns = [
    {
        name: "Title",
        selector: "title",
        sortable: true
    },
    {
        name: "Directior",
        selector: "director",
        sortable: true
    },
    {
        name: "Runtime (m)",
        selector: "runtime",
        sortable: true,
        right: true
    }
];

function AdminUserListTable() {
    const result = adminUserList();
    debugger
    return (
        <div className="card">
            <DataTable
                title="Admin User Table"
                columns={columns}
                data={movies}
                defaultSortField="title"
                pagination
                selectableRows
            />
        </div>

    );

}

export default AdminUserListTable;
