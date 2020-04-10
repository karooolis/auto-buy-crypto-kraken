# Auto-buy crypto bot for Kraken 🏦

This is a simple bot that helps you automatically and periodically buy selected cryptocurrencies on [Kraken](https://www.kraken.com/) crypto exchange.

## How to install
1. Generate Kraken API key pair, [instructions here](https://support.kraken.com/hc/en-us/articles/360000919966-How-to-generate-an-API-key-pair-).
2. Edit contents of `index.js` file, specifically the `orders` variable where you shall declare which currencies to periodically buy and at what volume.
3. Copy contents of `index.js` to a cloud function. This script works on [Google Cloud](https://cloud.google.com/) and has not been tested anywhere else but is likely to work on other cloud providers too. Google Cloud function setup instructions can be found on [official Google Cloud documentation](https://cloud.google.com/functions/docs/quickstart-nodejs).
4. In order to run the bot periodically at a given time, it must be set up with a scheduler. Google Cloud Scheduler works wonderfully for this purpose and setup instructions can be found [here](https://cloud.google.com/scheduler/docs/quickstart).

## Why?

The purpose of this bot is to take advantage of [dollar-cost averaging](https://www.investopedia.com/terms/d/dollarcostaveraging.asp) which is an investment strategy where you periodically buy assets in smaller amounts rather than make large infrequent purchases. In this way you get to buy a given asset at an average price of that asset over a given period of time rather than at a single price point at which you happened to buy the asset.
