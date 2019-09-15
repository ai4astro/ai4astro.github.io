---
layout: page
mathjax: true
permalink: /classification/
---

Pulsar classification is a great example of where machine learning can be used beneficially in astrophysics. It's not the most straightforward classification problem, but here I'm going to outline the basics using the scikit-learn random forest classifier. This post was inspired by <a href="http://www.scienceguyrob.com/">Rob Lyon</a>'s pulsar classification tutorials in the <a href="https://github.com/astro4dev/OAD-Data-Science-Toolkit/tree/master/Teaching%20Materials/Machine%20Learning/Supervised%20Learning/Examples/PPC">IAU OAD Data Science Toolkit</a>.

- [The Pulsar Classification Problem](#pulsars)
  - [Pulsar Data in Python](#pythonpulsars)
- [Pulsar Classification](#classification)
  - [Random Forest Classification](#randomforest)
  - [Train/Validation/Split](#traintest)
  - [Performance Metrics](#metrics)
  - [Feature Ranking](#ranking)
- [Further Reading](#reading)

<a name='intro'></a>

<h3>I see dead ...stars?</h3>

Pulsars are "pulsating radio sources", now known to be caused by rapidly rotating neutron stars. <a href="https://en.wikipedia.org/wiki/Neutron_star" target="_blank" rel="noopener noreferrer">Neutron stars</a> are the relics of dead massive stars, they're small and extremely dense - think about something the same mass as the Sun crammed into a radius roughly the same as the <a href="https://en.wikipedia.org/wiki/M25_motorway" target="_blank" rel="noopener noreferrer">M25 motorway around London</a>. You can read all about them <a href="http://www.jb.man.ac.uk/distance/frontiers/pulsars/section1.html" target="_blank" rel="noopener noreferrer">here</a>.

A characteristic property of pulsars are the periodic bursts of emission produced by their radio emitting jets. As the pulsar rotates, the direction of this emission also rotates and astronomers see a pulse of radio emission each time one of the jets points towards the Earth. 

<div class="fig figcenter fighighlight">
  <img src="https://allofyourbases.files.wordpress.com/2019/03/lightnew.gif">
  <div class="figcaption">An <a href="http://www.astron.nl/pulsars/animations/">artist's impression of a pulsar</a>. Image credit: <a href="http://www.astron.nl/astronomy-group/people/joeri-van-leeuwen/joeri-van-leeuwen">Joeri van Leeuwen</a>, License: <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC-BY-AS</a></div>
</div>

You can even <a href="http://www.jb.man.ac.uk/distance/frontiers/pulsars/section1.html" target="_blank" rel="noopener noreferrer">listen to the pulses</a> (if you really want to...)

<div class="fig figcenter fighighlight">
  <audio controls>
    <source src="https://allofyourbases.files.wordpress.com/2019/03/b0329.wav">
  </audio>
<div class="figcaption"><b>PSR B0329+54</b>: This pulsar is a typical, normal pulsar, rotating with a period of 0.714519 seconds, i.e. close to 1.40 rotations/sec.</div>
</div>


Pulsars are pretty interesting objects in their own right, they are used as a probe of stellar evolution as well as being used <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=2ahUKEwiG5PXzrvXgAhXHXRUIHZeICTYQFjACegQIAxAB&url=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fpii%2FS1387647304000909&usg=AOvVaw1IKp5W-f3gu3QCjmDCpBYR" target="_blank" rel="noopener noreferrer">to test general relativity</a> due to their extremely high densities. These days they're also used to detect and map <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=2ahUKEwjWt9XfrvXgAhXdTBUIHZUDCA8QFjACegQIARAB&url=https%3A%2F%2Fwww.skatelescope.org%2Fnewsandmedia%2Foutreachandeducation%2Fskawow%2Fgravitational-wave%2F&usg=AOvVaw2tEsK4ezAUVVM4K62KVnnW" target="_blank" rel="noopener noreferrer">gravitational wave signatures</a>. However, identifying them in the data streams from radio telescopes is not trivial. There are lots of man-made sources of radio frequency interference that can mimic the signals from pulsars. Classifying candidate data samples as <em>pulsar</em> or <em>not pulsar</em> is serious business.

<a name='pulsars'></a>

<h3>The Pulsar Classification Problem</h3>

In order to classify a data sample as a *pulsar* or *not a pulsar*, we need to be able to extract some information on the data sample that can characterise its class. The individual bursts of emission from a pulsar (i.e. the pulses) do not have a constant shape or amplitude, so individually they're not very useful for uniquely identifying a pulsar.

<div class="fig figcenter fighighlight">
  <video width="320" height="240" autoplay loop muted><source src="/images/oszi2.mpg"></video>
  <video width="320" height="240" autoplay loop muted><source src="/images/aver0329.mpg"></video>
  <div class="figcaption"><a href="http://www.jb.man.ac.uk/distance/frontiers/pulsars/section2.html" target="_blank" rel="noopener noreferrer">Frontiers of Modern Astronomy - Jodrell Bank Observatory</a>These animations show (real) radio emission from pulsar PSR B0329+54, which has a period of 714 milliseconds.</div>
</div>

Because the individual pulses are all different, astronomers stack them up and create an average integrated pulse profile to characterise a particular pulsar:


<div class="fig figcenter fighighlight">
  <img src="https://allofyourbases.files.wordpress.com/2019/03/pulsestack-e1552071632736.gif">
  <div class="figcaption"><a href="https://www.cv.nrao.edu/~sransom/web/Ch6.html" target="_blank" rel="noopener noreferrer">Essentials of Radio Astronomy</a></div>
</div>


Additionally the pulse will arrive at different times across different radio frequencies. The delay from frequency to frequency is caused by the ionised inter-stellar medium and is known as the <em><strong>dispersion</strong></em>. It looks like this:


<div class="fig figcenter fighighlight">
  <img src="https://allofyourbases.files.wordpress.com/2019/03/dispersion.png" width="413" height="525" />
  <div class="figcaption"><a href="https://www.cv.nrao.edu/~sransom/web/Ch6.html" target="_blank" rel="noopener noreferrer">Essentials of Radio Astronomy</a></div>
</div>

Astronomers fit for the shape of the delay in order to compensate for its effect, but there's always an uncertainty associated with the fit. That is expressed in the DM-SNR ("dispersion-measure-signal-to-noise-ratio") curve, which looks like this:

<div class="fig figcenter fighighlight">
  <img src="https://allofyourbases.files.wordpress.com/2019/03/dm_snr.png">
  <div class="figcaption"></div>
</div>

When you put these two curves together it means that for each pulsar candidate there are <strong>eight numerical characteristic features</strong> that can be extracted as standard: four from the integrated pulse profile and four from the DM-SNR curve:

<div class="fig figcenter fighighlight">
  <img src="https://allofyourbases.files.wordpress.com/2019/03/pulsar_features.png">
  <div class="figcaption"></div>
</div>


<a name='pythonpulsars'></a>

<h4>Pulsar Data in Python</h4>

The <a href="https://archive.ics.uci.edu/ml/datasets/HTRU2" target="_blank" rel="noopener noreferrer">HTRU2 dataset</a>  compiles the eight features described above for 1,639 true known pulsars, as well as 16,259 additional candidate pulsars later identified to be RFI/noise. You can find a full description of the dataset in <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwiKj-aKqfXgAhX1sHEKHeMdAIYQFjAAegQIARAB&url=https%3A%2F%2Farxiv.org%2Fabs%2F1603.05166&usg=AOvVaw1K0x75Q0pLRZqpvTbd5nMD" target="_blank" rel="noopener noreferrer">this paper</a>.

I added a row to the original CSV that lists the feature names - you can find my version in the IAU OAD Data Science Toolkit <a href="https://github.com/astro4dev/OAD-Data-Science-Toolkit/blob/master/Teaching%20Materials/Machine%20Learning/Supervised%20Learning/Examples/PPC/Data/pulsar.csv" target="_blank" rel="noopener noreferrer">here</a>.

To read these data into python you can import the pandas library:

```python
import pandas as pd  # for data handling
```

and use it to read the CSV file:

```python
df = pd.read_csv('data/pulsar.csv')
```

You can take a look at the names of the features in the file like this:

```python
feature_names = df.columns.values[0:-1]
print(feature_names)
```

<p style = "font-family:'Courier New',Courier,monospace;font-size:16px;font-style:normal;">
['mean_int_pf' 'std_pf' 'ex_kurt_pf' 'skew_pf' 'mean_dm' 'std_dm'
'kurt_dm' 'skew_dm']</p>

(<code>pf</code> = integrated profile & <code>dm</code> = DM-SNR curve)

and we can check just how much data we're dealing with:

```python
print ('Dataset has %d rows and %d columns including features and labels'%(df.shape[0],df.shape[1]))
```

<font face="courier new">Dataset has 17898 rows and 9 columns including features and labels</font>

To get the feature data on its own we can just strip off the column containing the class labels:

```python
features = df.drop('class', axis=1)
```

The labels for each object tell us abut the target class and we can create an array of those data by extracting the column from the original dataset:

```python
targets = df['class']
```

<a name='classification'></a>

<h3>Classifying Pulsars</h3>

The objective for pulsar astronomers is to classify each data sample as **pulsar** or **not pulsar**. These two possible outcomes are known as the *target classes*. There are multiple machine learning algorithms that can be used for this kind of **binary classification** (i.e. only two possible target classes). The principles behind all of them are the same. 

<div class="fig figcenter fighighlight">
  <img src="/images/mldiagram.png">
  <div class="figcaption"></div>
</div>

**Test data** The ultimate goal of building a classifier is to be able to use it on previously unseen data and recover the correct classifications for each data sample. This unseen dataset is typically referred to as your *test data*.

**Training data** In order to build/train your classifier, you will need to provide a library of examples of each target class. For supervised learning, this dataset must be pre-labelled and it is typically referred to as your *training data*.

**Validation data** The validation dataset is a subset of your training data. **It is not your test data**. You must not use your test data to train your classifier in any way.

**Learning algorithm** The learning algorithm is whatever form of machine learning you have chosen to use for your dataset. You will often have to specify not only the form of the algorithm itself, but also the form of the **cost function** that the algorithm employs. Each machine learning model partitions feature space in a different way, driven by the goal of optimising the cost function.

**Machine learning model** The machine learning model is the output of your learning algorithm. You apply it to your **test data** to derive the predicted class of each test sample.


In this example we'll use a random forest machine learning algorithm to classify the HTRU2 pulsar dataset. A random forest is a learning algorithm constructed from multiple decision trees. 

<a name='randomforest'></a>

<h4>Decision Trees & Random Forests</h4>

A **decision tree** classifies data samples using a hierarchical set of data partitions in feature space. An example of one such partition could be claasifying an animal as a mouse or a cat based on length data. Here *length* is our feature and our target classes are *cat* and *mouse*. If we draw a partition such that <font face="courier new">(length>10cm) = 'cat'</font> and <font face="courier new">(length<10cm) = 'mouse'</font> we have implemented a decision tree with a single node. 

<div class="fig figcenter fighighlight">
  <img width="400" height="200" src="/images/decisionnode.png">
  <div class="figcaption">Lyon et al. 2016</div>
</div>

In reality if we created a training dataset by measuring 1000 cats and 1000 mice we would find that there was a distribution of lengths for each class, and that 10cm might not be the optimal partition value. The machine learning part of a decision tree is learning where that optimal value is. If we have multiple features, say *length*, *height* and *weight*, the algorithm will learn the best split point for all three.

<div class="fig figcenter fighighlight">
  <img  width="500" height="240" src="/images/splitpoints.png">
  <div class="figcaption">Lyon et al. 2016</div>
</div>

A **random forest** employs a collection of decision trees and then makes a final classification by majority consensus. Each tree in the random forest is given a subset of the complete training dataset from which to learn and uses a subset of the features to represent the data. This technique is known as *bootstrap aggregating*, or *bagging* for short. It is used to mitigate against biases that can be introduced into the final classification by the presence of particular data samples or collections of samples, or an over-reliance on one particular feature or set of features.

An easy way to implement a random forest in Python is to use the scikit-learn library. For what follows, these are the library routines that need to import:

```python
import numpy as np   # for array stuff
import pylab as pl   # for plotting stuff

from sklearn.ensemble import RandomForestClassifier
from sklearn import model_selection
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_val_score, cross_val_predict
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.metrics import roc_curve, roc_auc_score
```

We'll also be using the <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwjZmfDhqfXgAhV1unEKHU73BRsQFjAAegQIBRAC&url=https%3A%2F%2Fscikit-plot.readthedocs.io%2Fen%2Fstable%2F&usg=AOvVaw1BmgIU7oy2JWfM6QRyjnZw" target="_blank" rel="noopener noreferrer">scikit-plot</a>, which I only recently discovered and has made my life much easier :-)

```python
import scikitplot as skplt
```

<a name='traintest'></a>

<h4>Train / Validation / Test Split</h4>

Now we need to split our labelled data into two separate datasets: one to train the classifier and one to test the fitted machine learning model. To do this we can use the function <a href="https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html" target="_blank" rel="noopener noreferrer">train_test_split</a> from the <a href="https://scikit-learn.org/" target="_blank" rel="noopener noreferrer">scikit_learn</a> library:

```python
X_train, X_test, y_train, y_test = train_test_split(features, targets, test_size=0.33, random_state=66)
```

At this point we now have our dataset in a suitable state to start training the classifier.

To start with we need to initiate the random forest classifier from <a href="https://scikit-learn.org/" target="_blank" rel="noopener noreferrer">scikit_learn</a>:

```python
RFC = RandomForestClassifier(n_jobs=2,n_estimators=10)
```

...and we can immediately fit the machine learning model to our training data:

```python
RFC.fit(X_train,y_train)
```

<font face="courier new">RandomForestClassifier(bootstrap=True, class_weight=None, criterion='gini',
max_depth=None, max_features='auto', max_leaf_nodes=None,
min_impurity_decrease=0.0, min_impurity_split=None,
min_samples_leaf=1, min_samples_split=2,
min_weight_fraction_leaf=0.0, n_estimators=10, n_jobs=2,
oob_score=False, random_state=None, verbose=0,
warm_start=False)</font>

We can then used the trained classifier to predict the label for the test data that we split out earlier:

```python
rfc_predict = RFC.predict(X_test)
```

<a name='metrics'></a>
<h4>Performance Metrics</h4>

So how did we do? We need to evaluate the performance of our classifier.

There are a variety of ways to evaluate the performance of a machine learning model. Which one you choose should depend on the objective of your classification. Before we look at some common performance metrics we first need to define a few terms.

Suppose we have two target classes; these could be *cat* and *mouse*, or alternatively *pulsar* and *non-pulsar*, but here I'm just going to call them *positive* and *negative*. When we apply a machine learning model to the unlabelled test data composed of these classes it fits a split that looks like this:

<div class="fig figcenter fighighlight">
  <img width="320" height="320" src="/images/decisionrule2.png">
  <div class="figcaption">Image credit: Rob Lyon</div>
</div>

An unlabelled (test) data sample from class one that has been correctly labelled is called a *true positive*, but a sample that has been incorrectly labelled is called a *false negative*; likewise, an unlabelled (test) data sample from class two that has been correctly labelled is called *true negative*, and a sample that has been incorrectly labelled is called a *false positive*. We use these names to describe the different types of errors and hence the performance metrics of the machine learning model.

<div class="fig figcenter fighighlight">
  <img width="400" height="320" src="/images/confusion.png">
  <div class="figcaption">Confusion matrix.</div>
</div>

Some commonly used performance metrics are:

**Precision** The fraction of positive predictions that are truly positive.

<center>$latex {\rm Precision} = \frac{\rm TP}{\rm TP + FP}$</center>

**Recall** The fraction of true positives that are predicted to be positive.

<center>$latex {\rm Recall} = \frac{\rm TP}{\rm TP + FN}$</center>

**F1-score** A measure of accuracy that considers both precision and recall.

<center>$latex {\rm F1score} = 2\frac{\rm Precision \times Recall}{\rm Precision + Recall}$</center>

There are many other performance metrics, which are adapted to suit particular classification problems - for example if you are looking for a rare type of object in an imbalanced dataset. However, here we will only consider these three common metrics. 

We can evaluate these metrics using our test dataset, but at this point the machine learning model has already been trained and we cannot refine it further. Poor performance metrics evaluated on test data are often an indication that the machine learning model has *over-fitted the training data* and does not generalise well to new input data. To guard against this we can use *validation data* during the training process. As described above, validation data is a subset of our training data that we reserve for on-the-fly performance testing. 

A good way of using validation data is to evaluate the <a href="https://www.openml.org/a/estimation-procedures/1" target="_blank" rel="noopener noreferrer">k-fold cross-validation</a>. This will tell us how well our machine learning model generalises, i.e. whether we have over-fitted the training data.

The term *k-fold* refers to how many different validation datasets you select from the training data. For example, in 5-fold cross-validation the training data would be partitioned into five chunks and the training procedure iterated five times, each time choosing a different chunk as the validation dataset. The cross-validation performance metrics are then reported as an average across the five trained machine learning models.

For example, we can do this using the pulsar dataset. Here we are implementing 10-fold cross-validation:

```python
rfc_cv_score = cross_val_score(RFC, features, targets, cv=10, scoring='roc_auc')
```

Let's print out the various evaluation criteria:

```python
print("=== Confusion Matrix ===")
print(confusion_matrix(y_test, rfc_predict))
print('\n')
print("=== Classification Report ===")
print(classification_report(y_test, rfc_predict, target_names=['Non Pulsar','Pulsar']))
print('\n')
print("=== All AUC Scores ===")
print(rfc_cv_score)
print('\n')
print("=== Mean AUC Score ===")
print("Mean AUC Score - Random Forest: ", rfc_cv_score.mean())
```

<font face="courier new">
=== Confusion Matrix ===</font>

<font face="courier new">[[5327   35]</font>

<font face="courier new">[  93  452]]</font>

<font face="courier new">=== Classification Report ===
precision recall f1-score support

Non Pulsar 0.98 0.99 0.99 5362
Pulsar 0.93 0.83 0.88 545

micro avg 0.98 0.98 0.98 5907
macro avg 0.96 0.91 0.93 5907
weighted avg 0.98 0.98 0.98 5907

=== All AUC Scores ===
[0.92774615 0.94807886 0.96225025 0.96079711 0.96652717 0.9472501
0.96336963 0.95761145 0.96597591 0.96716753]

=== Mean AUC Score ===
Mean AUC Score - Random Forest: 0.956677415292086</font>

We can make a more visual representation of the confusion matrix using the scikit-plot library. To do this we need to know the predictions from our cross validation, rather than the <a href="https://developers.google.com/machine-learning/crash-course/classification/roc-and-auc" target="_blank" rel="noopener noreferrer">Area Under Curve (AUC)</a> value:

```python
predictions = cross_val_predict(RFC, features, targets, cv=2)
```

```python
skplt.metrics.plot_confusion_matrix(targets, predictions, normalize=True)
```

<div class="fig figcenter fighighlight">
  <img src="https://allofyourbases.files.wordpress.com/2019/03/conf_mat.png">
  <div class="figcaption"></div>
</div>

To plot the <a href="https://en.wikipedia.org/wiki/Receiver_operating_characteristic" target="_blank" rel="noopener noreferrer">ROC curve</a> we need to find the probabilities for each target class separately. We can do this with the predict_proba function:

```python
probas = RFC.predict_proba(X_test)
```

```python
skplt.metrics.plot_roc(y_test, probas)
```

In a balanced data set there should be no difference between the micro-average ROC curve and the macro-average ROC curve. In the case where there is a class imbalance (like here), if the macro ROC curve is lower than the micro-ROC curve then there are more cases of mis-classification in minority class.

<div class="fig figcenter fighighlight">
  <img src="https://allofyourbases.files.wordpress.com/2019/03/roc.png">
  <div class="figcaption"></div>
</div>

We can use the output of the <code>RFC.predict_proba( )</code> function to plot a <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=2ahUKEwiK0_nWsvXgAhUiTxUIHQh6B2YQFjACegQIBhAK&url=http%3A%2F%2Fscikit-learn.org%2Fstable%2Fauto_examples%2Fmodel_selection%2Fplot_precision_recall.html&usg=AOvVaw1UG9QgvJBEERHSf61yVi9K" target="_blank" rel="noopener noreferrer">Precision-Recall Curve</a>.

```python
skplt.metrics.plot_precision_recall(y_test, probas)
```

<div class="fig figcenter fighighlight">
  <img src="https://allofyourbases.files.wordpress.com/2019/03/precision_recall.png">
  <div class="figcaption"></div>
</div>

<a name='ranking'></a>

<h4>Feature Ranking</h4>
Let's take a look at the relative importance of the different features that we fed to our classifier:

```python
importances = RFC.feature_importances_
indices = np.argsort(importances)
```

```python
pl.figure(1)
pl.title('Feature Importances')
pl.barh(range(len(indices)), importances[indices], color='b', align='center')
pl.yticks(range(len(indices)), feature_names[indices])
pl.xlabel('Relative Importance')

pl.show()
```

<div class="fig figcenter fighighlight">
  <img src="https://allofyourbases.files.wordpress.com/2019/03/importances.png">
  <div class="figcaption"></div>
</div>
