const getKeys = () => {
  const keys = {
    dentalinkApikey: document.getElementById("dentalink-apikey").value,
    B2ChatApikey: document.getElementById("B2Chat-apikey").value,
    B2ChatApipass: document.getElementById("B2Chat-apipass").value,
  };
  console.log(keys);
  var globalKeys = keys
  //guardar keys en el window.localstorage
  return keys;
};

export default getKeys;
