export function getUUID(prefix) {
    return (prefix + '_' + (new Date().getTime()/1000));
}

export function getInitialProjects() {
    return JSON.parse(localStorage.getItem('palettes')) || [
        {
            id: 'palette_1',
            projectTitle: "Sample Project 1", 
            colors: ["#BB8FCE", "#2980B9", "#82E0AA", "#A9DFBF", "#2E4053"]
        },
        {
            id: 'palette_2',
            projectTitle: "Sample Project 2", 
            colors: ["#F39C12", "#D68910", "#D35400"]
        }
    ]
}

export function sanitizeProjectTitle(projectTitle) {
    return projectTitle.trim().toUpperCase()
}