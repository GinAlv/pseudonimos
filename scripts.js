const nameInput = document.getElementById("name-input");
const generateBtn = document.getElementById("generate");
const anagramOutput = document.getElementById("anagram-output");

function generateAnagram(input) {
    const characters = input.split('');
    const shuffledCharacters = characters.sort(() => Math.random() - 0.5);
    return shuffledCharacters.join('');
}

generateBtn.addEventListener("click", () => {
    const inputName = nameInput.value.trim();
    if (inputName === "") {
        alert("Please enter a name.");
        return;
    }
    const anagram = generateAnagram(inputName);
    anagramOutput.textContent = `Anagram: ${anagram}`;
});
