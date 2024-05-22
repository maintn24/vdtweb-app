import React from "react"
import "./Table.css";
import {BsFillPencilFill, BsFillTrashFill} from "react-icons/bs";

// @ts-ignore
export const Table = ({data, deleteRow, editRow}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Full name</th>
                <th>Gender</th>
                <th>University</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {data.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.gender}</td>
                        <td>{val.university}</td>
                        <td>
                      <span className="actions">
                          <BsFillTrashFill className="delete-btn" onClick={() => deleteRow(key)}/>
                          <BsFillPencilFill onClick={() => editRow(key)}/>
                      </span>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};