class LetterInfo {
    letter   = "";
    word     = "";
    sentence = "";
    
    constructor(letter, word, sentence) {
        this.letter   = letter;
        this.word     = word;
        this.sentence = sentence;
    }
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const letters = {
    "A": new LetterInfo("A", "Apple", "An apple fell on Newton's head while he was sitting under a tree."),
    "B": new LetterInfo("B", "Boat", "Finally, a boat! we can now leave this island!"),
    "C": new LetterInfo("C", "Children", "The children are playing in the backyard."),
    "D": new LetterInfo("D", "Diamond", "Her diamond necklace is so attractive!"),
    "E": new LetterInfo("E", "Elephant", "Elephants are so large and strong! they're genuinely amazing!"),
    "F": new LetterInfo("F", "Fox", "Look at that little fox! he's so lovely!"),
    "G": new LetterInfo("G", "Grapes", "Grapes are so delicious, they're my favorite fruits!"),
    "H": new LetterInfo("H", "Horse", "Horses sleep while standing on their legs!"),
    "I": new LetterInfo("I", "Iran", "Iran is the land of heroes and bravehearts."),
    "J": new LetterInfo("J", "Jacket", "I spilled coffee on my jacket this morning."),
    "K": new LetterInfo("K", "Knife", "Be careful not to cut your fingers, that knife is sharp!"),
    "L": new LetterInfo("L", "Lake", "I've been to the southern lake before and really enjoyed the scenery, I recommend you to go there sometime!"),
    "M": new LetterInfo("M", "Mirror", "Have you even seen yourself in the mirror?"),
    "N": new LetterInfo("N", "Newspaper", "Have you read the newspapers yet? They say The President has recovered from his illness!"),
    "O": new LetterInfo("O", "Owl", "Owls sleep during the day and become active at night."),
    "P": new LetterInfo("P", "Police officer", "The police officers were investigating the crime scene."),
    "Q": new LetterInfo("Q", "Queen", "Today is the birthday of our beloved queen."),
    "R": new LetterInfo("R", "Robot", "Are robots really going to replace us in the future?"),
    "S": new LetterInfo("S", "Sun", "The Sun provides us with warmth and light, we wouldn't be able to live without it!"),
    "T": new LetterInfo("T", "Tree", "Trees are the lungs of Earth, we must avoid cutting them if we want to survive!"),
    "U": new LetterInfo("U", "Umbrella", "Let me in, I forgot my umbrella and it's raining cats and dogs over here!"),
    "V": new LetterInfo("V", "Village", "Our village isn't too far from here, Let's go!"),
    "W": new LetterInfo("W", "Window", "It's so cold! who left the window open?"),
    "X": new LetterInfo("X", "X-Ray", "X-Ray is used to photograph our body for medical examination."),
    "Y": new LetterInfo("Y", "Yogurt", "I would like to have a cold yogurt for my dessert, please."),
    "Z": new LetterInfo("Z", "Zebra", "Zebras have black and white stripes on their bodies that make them so special.")
};

function setSelectedLetter(letter) {
    const letterInfo = letters[letter.toUpperCase()];

    const letterUpper = letterInfo.letter.toUpperCase();
    const letterLower = letterInfo.letter.toLowerCase();

    setElementValues();
    setElementSources();

    function setElementValues() {
        setElementValue("selected-letter", `${letterUpper} ${letterLower}`);
        setElementValue("selected-word", `"${letterInfo.word}"`)
        setElementValue("selected-letter-sentence", `"${letterInfo.sentence}"`);

        function setElementValue(elementId, value) {
            document.getElementById(elementId).innerHTML = value;
        }
    }

    function setElementSources() {
        setElementSource("selected-letter-pronunciation", `audio/letter_${letterLower}.ogg`);
        setElementSource("selected-word-pronunciation", `audio/letter_${letterLower}_word.ogg`, true);
        setElementSource("selected-word-image", `images/letter_${letterLower}_word.jpg`);

        // Reload the audio elements
        document.getElementById("selected-letter-audio").load();
        document.getElementById("selected-word-audio").load();

        function setElementSource(elementId, source) {
            document.getElementById(elementId).src = source;
        }
    }
}
