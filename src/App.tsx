import React, {useEffect, useState} from 'react';
import './App.css';
import {EditorBox} from "./Components/EditorBox";
import {Table} from "./Components/Table";


function App() {
    const [boxOpen, setBoxOpen] = useState(false);

    const [data, setData] = useState([])

    const [rowToEdit, setRowToEdit] = useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const response = await fetch("http://localhost:2000/api/students");
                const students = await response.json();
                setData(students);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);

    const handleDeleteRow = async (targetIndex) => {
        const rowToDelete = data[targetIndex];
        try {
            await fetch(
                `http://localhost:2000/api/students/${rowToDelete._id}`,
                {
                    method: "DELETE",
                }
            );

            const updatedStudents = data.filter((_, key) => key !== targetIndex); // return the updated list
            setData(updatedStudents);
            console.log("Delete successfully!")
        } catch (e) {
            console.log(e);
        }
    }

    const handleSubmit = async (newRow) => {
        if (rowToEdit === null) {
            try {
                const response = await fetch(
                    "http://localhost:2000/api/students",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newRow),
                    }
                );
                const newStudent = await response.json();

                setData([...data, newStudent])

            } catch (e) {
                console.log(e);
            }
        }
        else {
            // Handle the PUT request for updating an existing row
            try {
                const response = await fetch(
                    `http://localhost:2000/api/students/${newRow._id}`, // Assuming the newRow object contains an id property
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newRow),
                    }
                );

                const updatedStudent = await response.json();

                setData(data.map((currRow, key) => {
                    if (key !== rowToEdit) return currRow;
                    else {
                        return updatedStudent;
                    }
                }));
            } catch (e) {
                console.log(e);
            }
        }
    }


    const handleEditRow = (key) => {
        setRowToEdit(key);
        setBoxOpen(true);
    }

  return (
      <div className="App">
        <h1 className = "App-header">Danh sách sinh viên Viettel Digital Talents 2024</h1>
          <h1>Lĩnh vực Cloud</h1>
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