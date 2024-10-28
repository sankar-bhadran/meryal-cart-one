import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../../styles/Cart.css";
import { Button, DatePicker, Flex } from "antd";
import { Drawer } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add, subtract } from "../../Features/cartSlice";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const result = useSelector((state) => {
    return state.cart.value;
  });

  const adultCount = useSelector((state) => {
    return state.cart.adultCount;
  });

  const juniorCount = useSelector((state) => {
    return state.cart.juniorCount;
  });

  const addToCart = (type) => {
    dispatch(add(type));
  };

  const subFromCart = (type) => {
    dispatch(subtract(type));
  };

  const adultTotal = useSelector((state) => {
    return state.cart.adultTotal;
  });

  const juniorTotal = useSelector((state) => {
    return state.cart.juniorTotal;
  });

  return (
    <>
      <Container>
        <div className="outer-container">
          <Container>
            <div className="cart-container">
              <div className="data common-color">
                <h1>Choose Date</h1>
              </div>
              <div className="cart-content ">
                <h4 className="common-color">All day Ticket</h4>
                <DatePicker format="DD/MM/YYYY" />
                <div className="counter">
                  <h6 className="aj-color">Adult</h6>
                  <div className="counter-div">
                    <ion-icon
                      name="person-outline"
                      class="md hydrated text-2xl"
                    ></ion-icon>
                    {adultCount === 0 ? (
                      <Button shape="circle">-</Button>
                    ) : (
                      <Button
                        shape="circle"
                        style={{ borderColor: "#9F3090" }}
                        onClick={() => subFromCart()}
                      >
                        -
                      </Button>
                    )}

                    <span>{adultCount}</span>
                    <Button
                      shape="circle "
                      style={{ borderColor: "#9F3090" }}
                      onClick={() => addToCart()}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="counter">
                  <h6 className="aj-color">Junior</h6>
                  <div className="counter-div">
                    <ion-icon
                      name="person-outline"
                      class="md hydrated text-2xl"
                    ></ion-icon>

                    {juniorCount === 0 ? (
                      <Button shape="circle">-</Button>
                    ) : (
                      <Button
                        shape="circle"
                        style={{ borderColor: "#9F3090" }}
                        onClick={() => subFromCart("junior")}
                      >
                        -
                      </Button>
                    )}

                    <span>{juniorCount}</span>
                    <Button
                      shape="circle"
                      style={{ borderColor: "#9F3090" }}
                      onClick={() => addToCart("junior")}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <button className="cart-button button-colors font-color">
                  Confirm
                  <ion-icon
                    name="arrow-forward-outline"
                    class="sm hydrated"
                  ></ion-icon>
                </button>
              </div>
            </div>
          </Container>
          <div className="fixed_button button-colors" onClick={showDrawer}>
            <div className="total-item">
              <div>
                <ion-icon
                  name="cart-outline"
                  class="meal-icon hydrated"
                ></ion-icon>
              </div>
              <h6 className="font-color">QAR {result}</h6>
            </div>
          </div>
        </div>
      </Container>
      <Drawer
        open={open}
        closable={false}
        styles={{
          body: {
            padding: 0,
          },
        }}
      >
        <div className="main-drawer">
          <div>
            <div className="cart-summary">
              <div className="cart-summary-inner">
                <span>
                  <ion-icon
                    name="cart-outline"
                    class="hydrated cart-icon"
                  ></ion-icon>
                </span>
                <h4 className="common-color">Cart Summary</h4>
              </div>
              <div>
                <ion-icon
                  name="close-circle-outline"
                  onClick={onClose}
                  class="hydrated close-icon"
                  fill
                ></ion-icon>
              </div>
            </div>
            <div className="" style={{ padding: "" }}>
              <table>
                <tr>
                  <th className="table-head cart-fonts">Ticket</th>
                  <th className="table-head cart-fonts">Qty</th>
                  <th className="table-head cart-fonts">Amount</th>
                </tr>
                <tr className="">
                  <td className="">
                    <h6 className="table-content cart-fonts">
                      <ion-icon
                        name="ticket-outline"
                        class="hydrated"
                      ></ion-icon>
                      Online Adult - 1 Day Pass
                    </h6>
                  </td>
                  <td className="table-content-1">
                    {adultCount === 0 ? (
                      <Button
                        shape="circle "
                        style={{ borderColor: "#9F3090" }}
                        size="small"
                      >
                        -
                      </Button>
                    ) : (
                      <Button
                        shape="circle "
                        style={{ borderColor: "#9F3090" }}
                        size="small"
                        onClick={() => subFromCart()}
                      >
                        -
                      </Button>
                    )}

                    <span className="text-[#9F3090]">{adultCount}</span>
                    <Button
                      shape="circle"
                      style={{ borderColor: "#9F3090" }}
                      size="small"
                      onClick={() => addToCart()}
                    >
                      +
                    </Button>
                  </td>
                  <td>
                    <span className="cart-qar">QAR {adultTotal}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="table-content cart-fonts">
                      <ion-icon
                        name="ticket-outline"
                        class="lg hydrated text-2xl   text-[#9F3090]"
                      ></ion-icon>
                      Online Junior - 1 Day Pass
                    </h6>
                  </td>
                  <td className="table-content-1  ">
                    {juniorCount === 0 ? (
                      <Button
                        shape="circle"
                        style={{ borderColor: "#9F3090" }}
                        size="small"
                      >
                        -
                      </Button>
                    ) : (
                      <Button
                        shape="circle"
                        style={{ borderColor: "#9F3090" }}
                        size="small"
                        onClick={() => subFromCart("junior")}
                      >
                        -
                      </Button>
                    )}

                    <span>{juniorCount}</span>
                    <Button
                      shape="circle"
                      style={{ borderColor: "#9F3090" }}
                      size="small"
                      onClick={() => addToCart("junior")}
                    >
                      +
                    </Button>
                  </td>
                  <td>
                    <p className="cart-qar">QAR {juniorTotal}</p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="total-box">
            <span className="total-cart">Total Cart Value</span>
            <div className="cart-box">
              <div className="cart-boxs">
                <h6>Cart Value</h6>
                <h6>QAR {result}</h6>
              </div>
              <div className="cart-boxs">
                <h6>Discount</h6>
                <h6>0.00</h6>
              </div>
              <hr />
              <div className="cart-boxs">
                <h6>Total</h6>
                <h5 className="cart-qar">QAR {result}</h5>
              </div>
            </div>
            <div className="cart-buttons">
              <button className="cartbox-button">
                Confirm
                <ion-icon
                  name="arrow-forward-outline"
                  class="hydrated"
                ></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Cart;
