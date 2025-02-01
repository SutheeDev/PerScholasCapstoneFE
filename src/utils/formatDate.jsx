const formatDate = (date) => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
  return formattedDate;
};

export default formatDate;
