const calculateWPM = (startTime, endTime, words, wordIndex, errorCount = 0) => {
  const time = endTime - startTime - 5000;
  const minute = time / 60000;
  const characterTyped = words.slice(0, wordIndex).join(" ").length;

  return Math.round(characterTyped / 5 / minute);
};

const getPlayerId = () => {
  return localStorage.getItem("playerId");
};

const removePlayerId = () => {
  localStorage.removeItem("playerId");
};

const savePlayerId = (id) => {
  localStorage.setItem("playerId", id);
};

const playerUtil = {
  calculateWPM,
  getPlayerId,
  removePlayerId,
  savePlayerId,
};

export default playerUtil;
