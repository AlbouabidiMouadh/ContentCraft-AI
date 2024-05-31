"""
    Hashtag Generator
    Tools: Hugging Face Transformers
    Description: Generates hashtags from a blog post.

"""
from transformers import pipeline

# Load a text summarization pipeline from Hugging Face
summarizer = pipeline("summarization")
def postHashtagGenerator(input: str):
    # Sample blog post content
    blog_post = """
    Artificial intelligence (AI) is rapidly transforming the field of healthcare. With its ability to analyze large amounts of data quickly and accurately, AI is helping to diagnose diseases, develop treatment plans, and predict patient outcomes.
    """

    # Summarize the content to create a short description
    summary = summarizer(input, max_length=30, min_length=10, do_sample=False)[0][
        "summary_text"
    ]

    # Generate hashtags by taking words from the summary and adding a hash symbol
    hashtags = [f"#{word}" for word in summary.split() if len(word) > 3]
    # Print the generated hashtags
    print(hashtags)
    return hashtags