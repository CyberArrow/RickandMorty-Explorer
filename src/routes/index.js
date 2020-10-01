import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Landing from '../pages/Landing'
import CharacterList from '../pages/CharacterList'
import CharacterDetail from '../pages/CharacterDetail'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/characterlist" component={CharacterList} />
      <Route path="/characterdetail" component={CharacterDetail} />
    </Switch>
  )
}

export default Routes;
