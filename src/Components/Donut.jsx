import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'
const Donut= ({ diseaseInfo }) => {
    if (!diseaseInfo) {
        return <div>No disease information available.</div>;
    }

    const Disease = diseaseInfo.confidence;
    const Labels = Array.isArray(diseaseInfo.prediction) ? diseaseInfo.prediction : [diseaseInfo.prediction];

    const data = {
        labels: Labels,
        datasets: [
            {
                label: "Disease detection",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "green",
                data: Disease
            }
        ]
    };

    return (
        <div>
            <Pie data={data} />
        </div>
    );
};

export default Pie;
