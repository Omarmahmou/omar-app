// import { configureStore } from "@reduxjs/toolkit";
// import CartSlice from "../rtk/slices/cart-slice";
import { Button, Container, Table, Image, dispatch } from "react-bootstrap";
// import cartSlice from "../rtk/slices/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/slices/cart-slice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const dispatch = useDispatch();
  const totalprice = cart.reduce(getacc, 0);
  function getacc(acc, product) {
    acc += product.price * product.qantity;
    return acc;
  }
  return (
    <Container>
      <h1 className="py-5">welcom to cart</h1>
      <Button
        variant="primary"
        className="mb-5"
        onClick={() => dispatch(clear())}
      >
        clear cart
      </Button>
      <h4>total price :{totalprice} </h4>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>image</th>
            <th>price</th>
            <th>quantity</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <Image
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>${product.price}</td>
              <td>{product.qantity}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(deleteFromCart(product));
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;
