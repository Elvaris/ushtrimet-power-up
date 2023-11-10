const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();
const port = 3000;
const userRouters = require('./routers/users');

app.use(bodyParser.json());

app.get('/sporteli/:id', (req, res) => {
    let users = [
        {
            id: '650c726ef7e50871bcfba0c3',
            index: 0,
            guid: 'be670100-24e5-4a7f-8906-3e660ea29841',
            isActive: false,
            balance: '$1,666.05',
            picture: 'http://placehold.it/32x32',
            age: 25,
            eyeColor: 'brown',
            name: 'Lila Castro',
            gender: 'female',
            company: 'DOGSPA',
            email: 'lilacastro@dogspa.com',
            phone: '+1 (830) 590-3925',
            address: '965 Schenck Street, Hayes, California, 6327',
            about: 'Tempor do Lorem pariatur dolor ad do irure officia. Nisi commodo officia veniam magna dolor et minim occaecat culpa culpa irure esse. Non ullamco ex cillum occaecat non occaecat et nisi Lorem consectetur.\r\n',
            registered: '2016-06-07T12:47:19 -02:00',
            latitude: 76.219101,
            longitude: 8.365409,
            tags: [
                'laborum',
                'veniam',
                'pariatur',
                'do',
                'aute',
                'elit',
                'aliquip',
            ],
            friends: [
                {
                    id: 0,
                    name: 'Carey Mcgowan',
                },
                {
                    id: 1,
                    name: 'Dianne Dunn',
                },
                {
                    id: 2,
                    name: 'Ada Valencia',
                },
            ],
        },
        {
            id: '650c726e8b34e81136f58c13',
            index: 1,
            guid: '67f26eb4-4a3f-413d-983b-ec8204531d54',
            isActive: false,
            balance: '$1,262.87',
            picture: 'http://placehold.it/32x32',
            age: 37,
            eyeColor: 'green',
            name: 'Keith Nelson',
            gender: 'male',
            company: 'UNIA',
            email: 'keithnelson@unia.com',
            phone: '+1 (823) 435-2346',
            address: '744 Gaylord Drive, Kiskimere, Hawaii, 536',
            about: 'In nisi anim ipsum non et pariatur duis. Ullamco laboris deserunt anim enim culpa laboris cillum mollit dolor ea. Laboris nostrud sunt sit dolore labore est voluptate velit labore. Qui magna aliqua nulla sit amet anim minim magna minim non. Ut laboris est ut sit adipisicing dolore sint nisi ullamco. Amet culpa excepteur culpa nostrud incididunt tempor. Commodo in commodo reprehenderit occaecat consectetur.\r\n',
            registered: '2018-08-08T03:22:15 -02:00',
            latitude: 9.748668,
            longitude: -70.614122,
            tags: [
                'cillum',
                'veniam',
                'incididunt',
                'consectetur',
                'non',
                'excepteur',
                'dolor',
            ],
            friends: [
                {
                    id: 0,
                    name: 'Thelma Campos',
                },
                {
                    id: 1,
                    name: 'Rosetta Melendez',
                },
                {
                    id: 2,
                    name: 'Alexandria Wyatt',
                },
            ],
        },
    ];
    res.send(users);
});

app.use('/api/users', userRouters);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
