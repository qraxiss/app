import { createSlice } from "@reduxjs/toolkit";
const initialState: {
  data: any;
  open: boolean;
  error: Error | null;
} = {
  data: { BNBUSDT: 600 },
  open: false,
  error: null,
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

      state.data = { ...state.data, ...data };
    },

    listenMarket(state, { payload: { onMessage } }) {
      if (state.open) {
        return;
      }
      try {
        const ws = new WebSocket(
          "wss://stream.binance.com:9443/ws/!miniTicker@arr",
        );
        ws.addEventListener("message", (event: any) => {
          onMessage(event.data);
        });
        state.open = true;
      } catch (error: any) {
        state.error = error.message;
      }
    },
  },
});

export const { updatePrice, listenMarket } = cryptoMarketSlice.actions;

export default cryptoMarketSlice.reducer;
