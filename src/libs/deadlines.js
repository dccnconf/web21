import {loadJSONFile} from "./utility";

const getLocalizedEvents = (locale) => {
  const deadlinesList = loadJSONFile('deadlines.json') || [];
  return deadlinesList.map(deadline => ({...deadline, event: deadline.event[locale]}))
}

export const getDeadlines = (locale = "en") => {
  const deadlinesList = getLocalizedEvents(locale);

  // Group and sort deadlines:
  deadlinesList.sort((a, b) => a.date < b.date || (a.date === b.date && a['important'] && !b['important']));
  let groupedDeadlines = [];
  for (const deadline of deadlinesList) {
    const lastItem = groupedDeadlines ? groupedDeadlines[groupedDeadlines.length - 1] : undefined;
    if (lastItem && lastItem.date === deadline.date) {
      lastItem.events.push({
        event: deadline.event,
        important: !!deadline['important']
      });
    } else {
      groupedDeadlines.push({
        date: deadline.date,
        events: [{
          event: deadline.event,
          important: !!deadline['important']
        }]
      })
    }
  }

  return groupedDeadlines;
}
