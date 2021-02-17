import React, { Component } from 'react';
import { Badge, Form, Button, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Input extends Component {

    constructor() {
        super();
        this.state = {
            booktype: 'A',
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
        this.props.onAddClick(parseInt(this.state.id, 10), parseInt(this.state.sysid, 10), this.state.isreturn, parseInt(this.state.returnid, 10), this.state.booktype);
    }

    render() {
        return (
            <div className="app-input">
                <div>
                    <h1>
                        Master Electricals<Badge variant="secondary"></Badge>
                    </h1>
                </div>
                <div>
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

                <div>
                    <Container>
                        <Row>
                            <Form>
                                <Form.Group controlId="formBookType">
                                    <Form.Label>Book Type</Form.Label>
                                    <Form.Control as="select">
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
                                <Form.Group controlId="formBookId">
                                    <Form.Label>Book Id</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Book Id" onChange={(e) => {
                                        this.updateValue('id', e.target.value)
                                    }} />
                                </Form.Group>
                                <Form.Group controlId="formSysId">
                                    <Form.Label>Sys Type</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Sys Type" />
                                </Form.Group>
                                <Form.Group controlId="formIsReturn">
                                    <Form.Label>Is Return?</Form.Label>
                                    <Form.Control as="select">
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formReturnId">
                                    <Form.Label>Return Id</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Return Id" />
                                </Form.Group>

                                <Button variant="primary" type="submit">Add</Button>
                            </Form>
                        </Row>
                    </Container>

                </div>
            </div>
        );
    }
}

export default Input;

