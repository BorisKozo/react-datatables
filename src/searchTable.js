import React, { Component } from 'react';

import './datatables.css';

const $ = require('jquery');
$.DataTable = require('datatables.net');

const columns = [
    {
        title: 'Id',
        width: 120,
        data: 'bookid'
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
    console.log("In reload search table  : "+ JSON.stringify(names))
    const table = $('.data-search-table-wrapper').find('table').DataTable();
    table.clear();
    table.rows.add(names);
    table.draw();
}

class SearchTable extends Component {
    componentDidMount() {
        var table = $(this.refs.main).DataTable({
            dom: '<"data-search-table-wrapper"t>',
            data: this.props.names,
            columns,
            ordering: false,
            searching: true
        });
    }

    componentWillUnmount() {
        $('.data-search-table-wrapper').find('table').DataTable().destroy(true);
    }
    componentDidUpdate(){
        console.log("Did update called in search table")
        console.log(this.props.names)
        reloadTableData(this.props.names);
    }

    render() {
        return (
            <div>
                <table ref="main" />
            </div>);
    }
}


export default SearchTable;