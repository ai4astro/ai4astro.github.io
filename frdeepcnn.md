---
layout: page
mathjax: true
permalink: /frdeepcnn/
---

- [ConvolutionalNeural Networks](#cnns)
  - [Layers](#layers)
  - [Back-propagation](#backprop)
  - [LeNET/AlexNET/ResNet etc.](#lenet)
- [CNNs in Python](#python)
  - [Defining the architecture](#arch)
  - [Loading the Dataset](#data)
  - [Training the CNN](#training)
- [Further Reading](#reading)
  
  
<a name="cnns"></a>

The simplest (and perhaps most naive) method of using images for classification would be to take the value of every pixel as a feature and feed them into a machine learning algorithm. One problem that would quickly become obvious is the number of hyper-parameters that would need to be trained by the algorithm. For example if we built a standard neural net to classify an image then we would have to unfold the image into a single vector, i.e. if the image had dimensions of 50 pixels x 50 pixels and it was a standard RGB (3 colour) image, then the input layer of our neural network would have a size of 50x50x3 = 7500. If our image was 500 x 500 pixels then it would be 750,000... 

<div class="fig figcenter fighighlight">
  <img width="300" height="200" src="/images/neuralnet.png">
  <div class="figcaption">Neural net</div>
</div>

One of the very useful things about convolutional neural networks (CNNs) is that they don't require us to flatten our input data and we can maintain the dimensionality of our input all the way through. In order to do this, CNNs are not composed of individual neurons but instead are comprised of functional *layers*, which have learnable weights associated with them.

<a name="layers"></a>

<h4>Layers</h4>

The typical layers you will find in a convolutional neural network are:

**Input Layer** This is the input data sample. If this is a normal image it could have dimensions of 50x50x3, where the image has 50 pixels on a side and the 3 refers to the RGB. If the input was a spectral image from a telescope, it might have dimensions 50x50x128, where the image has 50 pixels on a side and 128 spectral (frequency) channels. 

**Convolutional Layer** Convolutional layers have height and width dimensions that are the same as their input *(see note below)* and a depth that is equal to the number of convolutional filters they apply. For example, the RGB image with dimensions of 50x50x3 could be fed into a convolutional layer that used 6 filters, each with dimensions of 5x5. The output would be 50x50x6. Note that there is no multiplication for the number of channels in the input image: convolutional layers apply their filters to each channel separately and then *sum the results*. From the view point of a convolutional layer, all of the input channels in the data sample are interchangeable and equally weighted. 

*Note: when the convolutional layer is applied to a data sample there is usually an option to implement* padding *or not. Padding provides additional zero-valued pixels around the border of the input image which allows the output to have the same height x width dimensions as the input. If padding is not applied then the output is smaller than the input.*

**Activation Layer** The purpose of the activation layer is to introduce *non-linearity* into the network. The most popular activation layer function is the ReLU (rectified linear unit), which applies a thresholding function <code>max(0,x)</code>, where <code>x</code> is the output from the convolutional layer. Convolutional layers are always followed by activation layers.

<div class="fig figcenter fighighlight">
  <img width="300" height="200" src="/images/relu.png">
  <div class="figcaption">ReLU activation function</div>
</div>

**Pooling Layer** Pooling layers reduce the volume of hyper-parameters in the CNN by downsampling the data at various stages in the network. Typical examples include the max-pooling layer, which selects the maximum-valued output within a user-defined area, or the average-pooling layer, which takes the averge over a user-defined area. 

<div class="fig figcenter fighighlight">
  <img width="500" height="250" src="/images/maxpool.png">
  <div class="figcaption">Max Pooling</div>
</div>

**Fully Connected Layer** Fully-connected layers have a pre-defined number of neurons, which are connected to all the outputs from the previous layer. These layers operate like a normal neural network.

**Output Layer** The output layer is a fully-connected layer that has the same size as the number of target classes. 


The architecture of a CNN refers to the order in which these layers are arranged and the dimensionality of each layer. All of the layers apart from the input and output layers are referred to as *hidden layers*. They're not really hidden if you're the one building the CNN in the first place, but if you're a user who just wants to classify an image all you'll see are the input and output - the rest is hidden from you, hence the name.

<a name="backprop"></a>

<h4>Back-propagation</h4>

Back-propagation is a recursive application of the the chain-rule that allows us to calculate the gradient at each point in a neural network in order to update the parameters of the network (i.e. the weights) and optimize a defined loss function. Both the loss function itself and the optimization algorithm are typically defined by the user.

<a name="layers"></a>

<h4>LeNET/AlexNET/ResNet</h4>

So now you know what each layer does, how do you decide what order to place them in to build your CNN? The simple answer to this is that there is no good answer, and that trial and error is often used as a solution. There are some considerations to bear in mind though, for example, the *depth* of your network (i.e. the number of layers) is usually related to the volume of information you have and vice-versa. Very deep CNNs require extremely large training datasets. However, if you're just getting started you should probably begin with one of the well-known and well-tested architectures that already exist in the literature.

So what's out there?

**LeNet** Named after Yann LeCunn who developed the first successful applications of Convolutional Networks in  the 1990’s.

**AlexNet** Not very different to LeNet, but the first CNN to stack multiple convolutional layers before adding a pooling layer.

**GoogLeNet** Includes the *Inception Module* that dramatically reduced the number of parameters in the network (4M, compared to AlexNet with 60M). Uses average-pooling layers instead of fully-connected layers.

**VGGNet** Showed that the depth of the network is a critical component for good performance. An extremely homogeneous architecture that only performs 3x3 convolutions and 2x2 pooling from the beginning to the end.

**ResNet** This architecture introduced *skip connections* and used *batch normalization* after the activation layers. Like GoogLeNet, ResNet removes the fully-connected layers. ResNets are currently the default best option CNN, although opinions are divided on the efficacy of batch normalization.

If you want to know how to use one of these pre-defined architectures see the network definition in the [Python example below](#definition).

The other thing that's nice about using inherited architectures is that there are often pre-trained models available for you to use. This is important because training your CNN is the most computationally expensive part of using a CNN. Applying the model to new test data is almost negligible in comparison. Pre-trained models can be useful for many reasons, one of which is that you may not have access to the (possibly huge) dataset that was used for the training. Another reason is because the weights in the convolution layers that define the convolutional filters are often pretty agnostic to the actual images that they've been trained to classify. For example, the convolutional filters that you might use to solve the *cat/mouse* classification problem are equally appropriate for separating images of star-forming galaxies from those of active galactic nuclei. This approach, freezing the convolutional layer weights and only re-training the weights in the fully-connected layers, is an example of *transfer learning*.




<a name="python"></a>

<h3>CNNs in Python</h3>

There are a variety of different ways to construct CNNs in Python. Popular options include the tensorflow library, the keras library and the PyTorch library. Here I'm going to use PyTorch, whcih I find to be the most straightforward and intuitive option for constructing networks. 

In this toy example, I'm going to use data from the VLA radio telescope to train a CNN to identify a radio galaxy (active galactic nucleus, or AGN) as *Fanaroff-Riley Type I* or *Fanaroff-Riley Type II*, which is a morphological classification that astronomers typically do by eye.

<div class="fig figcenter fighighlight">
  <img width="300" height="200" src="/images/morphology.png">
  <div class="figcaption">Fanaroff-Riley Classification</div>
</div>

To start with, let's import some standard libraries. We'll use these later.

```python
import matplotlib.pyplot as plt
import numpy as np
```

Then we can start to import different tools from the PyTorch library:

```python
import torch
import torchvision
import torchvision.transforms as transforms
from torchsummary import summary
```

```python
import torch.nn as nn
import torch.nn.functional as F
```

```python
import torch.optim as optim
```

I'm going to be using a training dataset of radio galaxies, with images from the FIRST radio survey. This training set has been made into a PyTorch dataset, so it's super easy to use.

```python
from FRDEEP import FRDEEPF
```


<a name="architecture"></a>
<h4>Define the architecture</h4>

The first thing we can do is to define the architecture of our CNN. This architecture has two convolutional layers, each with a ReLU activation function, followed by a max-pooling layer; these layers are then followed by two fully-connected layers, each with a ReLU activation function, and a final output layer. 


There's no padding implemented in the convolutional layers, so the outputs have smaller height and width than the output. The difference in size is the dimenaion of the convolutional filter minus one. For example, if we used a convolutional filter with dimensions 5x5 and an input image with a height of 150 pixels, the output would be 2 pixels smaller at the top and 2 pixels smaller at the bottom - a total of 5 - 1 = 4 pixels smaller - so the output would have a height of 146 pixels.

```python
class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.conv1 = nn.Conv2d(1, 6, 5)
        self.pool = nn.MaxPool2d(2, 2)
        self.conv2 = nn.Conv2d(6, 16, 5)
        self.fc1 = nn.Linear(16 * 34 * 34, 120)
        self.fc2 = nn.Linear(120, 84)
        self.fc3 = nn.Linear(84, 10)

    def forward(self, x):
        # conv1 output width: input_width - (kernel_size - 1) => 150 - (5-1) = 146
        # pool 1 output width: int(input_width/2) => 73
        x = self.pool(F.relu(self.conv1(x)))
        # conv2 output width: input_width - (kernel_size - 1) => 73 - (5-1) = 69
        # pool 2 output width: int(input_width/2) => 34
        x = self.pool(F.relu(self.conv2(x)))  
        x = x.view(-1, 16 * 34 * 34)
        x = F.relu(self.fc1(x))
        x = F.relu(self.fc2(x))
        x = self.fc3(x)
        return x
```

Let's look at what we've got in this architecture. The order of the layers is defined in the <code>forward</code> function, which is the forward pass through the network. Basically it goes: CONV-RELU-POOL CONV-RELU-POOL FC-RELU FC-RELU and then the final FC-layer is the output layer. 

<div class="fig figcenter fighighlight">
  <img width="800" height="200" src="/images/net.png">
  <div class="figcaption"></div>
</div>

If we call the class, we can then visualise a summary of the different layers in the network:

```python
net = Net()
summary(net,(1,150,150))
```

<div class="fig figcenter fighighlight">
  <img width="450" height="400" src="/images/netsummary.png">
  <div class="figcaption"></div>
</div>

<a name="data"></a>
<h4>Load the Data</h4>


Now we've defined the network architecture we can think about the data we want to use. The PyTorch library requires the images to be in tensor format, so when we read in the FRDEEPF dataset we need to transform the data from PIL image format into tensor format. The other thing we're going to do is to normalise each image. Here I'm normalising the distribution of pixel amplitudes in each image to have a mean of 0.5 and a variance of 0.5. These transformations will be applied to every image that we import into our network.

```python
transform = transforms.Compose([transforms.ToTensor(),
                                transforms.Normalize([0.5],[0.5])])
```

Now let's define where those images are. To do this I'm using the [FRDEEPF Python class](https://hongmingtang060313.github.io/FR-DEEP/), which automatically downloads the dataset if it's not already available and imports it in a format compatible with the PyTorch library functions. The dataset is already batched into *train* and *test* subsets:

```python
trainset = FRDEEPF(root='./FIRST_data', train=True, download=True, transform=transform)  
trainloader = torch.utils.data.DataLoader(trainset, batch_size=2, shuffle=True, num_workers=2)
```

```python
testset = FRDEEPF(root='./FIRST_data', train=False, download=True, transform=transform) 
testloader = torch.utils.data.DataLoader(testset, batch_size=2, shuffle=True, num_workers=2)
```

The target classes in the dataset are labelled numerically, but we can assign names to each of those numerical labels:

```python
classes = ('FRI', 'FRII')
```

We're going to take a look at a *batch* of images from the dataset. To display them we'll need a special function because the data are normalised (see the transforms above) and they are in tensor format, so we need to undo that:

```python
def imshow(img):
    # unnormalize
    img = img / 2 + 0.5
    npimg = img.numpy()
    plt.imshow(np.transpose(npimg, (1, 2, 0)))
    plt.show()
```

Now let's grab the example data, so we take the next iteration of the training dataset using the PyTorch data loader: 

```python
# get some random training images
dataiter = iter(trainloader)
images, labels = dataiter.next()
```

...and display it:

```python
# show images
imshow(torchvision.utils.make_grid(images))
# print labels
print(' '.join('%5s' % classes[labels[j]] for j in range(batch_size_train)))
```

<div class="fig figcenter fighighlight">
  <img width="600" height="300" src="/images/frexamples.png">
  <div class="figcaption"></div>
</div>


<a name="training"></a>
<h4>Train the CNN</h4>

To train the CNN we need to define (1) our choice of loss function, and (2) our choice of optimisation algorithm. As previously mentioned, one of the most popular loss functions is the *Cross Entropy Loss*. A perfect classifier would have zero cross entropy loss. Statistically, minimising the cross-entropy is equivalent to maximising the likelihood.

The Adagrad optimizer is [a variant of stochastic gradient descent](http://ruder.io/optimizing-gradient-descent/index.html#adagrad). Its major improvement over standard SGD is that it is able to vary the *learning rate* on a parameter by parameter basis. The learning rate ("lr") that is passed to the PyTorch Adagrad library function is an initial guess at the average learning rate.

```python
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adagrad(net.parameters(), lr=0.01)
```

Now all of these things are defined we can train the CNN. To do this we loop over the dataset multiple times, each time using the previous loop's optimized parameters as the new starting point. The process is simple: 

* pass a batch of data through the network to obtain a predicted output, 
* evaluate the loss criterion based on that output and the known true labels for the batch,
* use back-propagation to propagate that loss backwards through the network,
* update the parameters.

```python
nepoch = 10  # number of epochs
print_num = 50
for epoch in range(nepoch):  # loop over the dataset multiple times

    running_loss = 0.0
    for i, data in enumerate(trainloader, 0):
        # get the inputs
        inputs, labels = data

        # zero the parameter gradients
        optimizer.zero_grad()

        # forward + backward + optimize
        outputs = net(inputs)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()

        # print statistics
        running_loss += loss.item()
        if i % print_num == (print_num-1):    # print every 50 mini-batches
            print('[%d, %5d] loss: %.3f' %
                  (epoch + 1, i + 1, running_loss / print_num))
            running_loss = 0.0

print('Finished Training')
```

We can now *test* the trained machine learning model using the *test dataset*, which we have reserved and haven't used until now.

```python
correct = 0
total = 0
with torch.no_grad():
    for data in testloader:
        images, labels = data
        outputs = net(images)
        _, predicted = torch.max(outputs.data, 1)
        total += labels.size(0)
        correct += (predicted == labels).sum().item()

print('Accuracy of the network on the 50 test images: %d %%' % (100 * correct / total))
```

<font face="courier new"> Accuracy of the network on the 50 test images: 80 % </font>


```python
class_correct = list(0. for i in range(10))
class_total = list(0. for i in range(10))

with torch.no_grad():
    for data in testloader:
        images, labels = data
        outputs = net(images)
        _, predicted = torch.max(outputs, 1)
        c = (predicted == labels).squeeze()
        for i in range(batch_size_test):
            label = labels[i]
            class_correct[label] += c[i].item()
            class_total[label] += 1
```

```python
for i in range(len(classes)):
    print('Accuracy of %5s : %2d %%' % (classes[i], 100 * class_correct[i] / class_total[i]))
```

<font face="courier new">Accuracy of   FRI : 86 %</font>
  
<font face="courier new">Accuracy of  FRII : 75 %</font>

<a name='reading'></a>

<h4>Reading Material</h4>

This is a very brief explanation of convolutional neural networks. For a longer and more detailed description the notes for the [cs241n lecture course are excellent](http://cs231n.github.io).
