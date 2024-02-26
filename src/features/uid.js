// export const uid = () => (Date.now() + Math.random()).toString(18);
export const uid = () => {
  const text = [];
  const number = [];
  const possibleLetter = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  const posibleNumber = Array.from("0123456789");

  for (let i = 0; i < 4; i++) {
    text.push(
      possibleLetter[Math.floor(Math.random() * possibleLetter.length)]
    );
  }

  for (let i = 0; i < 8; i++) {
    number.push(
      posibleNumber[Math.floor(Math.random() * posibleNumber.length)]
    );
  }

  return `${text.join("")}${number.join("")}`.toUpperCase();
};
