// Constants
const projects = [
    {
        name: `18 Seconds`,
        year: 2021,
        description: ``,
        icon: `url("Assets/Images/Games/18Seconds/icon.png")`,
        screenshots: [
            `url("Assets/Images/Games/18Seconds/screenshot_00.png")`,
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
        description: ``,
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
        description: ``,
        icon: `url("Assets/Images/Games/NightKnight/icon.png")`,
        screenshots: [
            //...
        ]
    },
];

// Functions
function getVMin(){
    return (window.innerWidth <= window.innerHeight ? window.innerWidth : window.innerHeight) / 100;
}


// Event functions
function goToDiv(div){
    document.getElementById(div).scrollIntoView();
}

function scrollToRight(div){
    document.getElementById(div).scrollLeft += getVMin() * 31;
}

function scrollToLeft(div){
    document.getElementById(div).scrollLeft -= getVMin() * 31;
}

function getProjectYearQuantity(year){
    let quantity = 0;
    projects.forEach(project => {
        if(project.year == year) quantity++;
    });
    return quantity;
}

function openProject(projectIndex){
    
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