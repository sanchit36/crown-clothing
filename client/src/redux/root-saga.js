import { all, call } from "redux-saga/effects";
import { cartSaga } from "./cart/cart.sagas";
import { shopSaga } from "./shop/shop.sagas";
import { userSaga } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(shopSaga), call(userSaga), call(cartSaga)]);
}
