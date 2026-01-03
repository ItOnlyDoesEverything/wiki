---
slug: /devices/beyond1lte
pagination_next: null
pagination_prev: null
title: "Galaxy S10 (beyond1lte)"
---

# Samsung Galaxy S10 (beyond1lte)

:::info
## Device Information

- **Device:** Samsung Galaxy S10
- **Release Date:** February 2019
- **Chipset:** Exynos 9820
- **RAM:** 8GB
- **Storage:** 128GB / 512GB
- **Battery:** 3400 mAh
- **Display:** 6.1 inches, Dynamic AMOLED, HDR10+, 1440x3040 pixels
- **Rear Camera:** Triple 12 MP (wide) + 12 MP (telephoto) + 16 MP (ultrawide)
- **Front Camera:** 10 MP (wide)
- **#ItOnlyDoesEverything Version:** 4.16
- **Maintainer:** TBD
- **Supported Models:** SM-G973F, SM-G973F/DS, SM-G973N
:::

<a href="https://get.itonlydoeseverything.org/builds/beyond1lte/" class="button button--primary">Get builds</a>

## Installation Guide

:::danger
**Warning:** The provided instructions are for #ItOnlyDoesEverything. These will only work if you follow every section and step precisely.
**Do not continue after something fails!**
:::

### Basic requirements

1. Read through the instructions at least once before actually following them, so as to avoid any problems due to any missed steps!
2. Make sure your computer has `adb`. Setup instructions can be found online.
3. Enable USB debugging on your device.
4. Make sure that your model number is one of the following (exact match required!):
    - `SM-G973F`
    - `SM-G973F/DS`
    - `SM-G973N`
5. Boot your device with the stock OS at least once and check every functionality.
6. Remove all Google accounts from your device to avoid “Factory reset protection”.
7. #ItOnlyDoesEverything is provided as-is with no warranty. While we attempt to verify everything works you are installing this at your own risk!

### Checking the correct firmware

:::warning
**Warning:** Your device needs a specific firmware version before proceeding.
:::

- Firmware refers to a device-specific set of images that are included in, and updated by the stock OS.
- #ItOnlyDoesEverything builds for this device require an **Android 12** version of the stock OS to be installed prior to following the installation guide.
- Please ensure that you are checking the Android version, and not the vendor OS version.
- Being on another custom ROM, including unofficial builds of the same version of #ItOnlyDoesEverything, does not ensure that this requirement has been fulfilled.

:::info
If you are unsure what firmware version you are currently on, we strongly recommend returning to the corresponding stock OS before following the installation guide!
:::

### Pre-Install Instructions

:::danger
**Warning:** The following instructions will unlock the bootloader and wipe all userdata on the device.
:::

1. Connect the device to a Wi-Fi network.
2. Enable Developer Options by pressing the “Build Number” option in the “Settings” app within the “About” menu.
3. From within the Developer options menu, enable **OEM unlock**.
4. Power off the device, and boot it into download mode:
    - With the device powered off, hold `Volume Down` + `Bixby` and connect USB cable to PC.
    - Now, click the button that the onscreen instructions correlate to “Device unlock mode” and/or “Unlock Bootloader”.
5. Your device will reboot, you may now unplug the USB cable from your device.
6. The device will demand you factory reset, please follow the onscreen instructions to do so.
7. Run through Android Setup skipping everything you can, then connect the device to a Wi-Fi network.
8. Re-enable Development settings by clicking the “Build Number” option 10 times, in the “Settings” app within the “About” menu, and verify that “OEM Unlock” is still enabled in the “Developer options” menu.

### Preparing for installation

Samsung devices come with a unique boot mode called “Download mode”, which is very similar to “Fastboot mode” on some devices with unlocked bootloaders. Heimdall is a cross-platform, open-source tool for interfacing with Download mode on Samsung devices. The preferred method of installing a custom recovery is through Download Mode – rooting the stock firmware is neither necessary nor required.

