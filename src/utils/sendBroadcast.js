var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append(
  "Authorization",
  "Bearer 368789f7-7817-4bf6-bcb0-49483b6a66b9"
);

var raw = JSON.stringify({
  from: "+573137544892",
  to: "+573192161411",
  contact_name: "",
  template_name: "recordatorio_cita_vigente_3",
  campaign_name: "ensayo 838",
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
