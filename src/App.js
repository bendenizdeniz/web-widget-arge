import { Dashboard } from "./Dashboard";
import { WidgetContainer } from "./WidgetContainer";

function App() {
  return (
    <div>
      {/* <Dashboard /> */}
      <WidgetContainer
        licanse={"1234"}
        greeting={"Welcome Sahir Ercoban! How we can help you?"} />
    </div>
  );
}

export default App;
