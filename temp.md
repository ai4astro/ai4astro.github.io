
So now you know what each layer does, how do you decide what order to place them in to build your CNN? The simple answer to this is that there is no good answer, and that trial and error is often used as a solution. There are some considerations to bear in mind though, for example, the *depth* of your network (i.e. the number of layers) is usually related to the volume of information you have and vice-versa. Very deep CNNs require extremely large training datasets. However, if you're just getting started you should probably begin with one of the well-known and well-tested architectures that already exist in the literature.

So what's out there?

•    **LeNet** Named after Yann LeCunn who developed the first successful applications of Convolutional Networks in  the 1990’s.
•    **AlexNet** Not very different to LeNet, but the first CNN to stack multiple convolutional layers before adding a pooling layer.
•    **GoogLeNet** Includes the *Inception Module* that dramatically reduced the number of parameters in the network (4M, compared to AlexNet with 60M). Uses average-pooling layers instead of fully-connected layers.
•    **VGGNet** Showed that the depth of the network is a critical component for good performance. An extremely homogeneous architecture that only performs 3x3 convolutions and 2x2 pooling from the beginning to the end.
•    **ResNet** This architecture introduced *skip connections* and used *batch normalization* after the activation layers. Like GoogLeNet, ResNet removes the fully-connected layers. ResNets are currently the default best option CNN, although opinions are divided on the efficacy of batch normalization.

If you want to know how to use one of these pre-defined architectures see the network definition in the [Python example below](#definition).

The other thing that's nice about using inherited architectures is that there are often pre-trained models available for you to use. This is important because training your CNN is the most computationally expensive part of using a CNN. Applying the model to new test data is almost negligible in comparison. Pre-trained models can be useful for many reasons, one of which is that you may not have access to the (possibly huge) dataset that was used for the training. Another reason is because the weights in the convolution layers that define the convolutional filters are often pretty agnostic to the actual images that they've been trained to classify. For example, the convolutional filters that you might use to solve the *cat/mouse* classification problem are equally appropriate for separating images of star-forming galaxies from those of active galactic nuclei. This approach, freezing the convolutional layer weights and only re-training the weights in the fully-connected layers, is an example of *transfer learning*.


