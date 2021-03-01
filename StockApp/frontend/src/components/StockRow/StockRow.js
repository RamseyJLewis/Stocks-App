import React, { Component } from 'react';
import { iex } from '../config/iex';
class StockRow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.getData = this.getData.bind(this)
    }

    getData() {

        this.props.symbols.map(symbol => {

            //query the API
            const url = `${iex.base_url}/stock/${symbol}/batch?types=quote,news,chart&range=1m&last=10&token=${iex.api_token}`
            console.log(url)
            fetch(url)
                .then((response) => response.json())
                .then((info) => {
                    const newData = [...this.state.data, info]
                    this.setState({
                        data: newData
                    })
                })
        })
    }
    //function to reuest data from API
    populateRows() {
        
        console.log(this.state.data[0].quote.symbol, 'data at symbol')
        console.log(this.state.data[0].quote, 'data at quote')
        console.log(this.state.data[0], 'data at zero')
        console.log(this.state.data, 'data')
        console.log(this.state.data.length, 'data length');
        // Setting names to data being requested from the API
        let ticker = this.state.data[0].quote.symbol
        let chartLow = this.state.data[0].chart[0].low
        let chartHigh = this.state.data[0].chart[0].high
        let latestPrice = this.state.data[0].quote.latestPrice

        return (
            //catagory of data is next to {data type}
            <div class="container">
                    <div class="row"> Ticker: {ticker}</div>
                    <div>  Today's Low: {chartLow}</div>
                    <div> Today's High: {chartHigh}</div>
                    <div>Latest Price: {latestPrice}</div>
            </div>

        )
    }

    componentDidUpdate() {
        console.log('update');
    }
    render() {
        //on a click of a button run function get data
        //if there is data show it on screen but if there is no data from what is being requsted display 'no data'
        return (
            <div>
                <button onClick={this.getData}> Get Data </button>
                <div>{this.state.data.length > 0 ? this.populateRows() : 'No Data'}</div>
            </div>
        )
    }
}

export default StockRow;

//PF5IS1XCSM83DWA6


//https://cloud.iexapis.com/stable/stock/vwi/interday-prices?chartLast=1&token=sk_27ea4b46c1f34a109885839483ce5969
//https://cloud.iexapis.com/stable/
//https://cloud.iexapis.com/stable/stock/aapl/batch?types=quote,news,chart&range=1m&last=10&token=sk_27ea4b46c1f34a109885839483ce5969