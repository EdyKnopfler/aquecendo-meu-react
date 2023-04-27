import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import ShouldComponentUpdateSample from "./components/shouldComponentUpdate";
import QueueingStateUpdates from "./components/queueingStateUpdates";
import MovingDot from "./components/mutation";
import Form from "./components/form";
import FormWithImmer from "./components/updatesWithImmer";
import BucketList from "./components/arraysOfObjects";
import Picture from "./components/pegadinha";
import Accordion from "./components/sharedState";
import Tree from "./components/positionInTree";
import Scoreboard from "./components/resettingState";
import TaskApp from "./components/reducer";
import Page from "./components/context";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shouldComponentUpdate"><code>shouldComponentUpdate</code> hook</Link></li>
          <li><Link to="/queueingStateUpdates">Queueing state updates</Link></li>
          <li><Link to="/updatingObjects">Updating objects</Link></li>
          <li><Link to="/updatingFormObjects">Updating form objects</Link></li>
          <li><Link to="/formWithImmer">Form with Immer library</Link></li>
          <li><Link to="/arraysOfObjects">Arrays of objects</Link></li>
          <li><Link to="/eventPropagation">Event propagation</Link></li>
          <li><Link to="/liftingStatesUp">Lifting states up</Link></li>
          <li><Link to="/positionInTree">Position in tree</Link></li>
          <li><Link to="/resettingState">Resetting state</Link></li>
          <li><Link to="/reducer">Reducer</Link></li>
          <li><Link to="/context">Context</Link></li>
        </ul>
      </nav>
      <div className="Component">
        <Routes>
          <Route exact path="/" />
          <Route path="/shouldComponentUpdate" element={<ShouldComponentUpdateSample />} />
          <Route path="/queueingStateUpdates" element={<QueueingStateUpdates />} />
          <Route path="/updatingObjects" element={<MovingDot />} />
          <Route path="/updatingFormObjects" element={<Form />} />
          <Route path="/formWithImmer" element={<FormWithImmer />} />
          <Route path="/arraysOfObjects" element={<BucketList />} />
          <Route path="/eventPropagation" element={<Picture />} />
          <Route path="/liftingStatesUp" element={<Accordion />} />
          <Route path="/positionInTree" element={<Tree />} />
          <Route path="/resettingState" element={<Scoreboard />} />
          <Route path="/reducer" element={<TaskApp />} />
          <Route path="/context" element={<Page />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
