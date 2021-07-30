var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append(
  "Authorization",
  "Bearer bd8b005e-10f3-45a1-b96f-2ba48a6cd2b1"
);

var raw = JSON.stringify({
  from: "+573137544892",
  to: "+573192161411",
  contact_name: "",
  template_name: "recordatorio_cita_vigente_3",
  campaign_name: "ensayo",
  values: [
    "Johann Sebastian",
    "Prevenga Caldas",
    "01/08/2021",
    "10:00:00",
    "Juan Camilo Ramos",
  ],
});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch("https://api.b2chat.io/broadcast", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
