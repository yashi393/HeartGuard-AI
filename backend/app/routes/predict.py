from fastapi import APIRouter
from pydantic import BaseModel
import pandas as pd
from app.model_loader import pipeline

router = APIRouter()

# Input schema
class HeartInput(BaseModel):
    age: int
    sex: str
    cp: str
    trestbps: float
    chol: float
    fbs: str
    restecg: str
    thalch: float
    exang: str
    oldpeak: float
    slope: str
    ca: str
    thal: str

# Home test route
@router.get("/test")
def test():
    return {"message": "Prediction route working"}

# Prediction route
@router.post("/predict")
def predict(data: HeartInput):

    # Convert input to dataframe
    input_data = pd.DataFrame([{
        "age": data.age,
        "sex": data.sex,
        "cp": data.cp,
        "trestbps": data.trestbps,
        "chol": data.chol,
        "fbs": data.fbs,
        "restecg": data.restecg,
        "thalch": data.thalch,
        "exang": data.exang,
        "oldpeak": data.oldpeak,
        "slope": data.slope,
        "ca": data.ca,
        "thal": data.thal
    }])

    # Prediction
    prediction = pipeline.predict(input_data)[0]

    # Probability
    probability = pipeline.predict_proba(input_data)[0][1]

    # Risk label
    risk = "High Risk" if prediction == 1 else "Low Risk"

    # Confidence %
    confidence = round(probability * 100, 2)

    # Recommendations
    recommendations = []

    if prediction == 1:
        recommendations = [
            "Consult a cardiologist",
            "Monitor blood pressure regularly",
            "Reduce cholesterol intake",
            "Exercise regularly",
            "Avoid smoking and alcohol"
        ]
    else:
        recommendations = [
            "Maintain healthy lifestyle",
            "Continue regular exercise",
            "Balanced diet recommended"
        ]

    return {
        "prediction": int(prediction),
        "risk_level": risk,
        "confidence": confidence,
        "recommendations": recommendations
    }