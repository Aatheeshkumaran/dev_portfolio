      /* TECH ICONS */
      const techs = [
        {
          name: "HTML5",
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 3l1.68 18.39L12 23l6.32-1.61L20 3H4z"/><path d="M17 8H7l.36 4h9.28l-.5 5.4L12 19l-4.14-1.6-.28-3.2"/></svg>`,
        },
        {
          name: "CSS3",
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 3l1.68 18.39L12 23l6.32-1.61L20 3H4z"/><path d="M16.5 8.5h-9l.5 4.5h7.5l-.5 5-3 1-3-1-.2-2.5"/></svg>`,
        },
        {
          name: "JavaScript",
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 17c.5 1 1.5 1.5 2.5 1.5 1.5 0 2.5-.8 2.5-2.5V11"/><path d="M15 11v4.5c0 .8-.5 1.5-1.5 1.5"/></svg>`,
        },
        {
          name: "React",
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>`,
        },
        {
          name: "MongoDB",
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2c0 0-6 4.5-6 11a6 6 0 0012 0C18 6.5 12 2 12 2z"/><line x1="12" y1="14" x2="12" y2="22"/></svg>`,
        },
        {
          name: "Django",
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="2" width="5" height="20" rx="1"/><rect x="11" y="2" width="5" height="14" rx="1"/><path d="M16 16c0 3-1.5 5-5 6"/></svg>`,
        },
        {
          name: "Python",
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C8 2 6 4 6 7v2h6v1H5C3 10 2 12 2 14s1 4 3 4h2v-3c0-2 2-3 5-3s5 1 5 3v3h2c2 0 3-2 3-4s-1-4-3-4h-6V9h6V7c0-3-2-5-6-5z"/><circle cx="9.5" cy="6.5" r=".75" fill="currentColor" stroke="none"/><circle cx="14.5" cy="17.5" r=".75" fill="currentColor" stroke="none"/></svg>`,
        },
        {
          name: "Bootstrap",
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 7h5a3 3 0 010 6H8V7z"/><path d="M8 13h5.5a3.5 3.5 0 010 7H8v-7z"/></svg>`,
        },
      ];

      const track = document.getElementById("tech-track");
      const buildItems = () =>
        techs
          .map(
            (t) =>
              `<div class="tech-item">${t.icon}${t.name}</div><div class="divider-dot"></div>`,
          )
          .join("");
      track.innerHTML = buildItems() + buildItems();

      /* TYPING */
      const words = [
        "Web Developer",
        "UI/UX Designer",
        "Video Editor",
        "Graphic Designer",
      ];
      const el = document.getElementById("typing-text");
      let wi = 0,
        ci = 0,
        deleting = false;
      function type() {
        const word = words[wi];
        if (!deleting) {
          el.textContent = word.slice(0, ++ci);
          if (ci === word.length) {
            deleting = true;
            setTimeout(type, 1800);
            return;
          }
          setTimeout(type, 90);
        } else {
          el.textContent = word.slice(0, --ci);
          if (ci === 0) {
            deleting = false;
            wi = (wi + 1) % words.length;
            setTimeout(type, 400);
            return;
          }
          setTimeout(type, 45);
        }
      }
      type();

      /* ROLES */
      document.querySelectorAll(".role-item").forEach((item) => {
        item.addEventListener("click", () => {
          document
            .querySelectorAll(".role-item")
            .forEach((i) => i.classList.remove("active"));
          item.classList.add("active");
        });
      });

      /* HAMBURGER */
      const hamburger = document.getElementById("hamburger");
      const navRight = document.getElementById("nav-right");
      const overlay = document.getElementById("nav-overlay");
      function openMenu() {
        hamburger.classList.add("open");
        navRight.classList.add("open");
        overlay.classList.add("open");
        document.body.style.overflow = "hidden";
      }
      function closeMenu() {
        hamburger.classList.remove("open");
        navRight.classList.remove("open");
        overlay.classList.remove("open");
        document.body.style.overflow = "";
      }
      hamburger.addEventListener("click", () =>
        hamburger.classList.contains("open") ? closeMenu() : openMenu(),
      );
      overlay.addEventListener("click", closeMenu);

      /* SMOOTH SCROLL for nav links */
      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", (e) => {
          const target = document.querySelector(a.getAttribute("href"));
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
          }
        });
      });

      /* ── INTERNSHIP SLIDESHOW (single bento box, one-at-a-time) ── */
      (function () {
        const track = document.getElementById("intern-track");
        if (!track) return;
        const slides = track.querySelectorAll(".intern-slide");
        const dots = document.querySelectorAll("#intern-dots .intern-dot");
        const total = slides.length;
        let idx = 0;
        if (total <= 1) return;

        function show(i) {
          idx = (i + total) % total;
          slides.forEach((s, n) => s.classList.toggle("is-active", n === idx));
          dots.forEach((d, n) => d.classList.toggle("is-active", n === idx));
        }

        dots.forEach((d, n) => d.addEventListener("click", () => show(n)));
        setInterval(() => show(idx + 1), 3000);
      })();

      /* ── PROJECTS SLIDER ── */
      /* ── PROJECT SHOWCASE ── */

