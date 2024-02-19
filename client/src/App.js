import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import TextEditor from './components/TextEditor';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="texteditor" element={<TextEditor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
