
import React from "react";
import Header from "./Header";
import ColumnLeft from "./columns/ColumnLeft";
import ColumnRight from "./columns/ColumnRight";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="container-fluid">
      <Header />

      <div className="row">
      
        <div className="col-md-6">
          <ColumnLeft />
        </div>

        <div className="col-md-6">
          <ErrorBoundary>
            <ColumnRight />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default App;