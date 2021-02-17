import React, { Component } from 'react';
import axios from 'axios'
import Input from './Input';
import Table from './Table';
import Search from './search';

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
        let updated = false;
        console.log('isreturn ' + isreturn);
        if (!id || !sysid) {
            console.log("invalid id value");
        }
        if (isreturn && !returnid) {
            alert("invalid return id value");
        }

        const bookItem = {
            booktype: booktype,
            bookid: id,
            sysid: sysid,
            return: isreturn,
            returnid: returnid
        };

        // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        axios.post(`https://master-electricals.herokuapp.com/api/items`, bookItem, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }, responseType: 'json', credentials: 'same-origin',
        }).then(res => {

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
        }).catch(function (error) {
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }

        });;
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
