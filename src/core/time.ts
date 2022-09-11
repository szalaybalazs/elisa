export const msPerHour = 3_600_000;
export const msPerDay = msPerHour * 24;

export const getTimeofDay = () => {
  return Date.now() % msPerDay;
};

export const getRelativeOffset = (time: number) => {
  return time / msPerDay;
};

export const getTime = (ms: number) => {
  const time = getRelativeOffset(ms) * 24;
  const hour = Math.floor(time);
  const minute = Math.floor((time % 1) * 60);

  return { hour, minute };
};
