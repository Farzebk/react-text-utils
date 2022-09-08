import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

function App() {
  return (
    <>
      <Navbar title="Text Utils" />
      <div className="container my-3" >
      <TextArea heading="Enter Your Text Here"/>
      </div>
    </>
  );
}
 
export default App;
