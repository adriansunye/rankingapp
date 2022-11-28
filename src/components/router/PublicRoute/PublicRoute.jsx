import React from 'react';
import Footer from '@components/layout/navegation/Footer/Footer';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";



export default class PublicRoute extends React.Component {
    render() {
      return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Footer/>}/>
                
            </Routes>
        </Router>
      );
    }
    

    }
