---
title: Convoluted streaming/OBS setup
---

I really like streaming and making videos about my creative processes,
but it's been such a chore to set up all of the audio routing. 

I may have finally solved this today!

### Requirements

My audio setup includes:

1. Mic input
2. Stereo input from a drum machine
3. Audio mixing:
  - duck out the drum machine volume when I'm speaking through the mic
  - add EQ, compression, and limiting
4. Monitor everything with no latency
5. Input the final mix into OBS

### The problems

OBS has a really terrible feature where it only records the first two channels
of audio. My nice audio interface (a Behringer UMC1820) only accepts microphone
inputs on channels 1-2. This means if I use my audio interface in OBS, I can
only record my microphone and nothing else. 

Thus, I have to route everything to a loopback/virtual audio device. OBS can
then listen to the inputs of that virtual audio device. I happen to use Blackhole
on MacOS for this.

So ideally:

- capture mic and drum machine input on audio interface
- do audio mixing
- output everything to Blackhole

Unfortunately, my DAW (FL Studio) doesn't allow me to use different devices for both input and output,
so using my DAW isn't an option for the audio mixing requirements.

### VCV Rack to the rescue

Other DAWs allow you to use different audio devices for both input and output, but I
am not interested in spending money on a new DAW, even an affordable one like Reaper.

VCV Rack is a virtual modular synthesis program, but it also has sophisticated
audio routing capabilities. The basic approach is this:

1. Use an audio module that uses my UMC1820
2. Capture input from mic on channel 1 and drum machine on channels 7 and 8.
3. Route mic and drum machine through whatever audio processing modules I want.
4. Send the mix to inputs 1 and 2 of another audio module that uses Blackhole
5. Bonus: send the mix to the stereo output of the _first_ audio module so I can listen to everything on headphones from the UMC1820. This is also a critical step to eliminate any latency.

Here's a screen shot of my setup:

{% image "vcv.png" %}

### Conclusion

I'm glad I thought of this solution! I've been banging my head against FL Studio for 
years when it comes to integrating my devices, signal processing, and OBS. 

I used to do a lot more streaming and tutorial videos about my musical processes but
gave it up because of my challenging setup/requirements. Maybe I'll start doing it again.