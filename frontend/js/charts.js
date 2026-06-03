// ============================
// HEART DISEASE DISTRIBUTION
// ============================

new Chart(
    document.getElementById("diseaseChart"),
    {
        type: "bar",

        data: {
            labels: ["No Disease", "Disease"],

            datasets: [{
                label: "Patients",

                data: [410, 510],

                backgroundColor: [
                    "#34A0A4",
                    "#184E77"
                ],

                borderRadius: 10
            }]
        },

        options: {
            responsive: true,

            plugins: {
                legend: {
                    display: false
                }
            }
        }
    }
);

// ============================
// AGE DISTRIBUTION
// ============================

new Chart(
    document.getElementById("ageChart"),
    {
        type: "line",

        data: {

            labels: [
                30,35,40,45,50,
                55,60,65,70,75
            ],

            datasets: [{

                label: "Patients",

                data: [
                    5,18,40,65,82,
                    130,98,60,28,10
                ],

                borderColor: "#184E77",

                backgroundColor:
                "rgba(52,160,164,0.2)",

                tension: 0.4,

                fill: true
            }]
        },

        options: {
            responsive: true
        }
    }
);

// ============================
// CHEST PAIN ANALYSIS
// ============================

new Chart(
    document.getElementById("chestPainChart"),
    {
        type: "bar",

        data: {

            labels: [
                "Typical",
                "Asymptomatic",
                "Non-Anginal",
                "Atypical"
            ],

            datasets: [

                {
                    label: "No Disease",

                    data: [
                        28,104,132,150
                    ],

                    backgroundColor:
                    "#34A0A4"
                },

                {
                    label: "Disease",

                    data: [
                        26,393,74,25
                    ],

                    backgroundColor:
                    "#184E77"
                }
            ]
        },

        options: {
            responsive: true
        }
    }
);

// ============================
// CONFUSION MATRIX
// ============================

new Chart(
    document.getElementById("confusionChart"),
    {
        type: "bar",

        data: {

            labels: [
                "True Negative",
                "False Positive",
                "False Negative",
                "True Positive"
            ],

            datasets: [{
                label: "Predictions",

                data: [63,19,9,93],

                backgroundColor: [
                    "#184E77",
                    "#FF6B6B",
                    "#FFD166",
                    "#34A0A4"
                ],

                borderRadius: 10
            }]
        },

        options: {
            responsive: true
        }
    }
);

// ============================
// FEATURE IMPORTANCE
// ============================

new Chart(
    document.getElementById("featureImportanceChart"),
    {
        type: "bar",

        data: {

            labels: [
                "Chest Pain",
                "Oldpeak",
                "Max Heart Rate",
                "Exercise Angina",
                "ST Slope",
                "Cholesterol",
                "Age"
            ],

            datasets: [{

                label: "Importance",

                data: [
                    0.24,
                    0.18,
                    0.16,
                    0.14,
                    0.11,
                    0.09,
                    0.08
                ],

                backgroundColor:
                "#184E77",

                borderRadius: 8
            }]
        },

        options: {
            responsive: true,

            indexAxis: "y",

            plugins: {
                legend: {
                    display: false
                }
            }
        }
    }
);

// ============================
// ROC CURVE
// ============================

new Chart(
    document.getElementById("rocChart"),
    {
        type: "line",

        data: {

            labels: [
                0.0,0.1,0.2,0.3,0.4,
                0.5,0.6,0.7,0.8,0.9,1.0
            ],

            datasets: [

                {
                    label: "ROC Curve",

                    data: [
                        0.0,0.64,0.82,0.93,
                        0.98,0.99,0.99,
                        1.0,1.0,1.0,1.0
                    ],

                    borderColor:
                    "#184E77",

                    backgroundColor:
                    "rgba(24,78,119,0.1)",

                    fill: true,

                    tension: 0.3
                },

                {
                    label: "Random Guess",

                    data: [
                        0,0.1,0.2,0.3,0.4,
                        0.5,0.6,0.7,0.8,
                        0.9,1.0
                    ],

                    borderColor:
                    "#FF6B6B",

                    borderDash: [6,6]
                }
            ]
        },

        options: {
            responsive: true
        }
    }
);