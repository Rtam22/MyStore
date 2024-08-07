export function formatTitle(title: string) {
  let newTitle = replaceHephens(title);
  newTitle = capitalizeFirstLetter(newTitle);
  return newTitle;
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function replaceHephens(string: string) {
  return string.split("-").join(" ");
}
