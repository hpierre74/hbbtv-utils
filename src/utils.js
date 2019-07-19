export const getKeymap = keyset => {
  const { NAVIGATION, VCR, RED, YELLOW, BLUE, GREEN } = keyset;

  return {
    up: NAVIGATION,
    down: NAVIGATION,
    right: NAVIGATION,
    left: NAVIGATION,
    enter: NAVIGATION,
    red: RED,
    green: GREEN,
    yellow: YELLOW,
    blue: BLUE,
    play: VCR,
    pause: VCR,
    back: NAVIGATION,
    rewind: VCR,
    fastForward: VCR,
    stop: VCR
  };
};

export const getKeyset = (keysList, keyMap) =>
  keysList
    ? Object.keys(keyMap)
        .filter(keyMapIndex => keysList.includes(keyMapIndex))
        /* eslint-disable-next-line no-bitwise */
        .reduce((acc, key) => acc | keyMap[key], 0)
    : 0;
