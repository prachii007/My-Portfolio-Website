let currentYear = new Date().getFullYear();

// current year in the footer
document.getElementById('currentYear').innerHTML = currentYear;

// current year in name of the resume pdf downloaded
document.getElementById('downloadResume').addEventListener('click', function () {
    this.href = "static/Prachi_Indurkar_Resume_" + currentYear + ".pdf";
    this.download = "Prachi-Indurkar-Resume-" + currentYear + ".pdf";
})
