import React from 'react';

function AdminProductDetailTable() {
    return (
        <div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>
                            <span className="custom-checkbox" style={{backroundcolor:"#03A9F4"}}>
                                <input type="checkbox" id="selectAll" />
                                <label htmlFor="selectAll"></label>
                            </span>
                        </th>
                        <th style={{color:"#03A9F4"}}><b>#</b></th>
                        <th style={{color:"#03A9F4"}}><b>Product Id</b></th>
                        <th style={{color:"#03A9F4"}}><b>Product Name</b></th>
                        <th style={{color:"#03A9F4"}}><b>Product Qty</b></th>
                        <th style={{color:"#03A9F4"}}><b>Product Price</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span className="custom-checkbox">
                                <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                <label htmlFor="checkbox1"></label>
                            </span>
                        </td>
                        <td>1</td>
                        <td>Pr123</td>
                        <td>mobile</td>
                        <td>5</td>
                        <td>1000</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default AdminProductDetailTable;
