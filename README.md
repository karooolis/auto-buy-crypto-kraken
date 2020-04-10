# Auto-buy crypto bot for Kraken 🏦

This is a simple bot that helps you automatically and periodically buy selected cryptocurrencies on [Kraken](https://www.kraken.com/) crypto exchange.

The script works on [Google Cloud](https://cloud.google.com/) and has not been tested anywhere else.

To set it up, copy contents of `index.js` file to a cloud function. Cloud function setup instructions can be found on [official Google Cloud documentation](https://cloud.google.com/functions/docs/quickstart-nodejs).

In order to run the bot periodically at a given time, it must be set up with a scheduler. Google Cloud Scheduler works wonderfully for this purpose and setup instructions can be found [here](https://cloud.google.com/scheduler/docs/quickstart).
