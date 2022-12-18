const El = document.querySelector(".language-wrapper");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const link = document.querySelectorAll("a");
link.forEach((el) => {
    el.addEventListener("click", () => {
        El.querySelector(".active").classList.remove("active");
        el.classList.add("active");
        const attr = el.getAttribute("language");
        title.textContent = data[attr].title;
    });
});
let data = {
    english: {
        title: "hello world",
        description: "The company itself is a very successful company. I followed should the pain be repelled ? Having freed him from such conveniences as the pleasures of manners, let it be as if we were leading that by rejecting it, you should see the pleasure of life! Present ",
    },
    latin: {
        title: "lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, repellendus dolor? Soluta illum quae commodi ut modi voluptates cumque, sit quasi ducimus quod reiciendis fugiat perspiciatis voluptas vitae id! Praesentium?",
    },
    amharic: {
        title: "ስኬታማ ኩባንያ",
        description: "ኩባንያው ራሱ በጣም ስኬታማ ኩባንያ ነው. ተከታተልኩ ህመሙ መቀልበስ አለበት? እንደ ሥነ ምግባራዊ ደስታ ካሉት ምቹ ሁኔታዎች ነፃ አውጥቶታል።እሱን በመናቅ የሕይወትን ደስታ እንድታዩ እንደመራን ይሁን።አለህ?",
    },
};

// english
// The company itself is a very successful company. I followed
//       should the pain be repelled? Having freed him from such conveniences as the pleasures of manners,
//       let it be as if we were leading that by rejecting it, you should see the pleasure of life!
//       Present?

// Latin
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
//       repellendus dolor? Soluta illum quae commodi ut modi voluptates cumque,
//       sit quasi ducimus quod reiciendis fugiat perspiciatis voluptas vitae id!
//       Praesentium?

// Amharic
// ኩባንያው ራሱ በጣም ስኬታማ ኩባንያ ነው. ተከታተልኩ
//       ህመሙ መቀልበስ አለበት? እንደ ሥነ ምግባራዊ ደስታ ካሉት ምቹ ሁኔታዎች ነፃ አውጥቶታል።
//       እሱን በመናቅ የሕይወትን ደስታ እንድታዩ እንደመራን ይሁን።
//       አለህ?