1. Enable Developer Options by pressing the “Build Number” option in the “Settings” app within the “About” menu.
2. From within the Developer options menu, enable **OEM unlock**.
3. Download and install the appropriate version of the Heimdall suite for your machine’s OS:
    - **Windows:** Extract the Heimdall suite zip and take note of the new directory containing `heimdall.exe`. You can verify Heimdall is functioning by opening a Command Prompt or PowerShell in that directory and running `heimdall version`.
    - **Linux:** Extract the Heimdall suite zip and take note of the new directory containing `heimdall`. Now copy `heimdall` into a directory in `$PATH`, a common one on most distros will be `/usr/local/bin`. For example `cp heimdall /usr/local/bin`. You can verify Heimdall is functioning by opening a Terminal and running `heimdall version`.
    - **macOS:** Mount the Heimdall suite DMG. Now drag `heimdall` down into the `/usr/local/bin` symlink provided in the DMG. You can verify Heimdall is functioning by opening a Terminal and running `heimdall version`.

:::info
These Heimdall suite distributions were built by LineageOS Developers, as the Heimdall suite executables distributed on the official Heimdall website were outdated and the repo mostly abandoned. Modifications were made to make it build and function on modern OSes.
:::

4. Power off the device, and boot it into download mode:
    - With the device powered off, hold `Volume Down` + `Bixby` and connect USB cable to PC.
    - Now, click the button that the on screen instructions correlate to “Continue”, and insert the USB cable into the device.
5. **For Windows users only:** install [UsbDk](https://github.com/daynix/UsbDk/releases).
6. On your machine, open a Command Prompt or PowerShell (Windows) window, or Terminal (Linux or macOS) window, and type:
    ```bash
    heimdall print-pit
    ```
    If the device reboots that indicates that Heimdall is working properly. If it does not, please refollow these instructions to verify steps weren’t missed, try a different USB cable, and a different USB port.

### Installing Recovery using heimdall

1. Download the latest recovery file, named `recovery.img`.
2. Power off the device, and boot it into download mode:
    - With the device powered off, hold `Volume Down` + `Bixby` and connect USB cable to PC.
    - Now, click the button that the on screen instructions correlate to “Continue”, and insert the USB cable into the device.
3. On your machine, open a Command Prompt or PowerShell (Windows) window, or Terminal (Linux or macOS) window, and type:
    ```bash
    heimdall flash --RECOVERY recovery.img --no-reboot
    ```
4. A transfer bar will appear on the device showing the recovery image being flashed.
5. Manually reboot into recovery:
    - Reboot and immediately hold `Volume Up` + `Bixby` + `Power` while the device is connected to a PC via USB cable.

:::caution
Be sure to reboot into recovery immediately after installing the custom recovery. If you don’t the stock ROM will overwrite the custom recovery with the stock recovery, and you’ll need to flash it again.
:::

:::info
If your recovery does not show the #ItOnlyDoesEverything logo, you accidentally booted into the wrong recovery. Please start at the top of this section!
:::

### Installing #ItOnlyDoesEverything from recovery

1. Download the #ItOnlyDoesEverything zip file that you would like to install.
2. If you are not in recovery, reboot into recovery:
    - Reboot and immediately hold `Volume Up` + `Bixby` + `Power` while the device is connected to a PC via USB cable.
3. Now tap **Factory Reset**, then **Format data / factory reset** and continue with the formatting process. This will remove encryption and delete all files stored in the internal storage, as well as format your cache partition (if you have one).
4. Return to the main menu.
5. Sideload the #ItOnlyDoesEverything `.zip` package:
    - On the device, select “Apply update”, then “Apply from ADB” to begin sideload.
    - On the host machine, sideload the package using:
        ```bash
        adb -d sideload /path/to/zip
        ```

:::info
If signature verification fails, that means the image you are trying to flash is either corrupted, or not an official #ItOnlyDoesEverything image. Please redownload the image.
:::

### Installing Add-Ons

:::info
If you don’t want to install any add-on (such as Google Apps), you can skip this whole section!
:::

1. If you want to install Google Apps add-on package (use the `arm64` architecture), you can download it from [here](https://wiki.lineageos.org/gapps). This add-on needs to be installed before booting into #ItOnlyDoesEverything for the first time!
2. Click **Apply update**, then **Apply from ADB**, then run for each of those packages in sequence:
    ```bash
    adb -d sideload /path/to/zip
    ```
3. When presented with a screen that says `Signature verification failed`, click **Yes**. It is expected as add-ons aren’t signed with #ItOnlyDoesEverything’s official key!

### All set!

Once you have installed everything successfully, you can now reboot your device into the OS for the first time!

1. Click the back arrow in the top left of the screen, then “Reboot system now”.

:::info
The first boot usually takes no longer than 15 minutes, depending on the device. If it takes longer, you may have missed a step, otherwise feel free to get assistance.
:::

## Get assistance

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
