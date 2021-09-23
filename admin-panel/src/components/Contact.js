import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import ReactExport from "react-export-excel";
import { Button } from "react-bootstrap";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Contact = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get("/contact/get")
      .then((res) => {
        setState(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`/contact/delete/${id}`)
      .then(() => {
        const data = state.filter((el) => el._id !== id);
        setState(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const reverseData = [...state].reverse();

  return (
    <div>
      <ExcelFile>
        <ExcelSheet data={state} name="Employees">
          <ExcelColumn label="Name" value="name" />
          <ExcelColumn label="Phone" value="phone" />
          <ExcelColumn label="Email" value="email" />
        </ExcelSheet>
      </ExcelFile>
      {state.length ? (
        <ul className="item__ul">
          {reverseData.map((el) => (
            <li className="item__li" key={el._id}>
              <p>{el.name}</p>
              <p>{el.phone}</p>
              <p>{el.email}</p>
              <Button
                variant="danger"
                type="button"
                size="sm"
                onClick={() => deleteHandler(el._id)}
              >
                delete
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <p>There is no item</p>
      )}
    </div>
  );
};

export default Contact;
