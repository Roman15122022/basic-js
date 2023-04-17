const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !/^\d+(\.\d+)?$/.test(sampleActivity)) {
    return false;
  }

  const parsedActivity = parseFloat(sampleActivity);

  if (parsedActivity <= 0 || parsedActivity > MODERN_ACTIVITY) {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;
  const time = Math.ceil(Math.log(MODERN_ACTIVITY / parsedActivity) / k);

  return time;
}

module.exports = {
  dateSample
};
