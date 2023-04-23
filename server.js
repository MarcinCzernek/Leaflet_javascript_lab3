const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/zad3_openAQ/LabOpenAQ.html');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});