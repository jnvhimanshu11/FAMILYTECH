const express = require('express');
const app = express();
const PORT = process.envPORT || 3000;

// This acts like your "Menu" or Database. 
// You can add as many as you want here!
const inviteData = [
    { 
        id: "familyinvite.tech", 
        videoUrl: "https://res.cloudinary.com/dwdfpcck1/video/upload/v1771873038/WhatsApp_Video_2026-02-24_at_12.26.42_AM_ghto3p.mp4", 
        title: "Himanshu $ Rachna Wedding" 
    },
    { 
        id: "party-mike", 
        videoUrl: "https://www.w3schools.com/html/movie.mp4", 
        title: "Mike's Birthday Bash" 
    }
];

// This is the logic that reads the unique URL
app.get('/v/:id', (req, res) => {
    const uniqueId = req.params.id;
    const invite = inviteData.find(item => item.id === uniqueId);

    if (invite) {
        // This is what the user sees on their phone after scanning
        res.send(`
            <html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body { background: #1a1a1a; color: white; text-align: center; font-family: Arial; padding: 20px; }
                        video { width: 100%; border-radius: 15px; box-shadow: 0px 0px 20px rgba(255,255,255,0.2); }
                        h1 { color: #f1c40f; margin-top: 20px; }
                    </style>
                </head>
                <body>
                    <h1>${invite.title}</h1>
                    <video controls autoplay muted>
                        <source src="${invite.videoUrl}" type="video/mp4">
                    </video>
                    <p>Tap the screen to play audio</p>
                </body>
            </html>
        `);
    } else {
        res.status(404).send("<h1>Invitation Not Found</h1>");
    }
});

app.listen(PORT, () => {
    console.log(Your server is alive! Go to: http://localhost:${PORT}/v/wedding-001);
});
