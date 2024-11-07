import React, { useState } from "react";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "../../styles/header.css";
import { Drawer } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const items = [
    {
      key: "1",
      label: "English",
    },
    {
      key: "2",
      label: "Arabic",
    },
    {
      key: "3",
      label: "  Russian",
    },
  ];
  return (
    <>
      <div className="header">
        <Link to="/" className="header-link">
          <h3>Meryal</h3>
        </Link>
        <button class="btn-mobile-nav" onClick={showDrawer}>
          <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
          {/* <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon> */}
        </button>

        <div className="header-icons">
          <Link to="/buy" className="header-link">
            <h5>Cart</h5>
          </Link>
          <Link to="/seasonpass" className="header-link">
            <h5>Sesason Pass</h5>
          </Link>
          <Link to="/special" className="header-link">
            <h5>Special Offers</h5>
          </Link>
          <Dropdown
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: ["3"],
            }}
            className="large-dropdown"
          >
            <Space className="large-dropdown">
              EN
              <DownOutlined />
            </Space>
          </Dropdown>

          <Link to="/signup" className="header-link">
            <ion-icon
              name="person-circle-outline"
              class="hydrated person-icon"
            ></ion-icon>{" "}
          </Link>
        </div>
      </div>
      <Drawer
        open={open}
        closable={false}
        styles={{
          body: {
            // padding: 0,
          },
        }}
      >
        <div className="header-menu">
          <div className="header-close-icon">
            <ion-icon
              name="close-circle-outline"
              onClick={onClose}
              class="hydrated close-icon"
              fill
            ></ion-icon>
          </div>
          <div className="header-menu-content">
            <h4 className="arrow">
              <ion-icon
                name="arrow-forward-outline"
                class="arrow-icon"
              ></ion-icon>
              Waker Park
            </h4>
            <h4 className="arrow">
              {" "}
              <ion-icon
                name="arrow-forward-outline"
                class="arrow-icon"
              ></ion-icon>
              RIG 193
            </h4>
            <h4 className="arrow">
              <ion-icon
                name="arrow-forward-outline"
                class="arrow-icon"
              ></ion-icon>
              Rides & Slides
            </h4>
            <h4 className="arrow">
              {" "}
              <ion-icon
                name="arrow-forward-outline"
                class="arrow-icon"
              ></ion-icon>
              Dining & Shipping
            </h4>
            <h4 className="arrow">
              <ion-icon
                name="arrow-forward-outline"
                class="arrow-icon"
              ></ion-icon>
              Special Offers Events
            </h4>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
