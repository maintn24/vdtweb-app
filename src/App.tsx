import React from 'react';
import './App.css';
import {BsFillPencilFill, BsFillTrashFill} from "react-icons/bs";

function App() {
  /*  const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
      fetchStudents();
    }, []);

    const fetchStudents = async () => {
      //const response = await axios.get('/students');
      //setStudents(response.data);
    };

    const handleFormSubmit = () => {
      setIsFormVisible(false);
      fetchStudents();
    };*/
  const data = [
    { name: "Anom", gender: "Male", school: "UET"},
    { name: "Meghaaaaaaaaaaaaaa", gender: "Female", school: "UET"},
    { name: "Subham", gender: "Male", school: "UET"},
  ]

  return (
      <div className="App">
        <h1 className = "App-header">Danh sách sinh viên VDT2024</h1>
        <table className="table">
          <thead>
          <tr>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Trường</th>
            <th>Hành động</th>
          </tr>
          </thead>
          <tbody>
          {data.map((val, key) => {
            return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.gender}</td>
                  <td>{val.school}</td>
                  <td>
                      <span className="actions">
                          <BsFillTrashFill />
                          <BsFillPencilFill />
                      </span>
                  </td>
                </tr>
            )
          })}
          </tbody>
        </table>
      </div>
  );
}

export default App;