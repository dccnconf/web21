import {loadJSONFile} from "./utility";

const getTopics = (locale) => {
  locale = locale || "en";
  return loadJSONFile('topics.json').map(e => e[locale]).sort();
};

export default getTopics;
