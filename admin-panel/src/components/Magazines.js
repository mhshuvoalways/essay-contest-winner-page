import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "../utils/axios";

const Magazines = () => {
  const [state, setState] = useState([]);
  const [linkBody, setLinkBody] = useState({ link: "" });
  const [postImg, setpostImg] = useState({ image: null });

  const changeHandler = (value) => {
    setLinkBody({ body: value });
  };

  const fileHandler = (e) => {
    setpostImg({ image: e.target.files[0] });
  };

  const deleteHandler = (id) => {
    axios
      .delete(`/magazine/delete/${id}`)
      .then((res) => {
        const data = state.filter((el) => el.public_id !== id);
        setState(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("image", postImg.image);
    fd.append("link", linkBody.link);
    axios
      .post("/magazine/post", fd)
      .then((res) => {
        const data = [...state, res.data.response];
        setState(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setLinkBody({ link: "" });
  };

  useEffect(() => {
    axios
      .get("/magazine/get")
      .then((res) => {
        setState(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.click();
  };

  return (
    <div className="importantdate">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Link"
            value={linkBody.link}
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="file"
            className="d-none"
            ref={inputEl}
            onChange={fileHandler}
          />
        </Form.Group>
        <Button
          className="w-100 mb-3"
          variant="primary"
          type="button"
          onClick={onButtonClick}
        >
          Choose image
        </Button>
        <Button variant="primary" type="submit">
          Upload
        </Button>
      </Form>
      {state.length ? (
        <ul className="item__ul">
          {state.map((el) => (
            <li className="item__li" key={el._id}>
              <img src={el.url} alt="" className="item__li-img" />
              <Button
                variant="danger"
                type="button"
                onClick={() => deleteHandler(el.public_id)}
              >
                delete
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <p>There is no image</p>
      )}
    </div>
  );
};

export default Magazines;
