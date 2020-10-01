import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Landing from '../pages/Landing/index'
import CharacterList from '../pages/CharacterList/index'
import Character from '../pages/Character/index'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/characterlist" component={CharacterList} />
      <Route path="/character/:character+" component={Character} />
    </Switch>
  )
}

export default Routes;
