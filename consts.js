/**
 * Kraken has minimum order quantities that are accepted. This data is not available via API.
 * Thus, ned to put minimum quantities manually to avoid making too small orders which get rejected.
 * For latest reference, check below:
 * https://support.kraken.com/hc/en-us/articles/205893708-Minimum-order-size-volume-for-trading
 */
module.exports.MIN_QUANTITIES = {
  DOT: 1,
  ALGO: 50,
  REP: 0.3,
  BAT: 50,
  XRP: 30,
  XBT: 0.001,
  BTC: 0.001,
  BCH: 0.025,
  FIL: 0.125,
  ADA: 50,
  LINK: 2,
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
  QTUM: 5,
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
  UNI: 0.25,
  EUR: 10,
  USD: 10,
  GBP: 10
};