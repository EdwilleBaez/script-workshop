export const getNextMonthLabel = () => {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);

  const monthYear = date.toLocaleDateString("es-ES", {
    month: "long",
    year: "numeric",
  });

  return monthYear.charAt(0).toUpperCase() + monthYear.slice(1);
};
