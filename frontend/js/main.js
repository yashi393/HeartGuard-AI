// =========================================
// HEARTGUARD AI MAIN SCRIPT
// =========================================

// FORM ELEMENTS

const form = document.getElementById("predictionForm");

const button = document.querySelector(".predict-btn");

const aiLoader =
document.getElementById("aiLoader");

const resultDashboard =
document.getElementById("premiumDashboard");

const loadingText =
document.getElementById("loadingText");

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});

// =========================================
// LOADING MESSAGES
// =========================================

const loadingMessages = [

    "Analyzing cardiovascular patterns...",

    "Checking ECG indicators...",

    "Evaluating heart performance...",

    "Generating AI medical insights...",

    "Finalizing prediction report..."

];

let messageIndex = 0;

// =========================================
// VALUE ENCODING
// MATCHES ML MODEL
// =========================================

function encodeFormData(formData){

    return {

        age:
        Number(formData.get("age")),

        sex:
        formData.get("sex") === "Male" ? 1 : 0,

        cp:
        {
            "typical angina": 0,
            "atypical angina": 1,
            "non-anginal": 2,
            "asymptomatic": 3
        }[formData.get("cp")],

        trestbps:
        Number(formData.get("trestbps")),

        chol:
        Number(formData.get("chol")),

        fbs:
        formData.get("fbs") === "True" ? 1 : 0,

        restecg:
        {
            "normal": 0,
            "st-t abnormality": 1,
            "lv hypertrophy": 2
        }[formData.get("restecg")],

        thalch:
        Number(formData.get("thalch")),

        exang:
        formData.get("exang") === "True" ? 1 : 0,

        oldpeak:
        Number(formData.get("oldpeak")),

        slope:
        {
            "upsloping": 0,
            "flat": 1,
            "downsloping": 2
        }[formData.get("slope")],

        ca:
        Number(formData.get("ca")),

        thal:
        {
            "normal": 1,
            "fixed defect": 2,
            "reversable defect": 3
        }[formData.get("thal")]

    };

}

// =========================================
// FORM SUBMIT
// =========================================

form.addEventListener("submit", async function(e){

    e.preventDefault();

    // BUTTON STATE

    button.innerHTML = "Analyzing...";
    button.disabled = true;

    // SHOW LOADER

    aiLoader.classList.add("active");

    // FORM DATA

    const formData = new FormData(form);

    const data = {

    age: Number(formData.get("age")),

    sex: formData.get("sex"),

    cp: formData.get("cp"),

    trestbps: Number(formData.get("trestbps")),

    chol: Number(formData.get("chol")),

    fbs: formData.get("fbs"),

    restecg: formData.get("restecg"),

    thalch: Number(formData.get("thalch")),

    exang: formData.get("exang"),

    oldpeak: Number(formData.get("oldpeak")),

    slope: formData.get("slope"),

    ca: formData.get("ca"),

    thal: formData.get("thal")

};

console.log(data);

    // LOADING TEXT ANIMATION

    const interval = setInterval(() => {

        messageIndex++;

        if(messageIndex >= loadingMessages.length){

            messageIndex = 0;

        }

        loadingText.textContent =
        loadingMessages[messageIndex];

    }, 1500);

    try{

        // =========================================
        // BACKEND API CALL
        // =========================================

        const response = await fetch(
            "http://127.0.0.1:8000/predict",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)

            }
        );

        const result = await response.json();

        console.log(result);
        
        setTimeout(() => {

    clearInterval(interval);

    aiLoader.classList.remove("active");

    resultDashboard.classList.remove("hidden");

    resultDashboard.scrollIntoView({
        behavior: "smooth"
    });

    // ===============================
    // PREMIUM DASHBOARD ELEMENTS
    // ===============================

    const premiumRisk =
    document.getElementById("premiumRisk");

    const meterProgress =
    document.querySelector(".meter-progress");

    const meterLabel =
    document.querySelector(".meter-content p");

    const summaryAlert =
    document.querySelector(".summary-alert");

    const summaryText =
    document.querySelector(".summary-text");

    const recommendationsPanel =
    document.querySelector(".recommendations-panel ul");

    const analyticsCards =
    document.querySelectorAll(".analytics-card");

    // ===============================
    // RISK CALCULATION
    // ===============================

    const confidence =
    Math.round(result.confidence);

    premiumRisk.innerHTML =
    `${confidence}%`;

    // CIRCLE ANIMATION

    const radius = 105;

    const circumference =
    2 * Math.PI * radius;

    meterProgress.style.strokeDasharray =
    circumference;

    const offset =
    circumference -
    (confidence / 100) * circumference;

    meterProgress.style.strokeDashoffset =
    offset;

    // ===============================
    // RISK LEVELS
    // ===============================

    let riskLevel = "";
    let gradient = "";
    let summaryMessage = "";
    let recommendations = [];

    if(confidence < 40){

        riskLevel = "Low Risk";

        gradient =
        "url(#riskGradient)";

        summaryMessage =
        "Your cardiovascular indicators appear healthy and stable. Continue maintaining a balanced lifestyle and regular health monitoring.";

        recommendations = [

            "Maintain regular exercise routine",

            "Continue healthy eating habits",

            "Stay hydrated daily",

            "Maintain quality sleep cycle",

            "Continue yearly health checkups"

        ];

        summaryAlert.style.background =
        "rgba(34,197,94,0.15)";

        summaryAlert.style.color =
        "#22c55e";

    }

    else if(confidence >= 40 && confidence <= 60){

        riskLevel = "Medium Risk";

        gradient =
        "#f59e0b";

        summaryMessage =
        "Some cardiovascular indicators require attention. Preventive care and lifestyle improvements are recommended.";

        recommendations = [

            "Reduce oily & processed foods",

            "Exercise at least 30 mins daily",

            "Monitor BP weekly",

            "Reduce stress through meditation",

            "Schedule preventive cardiac consultation"

        ];

        summaryAlert.style.background =
        "rgba(245,158,11,0.15)";

        summaryAlert.style.color =
        "#f59e0b";

    }

    else{

        riskLevel = "High Risk";

        gradient =
        "#ef4444";

        summaryMessage =
        "Elevated cardiovascular risk detected. Immediate lifestyle intervention and medical consultation are highly recommended.";

        recommendations = [

            "Consult a cardiologist immediately",

            "Strictly reduce sodium intake",

            "Avoid smoking & alcohol",

            "Monitor BP and sugar regularly",

            "Follow medically supervised exercise",

            "Improve sleep and stress management"

        ];

        summaryAlert.style.background =
        "rgba(239,68,68,0.15)";

        summaryAlert.style.color =
        "#ef4444";

    }

    // ===============================
    // UPDATE UI
    // ===============================

    meterProgress.style.stroke =
    gradient;

    meterLabel.innerHTML =
    riskLevel;

    summaryAlert.innerHTML =
    riskLevel;

    summaryText.innerHTML =
    summaryMessage;

    // ===============================
    // RECOMMENDATIONS
    // ===============================

    recommendationsPanel.innerHTML = "";

    recommendations.forEach((item) => {

        recommendationsPanel.innerHTML +=
        `<li>${item}</li>`;

    });

    // ===============================
    // DYNAMIC ANALYTICS
    // ===============================

    analyticsCards[0].querySelector("h2").innerHTML =
    data.chol;

    analyticsCards[0].querySelector("span").innerHTML =
    data.chol > 240
    ? "Above Normal"
    : "Healthy";

    analyticsCards[1].querySelector("h2").innerHTML =
    `${Math.floor((data.age / 2) + 18)}.${data.ca}`;

    analyticsCards[2].querySelector("h2").innerHTML =
    data.exang === "True"
    ? "42%"
    : "81%";

    analyticsCards[3].querySelector("h2").innerHTML =
    confidence > 60
    ? "48%"
    : "82%";

    // ===============================
    // RESET BUTTON
    // ===============================

    button.innerHTML =
    "Analyze with AI";

    button.disabled = false;

}, 5000);
    }
    
    catch(error){

        console.error(error);

        clearInterval(interval);

        aiLoader.classList.remove("active");

        alert("Backend connection failed.");

        button.innerHTML =
        "Analyze with AI";

        button.disabled = false;

    }

});

