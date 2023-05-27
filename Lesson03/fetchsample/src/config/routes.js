import { Route, Routes } from "react-router-dom";
import PersonAdd from "../component/PersonAdd";
import PersonList from "../component/PersonList";
import PersonDetail from "../component/PersonDetail";
import State from "../component/State";
import Incomes from "../component/Incomes";
import Expenses from "../component/Expenses";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/State/" element={<div><State /></div> }/>
      <Route path="/State/Incomes" element={ <div> <State /> <Incomes /></div>} />
      <Route path="/State/Expenses" element={<div><State /> <Expenses /></div> }/> */}
      <Route path="/State">
        <Route path=":stateId" element={<div><State /></div>}/>
        <Route path="Incomes" element={<div><Incomes/></div>}/>
        <Route path="Expenses" element={<div><Expenses/></div>}/>
      </Route>
      <Route path="/Book/*" element={<h1>All of them with *</h1>} />
      <Route path="/" element={<h1>Main Page with /(slash)</h1>} />
      <Route index element={<h1>Main Page with Index Props</h1>} />
      <Route path="/Link1" element={<h1>Link1 Page</h1>} />
      <Route path="/Link1" element={<h1>Link1 Page but Second</h1>} />
      <Route path="/Link2" element={<h1>Link2 Page</h1>} />
      <Route path="/ActiveLink" element={<h1>Active Link Test Page</h1>} />
      <Route path="/PersonList" element={<PersonList />} />
      <Route path="/PersonAdd" element={<PersonAdd />} />
      <Route
        path="/PersonAll"
        element={
          <>
            <h1>All Elements</h1>
            <PersonList />
            <PersonAdd />
          </>
        }
      />
      <Route path="PersonDetail/:personId" element={<PersonDetail />}></Route>
      <Route
        path="*"
        element={
          <h1>
            There's nothing here!
            <br />
            <b>404 not found.</b>
          </h1>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
