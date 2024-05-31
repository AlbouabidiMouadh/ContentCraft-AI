"""
    AI Content Generator
    Tools: OpenAI GPT-3
    Description: Generates blog post ideas based on a prompt.

"""

import openai

# Replace with your OpenAI API key
openai.api_key = "your-api-key"


def blogPostIdeasGenerator(input: str):

    # Define the prompt for generating blog post ideas
    prompt = "Generate blog post ideas about AI in healthcare:"

    # Generate blog post ideas using OpenAI's GPT-3
    response = openai.Completion.create(engine="davinci", prompt=input, max_tokens=100)

    # Print the generated blog post ideas
    print(response.choices[0].text.strip())
    return response.choices[0].text.strip()
