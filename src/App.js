import { useState, useEffect } from "react";
import { Dashboard } from "./Dashboard";
import { WidgetContainer } from "./WidgetContainer";

function App() {
  const [license, setLicense] = useState("");
  const [greeting, setGreeting] = useState();

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString); // doesn't work in IE, but who cares ;)
    const license = urlParams.get("license");
    setLicense(license);
  }, []);

  useEffect(() => {
    const handleMessage = evt => {
      if ("greetingMessage" in evt.data) {
        setGreeting(evt.data.greetingMessage);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [setGreeting]);

  return (
    <div>
      {/* <Dashboard /> */}
      <WidgetContainer
        license={license}
        greeting={greeting}
      />
    </div>
  );
}

export default App;
