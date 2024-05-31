"""
    Summarizing Long Documents
    Tools: Hugging Face Transformers
    Description: Summarizes a long document.
"""

from transformers import pipeline

# Load a text summarization pipeline from Hugging Face
summarizer = pipeline("summarization")


def sumarizeDocument(input: str):

    # Long document content
    long_document = """
    Artificial intelligence (AI) is a wide-ranging tool that enables people to rethink how we integrate information, analyze data, and use the resulting insights to improve decision making. The rapid evolution of AI technology has led to a significant impact on various industries including healthcare, finance, and transportation. By leveraging AI, organizations can automate routine tasks, gain deeper insights from data, and enhance the overall customer experience.
    """

    # Summarize the long document
    summary = summarizer(input, max_length=100, min_length=25, do_sample=False)[0][
        "summary_text"
    ]

    # Print the summarized text
    print(summary)
    return summary
