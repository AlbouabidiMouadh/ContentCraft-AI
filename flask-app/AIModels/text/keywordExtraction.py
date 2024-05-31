"""
    Basic Keyword Extraction
    Tools: RAKE (Rapid Automatic Keyword Extraction)
    Description: Extracts keywords from a given text.
"""

from rake_nltk import Rake
import nltk
nltk.download('stopwords')
# Initialize RAKE
rake_nltk_var = Rake()


def keywordExtraction(input: str):

    # Define the text
    text = """
    Artificial intelligence (AI) is transforming various industries by automating tasks, providing insights from data, and enhancing customer experiences.
    In healthcare, AI is used for early diagnosis of diseases, personalized treatment plans, and predictive analytics.
    Finance sectors leverage AI for fraud detection, customer service, and investment strategies.
    Transportation is seeing the impact of AI with autonomous vehicles and optimized logistics.
    The integration of AI is driving efficiency and innovation across these fields, leading to significant advancements and improved outcomes.
    """

    # Extract keywords
    rake_nltk_var.extract_keywords_from_text(input)
    keywords = rake_nltk_var.get_ranked_phrases()

    # Print the keywords
    print("Keywords:", keywords)
    return keywords
