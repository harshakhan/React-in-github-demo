import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios'

const columns = [
  { field: 'id', headerName: 'ID', width: 140 },
  { field: 'size', headerName: 'Size', width: 140 },
  { field: 'fullName', headerName: 'Full Name', width: 140 },
  {
    field: 'userCity',
    headerName: 'User City'
 , width: 140 },
  {
    field: 'orderPrice',
    headerName: 'Order Price',
    sortable: false
    
 , width: 140 },
  {
    field: 'status',
    headerName: 'Status'
 , width: 140 },
  {
    field: 'createdOn',
    headerName: 'Created On'
 , width: 140 },
  {
    field: 'duration',
    headerName: 'Duration'
 , width: 140 },
];





function DataTable() {

    const [ data, setData ] = useState([])

    useEffect(() =>{
        var config = {
            method: 'get',
            url: 'http://localhost:3000/userData',
            headers: { 
              'Content-Type': 'application/json'
            }
            
          };
          
          axios(config)
          .then((res)=> setData(res.data))
          .catch((err) => console.log(err));
    })
  return (
    <div style={{ height: 400, width: '100%'}}>
      <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection />
    </div>
  )
}

export {DataTable}


