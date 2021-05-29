import React, { useState, useEffect } from 'react';
import DataTable from "react-data-table-component";
import { adminUserList } from '../services';
import { DEFAULT_PAGE_SIZE } from '../../utils'

const columns = [
    {
        name: 'First Name',
        selector: 'adminFirstName',
        sortable: true,
    },
    {
        name: 'Last Name',
        selector: 'adminLastName',
        sortable: true,
    },
    {
        name: 'Email',
        selector: 'adminUserName',
        sortable: true,
    },
    {
        name: 'Role',
        selector: 'adminRole',
        sortable: true,
    },
    {
        name: 'Date',
        selector: 'date',
        sortable: true,
    },
    {
        name: 'Active',
        selector: 'active',
        sortable: true,
    },
];


const AdminUserListTable = () => {
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(DEFAULT_PAGE_SIZE);
    const [data, setData] = useState()

    const fetchUsers = async (pageNo, pageSize) => {
        const result = await adminUserList(pageSize || perPage, pageNo)

        setData(result.data.userInfo)
        setTotalRows(result.data.totalRecord)
    };

    const handlePageChange = page => {
        fetchUsers(page);
    };

    // const handlePerRowsChange = async (newPerPage, page) => {
    //     debugger
    //     setLoading(true);
    //     const response = await axios.get(
    //         `https://reqres.in/api/users?page=${page}&per_page=${newPerPage}&delay=1`,
    //     );

    //     setData(response.data.data);
    //     setPerPage(newPerPage);
    //     setLoading(false);
    // };

    useEffect(() => {
        fetchUsers(1);
    }, []);

    return (
        <DataTable
            title="Users"
            columns={columns}
            data={data}
            pagination
            paginationServer
            paginationTotalRows={totalRows}
            selectableRows
            // onChangeRowsPerPage={handlePerRowsChange}
            onChangePage={handlePageChange}
        />
    );

}

export default AdminUserListTable;
