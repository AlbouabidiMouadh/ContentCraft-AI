# """
#     Image Caption Generation
#     Tools: TensorFlow, InceptionV3, RNN
#     Description: Generates a caption for an image.

# """

# import tensorflow as tf
# import numpy as np
# # from tensorflow.keras.preprocessing import image
# # from tensorflow.keras.applications.inception_v3 import InceptionV3, preprocess_input
# # from tensorflow.keras.models import Model, load_model

# # Load InceptionV3 model pre-trained on ImageNet
# inception_model = InceptionV3(weights="imagenet")
# model_new = Model(inception_model.input, inception_model.layers[-2].output)


# # Load the image
# def preprocess_image(img_path):
#     img = image.load_img(img_path, target_size=(299, 299))
#     x = image.img_to_array(img)
#     x = np.expand_dims(x, axis=0)
#     x = preprocess_input(x)
#     return x


# # Encode the image
# def encode_image(img):
#     img = preprocess_image(img)
#     fea_vec = model_new.predict(img)
#     fea_vec = np.reshape(fea_vec, fea_vec.shape[1])
#     return fea_vec


# # Load the RNN model for caption generation
# caption_model = load_model("caption_generator_model.h5")


# # Function to generate caption
# def generate_caption(photo):
#     start_word = ["startseq"]
#     while True:
#         seq = [wordtoix[word] for word in start_word if word in wordtoix]
#         seq = pad_sequences([seq], maxlen=max_length)
#         yhat = caption_model.predict([photo, seq], verbose=0)
#         yhat = np.argmax(yhat)
#         word = ixtoword[yhat]
#         start_word.append(word)
#         if word == "endseq" or len(start_word) > max_length:
#             break
#     final_caption = " ".join(start_word[1:-1])
#     return final_caption


# def imageCaptionGenerator(inputPath: str):

#     # Path to the image to caption
#     image_path = inputPath

#     # Encode the image and generate the caption
#     encoded_image = encode_image(image_path).reshape((1, 2048))
#     caption = generate_caption(encoded_image)

#     # Print the generated caption
#     print("Generated Caption:", caption)
#     return caption
