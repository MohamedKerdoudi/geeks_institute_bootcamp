//Exercise 1

function timeUntilNewYear() {
  const now = new Date();
  const nextYear = new Date(now.getFullYear() + 1, 0, 1); 
  const diff = nextYear - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `January 1st is in ${days} days and ${hours}:${minutes}:${seconds} hours`;
}

export default timeUntilNewYear;