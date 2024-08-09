---
title: Color profiles based monitor modes
author: dineshdb
publishDate: 2024-08-09
description: Color profiles based monitor modes
tags:
  - project
  - idea
---

I bought a cheap 24 inch BenQ monitor BENQ GW2490 couple of weeks ago. It has different modes for
different usecases. It lists:

- User mode
- Standard mode
- Coding mode
- Care mode
- M-book mode
- Cinema mode
- Game mode
- ePaper mode

These all modes have different stock configurations. I've customized some of the
profiles and have found myself using the standard mode for the day time, coding
mode with reduced brightness at night time, the stock cinema mode for watching
movies and then the ePaper mode for reading texts. I have found it really useful
and think it might be possible to implement this in software, bringing this to
all the monitors around the world.

## Possible solution

We could implement different color profiles where different colors are mapped as
needed. Dark mode, light mode, cinema mode, ePaper mode, etc. Implementing this
using color profiles means there is no extra resource usage at all. This would
be an efficient solution.

## Further Questions

- Why isn't this already implemented?
- Why hasn't anyone implemented universal dark mode using it or similar
  technology?
- Can we get stock color profiles for monitor and then modify them
  programattically for this purpose?

## Resources

- https://github.com/saucecontrol/Compact-ICC-Profiles
- https://github.com/jpederson/node-transicc
