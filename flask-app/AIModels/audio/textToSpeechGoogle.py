"""
    Text-to-Speech Conversion
    Tools: gTTS (Google Text-to-Speech)
    Description: Converts text to speech and saves it as an audio file.
"""

from gtts import gTTS


def textToSpeechGoogle(text: str, outputPath: str):

    # Define the text to convert to speech
    # text = "Hello, this is a sample text to speech conversion."

    # Create a gTTS object with the text and language
    tts = gTTS(text=text, lang="en")

    # Save the converted speech to a file
    tts.save(outputPath)
    return tts
