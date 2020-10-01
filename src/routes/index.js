import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Landing from '../pages/Landing/index'
import CharacterList from '../pages/CharacterList/index'
import CharacterDetail from '../pages/CharacterDetail/index'

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
