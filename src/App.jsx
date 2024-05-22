import React, {useState} from 'react';
import './App.css';
import {EditorBox} from "./Components/EditorBox";
import {Table} from "./Components/Table";

function App() {
    const [boxOpen, setBoxOpen] = useState(false);

    const [data, setData] = useState([
        { id: 1, name: "Anom", gender: "Male", university: "UET"},
        { id: 2, name: "Meghaaaaaaaaaaaaaa", gender: "Female", university: "UET"},
        { id: 3, name: "Subham", gender: "Male", university: "UET"},
    ])

    const [rowToEdit, setRowToEdit] = useState(null);

    const handleDeleteRow = (targetIndex) => {
        setData(data.filter((_, key) => key !== targetIndex))
    }

    const handleSubmit = (newRow) => {
        rowToEdit === null ?
        setData([...data, newRow]) :
        setData(data.map((currRow, key) => {
            if (key !== rowToEdit) return currRow;
            return newRow;
        }))
    }

    const handleEditRow = (key) => {
        setRowToEdit(key);
        setBoxOpen(true);
    }

  return (
      <div className="App">
        <h1 className = "App-header">Danh sách sinh viên Viettel Digital Talents 2024</h1>
        <button className="btn" onClick={() => setBoxOpen(true)}>Add</button>
        <Table data={data} deleteRow={handleDeleteRow} editRow={handleEditRow}/>

         {boxOpen && (
             <EditorBox
                 closeBox={() => {
                     setBoxOpen(false);
                     setRowToEdit(null);
                 }}
                 onSubmit={handleSubmit}
                 defaultValue={rowToEdit != null && data[rowToEdit]}
             ></EditorBox>
         )}
      </div>
  );
}

export default App;