---
title: I remembered I had a blog
---

I just remembered I can write stuff here!

I've been busy. Went on a 2-week road trip to the Washington/Oregon area
and have been busy preparing music for various performances.

So um I made a six-knob MIDI controller housed in a Panera
food container.

{%image "./controller1.jpg", "arduino"  %}

{%image "./controller2.jpg", "panera"  %}

The code is silly easy (warning: only works with USB-MIDI Arduino boards like
the Arduino Micro):

```
#include <MIDIUSB.h>

int analogValues[6];
const uint8_t midiChannel = 1;

void setup() {
  analogValues[0] = 0;
  analogValues[1] = 0;
  analogValues[2] = 0;
  analogValues[3] = 0;
  analogValues[4] = 0;
  analogValues[5] = 0;
}

int readAnalogValue(int pin, int index) {
  int potValue = analogRead(pin);
  int midiValue = map(potValue, 0, 1023, 0, 127);
  if (analogValues[index] != midiValue) {
    analogValues[index] = midiValue;    
    sendControlChange(midiChannel, index + 1, midiValue);
  }
}

void loop() {

  readAnalogValue(A0, 0);
  readAnalogValue(A1, 1);
  readAnalogValue(A2, 2);
  readAnalogValue(A3, 3);
  readAnalogValue(A4, 4);
  readAnalogValue(A5, 5);

  // delay to avoid flooding MIDI messages
  delay(10);
}

void sendControlChange(uint8_t channel, uint8_t control, uint8_t value) {
  midiEventPacket_t event = {0x0B, 0xB0 | (channel - 1), control, value};
  MidiUSB.sendMIDI(event);
  MidiUSB.flush();
}
```