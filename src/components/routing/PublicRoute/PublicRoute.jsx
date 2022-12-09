import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Search from '@views/Search/Search';
import Detail from '@views/Detail/Detail';
import Compare from '@views/Comparar/Comparar';

export default class PublicRoute extends React.Component {
    render() {
      return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Search/>}/>
                <Route path="/detail:app" element={<Detail/>}/>
                <Route path="/compare" element={<Compare/>}/>
            </Routes>
        </Router>
      );
    }
  }
