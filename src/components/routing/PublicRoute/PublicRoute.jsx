import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Index from '@views/Index/Index';
import Detail from '@views/Detail/Detail';


export default class PublicRoute extends React.Component {
    render() {
      return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Index/>}/>
                <Route path="/detail:app" element={<Detail/>}/>
            </Routes>
        </Router>
      );
    }
  }
