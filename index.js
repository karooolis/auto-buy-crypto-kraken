const KrakenClient = require("kraken-api");
const key = process.env.API_KEY;
const secret = process.env.PRIVATE_KEY;
const kraken = new KrakenClient(key, secret);

const buy = require('./buy');
const sell = require('./sell');

const MODE_BUY = 'buy';
const MODE_SELL = 'sell';
const CURRENT_MODE = MODE_SELL; // set whether to sell or buy crypto

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.main = async (req, res) => {
  try {
    if (CURRENT_MODE === MODE_SELL) {
      await sell(req, res, kraken);
    } else {
      await buy(req, res, kraken);
    }

    res.status(200);
  } catch (e) {
    console.log(e)
  }
};
