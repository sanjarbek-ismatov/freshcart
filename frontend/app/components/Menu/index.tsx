"use client";
import { Dropdown } from "react-bootstrap";
import React from "react";

const Menu = () => {
  return (
    <div className="d-flex my-4">
      <div className="">
        <Dropdown>
          <Dropdown.Toggle>Barcha ro`yhatlar</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Page 1</Dropdown.Item>
            <Dropdown.Item href="#">Page 2</Dropdown.Item>
            <Dropdown.Item href="#">Page 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="nav">
        <div className="nav-item">
          <Dropdown>
            <Dropdown.Toggle as="a" className="nav-link text-secondary">
              Uy
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Page 1</Dropdown.Item>
              <Dropdown.Item href="#">Page 2</Dropdown.Item>
              <Dropdown.Item href="#">Page 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="nav-item">
          <Dropdown>
            <Dropdown.Toggle as="a" className="nav-link text-secondary">
              Maxsulotlar
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Page 1</Dropdown.Item>
              <Dropdown.Item href="#">Page 2</Dropdown.Item>
              <Dropdown.Item href="#">Page 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="nav-item">
          <Dropdown>
            <Dropdown.Toggle as="a" className="nav-link text-secondary">
              Do`konlar
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Page 1</Dropdown.Item>
              <Dropdown.Item href="#">Page 2</Dropdown.Item>
              <Dropdown.Item href="#">Page 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="nav-item">
          <Dropdown>
            <Dropdown.Toggle as="a" className="nav-link text-secondary">
              Sahifalar
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Page 1</Dropdown.Item>
              <Dropdown.Item href="#">Page 2</Dropdown.Item>
              <Dropdown.Item href="#">Page 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="nav-item">
          <Dropdown>
            <Dropdown.Toggle as="a" className="nav-link text-secondary">
              Hisob
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Page 1</Dropdown.Item>
              <Dropdown.Item href="#">Page 2</Dropdown.Item>
              <Dropdown.Item href="#">Page 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="nav-item">
          <Dropdown>
            <Dropdown.Toggle as="a" className="nav-link text-secondary">
              Dashboard
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Page 1</Dropdown.Item>
              <Dropdown.Item href="#">Page 2</Dropdown.Item>
              <Dropdown.Item href="#">Page 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Menu;
