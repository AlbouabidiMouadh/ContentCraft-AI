"""
    Automatic Hashtag Generation
    Tools: Python, Hugging Face Transformers
    Description: Generates relevant hashtags for a given text.
"""

from transformers import pipeline


def automaticHashtagGenrator(input: str):

    # Initialize the keyword extraction pipeline
    keyword_extractor = pipeline("feature-extraction", model="distilbert-base-uncased")

    # Define the text for hashtag generation
    text = "Exploring the wonders of artificial intelligence and machine learning."

    # Extract keywords
    keywords = keyword_extractor(input)

    # Generate hashtags based on keywords
    hashtags = ["#" + keyword.strip().replace(" ", "") for keyword in keywords]

    # Print the generated hashtags
    print("Generated Hashtags:", hashtags)
    return hashtags
