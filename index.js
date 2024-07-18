const project = [
    {
        id: 1,
        heading: 'Book shell',
        img: './images/bookshel.png',
        github: 'https://github.com/gayatri-khodke/Book_Project.git',
        netlify: 'https://benevolent-tartufo-4712c4.netlify.app/'
    },
    {
        id: 2,
        heading: 'Snake ladder game',
        img: './images/snake-ladder.png',
        github: 'https://github.com/gayatri-khodke/snake_ladder_game.git',
        netlify: 'https://monumental-blini-085120.netlify.app/'
    },
    {
        id: 3,
        heading: 'Quiz app',
        img: './images/quiz-app.png',
        github: 'https://github.com/gayatri-khodke/quizapp.git',
        netlify: 'https://gk-quizapp-ja.netlify.app/'
    },
    {
        id: 4,
        heading: 'Movie app',
        img: './images/movie-app.png',
        github: 'https://github.com/gayatri-khodke/movieApp/tree/master/shows',
        netlify: 'https://66804a49c64fca31e1727a81--statuesque-nasturtium-20970d.netlify.app/'
    },
    {
        id: 5,
        heading: 'Todo app',
        img: './images/todo.png',
        github: 'https://github.com/gayatri-khodke/projects-HTML-CSS-JS/tree/master/todolist',
        netlify: 'https://melodic-selkie-331430.netlify.app/'
    },
    {
        id: 6,
        heading: 'Tic tay to',
        img: './images/tic-tay-to.png',
        github: 'https://github.com/gayatri-khodke/tik-tac-toy.git',
        netlify: 'https://gk-tik-tack-toy.netlify.app/'
    },
    {
        id: 7,
        heading: 'Take notes',
        img: './images/take_notes.png',
        github: 'https://github.com/gayatri-khodke/tik-tac-toy.git',
        netlify: 'https://gk-tik-tack-toy.netlify.app/'
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const wrap = document.querySelector('.wrap');

    function displayProject(obj) {
        wrap.innerHTML += `
            <div class="sub-wrap">
                <div class="middle">
                    <img src="${obj.img}" alt="${obj.heading}">
                    <h2>${obj.heading}</h2>
                    <div class="icondiv">
                        <a href="${obj.github}" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="${obj.netlify}" target="_blank"><img id="netlify-link" src="./images/netlify-icon.png" alt="Netlify Link"></a>
                    </div>
                </div>
            </div>`;
    }

    // Assuming 'project' is an array containing your project objects
    project.forEach(e => {
        console.log("Displaying project:", e.heading);
        displayProject(e);
    });

    const myskills = [
        { skill: "HTML", percent: 90, icon: "./images/html-icon.png" },
        { skill: "CSS", percent: 85, icon: "./images/css-icon.jpeg" },
        { skill: "JavaScript", percent: 80, icon: "./images/js-icon.png" },
        { skill: "Python", percent: 75, icon: "./images/python-icon.jpg" },
        { skill: "React", percent: 70, icon: "./images/react-icon.png" }
    ];
    
    const container1 = document.querySelector('.skillicon');
    
    function displayskill(item) {
        container1.innerHTML += `
            <div class="skill">
                <div class="skill-info">
                <div class='iconimg'>
                    <img class="l-icon" src="${item.icon}" alt="${item.skill} Icon">
                    </div>
                    <h3 class='percent'>${item.skill}  <span>${item.percent}%</span></h3>
                </div>
                <div class="skill-bar">
                    <div class="skill-level" style="width:${item.percent}%;"></div>
                </div>
            </div>`;
    }
    
    myskills.forEach(e => {
        displayskill(e);
    });
});

let lastClicked = null;

function toggleInfo(sectionClass, event) {
    let section = document.querySelector('.' + sectionClass);
    
    if (lastClicked === section) {
        section.style.display = (section.style.display === 'block') ? 'none' : 'block';
    } else {
        let sections = document.querySelectorAll('.show-div');
        sections.forEach(s => s.style.display = 'none');
        section.style.display = 'block';
    }
    
    lastClicked = section;
}


function downloadResume() {
    document.getElementById('resumeLink').click();
}


document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-items').classList.toggle('active');
});

