// Load details for Praklap event
document.getElementById('loadPraklapDetails').addEventListener('click', function() {
    let praklapDetails = `
        <h3>Praklap - Poster Presentations</h3>
        <p>This event is all about showcasing your innovative ideas through posters. Participants will be judged on creativity, design, and clarity of the message.</p>
        <p>Submission Guidelines: Posters must be submitted in a PDF format by the specified date. The poster should clearly communicate the idea or research being presented.</p>
    `;
    document.getElementById('praklapDetails').innerHTML = praklapDetails;
});

// Load details for Abhivyakti event
document.getElementById('loadAbhivyaktiDetails').addEventListener('click', function() {
    let abhivyaktiDetails = `
        <h3>Abhivyakti - Paper Presentations</h3>
        <p>Present your research paper and gain recognition from experts in the field. A great opportunity for students to engage in intellectual discussions.</p>
        <p>Paper Submission Guidelines: Papers must be original and submitted by the deadline in the specified format (PDF/Word). Presentations should not exceed 10 minutes.</p>
    `;
    document.getElementById('abhivyaktiDetails').innerHTML = abhivyaktiDetails;
});

// Load details for Battle Blitz event
document.getElementById('loadBattleBlitzDetails').addEventListener('click', function() {
    let battleBlitzDetails = `
        <h3>Battle Blitz - Gaming</h3>
        <p>This event is for gamers to compete in a series of online challenges. The competition is intense and will test your skills in various games.</p>
        <p>Rules: Participants must register in teams of 3. The games will be announced 24 hours before the event.</p>
    `;
    document.getElementById('battleBlitzDetails').innerHTML = battleBlitzDetails;
});
