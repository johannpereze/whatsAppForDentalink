import headerTemplate from "../templates/header"
import home from "../pages/home";
import apiKeys from "../pages/apiKeys";
import line from "../pages/line";
import templateSelector from "../pages/templateSelector";
import templateOptions from "../pages/templateOptions";
import resume from "../pages/resume";
import sending from "../pages/sending";
import error404 from "../pages/error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";
import getKeys from "../utils/getKeys";                   //No quiero este aquí pero no se como sacarlo

const routes = {
  "/": home,
  "/apikeys": apiKeys,
  "/line": line,
  "/error404": error404,
  "/templateselector": templateSelector,
  "/templateoptions": templateOptions,
  "/resume": resume,
  "/sending": sending,
};

var globalKeys = undefined

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  
  let hash = getHash();
  console.log(await hash);
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : error404;
  content.innerHTML = await render();
  header.innerHTML = await headerTemplate();
  document.getElementById("send-keys").addEventListener("click", () => globalKeys = getKeys()); //No quiero este aquí pero no se como sacarlo
};

export default router;

//Puedo guardar datos en el window.localStorage