import React, { Component } from 'react';
import { iex } from '../config/iex';
    class StockRow extends Component {

        constructor(props){
            super(props)
            this.state = {
               data:[]
            }
            this.getData=this.getData.bind(this)
        }

        getData(){
           
            this.props.symbols.map(symbol => {

                //query the API
                const url = `${iex.base_url}/stock/${symbol}/batch?types=quote,news,chart&range=1m&last=10&token=${iex.api_token}`
                console.log(url)
                fetch(url)
                .then((response) => response.json())
                .then((info) => {
                    //console.log(info)
                    const newData = [...this.state.data, info]
                    //console.log(newData)
                    this.setState({
                        data: newData
                    })
                })
                //console.log(this.state)
                
            })
        }
//<div> {this.state.data[0].quote.symbol}</div>

        populateRows (){  
            console.log(this.state.data[0].quote.symbol)
               
            this.state.data.map( quote => {
                //console.log(quote);
                return(
                    <div>                    
                        <div>{quote.symbol}</div>
                        <div>{quote.chart[0].low}</div>
                        <div>{quote.chart.high }</div>
                        <div>{quote.quote.latestTime }</div>
                    </div>
                    
                )
            })
        }
        componentDidUpdate(){
            console.log('update');
        }
        render() {
            
        return (
            <div>
                <button onClick={this.getData}> Get Data </button>                        
                   <div>{this.state.data.length > 0 ?  this.populateRows(): 'No Data' }</div>                          
            </div>
        )
    }
}

export default StockRow;

//PF5IS1XCSM83DWA6


//https://cloud.iexapis.com/stable/stock/vwi/interday-prices?chartLast=1&token=sk_27ea4b46c1f34a109885839483ce5969
//https://cloud.iexapis.com/stable/
//https://cloud.iexapis.com/stable/stock/aapl/batch?types=quote,news,chart&range=1m&last=10&token=sk_27ea4b46c1f34a109885839483ce5969