// ==========================================
// HEARTGUARD REPORT DOWNLOAD
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const btn =
        document.getElementById("downloadReport");

    if(btn){
        btn.addEventListener(
            "click",
            generateReport
        );
    }

});

function generateReport(){

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    const riskScore =
        document.getElementById("premiumRisk")
        .innerText;

    const riskLevel =
        document.getElementById("riskLevel")
        .innerText;

    const summaryAlert =
        document.getElementById("summaryAlert")
        .innerText;

    const summaryText =
        document.getElementById("summaryText")
        .innerText;

    const recommendations =
        document.querySelectorAll(
            "#recommendationList li"
        );

    const date =
        new Date().toLocaleDateString();

    // =====================================
    // HEADER
    // =====================================

    doc.setFontSize(22);

    doc.text(
        "HeartGuard AI",
        20,
        20
    );

    doc.setFontSize(12);

    doc.text(
        "AI Cardiovascular Intelligence Report",
        20,
        30
    );

    doc.line(
        20,
        35,
        190,
        35
    );

    // =====================================
    // DATE
    // =====================================

    doc.text(
        `Generated On: ${date}`,
        20,
        45
    );

    // =====================================
    // RESULT
    // =====================================

    doc.setFontSize(16);

    doc.text(
        "Prediction Result",
        20,
        60
    );

    doc.setFontSize(12);

    doc.text(
        `Risk Score: ${riskScore}`,
        20,
        72
    );

    doc.text(
        `Risk Level: ${riskLevel}`,
        20,
        82
    );

    // =====================================
    // ALERT
    // =====================================

    doc.setFontSize(16);

    doc.text(
        "Clinical Assessment",
        20,
        100
    );

    doc.setFontSize(12);

    doc.text(
        summaryAlert,
        20,
        112
    );

    // =====================================
    // SUMMARY
    // =====================================

    doc.setFontSize(16);

    doc.text(
        "AI Clinical Summary",
        20,
        130
    );

    doc.setFontSize(12);

    doc.text(
        summaryText,
        20,
        142,
        {
            maxWidth: 165
        }
    );

    // =====================================
    // RECOMMENDATIONS
    // =====================================

    let y = 190;

    doc.setFontSize(16);

    doc.text(
        "Recommended Action Plan",
        20,
        y
    );

    y += 12;

    doc.setFontSize(12);

    recommendations.forEach((item,index)=>{

        doc.text(
            `${index+1}. ${item.innerText}`,
            25,
            y
        );

        y += 10;
    });

    // =====================================
    // DISCLAIMER
    // =====================================

    y += 15;

    doc.setFontSize(10);

    doc.text(
        "Disclaimer: This report is generated using machine learning predictions and should not replace professional medical advice.",
        20,
        y,
        {
            maxWidth:165
        }
    );

    // =====================================
    // SAVE
    // =====================================

    doc.save(
        "HeartGuard_AI_Report.pdf"
    );

}