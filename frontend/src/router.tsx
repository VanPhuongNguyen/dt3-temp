import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import LoadingSreen from 'components/LoadingScreen';
import Auth from 'components/Auth'
import Layout from 'components/Layout';

const HomePage = lazy(() => import('pages/Home'));
const RegisterLogin = lazy(() => import('pages/RegisterLogin'))

export default (
  <Layout>
    <Suspense fallback={<LoadingSreen />}>
      <Switch>
          <Route exact path="/" component={Auth(HomePage, null)} />
          <Route exact path="/registerLogin" component={Auth(RegisterLogin, false)} />
      </Switch>
    </Suspense>
  </Layout>
);
