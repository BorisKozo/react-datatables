import React, { Component } from 'react';
import axios from 'axios'
import Input from './Input';
import Table from './Table';
import Search from './search';
// var MongoClient = require('mongodb').MongoClient;

class App extends Component {
    constructor(props) {
        super(props);
        var itemsList = [{ id: 1, sysid: 14626, isreturn: 0, returnid: "" },
        { id: 2, sysid: 14627, isreturn: 0, returnid: "" }];
        this.state = {
            names: itemsList
        };

        // var apiUrl = 'https://master-electricals.herokuapp.com/api/items';
        // fetch(apiUrl)
        //     .then((response) => response.json())
        //     .then((data) => console.log('This is your data', data));
    }
    componentDidMount()
    {
        axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        axios.get(`https://master-electricals.herokuapp.com/api/items`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
             },  responseType: 'json', credentials: 'same-origin',}).then(res => {
          const billItems = res.data;
          console.log("call success ")
          console.log(JSON.stringify(billItems))
          this.setState({ names: billItems });
        })
        
        // var postOptions = {
        //     method: 'GET',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': 'http://localhost:3000',
        //         'Access-Control-Allow-Credentials': 'true'
        //     },
        //     credentials: 'same-origin',
        // };
        // try {
        //     let response = await fetch(`https://master-electricals.herokuapp.com/api/items`, postOptions);
        //     try {
        //         console.log("Success callback")
        //        console.log(JSON.stringify(response))
                
        //     } catch (error) {
                
        //     }
            
        // }
        // catch (error) {

        // }
    }

    onAddClick =  function(id, sysid, isreturn, returnid, booktype) {
        console.log('onAddClick line 19')
        let updated = false;
console.log('isreturn ' + isreturn);
console.log('bookty[pe: ' +booktype);
        if(!id || !sysid)
        {
            alert("invalid id value");
        }
        if(isreturn && !returnid)
        {
            alert("invalid return id value");
        }

    //     const article = { title: 'React POST Request Example' };
    // axios.post('https://reqres.in/api/articles', article)
    //     .then(response => this.setState({ articleId: response.data.id }));

    const bookItem = {
        booktype: booktype,
        bookid: id,
        sysid: sysid,
        return: isreturn,
        returnid: returnid
    };

        axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        axios.post(`https://master-electricals.herokuapp.com/api/items`, bookItem, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
             },  responseType: 'json', credentials: 'same-origin',}).then(res => {
      
    console.log('Saved successfully');
    console.log(bookItem);

    const result = this.state.names.map((nameData) => {
        console.log('nameData.id: ', nameData.id, '=== id: ', id);
        if (nameData.bookid === id) {
            updated = true;
            return bookItem;
        }
        return nameData;
    });
    console.log('updated bool: ', updated)
    if (!updated) {
        result.push(bookItem);
    }

    console.log('result: ', JSON.stringify(result));

    this.setState({
        names: result
    })
        });
        


        

        // console.log('names result');
        // console.log('names: ', this.state.names);
        // console.log('result: ', result)
    }

    render() {
        return (
            <div className="App">
                <Input onAddClick={(id, sysid, isreturn, returnid, type) => {
                    this.onAddClick(id, sysid, isreturn, returnid, type);
                }} />
                <Table names={this.state.names} />
               <Search names={this.state.names} />
            </div>
        );
    }
}

export default App;
