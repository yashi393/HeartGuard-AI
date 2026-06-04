# ❤️ HeartGuard AI
### Intelligent Heart Disease Risk Prediction System

HeartGuard AI is a full-stack healthcare analytics platform that leverages Machine Learning and modern web technologies to predict the likelihood of heart disease based on patient clinical attributes.

The platform combines predictive analytics, healthcare visualization, explainable AI-inspired insights, and an interactive user experience into a single web application.

Users can enter medical parameters through an intuitive assessment interface and receive:

- Heart Disease Risk Prediction
- Confidence Score
- AI Clinical Summary
- Personalized Health Recommendations
- Interactive Healthcare Dashboard
- Downloadable Medical Report
- Data Analytics Visualizations

---

## 🌐 Live Demo

**Link:** https://healthcare-heartguard-ai.netlify.app/

---

## 📸 Project Screenshots

### Home Page
<img width="1900" height="907" alt="image" src="https://github.com/user-attachments/assets/68f5c833-0e02-43ce-83e3-f88d817dcbf8" />


### AI Assessment Interface
<img width="1901" height="906" alt="image" src="https://github.com/user-attachments/assets/5a35ac01-1042-4684-a8e4-1ff78ebeb300" />


### AI Result Dashboard
<img width="1900" height="902" alt="image" src="https://github.com/user-attachments/assets/fe82ba1b-5fef-4777-ad13-de4fcb35a071" />



### Data Analytics Dashboard
<img width="1897" height="911" alt="image" src="https://github.com/user-attachments/assets/7feb31e4-0bbc-40b2-ab9a-97cb3f26b3db" />
<img width="1895" height="903" alt="image" src="https://github.com/user-attachments/assets/b3c690ec-3042-4241-aa95-ac00bc6aa6dc" />

### Conclusion & Future Scope
<img width="1901" height="892" alt="image" src="https://github.com/user-attachments/assets/42f31115-6c43-4642-9e6a-1db4f85434b2" />
<img width="1897" height="553" alt="image" src="https://github.com/user-attachments/assets/7e0e988d-37e3-4c8a-a5bb-1687ebb0cfdd" />


---

# 📖 Project Overview

Cardiovascular diseases remain one of the leading causes of mortality worldwide.

Traditional diagnosis often requires multiple medical examinations, clinical evaluations, and specialist consultation.

HeartGuard AI was developed as an intelligent healthcare analytics solution capable of analyzing cardiovascular indicators and generating preliminary risk assessments.

The objective of this project is to demonstrate how Machine Learning can assist in preventive healthcare by identifying potential risk patterns before severe cardiovascular complications occur.

> ⚠️ This project is intended for educational and research purposes only and should not be considered a replacement for professional medical diagnosis.

---

# 🎯 Objectives

- Predict the likelihood of heart disease using Machine Learning.
- Provide an intuitive healthcare assessment experience.
- Generate AI-powered clinical insights.
- Visualize healthcare analytics through interactive charts.
- Deploy a complete full-stack AI application.
- Promote awareness of preventive healthcare practices.

---

# ✨ Key Features

### 🤖 AI-Powered Prediction Engine

Predicts heart disease risk using a trained Random Forest Machine Learning model.

### 📋 Smart Health Assessment

Users can enter:

- Age
- Sex
- Chest Pain Type
- Blood Pressure
- Cholesterol
- Fasting Blood Sugar
- ECG Results
- Maximum Heart Rate
- Exercise-Induced Angina
- ST Depression
- Slope
- Major Vessels Count
- Thalassemia Information

### 📊 Premium AI Dashboard

Displays:

- Risk Percentage
- Risk Classification
- Clinical Summary
- Health Analytics
- Recommendations

### 📈 Healthcare Analytics

Includes:

- Heart Disease Distribution
- Age Distribution
- Chest Pain Analysis
- Feature Importance
- Confusion Matrix
- ROC Curve

### 📄 Downloadable Medical Report

Allows users to download prediction reports for future reference.

### 📱 Fully Responsive Design

Optimized for:

- Desktop
- Tablet
- Mobile Devices

---

# 🗂 Dataset Information

### Dataset Statistics

| Attribute | Value |
|------------|--------|
| Records | 920 |
| Features | 13 Input Features |
| Target Variable | Heart Disease Presence |
| Total Columns | 14 |

### Features Used

| Feature | Description |
|----------|-------------|
| age | Age of patient |
| sex | Gender |
| cp | Chest pain type |
| trestbps | Resting blood pressure |
| chol | Serum cholesterol |
| fbs | Fasting blood sugar |
| restecg | Resting ECG results |
| thalch | Maximum heart rate achieved |
| exang | Exercise induced angina |
| oldpeak | ST depression |
| slope | Slope of exercise ST segment |
| ca | Number of major vessels |
| thal | Thalassemia |
| num | Target Variable |

### Target Variable

