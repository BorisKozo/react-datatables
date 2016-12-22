import React, {Component} from 'react';
import Input from './Input';
import Table from './Table';

class App extends Component {
    constructor() {
        super();
        this.state = {
            names: []
        }
    }

    onAddClick(name, nickname) {
        let updated = false;
        const result = this.state.names.map((nameData) => {
            if (nameData.name === name) {
                updated = true;
                return {name, nickname}
            }
            return nameData;
        });
        if (!updated) {
            result.push({name, nickname});
        }

        this.setState({
            names: result
        })
    }

    render() {
        return (
            <div className="App">
                <Input onAddClick={(name, nickname) => {
                    this.onAddClick(name, nickname);
                }} />
                <Table names={this.state.names} />
            </div>
        );
    }
}

export default App;
