import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "../utils/axios";

const ImportantDates = () => {
  const [state, setState] = useState([]);
  const [theme, setTheme] = useState({
    themeTitle: "",
    themeSubTitle: "",
  });

  const changeHandler = (e) => {
    setTheme({
      ...theme,
      [e.target.name]: e.target.value
    });
  };

  const deleteHandler = (id) => {
    axios
      .delete(`/importantdate/delete/${id}`)
      .then((res) => {
        const data = state.filter((el) => el._id !== id);
        setState(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/importantdate/post", theme)
      .then((res) => {
        const data = [...state, res.data.response];
        setState(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setTheme({
      themeTitle: "",
      themeSubTitle: "",
    });
  };

  useEffect(() => {
    axios
      .get("/importantdate/get")
      .then((res) => {
        setState(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="importantdate">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="themeTitle"
            value={theme.themeTitle}
            placeholder="Theme"
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="themeSubTitle"
            value={theme.themeSubTitle}
            placeholder="Theme Sub Title"
            onChange={changeHandler}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {state.length ? (
        <ul className="item__ul">
          {state.map((el) => (
            <li className="item__li" key={el._id}>
              <p>{el.themeTitle}</p>
              <p>{el.themeSubTitle}</p>
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

export default ImportantDates;
