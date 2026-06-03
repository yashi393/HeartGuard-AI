import joblib
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

model_path = os.path.join(BASE_DIR, '..', 'models', 'heartguard_pipeline.pkl')

pipeline = joblib.load(model_path)