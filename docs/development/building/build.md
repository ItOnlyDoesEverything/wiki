---
slug: /development/building/build
sidebar_position: 2
pagination_next: null
---

# Build the Source
After downloading the source, let's build #ItOnlyDoesEverything now!

## Initialize the environment
```
. build/envsetup.sh
```
## Select target device
```
lunch everything_DEVICE-RELEASE-userdebug
```

### Available Release Types
| Release Type | Branch | Codename | Android Version | Status       |
|--------------|--------|----------|-----------------|--------------|
| bp2a         | 4.16   | 4.16     | 16              | Default      |

## Proceed with the build
```
mka carthage
```
