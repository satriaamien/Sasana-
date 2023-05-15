"use client"
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const BarChart =()=>{
    const labels = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'May', 'Jun'  ];
    
    const data = {
        labels,
        datasets: [
            {
            label: 'Purchase',
            data: [55000,58000,45000,35000,45000,25000,55000,45000,45000,35000],
            backgroundColor: 'rgba(255, 0, 0, 1)',
            borderRadius : 25,
            barThickness: 10,
            // barPercentage: 0.5,       
            },
            {
            label: 'Sales',
            data: [50000,50000,55000,45000,45000,41000,50000,45000,45000,45000],
            backgroundColor: 'rgba(255, 0, 0, 0.4)',
            borderRadius : 25,
            barThickness: 10,
            // barPercentage: 0.5,  
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
            align : "start" as const,
            },
            title: {
            display: false,
            },
    },
    };

    return<div className='h-72'>
    <Bar data={data} options={options}/>
    </div>
}
export default BarChart;