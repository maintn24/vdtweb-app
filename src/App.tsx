import React, { useEffect, useState } from 'react';
import './App.css';
import { EditorBox } from './Components/EditorBox';
import { Table } from './Components/Table';

interface Student {
    _id: string
    name: string;
    gender: string;
    university: string;
}

function App() {
    const [boxOpen, setBoxOpen] = useState<boolean>(false);
    const [data, setData] = useState<Student[]>([]);
    const [rowToEdit, setRowToEdit] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:2000/api/students');
                const students: Student[] = await response.json();
                setData(students);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    const handleDeleteRow = async (targetIndex: number) => {
        const rowToDelete = data[targetIndex];
        try {
            await fetch(`http://localhost:2000/api/students/${rowToDelete._id}`, {
                method: 'DELETE',
            });

            const updatedStudents = data.filter((_, key) => key !== targetIndex);
            setData(updatedStudents);
            console.log('Delete successfully!');
        } catch (e) {
            console.log(e);
        }
    };

    const handleSubmit = async (newRow: Student) => {
        if (rowToEdit === null) {
            try {
                const response = await fetch('http://localhost:2000/api/students', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newRow),
                });
                const newStudent: Student = await response.json();

                setData([...data, newStudent]);
            } catch (e) {
                console.log(e);
            }
        } else {
            try {
                const response = await fetch(
                    `http://localhost:2000/api/students/${newRow._id}`,
                    {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(newRow),
                    }
                );

                const updatedStudent: Student = await response.json();

                setData(
                    data.map((currRow, key) =>
                        key !== rowToEdit ? currRow : updatedStudent
                    )
                );
            } catch (e) {
                console.log(e);
            }
        }
    };

    const handleEditRow = (key: number) => {
        setRowToEdit(key);
        setBoxOpen(true);
    };

    return (
        <div className="App">
            <h1 className="App-header">Danh sách sinh viên Viettel Digital Talents 2024</h1>
            <h1>Lĩnh vực Cloud</h1>
            <button className="btn" onClick={() => setBoxOpen(true)}>Add</button>
            <Table data={data} deleteRow={handleDeleteRow} editRow={handleEditRow} />
            {boxOpen && (
                <EditorBox
                    closeBox={() => {
                        setBoxOpen(false);
                        setRowToEdit(null);
                    }}
                    onSubmit={handleSubmit}
                    defaultValue={rowToEdit !== null && data[rowToEdit]}
                />
            )}
        </div>
    );
}

export default App;
