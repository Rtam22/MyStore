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
  const result = url.split("_");
  return result[result.length - 1];
}

export function getLastProductParamLink(url: string) {
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

export function determineCategory(param: string) {
  const categories = param.split("_");
  let allCategories = {
    mainCategory: "",
    secondaryCategory: null,
  };
  if (categories.length > 0) {
    allCategories.mainCategory = categories[0];
    allCategories.secondaryCategory = categories[1];
  }
  return allCategories;
}
