import React, {Component} from "react";
import path from 'path';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer } from "victory";
import { NavLink, Link } from 'react-router-dom';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
    };
    
  }
  


componentDidUpdate(prevProps) {
  if (this.props.filtered !== prevProps.filtered) {
    this.setState({
       filtered: this.props.filtered
    });
  }
  
}



getStyles() {
const grey = '#333';
const fadegrey = '#a7a7a7';
const Mainfont = "'Open Sans', sans-serif";
  return {
    parent: {
      parent: { maxWidth: "100%" } 
    },
    axisHoriz: {
        axis: { stroke: grey , strokeWidth: 1},
        ticks: {
          size: 5,
          stroke: grey 
        },
        axisLabel: {
          fontSize: 10,
          padding: 250,
          angle: 90,
          height:300
        },
        tickLabels: {
          fill: grey,
          fontFamily: Mainfont,
          fontSize: 7,
          padding: 25,
          angle: 90,
        }
        },
    axisVert: {
        axis: { stroke: grey, strokeWidth: 1},
        ticks: {
          size: 10,
          stroke: grey
        },
        grid: {
          stroke: fadegrey,
          strokeDasharray: 4 
        },
       tickLabels: {
          fill: grey,
          fontFamily: Mainfont,
          fontSize: 8,
          padding: 15,
        }
    },
    bars: {
        data: {
          fill: "#0091d7",
          width: 20,
          padding: 0,
          strokeWidth: 0
        },
    }
        
      }
  }



  render() {
const styles = this.getStyles();
const {filtered} = this.props;
const dataVal= [];
const dataFomt= [];
filtered.map((datapoint,index)=> {
  dataFomt.push(datapoint.year);
  dataVal.push(index);
  
})

    return (
        <div className="barWrap">
          <VictoryChart
            style={styles.parent}
            domainPadding={10}
            animate={{duration: 3000}}
            
          >
          <VictoryAxis
             tickValues={dataVal} 
             tickFormat={dataFomt} 
             standalone={false}
             style={styles.axisHoriz}
           />
           
           <VictoryAxis
             dependentAxis
              tickFormat={(x) => (`${x / 1}`)}
              //tickFormat={(x) => (`$${x / 100}k`)}
              style={styles.axisVert}
             />
           
            <VictoryBar
              data={filtered}
                  
              x="year"
              y="value"
                
              style={styles.bars}   //set styles
              labelComponent={<VictoryTooltip   //add tooltip
                flyoutStyle={{
                  stroke: "tomato",
                  
                }}
                
              />} 
              animate={{    // add animation on Exit
                onExit: {
                  duration: 500,
                  
                }
              }}
              
              events={[{   // add event handler
                target: "data",
                eventHandlers: {
                  onMouseOver: () => {
                    return [
                      {
                        target: "data",
                        mutation: () => ({style: {fill: "#00a4f2", width: 20}})
                      }, {
                        target: "labels",
                        mutation: () => ({ active: true })
                      }
                    ];
                  },
                  onMouseOut: () => {
                    return [
                      {
                        target: "data",
                        mutation: () => {}
                      }, {
                        target: "labels",
                        mutation: () => ({ active: false })
                      }
                    ];
                  }
                }
              }]}
              
            />
            </VictoryChart>
        </div>
            
    );
  }
}

module.exports = BarChart;