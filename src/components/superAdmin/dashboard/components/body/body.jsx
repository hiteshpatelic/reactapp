import {AddAdmin} from './components/addAdmin/addAdmin';
import {ActionOnAdmin} from './components/actionOnAdmin/actionOnAdmin'
import { Email } from './components/email/email';

import { Redirect, Route} from "react-router-dom";
import React from 'react'

const Welcome = () =>{
    return(
        <h5>Welcome</h5>
    );
}

export const Body = ()=>{
    return(
        <div className="contentBody">
            <Route path="/dashboard/welcome" component={Welcome}/>
            <Route path="/dashboard/add-admin" component={AddAdmin}/>
            <Route path="/dashboard/action-om-admin" component={ActionOnAdmin}/>
            <Route path="/dashboard/email" component={Email}/>
            <Redirect from="/dashboard" to="/dashboard/welcome"/>
        </div>
    )
}