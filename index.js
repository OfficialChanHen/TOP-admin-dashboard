projects = [...document.querySelectorAll(".project")];
eyes = [...document.querySelectorAll(".eye")];

const viewProj = (project) => {
    let page = '';

    switch(project.id) {
        case 'landing-page':
            page = 'https://officialchanhen.github.io/odin-project-landing-page/';
            break;
        case 'calculator-page':
            page = 'https://officialchanhen.github.io/calculator/';
            break;
        case 'signup-page':
            page = 'https://officialchanhen.github.io/TOP-signup-page/';
            break;
        case 'admin-page':
            page = 'https://officialchanhen.github.io/TOP-admin-dashboard/';
            break;
        default:
            alert("Page is still work in progress");
    }

    window.location.href = page;
}

eyes.forEach((project) => {
    project.addEventListener('click', function(event) {
        event.stopPropagation();
        viewProj(project);
    });
});

const projRedirect = (project) => {
    let page = '';

    switch(project.id) {
        case 'landing-proj':
            page = 'https://github.com/OfficialChanHen/odin-project-landing-page';
            break;
        case 'calculator-proj':
            page = 'https://github.com/OfficialChanHen/calculator';
            break;
        case 'signup-proj':
            page = 'https://github.com/OfficialChanHen/TOP-signup-page';
            break;
        case 'admin-proj':
            page = 'https://github.com/OfficialChanHen/TOP-admin-dashboard';
            break;
        default:
            alert("Page is still work in progress");
    }

    window.location.href = page;
}

projects.forEach((project) => {
    project.addEventListener('click', function() {
        projRedirect(project)
    });
});





