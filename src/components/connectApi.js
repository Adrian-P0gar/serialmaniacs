async function getApi(url) {
  let result = await fetch(url);
  let data = await result.json();

  return data;
}

export async function fetchShowsData(userInput, pageNumber = 1) {
  let urlSerial =
    "http://api.tvmaze.com/search/shows?q=" + userInput + "&page=" + pageNumber;
  console.log(urlSerial);
  let response = await getApi(urlSerial);
  return response;
}

export async function fetchPersonsData(userInput, pageNumber = 1) {
  let urlPersons =
    "http://api.tvmaze.com/search/people?q=" +
    userInput +
    "&page=" +
    pageNumber;
  console.log(urlPersons);
  let response = await getApi(urlPersons);
  return response;
}
