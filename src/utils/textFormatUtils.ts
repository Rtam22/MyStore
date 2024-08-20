export function formatTitle(title: string) {
  let newTitle = breakStringToArray(title);
  newTitle = capitalizeFirstLetterArray(newTitle);
  return newTitle.join(" ");
}

function capitalizeFirstLetterArray(array: string[]) {
  return array.map((word) => {
    return capitalizeFirstLetter(word);
  });
}

export function getLastParamLink(url: string) {
  const result = url.split("/");
  return result[result.length - 1];
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function breakStringToArray(string: string) {
  return string.split("-");
}

export function getFirstWord(string: string) {
  const result = string.split(" ");
  return result[0];
}
