export const fetchCount = (amount) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: amount });
    }, 1000);
  });
};
