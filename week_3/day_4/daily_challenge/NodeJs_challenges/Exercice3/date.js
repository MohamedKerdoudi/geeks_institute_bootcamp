

function nextHoliday() {
  const now = new Date();


  const currentYear = now.getFullYear();
  let holiday = new Date(currentYear, 11, 25); 

  
  if (now > holiday) {
    holiday = new Date(currentYear + 1, 11, 25);
  }

  const diff = holiday - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `Today is ${now.toDateString()}.\nThe next holiday (Christmas) is in ${days} days and ${hours}:${minutes}:${seconds} hours.`;
}

export default nextHoliday;