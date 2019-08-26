import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
    const data = {
        columns: [
            {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Email',
                field: 'Email',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Address',
                field: 'Address',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Gender',
                field: 'Gender',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Role',
                field: 'Role',
                sort: 'asc',
                width: 150
            },
        ],
        rows: [
            {
                name: 'Tiger Nixon',
                position: 'System Architect',
                office: 'Edinburgh',
                age: '61',
                date: '2011/04/25',
            }, {
                name: 'Tiger Nixon',
                position: 'System Architect',
                office: 'Edinburgh',
                age: '61',
                date: '2011/04/25',
            }, {
                name: 'Tiger Nixon',
                position: 'System Architect',
                office: 'Edinburgh',
                age: '61',
                date: '2011/04/25',
            }, {
                name: 'Tiger Nixon',
                position: 'System Architect',
                office: 'Edinburgh',
                age: '61',
                date: '2011/04/25',
            },
        ]
    };

    return (
        <MDBDataTable
            striped
            bordered
            hover
            data={data}
        />
    );
}

export default DatatablePage;