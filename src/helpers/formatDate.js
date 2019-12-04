export const formatDate = date => {
  return date.split("T")[1].slice(0, 5);
};
