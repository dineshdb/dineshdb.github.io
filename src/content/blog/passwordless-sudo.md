---
title: Passwordless sudo for your desktop and servers
author: dineshdb
publishDate: 2024-08-21
description: Once you setup it, you don't need to type passwords anymore. You do need to make sure it's only you who can access it though.
tags:
  - passwordless
  - sudo
  - linux
---

I don't really like typing my password every time I run sudo. Yes, I know it's
really bad to run sudo commands but I also know it's equally bad to run
`rm -rf ~/` and I did that just couple of days ago accidently.

<aside>
Don't worry, I don't think I lost anything because I stopped running it immediately. What I noticed was it had borked my firefox profile and I had to login again. Since there were still files available in `.mozilla` directory, I assumed it hadn't reached other many files. Ignorance is _bliss_.
</aside>

## Working principle

Add following line in `/etc/sudoers`. Replace it if it already exists. The
starting of the line is the username.

```
#/etc/sudoers
...
dineshdb  ALL=(ALL) NOPASSWD: ALL
```

Yep. That's it. You go to the line for your target user and replace it with
something similar. Remember the `NOPASSWD: ALL` bit. Spaces and tabs matter.
