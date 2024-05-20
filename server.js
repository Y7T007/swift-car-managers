const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/historique', (req, res) => {
    res.sendFile(path.join(__dirname, './public/Res.html'));
});
app.get('/quick-reservation', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
app.get('/Login', (req, res) => {
    res.sendFile(path.join(__dirname, './public/loginmanager.html'));
});
app.get('/reservations', (req, res) => {
    res.sendFile(path.join(__dirname, './public/VoirReservations.html'));
});
app.get('/voitures', (req, res) => {
    res.sendFile(path.join(__dirname, './public/cars.html'));
});
app.get('/new-reservation', (req, res) => {
    res.sendFile(path.join(__dirname, './public/view-cars.html'));
});
app.get('/voiture', (req, res) => {
    res.sendFile(path.join(__dirname, './public/car.html'));
});
app.get('/clients', (req, res) => {
    res.sendFile(path.join(__dirname, './public/clients.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});