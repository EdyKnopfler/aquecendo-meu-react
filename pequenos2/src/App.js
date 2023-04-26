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
      <div className="Component">
        <h1>Selecione o fundo ou a imagem</h1>
        <Picture />
      </div>
      <div className="Component">
        <h1>A bicharada</h1>
        <Accordion />
      </div>
      <div className="Component">
        <h1>Position in tree</h1>
        <Tree />
      </div>
      <div className="Component">
        <h1>Resetting state</h1>
        <Scoreboard />
      </div>
      <div className="Component">
        <h1>Reducer</h1>
        <TaskApp />
      </div>
      <div className="Component">
        <h1>Context</h1>
        <Page />
      </div>
    </>
  );
}

export default App;
