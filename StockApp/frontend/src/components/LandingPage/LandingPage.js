
import React, { Component } from 'react';
import StockRow from '../StockRow/StockRow'
import './LandingPage.css';

let inputTicker = ['QQQ']

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            symbols: inputTicker,
            data: {}
        }
    }

    render() {

        return (
            <div class="container">
                    
                <StockRow symbols={this.state.symbols} />
            </div>
        )
    }
}
export default LandingPage



// TOKEN = sk_42dd3ac312574d569cb08b524734d798
// URL = GET /stock/{QQQ}/intraday-prices



//URL = https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo
// new toke = PF5IS1XCSM83DWA6
