import "./App.css";
import PagAgeGets from "./Pags/pagAgeGet";
import PagGetCat from "./Pags/pagGetCat";
import PagYoungGet from "./Pags/pagYoungCat";

function App() {
  return (
    <>
      <div className="principal-pag">
        <div className="group-card">
          <PagGetCat />
          <PagAgeGets />
          <PagYoungGet />
        </div>
      </div>
    </>
  );
}

export default App;
