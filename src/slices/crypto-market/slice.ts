import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: {},
  open: false,
};

const cryptoMarketSlice = createSlice({
  name: "crypto-market",
  initialState,
  reducers: {
    updatePrice(state, action) {
      const data = {} as any;

      JSON.parse(action.payload).forEach((ticker: any) => {
        const symbol = ticker["s"] as string;
        data[symbol as keyof typeof data] = Number(ticker["c"]);
      });

      state.data = data;
    },

    listenMarket(state, { payload: { onMessage } }) {
      if (state.open) {
        return;
      }
      const ws = new WebSocket(
        "wss://stream.binance.com:9443/ws/!miniTicker@arr"
      );
      ws.addEventListener("message", (event: any) => {
        onMessage(event.data);
      });
      state.open = true;
    },
  },
});

export const { updatePrice, listenMarket } = cryptoMarketSlice.actions;

export default cryptoMarketSlice.reducer;
