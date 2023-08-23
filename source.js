// Constants
const projects = [
    {
        name: `18 Seconds`,
        description: ``,
        screenshots: [
            `url("Assets/Images/Games/18seconds_00.png")`,
            //...
        ]
        //...
    },
    {
        name: `Escape It!`,
        description: ``,
        screenshots: [
            `url("Assets/Images/Games/18seconds_00.png")`,
            //...
        ]
    },
    {
        name: `Escape I!`,
        description: ``,
        screenshots: [
            `url("Assets/Images/Games/18seconds_00.png")`,
            //...
        ]
    },
    {
        name: `Escape t!`,
        description: ``,
        screenshots: [
            `url("Assets/Images/Games/18seconds_00.png")`,
            //...
        ]
    },
];

// Event functions
function goToDiv(div){
    document.getElementById(div).scrollIntoView();
}

// Functions
function createProjectButton(project){

}

// Program
projects.forEach(project => {
    document.getElementById("projects_list").innerHTML += `
        <div class="btn_project" id="btn_${project.name}">
            <div class="btn_project_name">${project.name}</div>
        </div>
    `;

    document.getElementById(`btn_${project.name}`).style.backgroundImage = project.screenshots[0];
});