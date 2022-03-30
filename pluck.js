const pluck = (list, key) =>
  list.reduce((pV, cV) => (key in cV ? [...pV, cV[key]] : [...pV]), []);

// NodeJS seems to want CommonJS imports.
module.exports = {
  default: pluck,
  pluck
};