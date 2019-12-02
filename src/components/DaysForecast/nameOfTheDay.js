const days = {
  0: "Niedziela",
  1: "Poniedziałek",
  2: "Wtorek",
  3: "Środa",
  4: "Czwartek",
  5: "Piątek",
  6: "Sobota"
};

const nameOfTheDay = date => {
  const day = new Date(date).getDay();

  return days[day];
};

export default nameOfTheDay;
