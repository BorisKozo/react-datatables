import React, { Component } from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Book Id',
    selector: 'bookid',
    sortable: true
  }];

class SearchTable extends Component {
  render() {
    return (
      <DataTable
        title="Filtered Info"
        columns={columns}
        data={this.props.names}
        striped={true}
        highlightOnHover={true}
        responsive={true}
        defaultSortField={"Book Id"}
        defaultSortAsc={false}
        center={true}
      />
    )
  }
};

export default SearchTable;