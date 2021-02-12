import React, { Component } from 'react';

import './datatables.css';

const $ = require('jquery');
$.DataTable = require('datatables.net');

const columns = [
    {
        title: 'Id',
        width: 120,
        data: 'id'
    },
    {
        title: 'SysId',
        width: 180,
        data: 'sysid'
    },
    {
        title: 'IsReturn',
        width: 180,
        data: 'isreturn'
    },
    {
        title: 'ReturnId',
        width: 180,
        data: 'returnid'
    },
];

function reloadTableData(names) {
    console.log('reloadTableData method call')
    const table = $('.data-table-wrapper').find('table').DataTable();
    table.clear();
    table.rows.add(names);
    table.draw();
}

function updateTable(names) {
    console.log('updateTable method call')
    const table = $('.data-table-wrapper').find('table').DataTable();
    let dataChanged = false;
    table.rows().every(function () {
        const oldNameData = this.data();
        const newNameData = names.find((nameData) => {
            return nameData.id === oldNameData.id;
        });
        if (oldNameData.sysid !== newNameData.sysid) {
            dataChanged = true;
            this.data(newNameData);
        }
        if (oldNameData.isreturn !== newNameData.isreturn) {
            dataChanged = true;
            this.data(newNameData);
        }
        if (oldNameData.returnid !== newNameData.returnid) {
            dataChanged = true;
            this.data(newNameData);
        }
        return true;
    });

    if (dataChanged) {
        table.draw();
    }
}


class Table extends Component {
    componentDidMount() {
        // var itemsList = [{ id: 1, sysid: 14626, isreturn: 0, returnid: "" },
        // { id: 2, sysid: 14627, isreturn: 0, returnid: "" }];
        // console.log('before: itemsList: ', itemsList)
        // //  itemsList = require('./data/data.json');
        // console.log('this.props.names:****');
        // console.log(this.props.names)
        // console.log(itemsList);
        var table = $(this.refs.main).DataTable({
            dom: '<"data-table-wrapper"t>',
            data: this.props.names,
            columns,
            ordering: false,
            searching: true
        });

        $('#searchInput').on( 'keyup', function () {
            console.log('search input on key up: ', this.value)
            table.search( this.value ).draw();
        } );
    }

    componentWillUnmount() {
        $('.data-table-wrapper').find('table').DataTable().destroy(true);
    }

    shouldComponentUpdate(nextProps) {
        console.log('shouldComponentUpdate');
        console.log('nextProps.names.length: ', nextProps.names.length);
        console.log('this.props.names.lengthL ', this.props.names.length);
        if (nextProps.names.length !== this.props.names.length) {
            reloadTableData(nextProps.names);
        } else {
            updateTable(nextProps.names);
        }
        return false;
    }

    render() {
        return (
            <div>
                <table ref="main" />
            </div>);
    }
}

Table.PropTypes = {
    names: React.PropTypes.array
};

export default Table;