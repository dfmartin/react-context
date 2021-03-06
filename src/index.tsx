import * as React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { AppContext } from './contexts';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <AppContext.Provider value={{title: 'howdy'}}>
    <div style={styles}>
      <Hello name="CodeSandbox" />
      <h2>Start editing to see some magic happen {"\u2728"}</h2>
    </div>
  </AppContext.Provider>
);

render(<App />, document.getElementById("root"));
