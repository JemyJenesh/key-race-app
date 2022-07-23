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
  getPlayerId,
  removePlayerId,
  savePlayerId,
};

export default playerUtil;
