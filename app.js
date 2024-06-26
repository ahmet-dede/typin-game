document.addEventListener("DOMContentLoaded", () => {
  const words = [
    "ability",
    "absence",
    "academic",
    "accept",
    "access",
    "accident",
    "account",
    "achieve",
    "acquire",
    "across",
    "activity",
    "actually",
    "addition",
    "address",
    "administration",
    "admit",
    "adult",
    "advantage",
    "advertising",
    "advice",
    "balance",
    "band",
    "barrier",
    "basic",
    "basis",
    "beautiful",
    "because",
    "become",
    "before",
    "begin",
    "behavior",
    "behind",
    "belief",
    "believe",
    "belong",
    "calculate",
    "call",
    "camera",
    "campaign",
    "candidate",
    "capital",
    "capture",
    "care",
    "career",
    "careful",
    "carefully",
    "carpet",
    "carry",
    "case",
    "cash",
    "damage",
    "dance",
    "danger",
    "data",
    "deal",
    "debate",
    "decade",
    "decide",
    "decision",
    "declare",
    "decrease",
    "deep",
    "defeat",
    "defend",
    "define",
    "earn",
    "earth",
    "easily",
    "economic",
    "economy",
    "education",
    "effect",
    "effort",
    "either",
    "election",
    "electric",
    "element",
    "energy",
    "engine",
    "enjoy",
    "face",
    "fact",
    "factor",
    "fail",
    "failure",
    "fair",
    "fall",
    "false",
    "family",
    "famous",
    "far",
    "farm",
    "fast",
    "father",
    "fear",
    "gain",
    "game",
    "gap",
    "garage",
    "garden",
    "gas",
    "gather",
    "general",
    "generation",
    "gentle",
    "get",
    "gift",
    "girl",
    "give",
    "glass",
    "habit",
    "hair",
    "half",
    "hall",
    "hand",
    "handle",
    "hang",
    "happen",
    "happy",
    "hard",
    "harm",
    "hat",
    "have",
    "head",
    "ice",
    "idea",
    "identify",
    "if",
    "ignore",
    "ill",
    "image",
    "imagine",
    "impact",
    "important",
    "improve",
    "income",
    "increase",
    "independent",
    "individual",
    "jack",
    "jar",
    "jaw",
    "jealous",
    "jelly",
    "jewel",
    "job",
    "join",
    "joint",
    "joke",
    "journey",
    "joy",
    "judge",
    "juice",
    "jump",
    "keep",
    "key",
    "kick",
    "kid",
    "kill",
    "kind",
    "king",
    "kiss",
    "kitchen",
    "knee",
    "knife",
    "knock",
    "know",
    "knowledge",
    "knot",
    "label",
    "laboratory",
    "lack",
    "lady",
    "lake",
    "land",
    "language",
    "large",
    "last",
    "late",
    "laugh",
    "law",
    "lead",
    "learn",
    "least",
    "machine",
    "mad",
    "magazine",
    "mail",
    "main",
    "major",
    "make",
    "man",
    "manage",
    "many",
    "map",
    "mark",
    "market",
    "marry",
    "match",
    "name",
    "narrow",
    "nation",
    "national",
    "natural",
    "nature",
    "near",
    "nearly",
    "necessary",
    "neck",
    "need",
    "negative",
    "neighbor",
    "never",
    "new",
    "object",
    "observe",
    "obtain",
    "obvious",
    "occasion",
    "ocean",
    "odd",
    "offer",
    "office",
    "often",
    "oil",
    "okay",
    "old",
    "on",
    "once",
    "umbrella",
    "uncle",
    "under",
    "understand",
    "unit",
    "unite",
    "university",
    "unless",
    "until",
    "up",
    "upon",
    "urge",
    "use",
    "usual",
    "utility",
    "pack",
    "page",
    "pain",
    "paint",
    "pair",
    "palace",
    "pale",
    "panel",
    "paper",
    "parent",
    "park",
    "part",
    "party",
    "pass",
    "past",
    "race",
    "radio",
    "railway",
    "rain",
    "raise",
    "range",
    "rate",
    "reach",
    "read",
    "ready",
    "real",
    "reason",
    "receive",
    "recent",
    "recognize",
    "sad",
    "safe",
    "said",
    "sale",
    "same",
    "sand",
    "save",
    "say",
    "school",
    "science",
    "score",
    "screen",
    "sea",
    "season",
    "seat",
    "table",
    "take",
    "talk",
    "tall",
    "task",
    "taste",
    "tax",
    "tea",
    "team",
    "tear",
    "technology",
    "tell",
    "ten",
    "term",
    "test",
    "vacation",
    "valid",
    "valley",
    "value",
    "variety",
    "various",
    "vehicle",
    "version",
    "very",
    "vessel",
    "victory",
    "video",
    "view",
    "village",
    "violence",
    "yard",
    "year",
    "yellow",
    "yes",
    "yesterday",
    "yet",
    "yield",
    "you",
    "young",
    "your",
    "youth",
    "zone",
    "yawn",
    "yacht",
    "yogurt",
    "zero",
    "zone",
    "zoo",
    "zip",
    "zombie",
    "zebra",
    "zigzag",
    "zenith",
    "zephyr",
    "zest",
    "zealous",
    "zucchini",
    "zoom",
    "zodiac",
    "zoologist",
  ];
  const timeElement = document.getElementById("time");
  const wordElement = document.getElementById("word");
  const inputElement = document.getElementById("input");
  const scoreElement = document.getElementById("score");

  let time = 5;
  let score = 0;
  let currentWord = "";

  function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  function startGame() {
    currentWord = getRandomWord();
    wordElement.textContent = currentWord;
    inputElement.value = "";
    inputElement.focus();
    score = 0;
    scoreElement.textContent = score;
    time = 5;
    timeElement.textContent = time;
    const timer = setInterval(() => {
      time--;
      timeElement.textContent = time;
      if (time === 0) {
        clearInterval(timer);
        inputElement.disabled = true;
      }
    }, 1000);
  }

  inputElement.addEventListener("input", () => {
    if (inputElement.value === currentWord) {
      score++;
      scoreElement.textContent = score;
      currentWord = getRandomWord();
      wordElement.textContent = currentWord;
      inputElement.value = "";
      time = 5;
    }
  });

  startGame();
});