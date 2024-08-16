---
title: Building the Joy Boi MK2
draft: true
---

I built a dual-joystick MIDI controller, dubbed The Joy Boi MK2.

{% image "step.jpg" %}

{% image "toad.jpg" %}

It's a six axis controller, specifically designed for controlling
the X/Y/Z control surface on two instances of my Harmor synth.

Each axis has a dedicated LED light that increases in brightness as
the value on the axis increases.

The controller also has two switches: one to enable/disable the controller
(sometimes it's noisy and sends out MIDI messages more often than I want)
and another that is a 3-way mode switch (not using it yet).

### The MK1 predecessor

You might be asking, why is this the MK2? That's because there was
a predecessor that was much more crude:

{% image "mk1-top.jpg" %}

{% image "mk1-inside.jpg" %}

The MK1 had more knobs, was housed in a clear food container, and had
blinking LEDs inside. I actually used it in a performance, and it
immediately broke when I brought it home; that thing was very close
to dying while on stage!

### Modular design with a base board

So how the heck did I build this thing?

> NOTE: I ended up switching to a Teensy 4.1 microcontroller board
> at the end of this project. All photos here are of an Arduino Micro.
> Functionally, it's nearly the same thing, so read on.

I wanted this build to be _flexible_. I didn't want to solder wires
directly to the microcontroller. Instead, I envisioned a set of
header pins that I could plug everything into. So, the first step
was to mount the microcontroller on a solderable prototype board.

I used prototype boards made by EPLZON. They're available on
Amazon, but try to support a local shop that sells something like these.

{% image "board-with-headers.jpg" %}

The prototype board has two inner female headers to insert the
microcontroller. Next to those headers are male headers to
attach jumper cables from components (e.g. potentiometers and LEDs).
I also added power and ground bus headers to the power and
ground rows.

The microcontroller is nice and neat inserted into the female headers:

{% image "mcb-inserted.jpg" %}

Now I could use jumper wires for all of my connections.

### Joysticks

The joysticks are made by Adafruit, and are available at
https://www.adafruit.com/product/3102.

{% image "joysticks.jpg" %}

A single joystick is just two potentiometers. I modified the joysticks
to not spring back to their center point by removing the small
tension springs inside.

### Jumper connections

I realized too late that I didn't want to build my own jumper wire
connectors. I had already soldered wires to my potentiometers, so
I needed to figure something out.

I ended up buying a few ribbon cables that already had the connectors
attached to each hook-up wire. Then, I soldered the hook-up wire to
the wires on the potentiometers:

{% image "callouts.png" %}

I do NOT recommend doing it this way! Splicing wires together is
not fun work, and my connections broke a few times.

Instead, consider soldering the ribbon cable hook-up wire directly to
your components, or just attach your own Dupont connectors.

In the end, I was able to just plug everything in to the prototype board:

{% image "teensy-final.jpg" %}

### LEDs and Switches

I wanted to mount my LEDs neatly on the top panel of my controller,
so I got some LED holders.

I wanted each LED to be a complete component with free jumper wires
and a built-in resistor. I soldered the LEDs, resistor, and
hook-up wire with connectors all together, using heat shrink
tubing to help keep things stable:

{% image "led-callouts.png" %}

The switches were pretty trivial:

{% image "switch.jpg" %}

### Housing

For the housing, I found a plastic 6" x 6" electrical project box.
I set my components on top and tried to estimate where everything
should go:

{% image "rough-layout.jpg" %}

With a little bit of measuring and eye-balling, I drilled the holes
in the top panel:

{% image "holes.jpg" %}

I highly recommend using a Forstner bit for large holes in plastic:

{% image "bit.jpg" %}

Next I drilled a hole and mounted a micro USB plug. I receives
a micro USB plug from the outside, and plugs into the micro USB
input of the microcontroller on the inside.

{% image "plug-inside.jpg" %}
{% image "plug-outside.jpg" %}

Next I mounted everything onto the top face:

{% image "mounted.jpg" %}
{% image "everything-in2.jpg" %}

At this point I had a problem: I didn't leave enough clearance for
the mounting ring for one of the joysticks. It was covering
the hole of one of the LEDs. I used a Dremel to remove some of the
mounting ring material and make room for the LED holder.

{% image "clearance.jpg" %}

At this point, everything was finally assembled:

{% image "peek.jpg" %}

### The Code

This was the easy part!

Here's an inventory of all the inputs and outputs:

- Six potentionmeters (two 2-axis joysticks plus two regular potentiometers)
- One two-way switch
- One three-way switch
- Eight LEDs (one for each potentiometer and switch)

Simply, the potentiometers were attached to analog input pins,
the switches attached to digital input pins (mode: `INPUT_PULLUP`),
and the LEDs attached to digital PWM pins.

```
code here
```
