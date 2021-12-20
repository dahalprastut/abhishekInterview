import { Routes, Route } from "react-router-dom";
import ListPage from "./components/ListPage";
import DetailPage from "./components/DetailPage";
import "./css/style.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={<ListPage />}
        />
        <Route
          path="/:id"
          render={props => (
            <DetailPage {...props} />
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
