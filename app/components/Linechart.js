import React, {Component} from "react";
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer } from "victory";
import { NavLink, Link } from 'react-router-dom';

class LineChart extends Component {
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
const LineColor = "#5b005b";

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
    line: {
         data: {
            stroke: LineColor
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
        <div className="lineWrap">
          <VictoryChart
            style={styles.parent}
            domainPadding={10}
            animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
              }}
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
           
            <VictoryLine
               interpolation="step"           
              data={filtered}
                  
              x="year"
              y="value"
                
              style={styles.line}   //set styles
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
                        mutation: () => ({style: {stroke: "#00a4f2", width: 40}})
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

module.exports = LineChart;