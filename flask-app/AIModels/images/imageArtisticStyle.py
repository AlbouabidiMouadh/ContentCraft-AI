"""
    Style Transfer for Images
    Tools: TensorFlow, VGG19
    Description: Applies artistic style transfer to an image.
"""

import tensorflow as tf
import matplotlib.pyplot as plt
from tensorflow.keras.applications import VGG19
from tensorflow.keras.models import Model
from tensorflow.keras.preprocessing.image import img_to_array, load_img


# Function to preprocess the image
def preprocess_image(image_path, target_size=(224, 224)):
    img = load_img(image_path, target_size=target_size)
    img = img_to_array(img)
    img = tf.keras.applications.vgg19.preprocess_input(img)
    img = tf.expand_dims(img, axis=0)
    return img


# Function to deprocess the image
def deprocess_image(processed_img):
    x = processed_img.copy()
    if len(x.shape) == 4:
        x = tf.squeeze(x, axis=0)
    x[:, :, 0] += 103.939
    x[:, :, 1] += 116.779
    x[:, :, 2] += 123.68
    x = x[:, :, ::-1]
    x = tf.clip_by_value(x, 0, 255).numpy().astype("uint8")
    return x


# Load content and style images
content_image_path = "content_image.jpg"
style_image_path = "style_image.jpg"
content_image = preprocess_image(content_image_path)
style_image = preprocess_image(style_image_path)

# Load the VGG19 model
vgg = VGG19(include_top=False, weights="imagenet")
content_layers = ["block5_conv2"]
style_layers = [
    "block1_conv1",
    "block2_conv1",
    "block3_conv1",
    "block4_conv1",
    "block5_conv1",
]
output_layers = content_layers + style_layers
vgg_model = Model([vgg.input], [vgg.get_layer(name).output for name in output_layers])


# Function to compute content loss
def compute_content_loss(base_content, target):
    return tf.reduce_mean(tf.square(base_content - target))


# Function to compute style loss
def gram_matrix(input_tensor):
    result = tf.linalg.einsum("bijc,bijd->bcd", input_tensor, input_tensor)
    input_shape = tf.shape(input_tensor)
    num_locations = tf.cast(input_shape[1] * input_shape[2], tf.float32)
    return result / (num_locations)


def compute_style_loss(base_style, gram_target):
    height, width, channels = base_style.get_shape().as_list()
    gram_style = gram_matrix(base_style)
    return tf.reduce_mean(tf.square(gram_style - gram_target))


# Function to compute total loss
def compute_loss(
    model, loss_weights, init_image, gram_style_features, content_features
):
    model_outputs = model(init_image)
    style_output_features = model_outputs[len(content_layers) :]
    content_output_features = model_outputs[: len(content_layers)]
    style_score = 0
    content_score = 0
    weight_per_style_layer = 1.0 / float(len(style_layers))
    for target_style, comb_style in zip(gram_style_features, style_output_features):
        style_score += weight_per_style_layer * compute_style_loss(
            comb_style[0], target_style
        )
    weight_per_content_layer = 1.0 / float(len(content_layers))
    for target_content, comb_content in zip(content_features, content_output_features):
        content_score += weight_per_content_layer * compute_content_loss(
            comb_content[0], target_content
        )
    style_score *= loss_weights[0]
    content_score *= loss_weights[1]
    loss = style_score + content_score
    return loss, style_score, content_score


# Set hyperparameters and optimizer
style_weight = 1e-2
content_weight = 1e4
total_variation_weight = 30
optimizer = tf.optimizers.Adam(learning_rate=0.02)

# Initialize the generated image with the content image
init_image = tf.Variable(content_image, dtype=tf.float32)

# Extract features from the content and style images
content_features = [
    vgg_model(content_image)[content_layers.index(layer)] for layer in content_layers
]
style_features = [
    vgg_model(style_image)[style_layers.index(layer)] for layer in style_layers
]
gram_style_features = [gram_matrix(style_feature) for style_feature in style_features]


# Optimization step
def compute_grads(cfg):
    with tf.GradientTape() as tape:
        all_loss = compute_loss(**cfg)
    total_loss = all_loss[0]
    return tape.gradient(total_loss, cfg["init_image"]), all_loss


# Configuration for the optimization step
cfg = {
    "model": vgg_model,
    "loss_weights": (style_weight, content_weight),
    "init_image": init_image,
    "gram_style_features": gram_style_features,
    "content_features": content_features,
}

# Optimization loop
num_iterations = 1000
for i in range(num_iterations):
    grads, all_loss = compute_grads(cfg)
    optimizer.apply_gradients([(grads, init_image)])
    if i % 100 == 0:
        print(f"Iteration {i}: Loss = {all_loss[0].numpy()}")

# Save the stylized image
final_image = deprocess_image(init_image.numpy())
final_image_pil = Image.fromarray(final_image)
final_image_pil.save("stylized_image.jpg")
