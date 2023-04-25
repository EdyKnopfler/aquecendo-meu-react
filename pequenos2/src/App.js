import ShouldComponentUpdateSample from "./components/shouldComponentUpdate";
import QueueingStateUpdates from "./components/queueingStateUpdates";
import MovingDot from "./components/mutation";
import Form from "./components/form";
import FormWithImmer from "./components/updatesWithImmer";
import BucketList from "./components/arraysOfObjects";

function App() {
  return (
    <>
      <div className="Component">
        <h1><code>shouldComponentUpdate</code> hook</h1>
        <ShouldComponentUpdateSample />
      </div>
      <div className="Component">
        <h1>Queueing state updates</h1>
        <QueueingStateUpdates />
      </div>
      <div className="Component">
        <h1>Updating objects</h1>
        <MovingDot />
      </div>
      <div className="Component">
        <h1>Updating form objects</h1>
        <Form />
      </div>
      <div className="Component">
        <h1>Form with Immer library</h1>
        <FormWithImmer />
      </div>
      <div className="Component">
        <h1>Arrays of objects</h1>
        <BucketList />
      </div>
    </>
  );
}

export default App;
