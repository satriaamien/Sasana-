"use client"
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart=()=>{
    const labels = ['Jan', 'Feb', 'Mar', 'April', 'May']
    const data = {
        labels,
        datasets: [
            {
            label: 'Ordered',
            data: [3800,2500,2300,1500,2100],
            backgroundColor: 'rgba(255, 100, 0, 0.6)',
            borderRadius : 25,
            tension: 0.5,
            },
            {
            label: 'Delivered',
            data: [3100,3200,3300,3300,3150],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderRadius : 25,
            tension: 0.5,
            },
        ],
        };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
            labels :{
                usePointStyle:true,
            },
            position: 'bottom' as const, 
            },
            title: {
            display: false,
            },
    },
    };

    return<div className='h-72'>
        <Line data={data} options={options}/>
    </div>
}
export default LineChart;