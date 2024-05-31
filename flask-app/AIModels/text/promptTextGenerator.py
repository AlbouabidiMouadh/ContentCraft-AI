"""
    Text Generation
    Tools: OpenAI GPT-3
    Description: Generates text based on a prompt.
"""

import openai

# Replace with your OpenAI API key
openai.api_key = "your-api-key"


def promptTextGenerator(input: str):
    # Define the prompt for generating text
    prompt = "Write a creative story about a space adventure:"

    # Generate text using OpenAI's GPT-3
    response = openai.Completion.create(engine="davinci", prompt=input, max_tokens=150)

    # Print the generated text
    print(response.choices[0].text.strip())
    return response.choices[0].text.strip()
