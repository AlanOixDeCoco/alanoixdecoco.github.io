// Constants
const projects = [
    {
        name: `18 Seconds`,
        year: 2021,
        description: ``,
        icon: `url("Assets/Images/Games/18Seconds/icon.png")`,
        screenshots: [
            "Assets/Images/Games/18Seconds/screenshot_00.png",
            "Assets/Images/Games/18Seconds/screenshot_01.png",
            "Assets/Images/Games/18Seconds/screenshot_02.png",
            "Assets/Images/Games/18Seconds/screenshot_03.png",
            "Assets/Images/Games/18Seconds/screenshot_04.png",
        ],
        link: "https://itch.io/embed/963942?border_width=0&amp;bg_color=ffffff&amp;link_color=e53b44&amp;border_color=ffffff"
    },
    {
        name: `Escape It!`,
        year: 2021,
        description: ``,
        icon: `url("Assets/Images/Games/EscapeIt/icon.png")`,
        screenshots: [
            "Assets/Images/Games/EscapeIt/screenshot_00.png",
            "Assets/Images/Games/EscapeIt/screenshot_01.png",
            "Assets/Images/Games/EscapeIt/screenshot_02.png",
            "Assets/Images/Games/EscapeIt/screenshot_03.png",
        ],
        link: "https://itch.io/embed/1070313?border_width=0&amp;bg_color=ffffff&amp;link_color=e53b44&amp;border_color=ffffff"
    },
    {
        name: `Workbook`,
        year: 2022,
        description: ``,
        icon: `url("Assets/Images/Games/Workbook/icon.png")`,
        screenshots: [
            "Assets/Images/Games/Workbook/screenshot_00.png",
            "Assets/Images/Games/Workbook/screenshot_01.png",
            "Assets/Images/Games/Workbook/screenshot_02.png",
        ],
        link: "https://itch.io/embed/1364973?border_width=0&amp;bg_color=ffffff&amp;link_color=e53b44&amp;border_color=ffffff"
    },
    {
        name: `The Glorious Pasteur`,
        year: 2022,
        description: ``,
        icon: `url("Assets/Images/Games/TheGloriousPasteur/icon.png")`,
        screenshots: [
            "Assets/Images/Games/TheGloriousPasteur/screenshot_00.png",
            "Assets/Images/Games/TheGloriousPasteur/screenshot_01.png",
            "Assets/Images/Games/TheGloriousPasteur/screenshot_02.png",
            "Assets/Images/Games/TheGloriousPasteur/screenshot_03.png",
            "Assets/Images/Games/TheGloriousPasteur/screenshot_04.png",
            "Assets/Images/Games/TheGloriousPasteur/screenshot_05.png",
        ],
        link: "https://itch.io/embed/1854622?border_width=0&amp;bg_color=ffffff&amp;link_color=e53b44&amp;border_color=ffffff"
    },
    {
        name: `Windshield Warfare`,
        year: 2022,
        description: ``,
        icon: `url("Assets/Images/Games/WindshieldWarfare/icon.png")`,
        screenshots: [
            "Assets/Images/Games/WindshieldWarfare/screenshot_00.png",
            "Assets/Images/Games/WindshieldWarfare/screenshot_01.png",
            "Assets/Images/Games/WindshieldWarfare/screenshot_02.png",
        ],
        link: "https://itch.io/embed/1531777?border_width=0&amp;bg_color=ffffff&amp;link_color=e53b44&amp;border_color=ffffff"
    },
    {
        name: `RPG Battle`,
        year: 2022,
        description: ``,
        icon: `url("Assets/Images/Games/RpgBattle/icon.png")`,
        screenshots: [
            "Assets/Images/Games/RpgBattle/screenshot_00.png",
            "Assets/Images/Games/RpgBattle/screenshot_01.png",
            "Assets/Images/Games/RpgBattle/screenshot_02.png",
            "Assets/Images/Games/RpgBattle/screenshot_03.png",
        ],
        link: "https://itch.io/embed/1959323?border_width=0&amp;bg_color=ffffff&amp;link_color=e53b44&amp;border_color=ffffff"
    },
    {
        name: `Sidescroller`,
        year: 2023,
        description: ``,
        icon: `url("Assets/Images/Games/Sidescroller/icon.png")`,
        screenshots: [
            "Assets/Images/Games/Sidescroller/screenshot_00.png",
            "Assets/Images/Games/Sidescroller/screenshot_01.png",
            "Assets/Images/Games/Sidescroller/screenshot_02.png",
        ],
        link: "https://itch.io/embed/2232796?border_width=0&amp;bg_color=ffffff&amp;link_color=e53b44&amp;border_color=ffffff"
    },
    {
        name: `(Un)breakable`,
        year: 2023,
        description: 
        `
        
        `,
        icon: `url("Assets/Images/Games/UnBreakable/icon.png")`,
        screenshots: [
            "Assets/Images/Games/UnBreakable/screenshot_00.png",
            "Assets/Images/Games/UnBreakable/screenshot_01.png",
            "Assets/Images/Games/UnBreakable/screenshot_02.png",
            "Assets/Images/Games/UnBreakable/screenshot_03.png",
        ],
        link: "https://itch.io/embed/1928219?border_width=0&amp;bg_color=ffffff&amp;link_color=e53b44&amp;border_color=ffffff"
    },
    {
        name: `BOB`,
        year: 2023,
        description: 
        `
        BOB is a 2D top-down Zelda-Like, with shooting ability.
        <br>
        To complete the level you must defeat the enemies and unlock new items, while keeping an eye on your health.
        <br><br>
        This game was made during my first year at the ETPA school, it was programmed in Javascript using the Phaser 3 game framework.
        `,
        icon: `url("Assets/Images/Games/BOB/icon.png")`,
        screenshots: [
            "Assets/Images/Games/BOB/screenshot_00.png",
            "Assets/Images/Games/BOB/screenshot_01.png",
            "Assets/Images/Games/BOB/screenshot_02.png",
            "Assets/Images/Games/BOB/screenshot_03.png",
            "Assets/Images/Games/BOB/screenshot_04.png",
            "Assets/Images/Games/BOB/screenshot_05.png",
        ],
        link: "https://itch.io/embed/1981417?border_width=0&amp;bg_color=ffffff&amp;link_color=e53b44&amp;border_color=ffffff"
    },
    {
        name: `Hero Defense`,
        year: 2023,
        description: 
        `
        Hero Defense is a 3D (mini) dungeon crawler mixed with a 2D tower defense.
        <br>
        Your goal is to keep your computer alive while viruses are getting their way to its folders.
        Defeat enemies and clear floors in the 3D world to get rewards and place towers in the 2D space!
        <br><br>
        The game has been created in 35 hours during the ETPA Game Jam, a private gamejam hosted by the ETPA school.
        <br>
        I was responsible for the project management and programmation/integration in Unity.
        `,
        icon: `url("Assets/Images/Games/HeroDefense/icon.png")`,
        screenshots: [
            "Assets/Images/Games/HeroDefense/screenshot_00.png",
            "Assets/Images/Games/HeroDefense/screenshot_01.png",
            "Assets/Images/Games/HeroDefense/screenshot_02.png",
            "Assets/Images/Games/HeroDefense/screenshot_03.png",
        ],
        link: "https://itch.io/embed/2068856?border_width=0&amp;bg_color=ffffff&amp;link_color=e53b44&amp;border_color=ffffff"
    },
    {
        name: `Night Knight`,
        year: 2023,
        description: `
        Night Knight is a 2D (endless) dungeon crawler platformer taking place in an ancient dungeon haunted by evil souls.
        <br>
        The player must free as many souls as possible before the sun comes up, marking the end of the run. Walk through rooms full of traps and defeat the evil-driven enemies but keep an eye on the sun slowly rising up, because if it comes up, it’s too late, Try again!
        <br><br>
        This game was my last project in my first year at the ETPA school, it was programmed in Javascript using the Phaser 3 game framework and a homemade component system inspired by Unity.
        `,
        icon: `url("Assets/Images/Games/NightKnight/icon.png")`,
        screenshots: [
            "Assets/Images/Games/NightKnight/screenshot_00.png",
            "Assets/Images/Games/NightKnight/screenshot_01.png",
            "Assets/Images/Games/NightKnight/screenshot_02.png",
            "Assets/Images/Games/NightKnight/screenshot_03.png",
            "Assets/Images/Games/NightKnight/screenshot_04.png",
        ],
        link: "https://itch.io/embed/2232758?border_width=0&amp;bg_color=ffffff&amp;link_color=e53b44&amp;border_color=ffffff"
    },
    {
        name: `Survival Shooter`,
        year: 2023,
        description: `
        Try to survive as many waves as possible before the enemies destroy the objective, ... or you!
        <br><br>
        This game was made for a solo project in my programming class at ESMA.
        <br>
        I used Kay Lousberg's Prototype Bits assets pack for the 3D visuals.
        <br><br>
        Made with love using Unity.
        `,
        icon: `url("Assets/Images/Games/SurvivalShooter/icon.png")`,
        screenshots: [
            "Assets/Images/Games/SurvivalShooter/screenshot_00.png",
            "Assets/Images/Games/SurvivalShooter/screenshot_01.png",
            "Assets/Images/Games/SurvivalShooter/screenshot_02.png",
        ],
        link: "https://itch.io/embed/2396347?border_width=0&amp;bg_color=ffffff&amp;link_color=e53b44&amp;border_color=ffffff"
    }
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
            <div id="project_title">${projects[projectIndex].name.toUpperCase()}</div>
            <div id="project_preview_slider">
                <div id="project_preview_list">           
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
                <iframe frameborder="0" src="${projects[projectIndex].link}" width="100%" height="165"></iframe>
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