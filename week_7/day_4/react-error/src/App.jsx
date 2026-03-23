import React from "react";
import BuggyCounter from "./BuggyCounter";
import ErrorBoundary from "./ErrorBoundary";
import LifecycleDemo from "./LifecycleDemo";
import UnmountDemo from "./UnmountDemo";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial,Helvetica,sans-serif" }}>
      <h1>⚛️ React Exercises – Error Boundaries & Lifecycle</h1>

      <section style={{ marginBottom: "3rem" }}>
        <h2> Error Boundary Simulation</h2>

       
        <h3>Shared ErrorBoundary</h3>
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>

       
        <h3 style={{ marginTop: "1.5rem" }}>separate ErrorBoundaries</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
        </div>

        
        <h3 style={{ marginTop: "1.5rem" }}> ErrorBoundary</h3>
        <p style={{ color: "gray", fontStyle: "italic" }}>
          (Click the counter until it reaches 5 – the whole page will crash)
        </p>
        <BuggyCounter />
      </section>

   
      <section style={{ marginBottom: "3rem" }}>
        <h2>Updating Lifecycle Demo</h2>
        <LifecycleDemo />
      </section>

      
      <section>
        <h2>Unmounting Lifecycle Demo</h2>
        <UnmountDemo />
      </section>
    </div>
  );
}

export default App;