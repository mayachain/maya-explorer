import $ from 'jquery'

import { formatAllUsdValues, updateAllCalculatedUsdValues } from './lib/currency'
import { createMarketHistoryChart } from './lib/market_history_chart'
import { createCoinBalanceHistoryChart } from './lib/coin_balance_history_chart'

(function () {
  const dashboardChartElement = $('[data-chart="marketHistoryChart"]')[0]
  const coinBalanceHistoryChartElement = $('[data-chart="coinBalanceHistoryChart"]')[0]
  if (dashboardChartElement) {
    window.dashboardChart = createMarketHistoryChart(dashboardChartElement)
  }
  if (coinBalanceHistoryChartElement) {
    window.coinBalanceHistoryChart = createCoinBalanceHistoryChart(coinBalanceHistoryChartElement)
  }
  formatAllUsdValues()
  updateAllCalculatedUsdValues()
})()
