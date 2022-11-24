import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
class DosaPie extends React.Component {
   COLORS = ["#8884d8", "#82ca9d", "#FFBB28"];
   pieData = [
      {
         name: "Fat",
         value: 20
      },
      {
         name: "Carbohydrate",
         value: 71
      },
      {
         name: "Protien",
         value: 9
      }
   ];
   CustomTooltip = ({ active, payload, label }) => {
      if (active) {
         return (
         <div
            className="custom-tooltip"
            style={{
               backgroundColor: "#ffff",
               padding: "5px",
               border: "1px solid #cccc"
            }}
         >
            <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
         </div>
      );
   }
   return null;
};
render() {
   return (
    
      <PieChart width={300} height={300}>
      <Pie
         data={this.pieData}
         color="#000000"
         dataKey="value"
         nameKey="name"
         cx="50%"
         cy="50%"
         outerRadius={120}
         fill="#8884d8"
      >
         {this.pieData.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={this.COLORS[index % this.COLORS.length]}
            />
         ))}
      </Pie>
      <Tooltip content={<this.CustomTooltip />} />
      <Legend />
      </PieChart>
      
      );
   }
}
export default DosaPie;