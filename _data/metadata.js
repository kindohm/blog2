const colorable = require("colorable");

const rand255 = () => {
  return Math.floor(Math.random() * 255);
};

const randHex = () => rand255().toString(16).padStart(2, "0");

const randHexColor = () => `#${randHex()}${randHex()}${randHex()}`;

const getCombo = () => {
  const randColors = new Array(10).fill(null).reduce((acc, col, i) => {
    return { ...acc, [`color${i}`]: randHexColor() };
  }, {});

  const result = colorable(randColors, { compact: true, threshold: 0 });

  const ideals = result
    .map((c) => {
      const match = c.combinations.find((cc) => cc.accessibility.aaa === true);
      if (!match) return null;
      const foreground = c.hex;
      const background = match.hex;
      return { foreground, background };
    })
    .filter((x) => !!x);

  if (ideals.length === 0) {
    console.log("random color combo not found, trying again");
    return getCombo();
  }

  return ideals[0];
};

const { foreground, background } = getCombo();

console.log("colors:", { foreground, background });

module.exports = {
  title: "Mike Hodnick's Blog",
  url: "https://kindohm.com/",
  language: "en",
  description: "Dropping stuff here so I don't forget.",
  author: {
    name: "Mike Hodnick",
    email: "mike@kindohm.com",
    url: "https://kindohm.com",
  },
  risks: [
    "dry mouth",
    "sudden death or dismemberment",
    "night sweats",
    "drowsiness",
    "dizziness",
  ],
  foreground,
  background,
};
