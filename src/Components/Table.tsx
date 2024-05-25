import React from "react";
import "./Table.css";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

interface Student {
    _id: string;
    name: string;
    gender: string;
    university: string;
    // Add other properties as needed
}

interface TableProps {
    data: Student[];
    deleteRow: (index: number) => void;
    editRow: (index: number) => void;
}

export const Table: React.FC<TableProps> = ({ data, deleteRow, editRow }) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>TT</th>
                <th>Họ và tên</th>
                <th>Giới tính</th>
                <th>Trường đang theo học</th>
                <th>Hành động</th>
            </tr>
            </thead>
            <tbody>
            {data.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{val.name}</td>
                        <td>{val.gender}</td>
                        <td>{val.university}</td>
                        <td>
                <span className="actions">
                  <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(key)}
                  />
                  <BsFillPencilFill onClick={() => editRow(key)} />
                </span>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};
