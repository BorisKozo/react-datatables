import React, { Component } from 'react';
import { Badge, Form, Button, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

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
        this.setState({ adminpin: 0 })
        this.setState({ loginValidate: false })
    }

    updateValue(fieldName, value) {
        this.setState({
            [fieldName]: value
        })
    }

    onAddClick(e) {
        e.preventDefault();
        console.log('this.onAddClick method call inside');
        this.props.onAddClick(parseInt(this.state.id, 10), parseInt(this.state.sysid, 10), this.state.isreturn, (this.state.returnid === "" || this.state.returnid === String.empty) ? "" : parseInt(this.state.returnid, 10), this.state.booktype);
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
                    <Container>
                        <Row>
                            <Form className="alignCenter">
                                <Form.Group controlId="formAdminPin" className={!this.state.loginValidate ? 'displayBlock' : 'displayNone'}>
                                    <Form.Label>Admin PIN</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Admin PIN" onChange={(e) => {
                                        console.log('Admin PIN value change: ', e.target.value)

                                        this.updateValue('adminpin', e.target.value)
                                    }} />
                                </Form.Group>

                                <Form.Group controlId="formButtonLogin">
                                    <Button className={!this.state.loginValidate ? 'displayBlock' : 'displayNone'} variant="info" type="submit" onClick={(e) => {
                                        e.preventDefault();
                                        console.log('button click: ')
                                        console.log('this.state.loginValidate: ', this.state.loginValidate)
                                        var loginCheck = parseInt(this.state.adminpin, 10) === parseInt('9524444849', 10) ? true : false;
                                        console.log('loginCheck: ', loginCheck);
                                        this.setState({ loginValidate: loginCheck });
                                        loginCheck ? alert('Login Success') : alert('Wrong Admin PIN. Login Failure')
                                        console.log('this.state.loginvalidate: ', this.state.loginValidate)
                                    }}>Login</Button>
                                </Form.Group>

                                <Form.Group controlId="formBookType" className={this.state.loginValidate ? 'displayBlock' : 'displayNone'}>
                                    <Form.Label>Book Type</Form.Label>
                                    <Form.Control as="select" onChange={(e) => {
                                        console.log('booktype select value change: ', e.target.value)
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
                                <Form.Group controlId="formBookId" className={this.state.loginValidate ? 'displayBlock' : 'displayNone'}>
                                    <Form.Label>Book Id</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Book Id" onChange={(e) => {
                                        console.log('bookid value change: ', e.target.value)
                                        this.updateValue('id', e.target.value)
                                    }} />
                                </Form.Group>
                                <Form.Group controlId="formSysId" className={this.state.loginValidate ? 'displayBlock' : 'displayNone'}>
                                    <Form.Label>Sys Id</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Sys Id" onChange={(e) => {
                                        console.log('sysid value change: ', e.target.value)
                                        this.updateValue('sysid', e.target.value)
                                    }} />
                                </Form.Group>
                                <Form.Group controlId="formIsReturn" className={this.state.loginValidate ? 'displayBlock' : 'displayNone'}>
                                    <Form.Label>Is Return?</Form.Label>
                                    <Form.Control as="select" onChange={(e) => {
                                        console.log('is return value change: ', e.target.value)
                                        this.updateValue('isreturn', e.target.value)
                                    }}>
                                        <option value="0">No</option>
                                        <option value="1">Yes</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formReturnId" className={this.state.isreturn ? 'displayBlock' : 'displayNone'}>
                                    <Form.Label>Return Id</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Return Id" onChange={(e) => {
                                        console.log('returnid value change: ', e.target.value)
                                        this.updateValue('returnid', e.target.value)
                                    }} />
                                </Form.Group>

                                <Button className={this.state.loginValidate ? 'displayBlock' : 'displayNone'} variant="info" type="submit" onClick={(e) => {
                                    e.preventDefault();
                                    console.log('loginValidate button click')
                                    this.onAddClick(e)
                                }}>Add</Button>
                            </Form>
                        </Row>
                    </Container>

                </div>
            </div>
        );
    }
}

export default Input;

