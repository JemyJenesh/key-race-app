const getPlayerId = () => {
  return localStorage.getItem("playerId");
};

const savePlayerId = (id) => {
  localStorage.setItem("playerId", id);
};

const playerUtil = {
  getPlayerId,
  savePlayerId,
};

export default playerUtil;
