
export const formatearFechaLegible = (fecha: Date, conDiaSemana: boolean = false): string => {
  const opciones: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    ...(conDiaSemana && { weekday: 'long' })
  };

  // Localiza en español, por ejemplo: "lunes, 12 de mayo"
  const fechaFormateada = new Intl.DateTimeFormat('es-MX', opciones).format(fecha);

  // Si se incluye el día de la semana, capitaliza la primera letra
  return conDiaSemana
    ? fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1)
    : fechaFormateada;
};
