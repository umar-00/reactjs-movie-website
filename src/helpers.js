// Convert time to hours and minutes
export const calcTime = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = (money) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

// Returns sessionStorage corresponding with provided stateName
export const isPersistedState = (stateName) => {
  const sessionState = sessionStorage.getItem(stateName);
  // Parse from string to JSON object IF sessionState exists/found, ELSE return NULL
  return sessionState && JSON.parse(sessionState);
};
