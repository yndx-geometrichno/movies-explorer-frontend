export default function getAmountOfCards() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    return 5;
  } else if (screenWidth < 1106) {
    return 8;
  } else {
    return 12;
  }
}