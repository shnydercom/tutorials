# Introduction video

Here's the [link to the youtube video](https://youtu.be/HD4bUMoowLA) where you can see it in action

# How does the display code work?

- there are two buffers: one for the y-coordinates of the measurements, and one for calculating the average and maximum voltage in the last second
- the TFT takes some time, so the clock-time of the arduino needs to be taken into account. That is the `millis()` -call and related variables
- the `yBuf` holds vertical pixel values for the width of the screen. For each x there is only one y
- during each loop, each buffer entry's single pixel gets overwritten first, then the next buffer entry is set to this pixel
- At the last position, the newly read voltage value is added