import React, {Component} from 'react';


class Input extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            nickname: ''
        }
    }

    updateValue(fieldName, value) {
        this.setState({
            [fieldName]: value
        })
    }

    onAddClick() {
        this.props.onAddClick(this.state.name, this.state.nickname);
    }

    render() {
        return (
            <div className="app-input">
                <div>
                    <span>Name:</span>
                    <input type="text" onChange={(e) => {
                        this.updateValue('name', e.target.value)
                    }} />
                </div>
                <div>
                    <span>Nickname:</span>
                    <input type="text" onChange={(e) => {
                        this.updateValue('nickname', e.target.value)
                    }} />
                </div>
                <button onClick={() => {
                    this.onAddClick()
                }}>Add
                </button>
            </div>
        );
    }
}

Input.PropTypes = {
    onAddClick: React.PropTypes.func
};

export default Input;

