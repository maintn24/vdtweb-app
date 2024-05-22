import React, {useState} from 'react';
import './App.css';
import {EditorBox} from "./Components/EditorBox";
import {Table} from "./Components/Table";

function App() {
  const [boxOpen, setBoxOpen] = useState(false);

    const [data, setData] = useState([
        { id: 1, name: "Anom", gender: "Male", school: "UET"},
        { id: 2, name: "Meghaaaaaaaaaaaaaa", gender: "Female", school: "UET"},
        { id: 3, name: "Subham", gender: "Male", school: "UET"},
    ])

    // @ts-ignore
    const handleDeleteRow = (targetIndex) => {
        setData(data.filter((_, key) => key !== targetIndex))
    }

    const handleSubmit = (newRow: { id: number; name: string; gender: string; school: string; }) => {
        setData([...data, newRow]);
    }

  return (
      <div className="App">
        <h1 className = "App-header">Danh sách sinh viên VDT2024</h1>
        <Table data={data} deleteRow={handleDeleteRow}/>
        <button className="btn" onClick={() => setBoxOpen(true)}>Add</button>
         {boxOpen && (
             <EditorBox
                 closeBox={() => {
                     setBoxOpen(false);
                 }}
                 onSubmit={handleSubmit}></EditorBox>
         )}
      </div>
  );
}

export default App;