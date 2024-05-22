import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import axios from "axios";

Chart.register(CategoryScale);

const BarChart = () => {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState(null);
    const [predictionData, setPredictionData] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await axios.get("YOUR_API_ENDPOINT");
                setPredictionData(response.data);
            } catch (error) {
                console.error("Error fetching prediction data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (!predictionData) return;

        // Update chart data with prediction
        const updatedData = { ...chartData };
        updatedData.datasets[0].label = `Prediction: ${predictionData.prediction}`;
        updatedData.datasets[0].data = [parseFloat(predictionData.confidence)];

        setChartData(updatedData);
    }, [predictionData]);

    useEffect(() => {
        if (!chartData) return;

        // Render chart
        const ctx = chartRef.current.getContext("2d");
        const myChart = new Chart(ctx, {
            type: "bar",
            data: chartData,
            options: {
                scales: {
                    x: {
                        type: "category",
                    },
                    y: {
                        beginAtZero: true,
                        suggestedMax: 100, // assuming confidence is in percentage
                    },
                },
            },
        });

        return () => {
            myChart.destroy();
        };
    }, [chartData]);

    return (
        <div>
            <canvas ref={chartRef} width="400" height="200"></canvas>
        </div>
    );
};

export default BarChart;
