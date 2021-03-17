import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import axios from 'axios'
import Input from './Input';
import Table from './Table';
import Search from './search';
import './index.css';

class App extends Component {
    constructor(props) {
        super(props);
        // var itemsList = [{ id: 1, sysid: 14626, isreturn: 0, returnid: "" },
        // { id: 2, sysid: 14627, isreturn: 0, returnid: "" }];
        // this.state = {
        //     names: itemsList
        // };

        this.state = {
            names: []
        };
    }
    componentDidMount() {
        console.log('App.js componentDidMount')
        this.getItems();
    }

    getItems = function () {
        console.log('getItems function call');
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        axios.get(`https://master-electricals.herokuapp.com/api/items`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }, responseType: 'json', credentials: 'same-origin',
        }).then(res => {
            const billItems = res.data;
            console.log("call success ")
            console.log(JSON.stringify(billItems))
            this.setState({ names: billItems });
        }).catch(function (error) {
            console.log('Error in fetching the items: ', error);
        })
    }

    onAddClick = function (id, sysid, isreturn, returnid, booktype) {
        var bookItem;
        console.log('onAddClick inside app.js');
        console.log('id', id, 'sysid', sysid, 'isreturn', isreturn, 'returnid', returnid, 'booktype', booktype)
        let updated = false;
        console.log('isreturn ' + isreturn);
        if (!id) {
            console.log("invalid id value");
            return;
        }

        bookItem = JSON.stringify({
            booktype: booktype,
            bookid: id,
            sysid: sysid,
            return: isreturn,
            returnid: returnid
        });

        console.log('bookitem value: ', bookItem)
        console.log('bookItem value - JSON stringify: ', JSON.stringify(bookItem));
        console.log('bookItem value - JSON stringify: ', JSON.parse(bookItem));

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
            result.push(JSON.parse(bookItem));
        }
        console.log('result: ', JSON.stringify(result));
        this.setState({
            names: result
        })
        console.log('this.state.names: ', this.state.names);

        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post(`https://master-electricals.herokuapp.com/api/items`, bookItem, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
            , responseType: 'json', credentials: 'same-origin',
        }).then(res => {
            console.log('res: ', res);
            console.log('Saved successfully in post access');
            console.log(bookItem);
        }).catch(function (error) {
            console.log('error in post')
            if (error.response) {
                console.log('error in post - Request made and server responded')// Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log('error in post - The request was made but no response was received')// The request was made but no response was received
                console.log(error.request);
            } else {
                console.log('error in post - Something happened in setting up the request that triggered an Error')// Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
        });
    }

    render() {
        return (
            <div className="App">
                <Input onAddClick={(id, sysid, isreturn, returnid, type) => {
                    this.onAddClick(id, sysid, isreturn, returnid, type);
                }} />
                <div className="alignRight">
                    <Button variant="secondary" type="submit" onClick={(e) => {
                        console.log('Refresh button click: ')
                        this.getItems(e)
                    }}>Refresh Table</Button>
                </div>

                <Table names={this.state.names} />
                <Search names={this.state.names} />
            </div>
        );
    }
}

export default App;
