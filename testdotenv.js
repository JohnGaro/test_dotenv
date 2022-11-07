require("dotenv").config();

const userName = process.env.USER_NAME;
const userCity = process.env.USER_CITY;
const userLanguage = process.env.USER_LANGUAGE;

console.log(
  `I am ${userName}, wilder in ${userCity} and I love ${userLanguage}!`
);
