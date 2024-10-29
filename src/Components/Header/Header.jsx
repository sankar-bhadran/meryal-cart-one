import React, { useState } from "react";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "../../styles/header.css";
import { Drawer } from "antd";

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
        <h2>Header</h2>
        <div className="header-content">
          <h5>Waker Park</h5>
          <h5>RIG 193</h5>
          <h5>Rides & Slides</h5>
          <h5>Dining & Shipping</h5>
          <h5>Special Offers Events</h5>
        </div>
        <button class="btn-mobile-nav" onClick={showDrawer}>
          <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
          {/* <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon> */}
        </button>

        <div className="header-icons">
          <Dropdown
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: ["3"],
            }}
          >
            <Space>
              EN
              <DownOutlined />
            </Space>
          </Dropdown>

          <ion-icon
            name="person-circle-outline"
            class="hydrated person-icon"
          ></ion-icon>
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
