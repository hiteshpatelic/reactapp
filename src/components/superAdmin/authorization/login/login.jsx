import React, {useState} from 'react'
import Joi from "joi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import axios from 'axios'
import {Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import '../../../../assets/css/superAdmin/login.css'
import logo from '../../../../assets/images/logo/logo.png'
export const Login =()=>{
    
    const [passwordType, setpasswordType] = useState("password");
    const [passwordShowHide, setpasswordShowHide] = useState("show");
    const [errors, seterrors] = useState("")
    const [displayError, setdisplayError] = useState("none")

    const [loginPassword, setloginPassword] = useState("");
    const [email, setemail] = useState("")
    let history = useHistory();

    const notify = () => toast.success('🦄 Login Succsessfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
    const errNotify = () => toast.error(errors, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });

    const handelPasswordVisibilty =()=>{
        if(passwordType === "password"){
            setpasswordType('text')
            setpasswordShowHide('hide')
        }
        if(passwordType === "text"){
            setpasswordType('password');
            setpasswordShowHide('show')
        }
    }
    const formSubmitHandler = (e)=>{
        e.preventDefault()
        const schema = Joi.object({
            email:Joi.string().email({ tlds: {allow: false} }).required(),
            loginPassword: Joi.string().required().min(8)
        })
        const result = schema.validate({ email:email, loginPassword:loginPassword });
        if(result.error){
            seterrors(result.error.details[0].message)
            setdisplayError("block")
            return
        }
        if(!result.error){
        axios
          .post("http://localhost:5000/superAdmin/login",{
              email, password:loginPassword
          })
          .then(res => {
            if(res.data.err ===0){
                notify();
                setInterval(()=>{
                    history.push("/dashboard");
                },1000)
              }
              else{
                  seterrors(res.data.message)
                  errNotify()
              }
          })
          .catch(err => console.error(err));   
        }
    }

    const inputChangeHandler =(e)=>{
        const {name, value} = e.target
        if(name === "email"){
            setemail(value)
        }
        if(name === "loginPassword"){
            setloginPassword(value)
        }
    }
    return(
        <div className="loginContainer">
            <ToastContainer />
            <div className="m-3">
                <a href="/login"> <img src={logo} alt="looginpage"/></a>
            </div>
            <Container >
                <Row className="justify-content-md-center"> 
                    <Col md="auto" >
                        <Card style={{ width: '25rem' }} className="border-light">
                            <Card.Body>
                                <Card.Title>Login Super Admin</Card.Title>
                                <Card.Subtitle className="mb-5 text-muted">Enter email & password to login</Card.Subtitle>
                                <Form onSubmit={formSubmitHandler}>
                                    <div className="alert alert-danger dark fade show" style={{display:displayError}} >
                                        {
                                            errors? <p className="mb-0" >{errors}</p>:""
                                        }
                                    </div>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name="email" value={email} onChange={inputChangeHandler} placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                        Never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type={passwordType} name="loginPassword" value={loginPassword}  onChange={inputChangeHandler} placeholder="Password" />
                                        <div className="show-hide">
                                            <span onClick={handelPasswordVisibilty}>{passwordShowHide}</span>
                                        </div>
                                    </Form.Group>
                                    <div className="d-grid mb-3">
                                        <Button variant="primary" type="submit">
                                            Login
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}