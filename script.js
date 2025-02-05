document.addEventListener("DOMContentLoaded", function() {
    const emojiBtn = document.querySelector(".emoji-btn");
    const giftBtn = document.querySelector(".gift-btn");
    const emojiPopup = document.querySelector(".emoji-popup");
    const giftPopup = document.querySelector(".gift-popup");

    emojiBtn.addEventListener("click", function() {
        emojiPopup.classList.toggle("hidden");
        giftPopup.classList.add("hidden"); // Close gift popup if open
    });

    giftBtn.addEventListener("click", function() {
        giftPopup.classList.toggle("hidden");
        emojiPopup.classList.add("hidden"); // Close emoji popup if open
    });
});
