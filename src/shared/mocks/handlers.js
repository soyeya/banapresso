import { rest } from "msw";
import { database } from "./data";

const RESPONSE_DELAY_MS = 1000;

export const handlers = [

  rest.post("/api/order", (req, res, ctx) => {
     const result = req.body;
     console.log(typeof result);
     const order = database.createOrder(JSON.parse(result));
     return res(ctx.delay(RESPONSE_DELAY_MS), ctx.json(result));
  }),

  rest.get("/api/order/my", (req, res, ctx) => {
    const order = database.findOrder();
    const index = Date.now() % 2;
    order.status = ["음식 준비중", "배달중"][index];
    order.position = [
      [30, 30],
      [60, 60],
    ][index];
    return res(ctx.delay(RESPONSE_DELAY_MS), ctx.json(order));
  }),


 


];
