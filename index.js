const KrakenClient = require("kraken-api");
const key = process.env.API_KEY;
const secret = process.env.PRIVATE_KEY;
const kraken = new KrakenClient(key, secret);

/**
 * Kraken has minimum order quantities that are accepted. Unfortunately, this data is not available via API.
 * Thus, ned to put minimum quantities manually to avoid making too small orders which get rejected.
 * For latest reference, check below:
 * https://support.kraken.com/hc/en-us/articles/205893708-Minimum-order-size-volume-for-trading
 */
const MIN_QUANTITIES = {
  ALGO: 50,
  REP: 0.3,
  BAT: 50,
  XBT: 0.002,
  BTC: 0.002,
  BCH: 0.000002,
  ADA: 1,
  LINK: 10,
  ATOM: 1,
  DAI: 10,
  DASH: 0.03,
  XDG: 3000,
  EOS: 3,
  ETC: 0.3,
  ETH: 0.02,
  GNO: 0.02,
  ICX: 50,
  LSK: 10,
  LTC: 0.1,
  XMR: 0.1,
  NANO: 10,
  OMG: 10,
  PAXG: 0.01,
  QTUM: 0.1,
  XPR: 30,
  SC: 5000,
  XLM: 30,
  USDT: 5,
  XTZ: 1,
  TRX: 500,
  USDC: 5,
  MLN: 0.1,
  WAVES: 10,
  ZEC: 0.03,
  EUR: 10,
  USD: 10,
  GBP: 10
};

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.main = async (req, res) => {
  /**
   * Set up orders to be executed.
   * Base - currency to be bought.
   * Quote - currency to be used for buying.
   * Volume - volume to be bought in quote currency i.e. 10 euros.
   */
  const orders = [
    { base: "XMR", quote: "EUR", volume: 5 },
    { base: "BTC", quote: "EUR", volume: 5 },
    { base: "ETH", quote: "EUR", volume: 5 }
  ];

  for (const order of orders) {
    const { base, quote, volume } = order;
    const pair = `${base}${quote}`;
    const ticker = await kraken.api("Ticker", { pair });

    /*
     * Pair naming is inconsistent in Kraken and thus provided
     * pair name may differ from that shown in resulting object.
     */
    const tickerPair = Object.keys(ticker.result)[0];
    const price = ticker.result[tickerPair].c[0];

    /*
     * Volume to be bought must be at the minimum the
     * volume that Kraken allows to buy (differs based on currency).
     */
    let finalVolume = volume / price;
    if (finalVolume < MIN_QUANTITIES[base]) {
      finalVolume = MIN_QUANTITIES[base];
    }

    await kraken.api("AddOrder", {
      pair: tickerPair,
      type: "buy",
      ordertype: "market",
      volume: finalVolume
    });
  }

  res.status(200);
};
