---
title: Setup ZRAM and stop worrying about memory
author: dineshdb
publishDate: 2024-07-24
description: 8GB of RAM can be enough for typical usage*
tags:
  - how-to
  - linux
---

> *8GB of RAM without use of ZRAM or Swap isn't enough for even most day-to day
> tasks. MacOS uses swap, which is slower than RAM and incurs precious
> write-cycles to the SSD. Also, the typical usage of memory by the MacOS is
> more than twice than on Linux even without any optimizations on Linux side.

ZRAM is a wonderful piece of technology that compresses the inactive section of
RAM to increase the amount of available memory on a system. Typically, RAM is
compressible upto 4 times using zstd, which is a sweet algorithm that balances
compression and speed.

Let's say you have 16GB of RAM. Let's dedicate 3/4 of the RAM to zram. Assuming
compression ratio of 1:4, we use store, 56 (12*4 + 8) GB of RAM. If you don't
use swap, your system responsiveness won't take a hit and your CPU usage will
increase by whatever the zram uses to compress and decompress your memory pages.
Similarly, for 8GB RAM, we can extend it upto 26 (6*4+2) GB of RAM.

This isn't helpful if you're using the same pages again and again, compressing
and decompressing, like running a Large Language model (LLM), video editing or
gaming. While editing video or large photo, you will need to have it in memory
or very fast SSD to have quick seeking capability. Having it in ZRAM means you
will need to compress and decompress it frequently. It won't be a problem if the
file is small. But at some point, you can't beat physics (and Math in this
case). In LLM as well, almost all the weights need to be loaded and used in
small amount of time. So if you're mostly using zram for that, there is large
amount of compression and decompression going around.

But if you consider a typical usage, where you load loads of apps in memory but
will only be using only couple of them at a time, you can just compress the
unused apps and decompress and use it as needed. Typical browsing experiece such
as web-browser, word editing, programming, slack, teams, etc. won't be impacted
because you're most likely using only a small fraction of them at a time.

## Configuration

Fine tune some values for zram.

```conf
# /etc/sysctl.d/99-vm-zram-parameters.conf
vm.swappiness=200
vm.vfs_cache_pressure=200
vm.page-cluster=0
vm.dirty_ratio=2
vm.dirty_background_ratio=1
vm.watermark_boost_factor = 0
vm.watermark_scale_factor = 125
```

```conf
# /etc/systemd/zram-generator.conf.d/01-zram0.conf
[zram0]
# zram with zstd compression ratio is about 1:4.
# 3/4 - zram and 1/4 - apps and system
zram-size = ram * 3
compression-algorithm = zstd
```

## References

- https://old.reddit.com/r/Fedora/comments/mzun99/new_zram_tuning_benchmarks/