(function () {

const projects = [
{
title: "Personal Chat Assistant",
desc: "AI powered personal assistant built with Python and Hugging Face. Supports natural conversations and local execution.",
stack: ["Python","HTML","CSS","HuggingFace"],
github: "#",
live: "#"
},

{
title: "Personal Tracker",
desc: "Responsive web application for personal tracking and management. Built with React and Firebase.",
stack: ["HTML","CSS","JavaScript"],
github: "#",
live: "#"
},

{
title: "Business Landing Page",
desc: "Modern commercial website for a business startup.",
stack: ["HTML","CSS","JavaScript"],
github: "#",
live: "#"
},

{
title: "Dashboard",
desc: "Data visualization dashboard built with JavaScript and Chart.js for interactive charts and graphs.",
stack: ["JavaScript","Chart.js","CSS"],
github: "#",
live: "#"
}

];


const title = document.querySelector(".project-title");
const desc = document.querySelector(".project-desc");
const stack = document.querySelector(".project-stack");

const github = document.querySelector(".project-links a:first-child");
const live = document.querySelector(".project-links a:last-child");

const cards = document.querySelectorAll(".side-project");
const showcase = document.getElementById("projects-showcase");

let current = 0;
let timer;


// ----------------------
// UPDATE PROJECT
// ----------------------

function updateProject(index){

current = index;

// active card
cards.forEach((card,i)=>{
card.classList.toggle("active",i===index);
});


// change background image
showcase.style.backgroundImage = `
linear-gradient(
90deg,
rgba(0,0,0,.88) 0%,
rgba(0,0,0,.55) 40%,
rgba(0,0,0,.15) 100%
),
url('${cards[index].dataset.bg}')
`;

showcase.style.backgroundSize = "cover";
showcase.style.backgroundPosition = "center";
showcase.style.backgroundRepeat = "no-repeat";


// fade text
title.style.opacity = 0;
desc.style.opacity = 0;
stack.style.opacity = 0;


setTimeout(()=>{

title.textContent = projects[index].title;

desc.textContent = projects[index].desc;

github.href = projects[index].github;
live.href = projects[index].live;


// stack tags
stack.innerHTML = "";

projects[index].stack.forEach(tag=>{

stack.innerHTML += `
<span>${tag}</span>
`;

});


title.style.opacity = 1;
desc.style.opacity = 1;
stack.style.opacity = 1;

},300);

}



// ----------------------
// CLICK EVENTS
// ----------------------

cards.forEach((card,i)=>{

card.addEventListener("click",()=>{

updateProject(i);

resetTimer();

});

});



// ----------------------
// AUTO SLIDER
// ----------------------

function resetTimer(){

clearInterval(timer);

timer = setInterval(()=>{

current++;

if(current >= projects.length){

current = 0;

}

updateProject(current);

},5000);

}



// ----------------------
// INITIAL
// ----------------------

updateProject(0);

resetTimer();

})();

      /* NAV ACTIVE LINK on scroll */
      const sections = document.querySelectorAll(
        'section[id], div[id="about"]',
      );
      const navLinks = document.querySelectorAll(".nav-links a");
      window.addEventListener("scroll", () => {
        let current = "";
        document.querySelectorAll("[id]").forEach((sec) => {
          if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
        });
        navLinks.forEach((a) => {
          a.classList.remove("active-link");
          if (a.getAttribute("href") === "#" + current)
            a.classList.add("active-link");
        });
      });

      /* ── CUSTOM MOUSE-TRACKING CURSOR ── */
      (function () {
        const ring = document.getElementById("mouse-ring");
        const dot = document.getElementById("mouse-dot");
        if (!ring || !dot) return;
        if (window.matchMedia("(max-width: 1023px)").matches) return;

        let mouseX = window.innerWidth / 2,
          mouseY = window.innerHeight / 2;
        let ringX = mouseX,
          ringY = mouseY;
        let dotX = mouseX,
          dotY = mouseY;

        window.addEventListener("mousemove", (e) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
        });

        function loop() {
          // Small dot tracks the real cursor closely (leader)
          dotX += (mouseX - dotX) * 0.35;
          dotY += (mouseY - dotY) * 0.35;
          dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;

          // Big ring trails behind the small dot (follower)
          ringX += (dotX - ringX) * 0.15;
          ringY += (dotY - ringY) * 0.15;
          ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

          requestAnimationFrame(loop);
        }
        loop();

        const hoverTargets = document.querySelectorAll(
          "a, button, .role-item, .proj-dot, .nav-hamburger",
        );
        hoverTargets.forEach((el) => {
          el.addEventListener("mouseenter", () => ring.classList.add("grow"));
          el.addEventListener("mouseleave", () =>
            ring.classList.remove("grow"),
          );
        });

        document.addEventListener("mouseleave", () => {
          ring.style.opacity = "0";
          dot.style.opacity = "0";
        });
        document.addEventListener("mouseenter", () => {
          ring.style.opacity = "1";
          dot.style.opacity = "1";
        });
      })();
    