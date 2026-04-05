---
title: "Building a Mental Health Classifier: What I Learned"
date: "2025-07-01"
category: "AI"
excerpt: "Reflections from training a deep learning model on self-collected data — what worked, what didn't, and what it means to apply ML in sensitive domains."
readTime: "6 min read"
---

## Why I Built This

Mental health detection using ML is one of those ideas that sounds straightforward until you actually try it. I built this project for my MCA program, but more importantly, I built it because I genuinely wanted to understand whether deep learning could meaningfully classify mental health conditions from structured self-report data.

## The Data Problem

The first challenge was data. I collected primary data from personal and professional networks — a decision that shaped everything downstream. The dataset was small, the labels were self-reported, and the feature space was noisy.

**What this forced me to do well:**
- Careful data preprocessing and cleaning
- Aggressive feature engineering to extract signal from noise
- Proper train/validation/test splits to avoid overfitting on a small dataset

## Model Architecture

I used TensorFlow and Keras to experiment with several neural network architectures. The final model used a relatively simple feedforward network — adding complexity didn't help with the dataset size.

```python
model = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='relu', input_shape=(n_features,)),
    tf.keras.layers.Dropout(0.3),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(n_classes, activation='softmax')
])
```

## What the Model Got Right

The classifier performed reliably on clear-cut cases. When features aligned strongly with a particular category, the model was consistent.

## Where It Failed

Edge cases — ambiguous feature combinations, comorbid presentations — exposed the limits of a small training set. The model lacked the confidence to say "I don't know."

## The Bigger Lesson

The most important insight wasn't technical. It was this: **good ML in sensitive domains requires domain expertise, not just model accuracy**. A 90% accurate mental health classifier deployed without clinical context is more dangerous than no classifier at all.

Building this taught me to ask not just "does the model work?" but "should this model be deployed, and under what conditions?"
