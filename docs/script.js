document.addEventListener("DOMContentLoaded", function() {
    const groups = [
        { name: "グループ1", url: "https://example.com/group1" },
        { name: "グループ2", url: "https://example.com/group2" },
        { name: "グループ3", url: "https://example.com/group3" },
        { name: "グループ4", url: "https://example.com/group4" },
        { name: "グループ5", url: "https://example.com/group5" },
        { name: "グループ6", url: "https://example.com/group6" },
        { name: "グループ7", url: "https://example.com/group7" },
        { name: "グループ8", url: "https://example.com/group8" }
    ];

    const randomIndex = Math.floor(Math.random() * groups.length);
    const selectedGroup = groups[randomIndex];

    // document.getElementById("group").textContent = `あなたは ${selectedGroup.name} に割り当てられました。`;
    document.getElementById("url").innerHTML = `<a href="${selectedGroup.url}" target="_blank">${selectedGroup.url}</a>`;
});
