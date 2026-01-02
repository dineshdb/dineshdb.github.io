---
title: Why I Settled on Colima with nerdctl and nerdctl-compose for My Docker Workflow
author: dineshdb
publishDate: 2025-07-12
description: "My journey from Docker Desktop to a more streamlined, CLI-focused container setup on macOS using Colima and nerdctl."
tags:
  - docker
  - colima
  - nerdctl
  - devops
---

I'm currently in the process of setting up my first personal MacBook, a new M4
Pro, after years of using company-issued Macs off and on. At heart, I've always
been a Linux enthusiast, and I love the flexibility and control it offers.
However, I recently chose to switch to Apple primarily for their incredible
hardware and top-notch performance. This transition has reinforced a philosophy
I've developed over the years: I don't want to fight with my tools.

This brings me to the world of containers on macOS. As a developer who spends a
significant amount of time working with them, having a smooth and efficient
local development environment is crucial. For a long time, Docker Desktop was
the de-facto standard, but I always found its mandatory GUI to be an unnecessary
overhead. This led me on a journey to find a more lightweight, CLI-centric
alternative that aligns with my new philosophy. Here’s a recap of my
experimentation and why I ultimately landed on a combination of Colima,
`nerdctl`, and `nerdctl compose`.

### The Problem with Docker Desktop

My primary gripe with Docker Desktop has always been its resource-heavy nature
and the fact that it forces a GUI on users who are perfectly comfortable in the
terminal. I don't need a graphical interface to manage my containers; I need a
fast, reliable, and unobtrusive container runtime. The constant updates,
background processes, and the general "bloat" of Docker Desktop pushed me to
seek out alternatives.

### Attempt 1: Podman

My first stop was Podman. On Linux, Podman is a fantastic daemonless container
engine that offers a Docker-compatible CLI. I was excited to try it on macOS.
However, the experience wasn't quite the same. On a Mac, Podman needs to manage
a Linux VM to run containers, and it relies on Rosetta for emulation on Apple
Silicon. This setup felt a bit clunky and not as native as I had hoped. The need
for Rosetta and the underlying VM management made it feel like I was just
trading one set of complexities for another.

### Attempt 2: Colima with Docker and the `buildx` rabbit hole

My hunt for the perfect setup intensified when I ran into a specific,
frustrating error:
`fix: docker: unknown command: docker buildxRun 'docker --help' for more information`.
This happened while I was using Colima with the standard Docker CLI. This setup
was a significant improvement over Docker Desktop in terms of being lightweight,
but this error stopped me in my tracks.

I had a lightweight VM and could use most familiar Docker commands, but `buildx`
was a no-go. I turned to my usual research assistants, Perplexity and ChatGPT,
to figure out what was going on. The consensus from my AI-powered digging was
that while you _can_ get `buildx` working without Docker Desktop, it's not
straightforward. It involves manually installing the `buildx` plugin and placing
it in the `~/.docker/cli-plugins` directory. Despite following the instructions,
it still didn't work. After about half an hour of troubleshooting and getting
nowhere, I decided to cut my losses. It felt like I was fighting against the
tools rather than working with them. The manual configuration and tinkering,
which ultimately failed, were exactly the kind of friction I was trying to
escape. This was the final push I needed to look for a more integrated solution.

### The Winning Combination: Colima with nerdctl and nerdctl compose

This is when I decided to go all-in with the Colima ecosystem. I replaced my
setup with Colima, `nerdctl`, and `nerdctl compose`. `nerdctl` is a
Docker-compatible CLI for containerd, and it's designed to work seamlessly with
tools like Colima.

This setup gave me everything I was looking for:

- **Lightweight:** Colima provides a minimal Linux VM, and `nerdctl` is just a
  CLI tool. No unnecessary GUI or background services.
- **Docker-Compatible:** `nerdctl` and `nerdctl compose` are compatible with
  Docker commands and Docker Compose files, so I didn't have to relearn
  anything.
- **`buildx` Out of the Box:** `nerdctl` has built-in support for `buildx`, so
  multi-platform builds work without any extra configuration.
- **Seamless Integration:** The tools are designed to work together, making the
  setup process incredibly simple.

### Conclusion

My journey to find the perfect container setup on macOS ended with Colima,
`nerdctl`, and `nerdctl compose`. This combination provides a powerful,
lightweight, and CLI-focused workflow that gets out of my way and lets me focus
on what's important: building applications.

It's worth noting that this setup isn't without its trade-offs. Since Colima
uses a VM to run x86_64 containers on my ARM64 machine, there's a performance
hit compared to running native containers. However, for me, the trade-off is
well worth it. The setup is hassle-free, and as I've learned, I don't want to
fight with my tools. That peace of mind and ease of use are more valuable to my
daily workflow than raw performance.

If you're a developer on macOS who prefers the command line and wants to move
away from Docker Desktop, I highly recommend giving this setup a try.
