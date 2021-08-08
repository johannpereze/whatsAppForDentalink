import router from "./routes/index";
//import getClinicBranches from "./utils/getClinicBranches";
// import getToken from './utils/getToken'
// import "./styles/style.scss"

window.addEventListener("load", router);
// window.addEventListener("load", getClinicBranches);
window.addEventListener("hashchange", router);

const DENTALINK_API_KEY = process.env.DENTALINK_API_KEY;