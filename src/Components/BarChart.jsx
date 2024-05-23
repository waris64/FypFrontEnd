import React from "react";
import axios from "axios";
import Chart  from "chart.js/auto";
import {Bar} from "react-chartjs-2"

const BarChart = ({ diseaseData }) => {
    if (!diseaseData) {
        return null;
    }

    const labels = [diseaseData.prediction];
    const confidence = parseInt(diseaseData.confidence);

    const data = {
        labels: labels,
        datasets: [
            {
                label: diseaseData.prediction,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                barThickness: 60,
                data: [confidence],
            },
            {
                label: "Fresh",
                backgroundColor: "rgb(255, 99, 32)",
                borderColor: "rgb(255, 99, 132)",
                barThickness: 60,
                data: [100 - confidence],
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
        
        maintainAspectRatio: false
    };

    return (
        <div className="lg:w-1/2 w-2/4 m-auto">
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;

  