import React, { Component } from 'react';
// import firebase from 'firebase';
import Input from './Input';
import Table from './Table';
// var firebase = require('./firebase.js');

class App extends Component {
    constructor() {
        super();
        var itemsList = [{ id: 1, sysid: 14626, isreturn: 0, returnid: "" },
        { id: 2, sysid: 14627, isreturn: 0, returnid: "" }];
        this.state = {
            names: itemsList
        }

        // var firebaseConfig = {
        //     apiKey: "AIzaSyDXAqoHJUS1Y7eGsNZckyM_QtXECH0tEUI",
        //     authDomain: "master-electricals.firebaseapp.com",
        //     databaseURL: "https://master-electricals-default-rtdb.firebaseio.com",
        //     projectId: "master-electricals",
        //     storageBucket: "master-electricals.appspot.com",
        //     messagingSenderId: "278786477211",
        //     appId: "1:278786477211:web:9e0c787eecb35f9639ca3e",
        //     measurementId: "G-1J46SDZWT9"
        // };
        
        // firebase.initializeApp(firebaseConfig);

        // // // Get a reference to the database service
        // var database = firebase.database();

        // console.log('database: ', database);

        // database.ref.once('value')
        //     .then(function (snapshot) {
        //         console.log('snapshot.val()', snapshot.val())
        //     })
    }

    componentDidMount() {
        // // Get a reference to the database service
        // var database = firebase.database();

        // console.log('database: ', database);

        // database.ref.once('value')
        //     .then(function (snapshot) {
        //         console.log('snapshot.val()', snapshot.val())
        //     })
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
