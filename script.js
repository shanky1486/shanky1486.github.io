document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded Successfully");

    const patents = [
        "Encryption-based Data Access Management",
        "Automated Speed Control System",
        "Person-less Examination using AI",
        "Automobile Headlight Regulation Device",
        "Reading & Writing Device for Sensory Impaired Person"
    ];
    const researchPapers = [
        "Energy-Resource Allocation in Cloud Computing - Sensor MDPI",
        "Technological Innovation & Energy Adoption - IEEE Transactions",
        "Investigation of SLA Management in Cloud Computing - IEEE Xplore"
    ];
    const teachingExperience = [
        "Associate Professor at Chandigarh Group of Colleges, Jhanjeri (Mar 2024 - Present)",
        "Associate Professor at Chitkara University, Punjab (Sep 2023 - Mar 2024)"
    ];
    const industryExperience = [
        "Software Engineer at HCL Infosystems, Noida (Jul 2008 - Nov 2011)"
    ];
    const certifications = [
        "Microsoft Certified Professional",
        "AWS Cloud Certification",
        "CCNA - CISCO"
    ];

    function populateList(id, data) {
        const list = document.getElementById(id);
        data.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            list.appendChild(li);
        });
    }

    populateList("patents-list", patents);
    populateList("papers-list", researchPapers);
    populateList("teaching-experience", teachingExperience);
    populateList("industry-experience", industryExperience);
    populateList("certifications", certifications);
});
