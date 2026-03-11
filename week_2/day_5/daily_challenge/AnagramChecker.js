function isAnagram(str1, str2) {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/\s+/g, "")
      .split("")
      .sort()
      .join("");

  return normalize(str1) === normalize(str2);
}
isAnagram("Astronomer", "Moon starer");        // true
isAnagram("School master", "The classroom");  // true
isAnagram("The Morse Code", "Here come dots"); // true

isAnagram("Hello", "World");                  // false