import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Sector, Tooltip, XAxis, YAxis } from "recharts";


    const userData = [
    {
        name: "Jan",
        Google: 4000,
        Tesla: 2400,
        amd: 2400,
    },
    {
        name: "Feb",
        Google: 3000,
        Tesla: 1398,
        amd: 2210,
    },
    {
        name: "Mar",
        Google: 2000,
        Tesla: 9800,
        amd: 2290,
    },
    {
        name: "Apr",
        Google: 2780,
        Tesla: 3908,
        amd: 2000,
    },
    {
        name: "May",
        Google: 1890,
        Tesla: 4800,
        amd: 2181,
    },
    {
        name: "June",
        Google: 2390,
        Tesla: 3800,
        amd: 2500,
    },
    {
        name: "Jul",
        Google: 3490,
        Tesla: 4300,
        amd: 2100,
    },
];

const Charts = () => {

    return (
        <div style={{display: "flex"}}>
            <LineChart
                width={500}
                height={300}
                data={userData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="amd" />
                <Line type="monotone" dataKey="Tesla" stroke="#8884d8" activeDot={{ r: 10 }} />
                <Line type="monotone" dataKey="Google" stroke="#82ca9d" />
            </LineChart>

            <CodingChart></CodingChart>
        </div>
    );
};


const codingData = [
  { name: 'Python', value: 40 },
  { name: 'C++', value: 10 },
  { name: 'C', value: 20 },
  { name: 'JavaScript', value: 30 },
];

class CodingChart extends React.Component {

    state = {
        activeIndex: 0,
    };

    onPieEnter = (_, index) => {
        this.setState({
            activeIndex: index,
        });
    };

    render() {
        return (
                <PieChart width={400} height={400}>
                    <Pie
                        activeIndex={this.state.activeIndex}
                        activeShape={renderActiveShape}
                        data={codingData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        onMouseEnter={this.onPieEnter}
                    />
                </PieChart>
        );
    }
}

function renderActiveShape(props) {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill="#333"
            >{`Popularity ${value}`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill="#999"
            >
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
}

export default Charts;