const dias = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

const fechaHora = (fechaStr) => {
  let date = new Date(fechaStr);
  return dias[date.getDay()] + "," + date.getHours() + ":" + date.getMinutes();
};
