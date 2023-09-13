// Constants
const projects = [
    {
        name: `18 Seconds`,
        year: 2021,
        description: ``,
        icon: `url("Assets/Images/Games/18Seconds/icon.png")`,
        screenshots: [
            "Assets/Images/Games/18Seconds/screenshot_00.png",
            //...
        ]
        //...
    },
    {
        name: `Escape It!`,
        year: 2021,
        description: ``,
        icon: `url("Assets/Images/Games/EscapeIt/icon.png")`,
        screenshots: [
            //...
        ]
    },
    {
        name: `Workbook`,
        year: 2022,
        description: ``,
        icon: `url("Assets/Images/Games/Workbook/icon.png")`,
        screenshots: [
            //...
        ]
    },
    {
        name: `The Glorious Pasteur`,
        year: 2022,
        description: ``,
        icon: `url("Assets/Images/Games/TheGloriousPasteur/icon.png")`,
        screenshots: [
            //...
        ]
    },
    {
        name: `Windshield Warfare`,
        year: 2022,
        description: ``,
        icon: `url("Assets/Images/Games/WindshieldWarfare/icon.png")`,
        screenshots: [
            //...
        ]
    },
    {
        name: `RPG Battle`,
        year: 2022,
        description: ``,
        icon: `url("Assets/Images/Games/RpgBattle/icon.png")`,
        screenshots: [
            //...
        ]
    },
    {
        name: `Sidescroller`,
        year: 2023,
        description: ``,
        icon: `url("Assets/Images/Games/Sidescroller/icon.png")`,
        screenshots: [
            //...
        ]
    },
    {
        name: `(Un)breakable`,
        year: 2023,
        description: ``,
        icon: `url("Assets/Images/Games/UnBreakable/icon.png")`,
        screenshots: [
            //...
        ]
    },
    {
        name: `BOB`,
        year: 2023,
        description: `Ce projet a été réalisé dans le cadre des cours de Level Design, Direction Artistique, Infographie 2D et Programmation  à l’ETPA de Rennes, du 8 mars au 10 avril 2023.
        Le sujet portait sur la création d’un Zelda Like, un jeu d’action-aventure en 2D, vu de dessus. Ce document expliquera en détail les recherches et différentes étapes de création pour aboutir à un résultat, ainsi que les différentes adaptations et remises en question face aux contraintes identifiées au cours du développement.`,
        icon: `url("Assets/Images/Games/BOB/icon.png")`,
        screenshots: [
            //...
        ]
    },
    {
        name: `Hero Defense`,
        year: 2023,
        description: ``,
        icon: `url("Assets/Images/Games/HeroDefense/icon.png")`,
        screenshots: [
            //...
        ]
    },
    {
        name: `Night Knight`,
        year: 2023,
        description: `
        Night Knight est un jeu de plateforme et de donjon en 2D (sans fin) se déroulant dans un donjon hanté par des âmes maléfiques. Le joueur doit libérer autant d'âmes que possible avant que le soleil ne se lève, marquant la fin de la partie.
        Parcourez des pièces pleines de pièges et battez les ennemis, mais gardez un œil sur le temps qui passe lentement, car si le temps est écoulé, il est trop tard, réessayez !`,
        icon: `url("Assets/Images/Games/NightKnight/icon.png")`,
        screenshots: [
            "Assets/Images/Games/NightKnight/screenshot_00.png",
            "Assets/Images/Games/NightKnight/screenshot_01.png",
            "Assets/Images/Games/NightKnight/screenshot_02.png",
            "Assets/Images/Games/NightKnight/screenshot_03.png",
            "Assets/Images/Games/NightKnight/screenshot_04.png",
        ]
    },
];

var busy = false;

projects.reverse();

// Functions
function getVMin(){
    return (window.innerWidth <= window.innerHeight ? window.innerWidth : window.innerHeight) / 100;
}


// Event functions
function goToDiv(div){
    document.getElementById(div).scrollIntoView();
}

function scrollToRight(div, amount = 31){
    if(!busy) {
        document.getElementById(div).scrollLeft += getVMin() * amount;
        busy = true;
        setTimeout(() => {
            busy = false;
        }, 500);
    }
}

function scrollToLeft(div, amount = 31){
    if(!busy) {
        document.getElementById(div).scrollLeft -= getVMin() * amount;
        busy = true;
        setTimeout(() => {
            busy = false;
        }, 500);
    }
}

function getProjectYearQuantity(year){
    let quantity = 0;
    projects.forEach(project => {
        if(project.year == year) quantity++;
    });
    return quantity;
}

function openProject(projectIndex){
    document.getElementById("viewport_1").style.display = "flex";

    var screenshots = "";
    projects[projectIndex].screenshots.forEach((screenshot) => {
        screenshots += `<img class="project_preview_element" src="${screenshot}" ></img>`;
    });

    document.getElementById("viewport_1").innerHTML += 
    `
        <div id="viewport_background" onclick="closeProject()"></div>
        <div id="popup_project">
            <div id="project_title">${projects[projectIndex].name}</div>
            <div id="project_preview_slider">
                <div id="project_preview_list">
                    <!--<iframe id="project_embed" class="project_preview_element" allowfullscreen="true" frameborder="0" src="https://itch.io/embed-upload/3523884?color=000000"></iframe>-->                
                    ${screenshots}
                </div>
                <div id="project_preview_slider_navigation">
                    <div class="project_preview_slider_scroll_button" onclick="scrollToLeft('project_preview_list', 90)"><img src="Assets/Icons/arrow-left.png" alt="scroll left button"></div>
                    <div class="project_preview_slider_scroll_button" onclick="scrollToRight('project_preview_list', 90)"><img src="Assets/Icons/arrow-right.png" alt="scroll right button"></div>
                </div>
            </div>
            <div id="project_informations">
                <div id="project_description">${projects[projectIndex].description}</div>
                <div id="project_technologies"></div>
            </div>
        </div>
    `
}

function closeProject(){
    document.getElementById("popup_project").style.animation = ".25s close_project ease-out forwards";
    setTimeout(() => {
        document.getElementById("viewport_1").style.display = "none";
        document.getElementById("viewport_1").innerHTML = "";
    }, 300);
}

// Program
projects.forEach(project => {
    if(!document.getElementById(`projects_year_list_${project.year}`)){
        document.getElementById("projects_list").innerHTML += 
        `
            <div class="projects_year">
                <div class="projects_year_list" id="projects_year_list_${project.year}">
                    <!-- Filled with projects -->
                </div>
                <div class="projects_year_indicator">
                    <p>${project.year} (${getProjectYearQuantity(project.year)})</p>
                    <hr/>
                </div>
            </div>
        `;
    }
    document.getElementById(`projects_year_list_${project.year}`).innerHTML += `
            <div class="btn_project" id="btn_${project.name}" onclick="openProject(${projects.findIndex((element) => {return element.name == project.name;})})">
                <div class="btn_project_name">${project.name}</div>
            </div>
        `;
        document.getElementById(`btn_${project.name}`).style.backgroundImage = project.icon;
});

// Add event on left/right arrow keys press
document.addEventListener('keydown', (event) => {
    if(event.key == "ArrowLeft") { scrollToLeft("projects_list"); }
    if(event.key == "ArrowRight") { scrollToRight("projects_list"); }
}, false);

//const base_width = 1280;
//addEventListener("resize", (event) => {
//    var current_width = window.innerWidth;
//    document.getElementById("project_preview_slider").style.transform = `scale(${current_width/base_width})`;
//});