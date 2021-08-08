//esta función me trae las sedes

const DENTALINK_API_KEY = process.env.DENTALINK_API_KEY;

const getClinicBranches = () => {
  console.log(DENTALINK_API_KEY);
  // var myHeaders = new Headers();
  // myHeaders.append("Authorization", "Token " + DENTALINK_API_KEY);

  // var requestOptions = {
  //   method: "GET",
  //   headers: myHeaders,
  //   redirect: "follow",
  // };

  // fetch(
  //   "https://api.dentalink.healthatom.com/api/v1/sucursales/",
  //   requestOptions
  // )
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log("error", error));
};

export default getClinicBranches;
