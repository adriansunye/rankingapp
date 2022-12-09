import React from 'react'
import './App.scss';


import PublicRoute from '@components/routing/PublicRoute/PublicRoute';


/* -----START componente de pop-up valoracion --- */
import { useState } from 'react';


import Apps from "@store/objects/appsEs"
import Opinions from "@store/opinions/opinions"


function App() {

  const [data] = useState(Apps.data.apps || []);
  if (!localStorage.getItem("data")) {
    for (const obj of data) {
      obj.opinions = Opinions;
      obj.type = Math.floor(Math.random() * 3);
      if (obj.reviews_per_rating) {
        const a = obj.reviews_per_rating["1"];
        const b = obj.reviews_per_rating["2"];
        const c = obj.reviews_per_rating["3"];
        const d = obj.reviews_per_rating["4"];
        const e = obj.reviews_per_rating["5"];
      
        const R = a + b + c + d + e;
      
        const AR = (1 * a + 2 * b + 3 * c + 4 * d + 5 * e) / R;
        obj.avgRating = AR.toFixed(2)
      }
    }
    localStorage.setItem("data", JSON.stringify(data))
  }

    
  return (
    <>
      <PublicRoute />
    </>
  );
}

export default App;