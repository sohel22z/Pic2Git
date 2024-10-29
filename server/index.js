const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json({limit: '10mb'}));

app.post('/upload', async (req, res) => {

    const {repo, token, filename, image} = req.body;

    const url = `https://api.github.com/repos/${repo}/contents/${filename}`;
    const message = `Add ${filename}`

    try {

        const response = await axios.put(url, {
            message: message,
            content: image
        }, {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': `application/vnd.github.v3+json`
            }
        });

        if(response.status === 201) {
            res.json({message: `File ${filename} uploaded successfully!`});
        } else {
            res.json({message: `Error uploading file`, response: response.data});
        }
    } catch (error) {
        res.status(500).json(
            {
                message: `Error uploading to GitHub`,
                error: error.response.data
            }
        )
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});