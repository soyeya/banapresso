 
const generateDate = (date = new Date()) => {
  return date.toLocaleString();
};

const defaultOrder = {
//   id: generateId(),
  orderDate: generateDate(),
  status: "배달을 완료했어요",
  name: "짜장면",

  totalPrice: 7000,
  paymentMethod: "결제수단이 없습니다.",
  productPrice: 6000,
  deliveryPrice: 3000,
  discountPrice: 2000,

  deliveryAddress: "배달내역이 없습니다.",
  deliveryContact: "배달내역이 없습니다",
  messageToShop: "배달내역이 없습니다",
  messageToRider: "배달내역이 없습니다",
};

const data = {
  order: defaultOrder,
};

const createOrder = (order) => {
  data.order = {
    ...defaultOrder,
    orderDate: generateDate(),
    ...order,
  };
  return data.order;
};

const findOrder = () => {
  return data.order;
};

export const database = {
  findOrder,
  createOrder,
};
