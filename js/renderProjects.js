document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "Primer Proyecto con JavaScript, HTML5 y CSS3",
            description: "Una tabla de pacientes que mide el índice de masa corporal. Esta Aplicación se desarrollo con HTML5, CSS3 y JavaScript.",
            githubLink: "https://github.com/LumSeg/Proyecto-BuenaVita",
            image: "./assets/imgP1.png",
            technologies: ["devicon-html5-plain", "devicon-javascript-plain", "devicon-css3-plain"]
        },
        {
            title: "Aplicación Full-Stack con Node.js",
            description: "Esta aplicación permite crear por medio de un formulario la publicación de una película. Las tecnologías que se utilizaron para esta App son: HTML5, Bootstrap, JavaScript, Node.js, MongoDb y Express",
            githubLink: "https://github.com/LumSeg/ProyectoN2-Henry",
            image: "./assets/PM2.png",
            technologies: ["devicon-nodejs-plain", "devicon-mongodb-plain", "devicon-javascript-plain", "devicon-html5-plain", "devicon-express-original", "devicon-bootstrap-plain"]
        },
        {
            title: "API{REST} Con Typescript",
            description: "API creada para gestionar una base de datos de usuarios y citas. Para desarrollar esta API se utilizó TypeScript, Node.js, PostgreSQL y Express",
            githubLink: "https://github.com/LumSeg/ApiRest/tree/main",
            image: "./assets/ApiRest.png",
            technologies: ["devicon-typescript-plain", "devicon-postgresql-plain", "devicon-express-original", "devicon-nodejs-plain"]
        }
    ];

    const projectsListContainer = document.getElementById("projects-list");

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "col-md-4 mb-4";

        projectDiv.innerHTML = `
            <div class="project-item d-flex flex-column h-100 dark-bg">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-content p-4">
                    <h4>${project.title}</h4>
                    <p>${project.description}</p>
                    <div class="project-tech-icons mb-3">
                        ${project.technologies.map(tech => `<i class="devicon ${tech}"></i>`).join('')}
                    </div>
                    <a href="${project.githubLink}" target="_blank" class="btn btn-custom">Ver Código en GitHub</a>
                </div>
            </div>
        `;

        projectsListContainer.appendChild(projectDiv);
    });
});
