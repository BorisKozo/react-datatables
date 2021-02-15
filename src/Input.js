import React, { Component } from 'react';


class Input extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
            sysid: '',
            isreturn: 0,
            returnid: ''
        }
    }

    updateValue(fieldName, value) {
        this.setState({
            [fieldName]: value
        })
    }

    onAddClick() {
        console.log('onAddClick line 23')
        this.props.onAddClick(parseInt(this.state.id, 10), parseInt(this.state.sysid, 10), this.state.isreturn, parseInt(this.state.returnid, 10));
    }

    render() {
        return (
            <div className="app-input">
                <div>
                    <span>Id:</span>
                    <input type="text" onChange={(e) => {
                        this.updateValue('id', e.target.value)
                    }} />
                </div>
                <div>
                    <span>SysId:</span>
                    <input type="text" onChange={(e) => {
                        this.updateValue('sysid', e.target.value)
                    }} />
                </div>
                <div>
                    <span>IsReturn?:</span>
                    <select name="isreturn" id="isreturn" value={this.state.isreturn} onChange={(e) => {
                        console.log('drop down value change: ', e.target.value)
                        this.updateValue('isreturn', e.target.value)
                    }}>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </div>
                <div>
                    <span>ReturnId:</span>
                    <input type="text" onChange={(e) => {
                        this.updateValue('returnid', e.target.value)
                    }} />
                </div>
                <button onClick={() => {
                    this.onAddClick()
                }}>Add
                </button>
                <div>
                    <span>Search Input:</span>
                    <input type="text" id="searchInput" />
                </div>
            </div>
        );
    }
}

Input.PropTypes = {
    onAddClick: React.PropTypes.func
};

export default Input;

