document.getElementById("generateBtn").addEventListener("click", () => {
    const number = Math.floor(Math.random() * 101);
    document.getElementById("randomBox").textContent = number;
});
//---------------------------------
