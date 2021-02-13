import React, { Component } from 'react';
import axios from 'axios'
import Input from './Input';
import Table from './Table';
// var MongoClient = require('mongodb').MongoClient;

class App extends Component {
    constructor() {
        super();
        var itemsList = [{ id: 1, sysid: 14626, isreturn: 0, returnid: "" },
        { id: 2, sysid: 14627, isreturn: 0, returnid: "" }];
        this.state = {
            names: itemsList
        }

        // var apiUrl = 'https://master-electricals.herokuapp.com/api/items';
        // fetch(apiUrl)
        //     .then((response) => response.json())
        //     .then((data) => console.log('This is your data', data));
    }
}

onAddClick(id, sysid, isreturn, returnid) {
    console.log('onAddClick line 19')
    let updated = false;
    const result = this.state.names.map((nameData) => {
        console.log('nameData.id: ', nameData.id, '=== id: ', id);
        if (nameData.id === id) {
            updated = true;
            return { id, sysid, isreturn, returnid }
        }
        return nameData;
    });
    console.log('updated bool: ', updated)
    if (!updated) {
        result.push({ id, sysid, isreturn, returnid });
    }

    this.setState({
        names: result
    })

    console.log('names result');
    console.log('names: ', this.state.names);
    console.log('result: ', result)
}

render() {
    return (
        <div className="App">
            <Input onAddClick={(id, sysid, isreturn, returnid) => {
                this.onAddClick(id, sysid, isreturn, returnid);
            }} />
            <Table names={this.state.names} />
        </div>
    );
}
}

export default App;
