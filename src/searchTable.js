import React, { Component } from 'react';
import DataTable from 'react-data-table-component';

const columns = [
    {
       name: 'Book Id',
       selector: 'bookid',
       sortable: true
   },
   {
       name: 'Sys Id',
       selector: 'sysid'
   },
   {
       name: 'Is Return',
       selector: 'isreturn'
   },
   {
       name: 'Return Id',
       selector: 'returnid'
   }
   ];

class SearchTable extends Component {
  render() {
    return (
      <DataTable
        title="Filtered Info"
        columns={columns}
        data={this.props.names}
      />
    )
  }
};

export default SearchTable;