| Value | Meaning |
|---------|----------|
| 0 | No Heart Disease |
| 1 | Heart Disease Present |

---

# 📊 Exploratory Data Analysis

Several analytical visualizations were performed before model training.

### Heart Disease Distribution

Analyzed class balance within the dataset.

### Age Distribution

Studied patient age patterns and distribution.

### Chest Pain Analysis

Explored the relationship between chest pain categories and disease occurrence.

### Correlation Heatmap

Identified feature relationships and dependencies.

### Feature Importance

Determined the most influential variables contributing to prediction.

### Confusion Matrix

Evaluated model prediction performance.

### ROC Curve

Measured classification effectiveness and discriminative capability.

---

# 🧠 Machine Learning Pipeline

```text
Raw Dataset
      ↓
Data Cleaning
      ↓
Preprocessing
      ↓
Encoding
      ↓
Model Training
      ↓
Prediction Pipeline
      ↓
Deployment
```

### Algorithm Used

**Random Forest Classifier**

### Why Random Forest?

- Handles mixed feature types effectively
- Reduces overfitting through ensemble learning
- Provides feature importance scores
- Performs well on healthcare datasets
- Robust and interpretable

---

# 📈 Model Performance

## Accuracy

```text
84.78%
```

## Classification Report

```text
Class 0

Precision : 0.88
Recall    : 0.77
F1 Score  : 0.82

Class 1

Precision : 0.83
Recall    : 0.91
F1 Score  : 0.87
```

## Overall Metrics

```text
Accuracy        : 84.78%
Macro Avg F1    : 0.84
Weighted Avg F1 : 0.85
```

The model demonstrates strong predictive capability for cardiovascular risk assessment.

---

# 🏗 System Architecture

```text
Frontend (HTML/CSS/JavaScript)
                │
                ▼
          Fetch API
                │
                ▼
      FastAPI Backend
                │
                ▼
     Trained ML Pipeline
                │
                ▼
       Prediction Engine
                │
                ▼
         JSON Response
                │
                ▼
      Interactive Dashboard
```

---

# 💻 Technology Stack

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

## Backend

- FastAPI
- Uvicorn

## Machine Learning

- Scikit-learn
- Pandas
- NumPy

## Data Visualization

- Matplotlib
- Seaborn

## Deployment

- GitHub
- Render

---

# 🔌 API Endpoint

## Prediction Endpoint

```http
POST /predict
```

### Example Request

```json
{
  "age": 45,
  "sex": "Male",
  "cp": "typical angina",
  "trestbps": 140,
  "chol": 250,
  "fbs": "False",
  "restecg": "normal",
  "thalch": 150,
  "exang": "True",
  "oldpeak": 2.3,
  "slope": "flat",
  "ca": "1.0",
  "thal": "fixed defect"
}
```

### Example Response

```json
{
  "prediction": 1,
  "risk_level": "High Risk",
  "confidence": 84.76
}
```

---

# 🚀 Deployment

### Frontend Hosting

- Render Static Site

### Backend Hosting

- Render Web Service

### Deployment Workflow

```text
GitHub Repository
          │
          ▼
 Render Deployment
          │
          ▼
Frontend ↔ Backend API
          │
          ▼
Production Environment
```

---

# ⚡ Challenges Faced

### Machine Learning Integration

Loading the trained model pipeline efficiently within FastAPI.

### Frontend–Backend Communication

Managing API requests and dynamic dashboard updates.

### Deployment Issues

Encountered route configuration issues where API requests initially returned:

```text
404 Not Found
```

The issue was resolved by correctly targeting:

```text
https://heartguard-ai-nve4.onrender.com/predict
```

instead of the root backend URL.

### Dashboard Synchronization

Ensuring prediction results dynamically updated all dashboard components.

---

# 🔮 Future Scope

- Explainable AI (SHAP/LIME)
- Real-Time ECG Analysis
- Wearable Device Integration
- Multi-Disease Prediction
- Cloud-Based Patient Monitoring
- Doctor Consultation Module
- User Authentication System
- Healthcare Report History
- Mobile Application Development

---

# 📚 Learning Outcomes

Through this project, I gained practical experience in:

- Machine Learning Lifecycle
- Healthcare Analytics
- Data Visualization
- Model Evaluation
- FastAPI Development
- REST API Integration
- Frontend Development
- Deployment & Hosting
- Full-Stack AI Application Development

---

# ⚠️ Disclaimer

This project was developed for educational and research purposes only.

Predictions generated by the system should not be considered professional medical advice. Users should consult qualified healthcare professionals for diagnosis and treatment decisions.

---

# 👩‍💻 Author

### Yashi Depani

Data Science | AI/ML | Analytics

📧 Email: yashidepani24@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/yashi-depani-938660230/

💻 GitHub: https://github.com/yashi393

🌐 Portfolio: https://yashi-depani-393.netlify.app/

---

⭐ If you found this project interesting, consider giving it a star on GitHub.
