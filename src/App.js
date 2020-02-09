import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './layout/components/Layout';

import Parameters from './parameters/pages/Parameters';
import ParameterNew from './parameters/components/ParameterNew';
import NotFound from './parameters/pages/Parameters';

function App(){

  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/parameters" component={Parameters} />
          <Route exact path="/parameters/new" component={ParameterNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
