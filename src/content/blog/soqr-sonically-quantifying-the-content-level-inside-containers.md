---
title: "SoQr: Sonically Quantifying the Content Level inside Containers"
author: dineshdb
publishDate: 2023-09-29
description: Using sonar waves to predict the volume of content inside the container
tags:
  - paper-reading
  - tolearn
  - TIL
source:
  href: "http://www.dgp.toronto.edu/~mfan/papers/ubicomp2015-fan.pdf"
  title: Paper
---

This paper discusses the use of a sonar sensor that can be placed on a container
to predict the volume of content inside the container. They send an active
signal through the container and then measure the impulse response at other side
until after a second. They call this acoustic probing. They do this for N-levels
of contents and then use Support Vector Machines(SVM) to predict the level of
the food inside. Since the volume might not match exactly into N levels, they
then use Support Vector Regression(SVR) to transform those values into
continuous levels instead of discretee levels. They continue to do this for many
household containers for pantry. The solution provides robust method of
non-deformable containers but the accuracy is very bad for deformable containers
like chips and milk packets.

I found the application this paper quite interesting. While I think a
general-purpose volume prediction has a long way to go, using it for a specific
product in any industrial or commercial setting seems very much achievable.

## Some questions

- The paper does not discuss how the confusion matrix might change as the
  container gets old and its wall size changes. For precision, that needs to be
  handled as well.

## To learn

- How to use Support Vector Machines(SVM) for prediction problems?
- How to use Support Vector Regression(SVR) for regression problems?
