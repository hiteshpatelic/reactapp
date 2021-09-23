import axios from 'axios';
import React , { useState, useEffect }from 'react'
import {Button,Card, InputGroup, Row, Col,  Form , FormControl} from 'react-bootstrap'

const countryCodeList = []

export const AddAdmin = () =>{
    const [firstName, setfirstName] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [countryCode, setcountryCode] = useState("Country Code")
    const [phone, setphone] = useState("")

    const handelContryCode = (e)=>{
        setcountryCode(e.target.innerHTML)
    }
    const formSubmitHandler= (e)=>{
        e.preventDefault();
    }

    return(
        <div className="addAdmin">
            <Card border="primary" style={{ width: '35rem' }}>
                <Card.Body>
                    <h3 className="mb-4 blue">Create new admin</h3>
                    <Form onSubmit={formSubmitHandler}>
                        <Form.Group className="mb-3" >
                            <Form.Label style={{fontWeight:700}}>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter admin first name..." />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label style={{fontWeight:700}}>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter admin Last name..." />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label style={{fontWeight:700}}>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter admin email..." />
                        </Form.Group>
                        <Row className="align-items-center mb-4">
                            <Form.Label style={{fontWeight:700}}>Phone</Form.Label>
                            <Col xs="auto" className="my-1">
                            <Form.Label
                                className="me-sm-2"
                                htmlFor="inlineFormCustomSelect"
                                visuallyHidden
                            >
                                Preference
                            </Form.Label>
                            <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                <option value="0">Choose...</option>
                                {
                                    countryCodeList.map(e=>{
                                        return <option key={e.code} onClick={handelContryCode} value={e.code}>{e.code}</option>
                                    })
                                }
                            </Form.Select>
                            </Col> 
                            <Col  className="my-1">
                                <Form.Control type="number" placeholder="Enter admin email..." />

                            </Col> 
                        </Row>
                        <div className="d-grid mb-3">
                            <Button variant="primary" type="submit">
                                Create Admin
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}