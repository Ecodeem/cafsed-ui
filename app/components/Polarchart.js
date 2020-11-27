import React, {Component} from "react";
import path from 'path';
import { VictoryBar, VictoryChart, VictoryPolarAxis, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer } from "victory";
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
const fadegrey = '#d7d7d7';
const Mainfont = "'Open Sans', sans-serif";
const LineColor = "#c43a31";

  return {
    parent: {
      parent: { maxWidth: "100%" } 
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
          fill: "#ff4a4a",
          
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
          <VictoryChart polar
           style={styles.parent}
            
            animate={{
                duration: 5000,
                easing: "bounce"
              }}
          >
          <VictoryPolarAxis
            
            standalone={false}
            startAngle={0}
            endAngle={450}
             tickValues={dataVal}
            labelPlacement="vertical"
            
          />
          
          {
            dataFomt.map((d, i) => {
             return (
               <VictoryPolarAxis dependentAxis
                 key={i}
                 style={{ tickLabels: { fill: "none" } }}
                 axisValue={d}
                 axisAngle={0}
                 style={styles.axisVert}
               />
             );
           })
         }
         
                     
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
              
              
            />
            </VictoryChart>
        </div>
            
    );
  }
}

module.exports = LineChart;