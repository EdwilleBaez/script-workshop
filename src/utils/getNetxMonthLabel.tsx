export const getNextMonthLabel = () => {
  const date = new Date();
  date.setMonth(date.getMonth() + 2);

  const monthYear = date.toLocaleDateString("es-ES", {
    month: "long",
    year: "numeric",
  });

  return monthYear.charAt(0).toUpperCase() + monthYear.slice(1);
};

export const getNextEvenMonthLabel = () => {
  const date = new Date();
  let month = date.getMonth(); // 0 = enero

  // Queremos meses: Feb(1), Abr(3), Jun(5), Ago(7), Oct(9), Dic(11)

  // Si estamos antes de febrero
  if (month < 1) {
    month = 1;
  } else {
    // Encontrar el siguiente mes impar (1,3,5,7,9,11)
    month = month % 2 === 1 ? month + 2 : month + 1;
  }

  const year = date.getFullYear();

  const nextDate = new Date(year, month);

  const label = nextDate.toLocaleDateString("es-ES", {
    month: "long",
    year: "numeric",
  });

  return label.charAt(0).toUpperCase() + label.slice(1);
};
