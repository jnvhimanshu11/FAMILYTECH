const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// This acts like your "Menu" or Database. 
// You can add as many vedios as you want here!

const inviteData = [
    { 
        id: "invitefamily.tech", 
        videoUrl: "https://res.cloudinary.com/dwdfpcck1/video/upload/v1771873038/WhatsApp_Video_2026-02-24_at_12.26.42_AM_ghto3p.mp4", 
        title: "Let's Invite Family" 
    },
    { 
        id: "himanshu", 
        videoUrl: "https://res.cloudinary.com/dwdfpcck1/video/upload/v1771881234/WhatsApp_Video_2026-02-24_at_2.26.08_AM_1_foz3da.mp4", 
        title: "Chopta Tour Vedio" 
    }
    ,
    { 
        id: "prachi", 
        videoUrl: "https://res.cloudinary.com/dwdfpcck1/video/upload/v1771913995/WhatsApp_Video_2026-02-24_at_11.46.02_AM_qy5bl4.mp4", 
        title: "Prachi & Gaurav" 
    }
];

// This is the logic that reads the unique URL
app.get('/v/:id', (req, res) => {
    const uniqueId = req.params.id;
    const invite = inviteData.find(item => item.id === uniqueId);

    if (invite) {


        // This is what the user sees on their phone after scanning


        res.send(`
            
          
            
            <!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600&display=swap" rel="stylesheet">
    <style>
        * {
            box-sizing: border-box;
        }

        body { 
            /* Dynamic Background: Deep radial gradient for depth */
            background: radial-gradient(circle at top, #2c3e50 0%, #000000 100%); 
            color: white; 
            text-align: center; 
            /* Kristen ITC primary with Fredoka fallback for mobile/web compatibility */
            font-family: "Kristen ITC", "Fredoka", "Comic Sans MS", sans-serif; 
            margin: 0;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        h1 { 
            /* Gradient Font Style */
            background: linear-gradient(180deg, #f1c40f 0%, #e67e22 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 2.5rem;
            margin: 20px 0;
            filter: drop-shadow(0px 4px 8px rgba(0,0,0,0.5));
            letter-spacing: 1px;
        }

        /* Polished Video Card */
        .video-card {
            width: 100%;
            max-width: 400px;
            background: rgba(255, 255, 255, 0.05); /* Slight glass look */
            padding: 12px;
            border-radius: 25px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0px 20px 40px rgba(0,0,0,0.6);
            backdrop-filter: blur(10px);
            margin-bottom: 20px;
        }

        video { 
            width: 100%; 
            border-radius: 18px; 
            display: block;
        }

        p {
            font-size: 0.9rem;
            color: #bdc3c7;
            margin-top: 10px;
        
        
        }
    </style>
</head>
<body>

    <h1>${invite.title}</h1>

    <div class="video-card">
        <video controls autoplay muted playsinline>
            <source src="${invite.videoUrl}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>



  
    
</body>
</html>



        `);
    } else {
        res.status(404).send(`
    <!DOCTYPE html>
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600&display=swap" rel="stylesheet">
        <style>
            body {
                margin: 0;
                padding: 0;
                /* Matches your main theme's dynamic background */
                background: radial-gradient(circle at top, #2c3e50 0%, #000000 100%);
                color: white;
                font-family: "Kristen ITC", "Fredoka", sans-serif;
                
                /* Centering Logic */
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                text-align: center;
            }

            .error-container {
                padding: 20px;
                border-radius: 25px;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                box-shadow: 0px 20px 40px rgba(0,0,0,0.5);
                max-width: 80%;
            }

            h1 {
                /* Matching the gold gradient from your invite title */
                background: linear-gradient(180deg, #f1c40f 0%, #e67e22 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-size: 2.2rem;
                margin: 0;
                filter: drop-shadow(0px 4px 8px rgba(0,0,0,0.5));
            }

            p {
                color: #bdc3c7;
                margin-top: 15px;
                font-size: 1rem;
            }
        </style>
    </head>
    <body>
        <div class="error-container">
            <h1>Sorry! You Are Not Invited</h1>
            <p>This exclusive content is for invited guests only.</p>
             

    
            <span class="emoji">😔</span>

        
        </div>
    </body>
    </html>
`);
    }
});

app.listen(PORT, () => {
    console.log(`Your server is alive! Go to: http://localhost:${PORT}/v/himanshu`);
});

