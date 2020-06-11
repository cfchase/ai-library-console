import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const AppList = lazy(() => import("../../main/AppList"));
const AppDetail = lazy(() => import("../../main/AppDetail"));
const NotFound = lazy(() => import("../../main/NotFound"));

export const Routes = () => (
  <Suspense
    fallback={
      <div className="route-loading">
        <h1>Loading...</h1>
      </div>
    }
  >
    <Switch>
      <Route path="/" exact render={() => <Redirect to={"/apps"} />} />

      <Route path="/apps" exact component={AppList} />
      <Route path="/apps/:id" exact component={AppDetail} />

      <Route component={NotFound} />
    </Switch>
  </Suspense>
);
