import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

export default class Home extends React.Component {
  render() {
    console.log('home');
    return (
      <div className="window">
        <Header />
        <Switch>
          <Route exact path="/" component={Tab1} />
          <Route path="/tab2" component={Tab2} />
          <Route path="/tab3" component={Tab3} />
          <Route path="*" component={Tab1} />
        </Switch>
      </div>
    );
  }
}
