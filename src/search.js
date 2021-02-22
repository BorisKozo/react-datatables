import React, { Component } from 'react';
import { Badge, Form, Button, Row, Container } from 'react-bootstrap';
import SearchTable from './searchTable';


class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fromValue: '',
            toValue: '',
            isReturn: 1,
            filteredRecords: []
        }
    }

    updateValue(fieldName, value) {
        console.log(fieldName + "  " + value);
        this.setState({
            [fieldName]: value
        })
    }

    onApplySearch = (e) => {
        e.preventDefault();
        if (!this.state.fromValue || !this.state.toValue) {
            alert("Please enter valid value for search");
        }
        if (this.state.fromValue > this.state.toValue) {
            alert("from value should be less than the to value");
        }
        // console.log("IsReturn Value " + this.state.isReturn)
        var filteredRows = [];
        for (var i = this.state.fromValue; i <= this.state.toValue; i++) {
            // eslint-disable-next-line
            var hasReturnRecord = this.props.names.filter((item) => {
                return item.bookid === i;
            });
            if (hasReturnRecord.length === 0) {
                filteredRows.push({
                    bookid: i
                })
            }
        }

        this.setState({
            filteredRecords: filteredRows
        });

        // if (this.state.isReturn === 1) {
        //     filteredRows = this.props.names.filter((item) => {
        //         console.log('curent book id ' + item.bookid);
        //         console.log('Is return ' + this.state.isReturn === 1);
        //         console.log("output :" + (this.state.fromValue <= item.bookid && this.state.toValue >= item.bookid));
        //         return this.state.fromValue <= item.bookid && this.state.toValue >= item.bookid

        //     });
        //     console.log("filtered rows : " + JSON.stringify(filteredRows))
        //     this.setState({
        //         filteredRecords: filteredRows
        //     });
        // }
        // else {
        //     for (var i = this.state.fromValue; i <= this.state.toValue; i++) {
        //         // eslint-disable-next-line
        //         var hasReturnRecord = this.props.names.filter((item) => {
        //             return item.bookid === i;
        //         });
        //         if (hasReturnRecord.length === 0) {
        //             filteredRows.push({
        //                 bookid: i,
        //             })
        //         }
        //     }

        //     this.setState({
        //         filteredRecords: filteredRows
        //     });
        // }


    }

    render() {
        return (
            <div>
                <div className="app-input">
                    <div>
                        <h2>
                            Search<Badge variant="secondary"></Badge>
                        </h2>
                    </div>
                    <div>
                        <Container>
                            <Row>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Book Type</Form.Label>
                                        <Form.Control as="select" id="bookType" value={this.state.booktype} onChange={(e) => {
                                            console.log('drop down value change: ', e.target.value)
                                            this.updateValue('booktype', e.target.value)
                                        }}>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                            <option value="E">E</option>
                                            <option value="F">F</option>
                                            <option value="G">G</option>
                                            <option value="H">H</option>
                                            <option value="I">I</option>
                                            <option value="J">J</option>
                                            <option value="K">K</option>
                                            <option value="L">L</option>
                                            <option value="M">M</option>
                                            <option value="N">N</option>
                                            <option value="O">O</option>
                                            <option value="P">P</option>
                                            <option value="Q">Q</option>
                                            <option value="R">R</option>
                                            <option value="S">S</option>
                                            <option value="T">T</option>
                                            <option value="U">U</option>
                                            <option value="V">V</option>
                                            <option value="W">W</option>
                                            <option value="X">X</option>
                                            <option value="Y">Y</option>
                                            <option value="Z">Z</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>From</Form.Label>
                                        <Form.Control type="text" placeholder="Enter From Value" onChange={(e) => {
                                            this.updateValue('fromValue', e.target.value)
                                        }} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>To</Form.Label>
                                        <Form.Control type="text" placeholder="Enter To Value" onChange={(e) => {
                                            this.updateValue('toValue', e.target.value)
                                        }} />
                                    </Form.Group>
                                    <Button variant="success" type="submit" onClick={(e) => {
                                        this.onApplySearch(e)
                                    }}>Search</Button>
                                </Form>
                            </Row>

                        </Container>
                    </div>

                    {/* <div>
                        <span>Book Type :</span>
                        <select name="bookType" id="bookType" value={this.state.booktype} onChange={(e) => {
                            console.log('drop down value change: ', e.target.value)
                            this.updateValue('booktype', e.target.value)
                        }}>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                            <option value="G">G</option>
                            <option value="H">H</option>
                            <option value="I">I</option>
                            <option value="J">J</option>
                            <option value="K">K</option>
                            <option value="L">L</option>
                            <option value="M">M</option>
                            <option value="N">N</option>
                            <option value="O">O</option>
                            <option value="P">P</option>
                            <option value="Q">Q</option>
                            <option value="R">R</option>
                            <option value="S">S</option>
                            <option value="T">T</option>
                            <option value="U">U</option>
                            <option value="V">V</option>
                            <option value="W">W</option>
                            <option value="X">X</option>
                            <option value="Y">Y</option>
                            <option value="Z">Z</option>
                        </select>
                    </div>
                    <div>
                        <span>From:</span>
                        <input type="text" onChange={(e) => {
                            this.updateValue('fromValue', e.target.value)
                        }} />
                    </div>
                    <div>
                        <span>To:</span>
                        <input type="text" onChange={(e) => {
                            this.updateValue('toValue', e.target.value)
                        }} />
                    </div>
                    <div>
                        <span>IsExists?:</span>
                        <select name="isreturn" id="isreturn" value={this.state.isReturn} onChange={(e) => {
                            console.log('drop down value change: ', e.target.value)
                            this.updateValue('isReturn', e.target.value)
                        }}>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                    </div>
                    <button onClick={() => {
                        this.onApplySearch()
                    }}>Search
                </button>
                 */}
                </div>
                <div>
                    <SearchTable names={this.state.filteredRecords} />
                </div>
            </div>
        );
    }
}


export default Search;

