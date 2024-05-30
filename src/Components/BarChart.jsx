import React from "react";
import { Doughnut } from "react-chartjs-2";

const BarChart = ({ diseaseData }) => {
    if (!diseaseData) {
        return null;
    }

    const prediction = diseaseData.prediction;
    const confidence = parseInt(diseaseData.confidence);
    const remainingConfidence = 100 - confidence;

    const data = {
        labels: [`${diseaseData.prediction}`, "fresh"],
        datasets: [
            {
                label: 'Confidence',
                backgroundColor: ['rgb(255, 125, 41)', 'rgb(151, 190, 90)'],
                borderColor:'rgba(0, 0, 0, 0)',
                barThickness: 40,
                data: [confidence, remainingConfidence],
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
        <div className="lg:w-3/6 lg:h-72 h-52 pt-4 m-auto">
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default BarChart;
