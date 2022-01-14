const getAllWeapons = () => {
  return fetch(`https://api.open5e.com/weapons/?format=json`)
    .then(response => {
      if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    });
}

module.exports = {
  getAllWeapons
}