// ====== NAV TOGGLE ======
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("header nav ul");

menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

// ====== SIMPLE DATA ======
const STORIES = [
  {
    title: "Global Markets Rally Amid Tech Surge",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=400",
    desc: "Stock markets worldwide rose as tech firms reported strong earnings.",
  },
  {
    title: "Elections Heat Up with New Debates",
    img: "elec.jpg",
    desc: "Political debates intensify ahead of the upcoming elections.",
  },
  {
    title: "Breakthrough in Renewable Energy",
    img: "energy.jpg",
    desc: "Scientists unveil a new method to harness solar energy efficiently.",
  },
];

// ====== RENDER ARTICLES ======
function createArticleCard(article) {
  const div = document.createElement("div");
  div.className = "article-card";
  div.innerHTML = `
    <img src="${article.img}" alt="${article.title}">
    <h3>${article.title}</h3>
    <p>${article.desc}</p>
  `;
  return div;
}

const topStoriesContainer = document.getElementById("topStories");
STORIES.forEach(story => topStoriesContainer.appendChild(createArticleCard(story)));

// ====== CATEGORY BUTTONS ======
const categoryButtons = document.querySelectorAll(".categories-grid button");
const categoryArticles = document.getElementById("categoryArticles");

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryArticles.innerHTML = "";
    for (let i = 1; i <= 3; i++) {
      const fakeArticle = {
        title: `${btn.textContent} News ${i}`,
        img: "https://picsum.photos/400/200?random=" + Math.floor(Math.random()*1000),
        desc: `Latest updates in ${btn.textContent.toLowerCase()}.`,
      };
      categoryArticles.appendChild(createArticleCard(fakeArticle));
    }
  });
});

// ====== SUBSCRIBE FORM ======
const subscribeForm = document.getElementById("subscribeForm");
const subscribeMessage = document.getElementById("subscribeMessage");

subscribeForm.addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  localStorage.setItem("subscriber", email);
  subscribeMessage.textContent = "✅ Thank you for subscribing!";
  subscribeForm.reset();
});


// ====== CATEGORY IMAGES (3 per category) ======
const CATEGORY_IMAGES = {
  politics: [
    "pol 1.jpg",
    "pol 2.jpg",
    "pol 3.jpg"
  ],
  business: [
    "bus 1.jpg",
    "bus 2.jpg",
    "bus 3.jpg"
  ],
  technology: [
    "tec 1.jpg",
    "tec 2.jpg",
    "tec 3.jpg"
  ],
  sports: [
    "spo 1.jpg",
    "spo 2.jpg",
    "spo 3.jpg"
  ]
};


categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryArticles.innerHTML = "";
    const category = btn.dataset.category;

    // Loop through 3 images for that category
    CATEGORY_IMAGES[category].forEach((imgUrl, index) => {
      const fakeArticle = {
        title: `${btn.textContent} News ${index + 1}`,
        img: imgUrl,
        desc: `Latest updates in ${btn.textContent.toLowerCase()}.`,
      };
      categoryArticles.appendChild(createArticleCard(fakeArticle));
    });
  });
});


// ====== CATEGORY CONTENT (extra info for each image) ======
const CATEGORY_CONTENT = {
  politics: [
    {
      title: "Election Campaigns in Full Swing",
      desc: "Parties launch their campaigns ahead of the national elections."
    },
    {
      title: "Parliament Session Highlights",
      desc: "Key bills and discussions dominate the recent session."
    },
    {
      title: "International Relations",
      desc: "Talks with neighboring countries bring new opportunities."
    }
  ],
  business: [
    {
      title: "Stock Market Trends",
      desc: "Markets show mixed signals amid global uncertainty."
    },
    {
      title: "Startups on the Rise",
      desc: "New unicorns emerge in the fintech space."
    },
    {
      title: "Corporate Mergers",
      desc: "Major companies announce billion-dollar mergers."
    }
  ],
  technology: [
    {
      title: "AI Revolution",
      desc: "Artificial Intelligence is reshaping industries worldwide."
    },
    {
      title: "Cybersecurity Focus",
      desc: "Companies invest heavily in securing their systems."
    },
    {
      title: "Space Tech",
      desc: "Private firms gear up for ambitious space missions."
    }
  ],
  sports: [
    {
      title: "Cricket World Cup Updates",
      desc: "Teams battle it out in the thrilling tournament."
    },
    {
      title: "Olympics Preparations",
      desc: "Athletes train hard for the upcoming Olympics."
    },
    {
      title: "Football Transfers",
      desc: "Top players make surprising club transfers."
    }
  ]
};

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryArticles.innerHTML = "";
    const category = btn.dataset.category;

    CATEGORY_IMAGES[category].forEach((imgUrl, index) => {
      const fakeArticle = {
        title: CATEGORY_CONTENT[category][index].title,
        img: imgUrl,
        desc: CATEGORY_CONTENT[category][index].desc,
      };
      categoryArticles.appendChild(createArticleCard(fakeArticle));
    });
  });
});
