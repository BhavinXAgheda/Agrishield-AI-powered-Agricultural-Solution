# Test TensorFlow import
try:
    import tensorflow as tf
    print("TensorFlow import successful")
except ImportError as e:
    print(f"TensorFlow import error: {e}")
