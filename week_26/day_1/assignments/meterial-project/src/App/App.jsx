import React from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../Dashboard";
import { DataTable } from "../Orders";

import { SiteLayout } from "./Components/SiteLayout";

function App() {
  return (
    <>
      <SiteLayout>
        
          <Route path="/" exact render={() => <Dashboard />} />
          <Route path="/orders" exact render={() => <DataTable/>} />
       
        
          
      
      </SiteLayout>
    </>
  );
}

export { App };
