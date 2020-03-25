const express = require ("express");

const app = express();

app.listen(3000, () => {
    console.log("server started");
});

app.get('/', (req, res) => {
    res.send ({
        id:1,
        email : 'calvayrac.franck@live.fr',
        firstname : "franck",
        lastname : "calvayrac",
        birthdate: new Date(1978, 1, 13),
    });
});