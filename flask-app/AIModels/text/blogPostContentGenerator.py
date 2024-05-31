"""
    Automated Blog Post Generation
    Tools: Hugging Face Transformers
    Description: Generates a blog post based on a given prompt.

"""

from transformers import pipeline


def blogPostContentGenerator(input: str):
    # Initialize the text generation pipeline
    generator = pipeline("text-generation", model="gpt-2")

    # Define the prompt for the blog post
    prompt = "The impact of artificial intelligence on modern healthcare"

    # Generate the blog post content
    blog_post = generator(prompt, max_length=500, num_return_sequences=1)

    # Print the generated blog post
    print(blog_post[0]["generated_text"])
    return blog_post[0]["generated_text"]
