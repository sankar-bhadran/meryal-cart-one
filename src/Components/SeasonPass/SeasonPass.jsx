import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/seasonPass.css";
import SeasonPassImage from "../../Assets/alghazal-8457.jpg";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { addPass, subPass } from "../../Features/seasonPassSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const SeasonPass = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.seasonPass.seasonPass;
  });

  const count = useSelector((state) => {
    return state.seasonPass.count;
  });

  if (count >= 8) {
    toast("Only 8 Season Pass Can Buy");
  }

  const addPasses = () => {
    dispatch(addPass());
  };

  const subPasses = () => {
    dispatch(subPass());
  };

  return (
    <>
      <Container>
        <div className="container ">
          <main>
            <div>
              <img src={SeasonPassImage} alt="" className="seasonPassImage" />
            </div>
            <div className="boxone">
              <div className="innerbox">
                <div className="innerboxOne">
                  <h5>Three Months Pass</h5>
                  <div className="counter-div">
                    <span>Select Number of Pass</span>
                    <ion-icon
                      name="person-outline"
                      class="md hydrated text-2xl"
                    ></ion-icon>
                    {count === 0 ? (
                      <Button shape="circle" style={{ borderColor: "#9F3090" }}>
                        -
                      </Button>
                    ) : (
                      <Button
                        shape="circle"
                        style={{ borderColor: "#9F3090" }}
                        onClick={subPasses}
                      >
                        -
                      </Button>
                    )}

                    <span>{count}</span>
                    {count >= 8 ? (
                      <Button shape="circle" style={{ borderColor: "#9F3090" }}>
                        +
                      </Button>
                    ) : (
                      <Button
                        shape="circle"
                        style={{ borderColor: "#9F3090" }}
                        onClick={addPasses}
                      >
                        +
                      </Button>
                    )}
                  </div>
                </div>
                <div>
                  <div className="innerboxtwo">
                    <span>Total:</span>
                    <span className="span">
                      {count} X QAR {data}
                    </span>
                  </div>
                  <div className="innerboxtwo">
                    <span className="last-span">QAR {data}</span>
                  </div>
                </div>
                {count >= 1 ? (
                  <button className="innerbutton">
                    <a href="#seasonpass">Buy Now</a>
                  </button>
                ) : (
                  <button className="innerbutton" style={{ color: "white" }}>
                    Buy Now
                  </button>
                )}
              </div>
            </div>
          </main>
        </div>
      </Container>
      <Container>
        <section id="seasonpass">
          <div>
            <div className="cartsummary">
              <span>
                <ion-icon
                  name="cart-outline"
                  class="hydrated cart-icon"
                ></ion-icon>
              </span>
              <h4 className="common-color">Cart Summary</h4>
            </div>
            <div>
              <table className="center">
                <thead className="tablehead">
                  <tr>
                    <th className="table-head cart-fonts">Ticket</th>
                    <th className="table-head cart-fonts">Qty</th>
                    <th className="table-head cart-fonts">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="tablecontent">
                      <ion-icon
                        name="ticket-outline"
                        class="hydrated ticket"
                      ></ion-icon>
                      <span>Three Month Pass</span>
                    </td>
                    <td className="table-content-1">
                      {count === 0 ? (
                        <Button
                          shape="circle"
                          style={{ borderColor: "#9F3090" }}
                        >
                          -
                        </Button>
                      ) : (
                        <Button
                          shape="circle"
                          style={{ borderColor: "#9F3090" }}
                          onClick={subPasses}
                        >
                          -
                        </Button>
                      )}

                      <span className="count">{count}</span>
                      {count >= 8 ? (
                        <Button
                          shape="circle"
                          style={{ borderColor: "#9F3090" }}
                        >
                          +
                        </Button>
                      ) : (
                        <Button
                          shape="circle"
                          style={{ borderColor: "#9F3090" }}
                          onClick={addPasses}
                        >
                          +
                        </Button>
                      )}
                    </td>
                    <td className="data">QAR {data}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="total-cart">
            <span className="total-cart-">Total Cart Value</span>
            <div>
              <div className="cart-boxone">
                <h6>Cart Value</h6>
                <h6>QAR {data}</h6>
              </div>
              <div className="dash"></div>
              <div className="cart-boxone">
                <h5>Total</h5>
                <h5>QAR {data}</h5>
              </div>
            </div>
            <button className="buy-button">
              Continue
              <ion-icon
                name="arrow-forward-outline"
                className="hydrated signupicon"
              ></ion-icon>
            </button>
          </div>
        </section>
      </Container>
    </>
  );
};

export default SeasonPass;
