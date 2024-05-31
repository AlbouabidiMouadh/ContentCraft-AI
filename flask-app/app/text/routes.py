# from app.text import bp
# from flask import request, jsonify
# from AIModels.text.audioToText import audioToText
# # from AIModels.text.automaticHashtagGenerator import automaticHashtagGenerator
# from AIModels.text.blogPostContentGenerator import blogPostContentGenerator
# from AIModels.text.blogPostIdeasGenerator import blogPostIdeasGenerator
# from AIModels.text.keywordExtraction import keywordExtraction
# from AIModels.text.postHashtagGenerator import postHashtagGenerator
# from AIModels.text.promptTextGenerator import promptTextGenerator
# from AIModels.text.summarizeDocuments import summarizeDocument
# import os
# import logging
# from werkzeug.utils import secure_filename

# # Configure logging
# logging.basicConfig(level=logging.DEBUG)

# # Paths for input files
# input_dir = "./app/text/input"
# os.makedirs(input_dir, exist_ok=True)

# @bp.route("/text")
# def index():
#     return "This is the main blueprint of text"

# @bp.route("/text/audioToText", methods=["POST"])
# def handle_audio_to_text():
#     audio = request.files["audio"]
#     filename = secure_filename(audio.filename)
#     input_path = os.path.join(input_dir, filename)

#     logging.debug(f"Saving uploaded audio to {input_path}")
#     audio.save(input_path)

#     logging.debug(f"Converting audio to text from {input_path}")
#     output = audioToText(input_path)

#     return jsonify({"text": output})

# # @bp.route("/text/automaticHashtagGenerator", methods=["POST"])
# # def handle_automatic_hashtag_generator():
# #     prompt = request.json.get('prompt', '')
# #     logging.debug(f"Generating hashtags for prompt: {prompt}")
# #     output = automaticHashtagGenerator(prompt)
# #     return jsonify({"hashtags": output})

# @bp.route("/text/blogPostContentGenerator", methods=["POST"])
# def handle_blog_post_content_generator():
#     prompt = request.json.get('prompt', '')
#     logging.debug(f"Generating blog post content for prompt: {prompt}")
#     output = blogPostContentGenerator(prompt)
#     return jsonify({"content": output})

# @bp.route("/text/blogPostIdeasGenerator", methods=["POST"])
# def handle_blog_post_ideas_generator():
#     prompt = request.json.get('prompt', '')
#     logging.debug(f"Generating blog post ideas for prompt: {prompt}")
#     output = blogPostIdeasGenerator(prompt)
#     return jsonify({"ideas": output})

# @bp.route("/text/keywordExtraction", methods=["POST"])
# def handle_keyword_extraction():
#     prompt = request.json.get('prompt', '')
#     logging.debug(f"Extracting keywords for prompt: {prompt}")
#     output = keywordExtraction(prompt)
#     return jsonify({"keywords": output})

# @bp.route("/text/postHashtagGenerator", methods=["POST"])
# def handle_post_hashtag_generator():
#     prompt = request.json.get('prompt', '')
#     logging.debug(f"Generating post hashtags for prompt: {prompt}")
#     output = postHashtagGenerator(prompt)
#     return jsonify({"hashtags": output})

# @bp.route("/text/promptTextGenerator", methods=["POST"])
# def handle_prompt_text_generator():
#     prompt = request.json.get('prompt', '')
#     logging.debug(f"Generating text for prompt: {prompt}")
#     output = promptTextGenerator(prompt)
#     return jsonify({"text": output})

# @bp.route("/text/summarizeDocuments", methods=["POST"])
# def handle_summarize_documents():
#     prompt = request.json.get('prompt', '')
#     logging.debug(f"Summarizing document for prompt: {prompt}")
#     output = summarizeDocument(prompt)
#     return jsonify({"summary": output})
