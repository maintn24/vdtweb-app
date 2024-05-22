import React from "react"
import "./Table.css";
import {BsFillPencilFill, BsFillTrashFill} from "react-icons/bs";

// @ts-ignore
export const Table = ({data, deleteRow}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>TT</th>
                <th>Họ và tên</th>
                <th>Giới tính</th>
                <th>Trường</th>
                <th>Hành động</th>
            </tr>
            </thead>
            <tbody>
            {data.map((val: { id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; gender: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; school: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, key: React.Key | null | undefined) => {
                return (
                    <tr key={key}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.gender}</td>
                        <td>{val.school}</td>
                        <td>
                      <span className="actions">
                          <BsFillTrashFill className="delete-btn" onClick={() => deleteRow(key)}/>
                          <BsFillPencilFill />
                      </span>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};