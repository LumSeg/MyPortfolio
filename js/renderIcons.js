document.addEventListener("DOMContentLoaded", function() {
    const technologies = [
        { name: "HTML5", iconClass: "devicon-html5-plain" },
        { name: "CSS3", iconClass: "devicon-css3-plain" },
        { name: "JavaScript", iconClass: "devicon-javascript-plain" },
        { name: "Bootstrap", iconClass: "devicon-bootstrap-plain" },
        { name: "Tailwind", iconClass: "devicon-tailwindcss-plain" },
        { name: "React", iconClass: "devicon-react-original" },
        { name: "Next.js", iconClass: "devicon-nextjs-original" },
        { name: "Node.js", iconClass: "devicon-nodejs-plain" },
        { name: "Express", iconClass: "devicon-express-original" },
        { name: "TypeScript", iconClass: "devicon-typescript-plain" },
        { name: "MongoDB", iconClass: "devicon-mongodb-plain" },
        { name: "PostgresDB", iconClass: "devicon-postgresql-plain" }
    ];

    const techIconsContainer = document.getElementById("tech-icons");

    technologies.forEach(tech => {
        const iconDiv = document.createElement("div");
        iconDiv.className = "col-4 text-center mb-4";

        iconDiv.innerHTML = `
            <i class="${tech.iconClass} dark-bg" style="font-size: 2.5rem;"></i>
            <p>${tech.name}</p>
        `;

        techIconsContainer.appendChild(iconDiv);
    });
});