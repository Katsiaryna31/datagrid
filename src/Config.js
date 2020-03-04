const data = [
    {
        "firstName": "Krissy",
        "surname": "Roazen",
        "ageCategory": ">60",
        "originCountry": "Northern Mariana Islands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 24
    },
    {
        "firstName": "Stanley",
        "surname": "Jayanti",
        "ageCategory": "18-35",
        "originCountry": "Latvia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 35
    },
    {
        "firstName": "Austin",
        "surname": "Borrego",
        "ageCategory": "18-35",
        "originCountry": "Dominican Republic",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 16
    },
    {
        "firstName": "Polina",
        "surname": "Doll",
        "ageCategory": "18-35",
        "originCountry": "Myanmar",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 7
    },
    {
        "firstName": "Kassaundra",
        "surname": "Wiedenmann",
        "ageCategory": "18-35",
        "originCountry": "Qatar",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 31
    },
    {
        "firstName": "Safiyyah",
        "surname": "Maher",
        "ageCategory": "35-60",
        "originCountry": "Denmark",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 39
    },
    {
        "firstName": "Terese",
        "surname": "Kaiser",
        "ageCategory": ">60",
        "originCountry": "Barbados",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 26
    },
    {
        "firstName": "Biswajit",
        "surname": "Maher",
        "ageCategory": "35-60",
        "originCountry": "Bulgaria",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 37
    },
    {
        "firstName": "Jonathan",
        "surname": "Barazi",
        "ageCategory": "18-35",
        "originCountry": "Saint Lucia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 8
    },
    {
        "firstName": "Sara",
        "surname": "Kim",
        "ageCategory": "<18",
        "originCountry": "Niue",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 45
    },
    {
        "firstName": "Karen",
        "surname": "Teel",
        "ageCategory": "35-60",
        "originCountry": "Brunei Darussalam",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 16
    },
    {
        "firstName": "Vincent",
        "surname": "Zinnow",
        "ageCategory": "<18",
        "originCountry": "Kuwait",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 13
    },
    {
        "firstName": "Marilynn",
        "surname": "Altar",
        "ageCategory": "18-35",
        "originCountry": "Seychelles",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 17
    },
    {
        "firstName": "Mirza",
        "surname": "Strong",
        "ageCategory": "18-35",
        "originCountry": "Turkey",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 2
    },
    {
        "firstName": "Miroslava",
        "surname": "Lindsey",
        "ageCategory": "18-35",
        "originCountry": "Ireland",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 10
    },
    {
        "firstName": "Sudershan",
        "surname": "Romero",
        "ageCategory": "35-60",
        "originCountry": "Suriname",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 36
    },
    {
        "firstName": "Tia",
        "surname": "Frick",
        "ageCategory": ">60",
        "originCountry": "Estonia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 7
    },
    {
        "firstName": "Rob",
        "surname": "Arp",
        "ageCategory": "18-35",
        "originCountry": "Heard Island and McDonald Islands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 49
    },
    {
        "firstName": "Vaidas",
        "surname": "Lees",
        "ageCategory": "18-35",
        "originCountry": "Pitcairn",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 7
    },
    {
        "firstName": "Kristina",
        "surname": "Beonde",
        "ageCategory": "18-35",
        "originCountry": "Jordan",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 25
    },
    {
        "firstName": "Zenaida",
        "surname": "Akins",
        "ageCategory": "18-35",
        "originCountry": "Burundi",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 18
    },
    {
        "firstName": "Patricia",
        "surname": "Jezak",
        "ageCategory": ">60",
        "originCountry": "South Africa",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 45
    },
    {
        "firstName": "Jozette",
        "surname": "Keene",
        "ageCategory": "35-60",
        "originCountry": "Egypt",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 34
    },
    {
        "firstName": "David",
        "surname": "Boyle",
        "ageCategory": ">60",
        "originCountry": "French Guiana",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 25
    },
    {
        "firstName": "Jacqueline",
        "surname": "Rios",
        "ageCategory": "<18",
        "originCountry": "Slovenia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 43
    },
    {
        "firstName": "Byron",
        "surname": "Kenedy",
        "ageCategory": "18-35",
        "originCountry": "Grenada",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 24
    },
    {
        "firstName": "Dante",
        "surname": "Crenshaw",
        "ageCategory": "35-60",
        "originCountry": "El Salvador",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 19
    },
    {
        "firstName": "Tanita",
        "surname": "Hodgson",
        "ageCategory": "<18",
        "originCountry": "Bhutan",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 13
    },
    {
        "firstName": "Salomon",
        "surname": "Bristow",
        "ageCategory": ">60",
        "originCountry": "Seychelles",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 23
    },
    {
        "firstName": "Anissia",
        "surname": "Kunselman",
        "ageCategory": "35-60",
        "originCountry": "Canada",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 13
    },
    {
        "firstName": "Sritharan",
        "surname": "Olsen",
        "ageCategory": "<18",
        "originCountry": "Korea (Republic of)",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 38
    },
    {
        "firstName": "Melanie",
        "surname": "Meow",
        "ageCategory": "18-35",
        "originCountry": "Mauritius",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 43
    },
    {
        "firstName": "Denis",
        "surname": "Dobbins",
        "ageCategory": "18-35",
        "originCountry": "Somalia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 38
    },
    {
        "firstName": "Alisa",
        "surname": "Bell",
        "ageCategory": ">60",
        "originCountry": "Liberia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 33
    },
    {
        "firstName": "Lakshmi",
        "surname": "Haskin",
        "ageCategory": "18-35",
        "originCountry": "Lesotho",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 47
    },
    {
        "firstName": "Miriam",
        "surname": "Loria",
        "ageCategory": "18-35",
        "originCountry": "Faroe Islands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 47
    },
    {
        "firstName": "Sudershan",
        "surname": "Waltz",
        "ageCategory": ">60",
        "originCountry": "Indonesia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 39
    },
    {
        "firstName": "Anna",
        "surname": "Kunselman",
        "ageCategory": "35-60",
        "originCountry": "French Guiana",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 46
    },
    {
        "firstName": "Mihai",
        "surname": "Brazell",
        "ageCategory": "18-35",
        "originCountry": "Sudan",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 32
    },
    {
        "firstName": "Guillaume",
        "surname": "Norris",
        "ageCategory": ">60",
        "originCountry": "Switzerland",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 45
    },
    {
        "firstName": "Melanie",
        "surname": "Frame",
        "ageCategory": ">60",
        "originCountry": "Egypt",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 38
    },
    {
        "firstName": "Karintha",
        "surname": "Posen",
        "ageCategory": "18-35",
        "originCountry": "Réunion",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 16
    },
    {
        "firstName": "Forest",
        "surname": "Nesbitt",
        "ageCategory": ">60",
        "originCountry": "Pakistan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 39
    },
    {
        "firstName": "Joethelia",
        "surname": "Carlston",
        "ageCategory": "35-60",
        "originCountry": "Lesotho",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 41
    },
    {
        "firstName": "Braulio",
        "surname": "Proia",
        "ageCategory": "18-35",
        "originCountry": "Lithuania",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 13
    },
    {
        "firstName": "Marisa",
        "surname": "Lehman",
        "ageCategory": "<18",
        "originCountry": "Uganda",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 4
    },
    {
        "firstName": "Shivkumar",
        "surname": "Cain",
        "ageCategory": ">60",
        "originCountry": "Bahamas",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 34
    },
    {
        "firstName": "Kingi",
        "surname": "Rainwater",
        "ageCategory": "18-35",
        "originCountry": "Israel",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 38
    },
    {
        "firstName": "Regine",
        "surname": "Sutton",
        "ageCategory": ">60",
        "originCountry": "Palestine, State of",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 38
    },
    {
        "firstName": "Stacy",
        "surname": "Mulvehill",
        "ageCategory": "<18",
        "originCountry": "Bonaire, Sint Eustatius and Saba",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 8
    },
    {
        "firstName": "Sherrell",
        "surname": "Widenmier",
        "ageCategory": "18-35",
        "originCountry": "Italy",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 36
    },
    {
        "firstName": "Sharmistha",
        "surname": "Federico",
        "ageCategory": ">60",
        "originCountry": "Latvia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 6
    },
    {
        "firstName": "Zoriy",
        "surname": "Tveter",
        "ageCategory": "<18",
        "originCountry": "Kuwait",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 26
    },
    {
        "firstName": "Beverly",
        "surname": "Coggins",
        "ageCategory": "<18",
        "originCountry": "Thailand",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 35
    },
    {
        "firstName": "Dusanka",
        "surname": "Teti",
        "ageCategory": "18-35",
        "originCountry": "Cuba",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 23
    },
    {
        "firstName": "Farzana",
        "surname": "Longmire",
        "ageCategory": "<18",
        "originCountry": "Mongolia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 33
    },
    {
        "firstName": "Brooks",
        "surname": "Serraon",
        "ageCategory": "<18",
        "originCountry": "Samoa",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 49
    },
    {
        "firstName": "Carman",
        "surname": "Northrop",
        "ageCategory": "<18",
        "originCountry": "Yemen",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 23
    },
    {
        "firstName": "Nidal",
        "surname": "Brady",
        "ageCategory": ">60",
        "originCountry": "Pakistan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 24
    },
    {
        "firstName": "Shailesh",
        "surname": "Meyers",
        "ageCategory": "35-60",
        "originCountry": "Cayman Islands",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 38
    },
    {
        "firstName": "Samir",
        "surname": "Golaner",
        "ageCategory": "<18",
        "originCountry": "India",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 44
    },
    {
        "firstName": "Edith",
        "surname": "Monroe",
        "ageCategory": ">60",
        "originCountry": "Bhutan",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 5
    },
    {
        "firstName": "Shaneka",
        "surname": "Terfloth",
        "ageCategory": "<18",
        "originCountry": "Saint Kitts and Nevis",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 46
    },
    {
        "firstName": "Kefeng",
        "surname": "Johnson",
        "ageCategory": "35-60",
        "originCountry": "Turks and Caicos Islands",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 11
    },
    {
        "firstName": "Sally",
        "surname": "Bessey",
        "ageCategory": "18-35",
        "originCountry": "Togo",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 48
    },
    {
        "firstName": "Liset",
        "surname": "Bearden",
        "ageCategory": "<18",
        "originCountry": "Cayman Islands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 22
    },
    {
        "firstName": "Janet",
        "surname": "Clayton",
        "ageCategory": "35-60",
        "originCountry": "Uganda",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 17
    },
    {
        "firstName": "Brian",
        "surname": "Gerhard",
        "ageCategory": ">60",
        "originCountry": "Tanzania, United Republic of",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 42
    },
    {
        "firstName": "Edgar",
        "surname": "Ast",
        "ageCategory": ">60",
        "originCountry": "Bermuda",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 7
    },
    {
        "firstName": "Lucy",
        "surname": "Millegan",
        "ageCategory": "18-35",
        "originCountry": "Syrian Arab Republic",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 40
    },
    {
        "firstName": "Francesca",
        "surname": "Caffrey",
        "ageCategory": ">60",
        "originCountry": "Tunisia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 25
    },
    {
        "firstName": "Brandon",
        "surname": "Penty",
        "ageCategory": "18-35",
        "originCountry": "Croatia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 10
    },
    {
        "firstName": "Deena",
        "surname": "Hancock",
        "ageCategory": "35-60",
        "originCountry": "Gibraltar",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 20
    },
    {
        "firstName": "Althea",
        "surname": "Evans",
        "ageCategory": "18-35",
        "originCountry": "Korea (Democratic People's Republic of)",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 30
    },
    {
        "firstName": "Bradley",
        "surname": "Ziegler",
        "ageCategory": ">60",
        "originCountry": "Kiribati",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 7
    },
    {
        "firstName": "Bingmei",
        "surname": "Gulotta",
        "ageCategory": "35-60",
        "originCountry": "Suriname",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 11
    },
    {
        "firstName": "June",
        "surname": "Bias",
        "ageCategory": "18-35",
        "originCountry": "Canada",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 23
    },
    {
        "firstName": "Deanna",
        "surname": "Mckelvy",
        "ageCategory": "<18",
        "originCountry": "Azerbaijan",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 43
    },
    {
        "firstName": "Tracie",
        "surname": "Wantland",
        "ageCategory": "18-35",
        "originCountry": "Nicaragua",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 31
    },
    {
        "firstName": "Laraine",
        "surname": "Bartlett",
        "ageCategory": "35-60",
        "originCountry": "Oman",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 44
    },
    {
        "firstName": "Twyonna",
        "surname": "Kentro",
        "ageCategory": "35-60",
        "originCountry": "Albania",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 16
    },
    {
        "firstName": "Nicholas",
        "surname": "Horowitz",
        "ageCategory": "18-35",
        "originCountry": "Curaçao",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 39
    },
    {
        "firstName": "Ammon",
        "surname": "Kaspar",
        "ageCategory": ">60",
        "originCountry": "Greece",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 45
    },
    {
        "firstName": "Shaneka",
        "surname": "Bednarsh",
        "ageCategory": ">60",
        "originCountry": "Lesotho",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 26
    },
    {
        "firstName": "Neha",
        "surname": "Zinnow",
        "ageCategory": "<18",
        "originCountry": "Réunion",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 18
    },
    {
        "firstName": "Elridge",
        "surname": "Woods",
        "ageCategory": "18-35",
        "originCountry": "Slovenia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 39
    },
    {
        "firstName": "Katie",
        "surname": "Pachler",
        "ageCategory": "35-60",
        "originCountry": "Trinidad and Tobago",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 9
    },
    {
        "firstName": "Gary",
        "surname": "Ellingwood",
        "ageCategory": "35-60",
        "originCountry": "Saudi Arabia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 19
    },
    {
        "firstName": "Kamaniee",
        "surname": "Guindin",
        "ageCategory": "<18",
        "originCountry": "South Georgia and the South Sandwich Islands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 44
    },
    {
        "firstName": "Alyce",
        "surname": "Shauna",
        "ageCategory": "18-35",
        "originCountry": "Iceland",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 23
    },
    {
        "firstName": "Theresia",
        "surname": "Coe",
        "ageCategory": "18-35",
        "originCountry": "Portugal",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 9
    },
    {
        "firstName": "Mila",
        "surname": "Wollf",
        "ageCategory": ">60",
        "originCountry": "Cook Islands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 7
    },
    {
        "firstName": "Neil",
        "surname": "Klein",
        "ageCategory": "18-35",
        "originCountry": "Congo",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 11
    },
    {
        "firstName": "Erma",
        "surname": "Obermann",
        "ageCategory": "35-60",
        "originCountry": "Guatemala",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 4
    },
    {
        "firstName": "Leilani",
        "surname": "North",
        "ageCategory": ">60",
        "originCountry": "Viet Nam",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 20
    },
    {
        "firstName": "Takita",
        "surname": "Nguyen",
        "ageCategory": "<18",
        "originCountry": "Isle of Man",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 25
    },
    {
        "firstName": "Ravi",
        "surname": "Bert",
        "ageCategory": ">60",
        "originCountry": "Nicaragua",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 12
    },
    {
        "firstName": "Tiffany",
        "surname": "Weissmann",
        "ageCategory": "35-60",
        "originCountry": "Senegal",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 36
    },
    {
        "firstName": "Regina",
        "surname": "Raslich",
        "ageCategory": "35-60",
        "originCountry": "Maldives",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 24
    },
    {
        "firstName": "Rob",
        "surname": "Brooks",
        "ageCategory": "35-60",
        "originCountry": "Cameroon",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 14
    },
    {
        "firstName": "Jacqueline",
        "surname": "Stoltenberg",
        "ageCategory": "35-60",
        "originCountry": "Uzbekistan",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 18
    },
    {
        "firstName": "Rajesh",
        "surname": "Fielack",
        "ageCategory": ">60",
        "originCountry": "Senegal",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 30
    },
    {
        "firstName": "Geoffrey",
        "surname": "Puri",
        "ageCategory": "35-60",
        "originCountry": "Azerbaijan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 0
    },
    {
        "firstName": "Rachel",
        "surname": "Martens",
        "ageCategory": "18-35",
        "originCountry": "Cabo Verde",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 45
    },
    {
        "firstName": "Monthro",
        "surname": "Brenner",
        "ageCategory": "35-60",
        "originCountry": "Tanzania, United Republic of",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 25
    },
    {
        "firstName": "Cesalie",
        "surname": "Mcinerney",
        "ageCategory": "18-35",
        "originCountry": "French Southern Territories",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 23
    },
    {
        "firstName": "Bilal",
        "surname": "Hunter",
        "ageCategory": "35-60",
        "originCountry": "Bahrain",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 26
    },
    {
        "firstName": "Luzinda",
        "surname": "Plunkett",
        "ageCategory": "35-60",
        "originCountry": "Réunion",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 10
    },
    {
        "firstName": "Mark",
        "surname": "Barron",
        "ageCategory": ">60",
        "originCountry": "Tonga",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 25
    },
    {
        "firstName": "Lidia",
        "surname": "Frets",
        "ageCategory": "<18",
        "originCountry": "Belarus",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 10
    },
    {
        "firstName": "Carolin",
        "surname": "Gerhard",
        "ageCategory": ">60",
        "originCountry": "Korea (Democratic People's Republic of)",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 33
    },
    {
        "firstName": "Markella",
        "surname": "White",
        "ageCategory": "18-35",
        "originCountry": "Argentina",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 23
    },
    {
        "firstName": "Humayun",
        "surname": "Jafri",
        "ageCategory": "<18",
        "originCountry": "Gabon",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 4
    },
    {
        "firstName": "Navneet",
        "surname": "Difrancesco",
        "ageCategory": "18-35",
        "originCountry": "Mauritius",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 49
    },
    {
        "firstName": "Xiaoyan",
        "surname": "Mcgarity",
        "ageCategory": ">60",
        "originCountry": "Canada",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 13
    },
    {
        "firstName": "Hathor",
        "surname": "Kaur",
        "ageCategory": ">60",
        "originCountry": "Cuba",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 11
    },
    {
        "firstName": "Helen",
        "surname": "Davila",
        "ageCategory": ">60",
        "originCountry": "Cocos (Keeling) Islands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 6
    },
    {
        "firstName": "Meiyin",
        "surname": "Swyers",
        "ageCategory": "35-60",
        "originCountry": "Belgium",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 25
    },
    {
        "firstName": "Eden",
        "surname": "Swartz",
        "ageCategory": "35-60",
        "originCountry": "Grenada",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 9
    },
    {
        "firstName": "Moses",
        "surname": "Sewell",
        "ageCategory": "35-60",
        "originCountry": "Senegal",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 37
    },
    {
        "firstName": "Tasheis",
        "surname": "Lamsargis",
        "ageCategory": "35-60",
        "originCountry": "Bonaire, Sint Eustatius and Saba",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 45
    },
    {
        "firstName": "Emiliano",
        "surname": "Bruintjes",
        "ageCategory": "18-35",
        "originCountry": "Central African Republic",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 15
    },
    {
        "firstName": "Bettye",
        "surname": "Stubbs",
        "ageCategory": "<18",
        "originCountry": "Cook Islands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 21
    },
    {
        "firstName": "Drew",
        "surname": "Altschuler",
        "ageCategory": "18-35",
        "originCountry": "Mauritania",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 26
    },
    {
        "firstName": "Jodene",
        "surname": "Matten",
        "ageCategory": "18-35",
        "originCountry": "Seychelles",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 49
    },
    {
        "firstName": "Tae",
        "surname": "Strange",
        "ageCategory": "35-60",
        "originCountry": "Nicaragua",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 42
    },
    {
        "firstName": "Carol",
        "surname": "Strobel",
        "ageCategory": ">60",
        "originCountry": "Brazil",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 27
    },
    {
        "firstName": "Elba",
        "surname": "Kozlowski",
        "ageCategory": "35-60",
        "originCountry": "Norfolk Island",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 30
    },
    {
        "firstName": "Lakshmi",
        "surname": "Rote",
        "ageCategory": "18-35",
        "originCountry": "Lesotho",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 50
    },
    {
        "firstName": "Canzady",
        "surname": "Creason",
        "ageCategory": ">60",
        "originCountry": "Portugal",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 38
    },
    {
        "firstName": "Derek",
        "surname": "Laventure",
        "ageCategory": "<18",
        "originCountry": "South Africa",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 23
    },
    {
        "firstName": "Cleola",
        "surname": "Kelton",
        "ageCategory": ">60",
        "originCountry": "Israel",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 16
    },
    {
        "firstName": "Wyatra",
        "surname": "Rastogi",
        "ageCategory": ">60",
        "originCountry": "Cuba",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 13
    },
    {
        "firstName": "Huijun",
        "surname": "Avila",
        "ageCategory": "18-35",
        "originCountry": "Australia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 6
    },
    {
        "firstName": "Dedun",
        "surname": "Vickers",
        "ageCategory": "35-60",
        "originCountry": "Haiti",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 5
    },
    {
        "firstName": "Regina",
        "surname": "Hall",
        "ageCategory": ">60",
        "originCountry": "Haiti",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 45
    },
    {
        "firstName": "Milind",
        "surname": "Cantu",
        "ageCategory": "<18",
        "originCountry": "Malta",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 21
    },
    {
        "firstName": "Rosalind",
        "surname": "Creason",
        "ageCategory": "18-35",
        "originCountry": "Namibia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 1
    },
    {
        "firstName": "Emiliano",
        "surname": "Muroski",
        "ageCategory": "<18",
        "originCountry": "Fiji",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 9
    },
    {
        "firstName": "Kent",
        "surname": "Stubbs",
        "ageCategory": "35-60",
        "originCountry": "Cameroon",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 16
    },
    {
        "firstName": "Jerline",
        "surname": "Newby",
        "ageCategory": "35-60",
        "originCountry": "Greenland",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 47
    },
    {
        "firstName": "Nate",
        "surname": "Walker",
        "ageCategory": "35-60",
        "originCountry": "South Africa",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 15
    },
    {
        "firstName": "Sharad",
        "surname": "Swetland",
        "ageCategory": "<18",
        "originCountry": "Denmark",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 27
    },
    {
        "firstName": "Sangita",
        "surname": "Stafford",
        "ageCategory": "18-35",
        "originCountry": "Libya",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 32
    },
    {
        "firstName": "Mark",
        "surname": "Compton",
        "ageCategory": ">60",
        "originCountry": "Isle of Man",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 47
    },
    {
        "firstName": "Kristie",
        "surname": "Derkson",
        "ageCategory": "<18",
        "originCountry": "Grenada",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 15
    },
    {
        "firstName": "Tracie",
        "surname": "Monroe",
        "ageCategory": "35-60",
        "originCountry": "Saint Kitts and Nevis",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 49
    },
    {
        "firstName": "Kerri",
        "surname": "Clinger",
        "ageCategory": "35-60",
        "originCountry": "Guinea",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 48
    },
    {
        "firstName": "Atul",
        "surname": "Jantz",
        "ageCategory": "35-60",
        "originCountry": "Eritrea",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 14
    },
    {
        "firstName": "Lloyd",
        "surname": "Valenzuela",
        "ageCategory": "35-60",
        "originCountry": "Chad",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 1
    },
    {
        "firstName": "Samuel",
        "surname": "Ritchie",
        "ageCategory": "35-60",
        "originCountry": "Luxembourg",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 32
    },
    {
        "firstName": "Valerie",
        "surname": "Thomas",
        "ageCategory": ">60",
        "originCountry": "Portugal",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 27
    },
    {
        "firstName": "Beverly",
        "surname": "Lloyd",
        "ageCategory": "18-35",
        "originCountry": "Saint Pierre and Miquelon",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 2
    },
    {
        "firstName": "Jolene",
        "surname": "Cobb",
        "ageCategory": "18-35",
        "originCountry": "Russian Federation",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 29
    },
    {
        "firstName": "Melody",
        "surname": "Bell",
        "ageCategory": ">60",
        "originCountry": "Guam",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 40
    },
    {
        "firstName": "Fredrick",
        "surname": "Damiano",
        "ageCategory": "18-35",
        "originCountry": "Czech Republic",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 24
    },
    {
        "firstName": "Peg",
        "surname": "Mahajan",
        "ageCategory": "35-60",
        "originCountry": "Rwanda",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 37
    },
    {
        "firstName": "Daisy",
        "surname": "Aviles",
        "ageCategory": "<18",
        "originCountry": "Honduras",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 13
    },
    {
        "firstName": "Frank",
        "surname": "Favus",
        "ageCategory": ">60",
        "originCountry": "Singapore",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 43
    },
    {
        "firstName": "Marian",
        "surname": "Kubota",
        "ageCategory": ">60",
        "originCountry": "Lebanon",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 12
    },
    {
        "firstName": "Thursday",
        "surname": "Hudson",
        "ageCategory": "<18",
        "originCountry": "Myanmar",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 27
    },
    {
        "firstName": "Kevin",
        "surname": "Clements",
        "ageCategory": ">60",
        "originCountry": "Norfolk Island",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 28
    },
    {
        "firstName": "Xiumei",
        "surname": "Kirkley",
        "ageCategory": "35-60",
        "originCountry": "Palau",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 26
    },
    {
        "firstName": "Ben",
        "surname": "Skiffington",
        "ageCategory": "35-60",
        "originCountry": "Saudi Arabia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 37
    },
    {
        "firstName": "Austin",
        "surname": "Larue",
        "ageCategory": "18-35",
        "originCountry": "Samoa",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 0
    },
    {
        "firstName": "Rupa",
        "surname": "Best",
        "ageCategory": ">60",
        "originCountry": "Libya",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 45
    },
    {
        "firstName": "Nudret",
        "surname": "Clanton",
        "ageCategory": "<18",
        "originCountry": "Ecuador",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 44
    },
    {
        "firstName": "Sheri",
        "surname": "Toothman",
        "ageCategory": "35-60",
        "originCountry": "Christmas Island",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 0
    },
    {
        "firstName": "Han",
        "surname": "Gilbertson",
        "ageCategory": "<18",
        "originCountry": "Mauritius",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 10
    },
    {
        "firstName": "Ora",
        "surname": "Garbe",
        "ageCategory": "35-60",
        "originCountry": "Peru",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 45
    },
    {
        "firstName": "Lei",
        "surname": "Plourde",
        "ageCategory": ">60",
        "originCountry": "Turks and Caicos Islands",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 9
    },
    {
        "firstName": "Georgina",
        "surname": "Muroski",
        "ageCategory": ">60",
        "originCountry": "Niger",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 43
    },
    {
        "firstName": "Nichelle",
        "surname": "Landrum",
        "ageCategory": ">60",
        "originCountry": "Greece",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 44
    },
    {
        "firstName": "Leatrice",
        "surname": "Castellanos",
        "ageCategory": "<18",
        "originCountry": "Czech Republic",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 36
    },
    {
        "firstName": "Leroy",
        "surname": "Gunn",
        "ageCategory": "18-35",
        "originCountry": "Canada",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 2
    },
    {
        "firstName": "Christine",
        "surname": "Chester",
        "ageCategory": "18-35",
        "originCountry": "Saint Vincent and the Grenadines",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 39
    },
    {
        "firstName": "Doris",
        "surname": "Kaspar",
        "ageCategory": "35-60",
        "originCountry": "United Kingdom of Great Britain and Northern Ireland",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 26
    },
    {
        "firstName": "Roxanne",
        "surname": "Iliatova",
        "ageCategory": ">60",
        "originCountry": "French Polynesia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 15
    },
    {
        "firstName": "Cori",
        "surname": "Costa",
        "ageCategory": "35-60",
        "originCountry": "Cocos (Keeling) Islands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 8
    },
    {
        "firstName": "Gill",
        "surname": "Dobbins",
        "ageCategory": "<18",
        "originCountry": "Haiti",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 1
    },
    {
        "firstName": "Gateri",
        "surname": "Sherstan",
        "ageCategory": "18-35",
        "originCountry": "Cook Islands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 21
    },
    {
        "firstName": "Tiziana",
        "surname": "Mazza",
        "ageCategory": "35-60",
        "originCountry": "Australia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 34
    },
    {
        "firstName": "Myra",
        "surname": "Jordan",
        "ageCategory": "35-60",
        "originCountry": "Chad",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 38
    },
    {
        "firstName": "Ning",
        "surname": "Fenton",
        "ageCategory": "35-60",
        "originCountry": "Curaçao",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 20
    },
    {
        "firstName": "Joanna",
        "surname": "Kellams",
        "ageCategory": "35-60",
        "originCountry": "Ecuador",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 5
    },
    {
        "firstName": "Enrique",
        "surname": "Contreras",
        "ageCategory": "<18",
        "originCountry": "Mexico",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 26
    },
    {
        "firstName": "Esmeralda",
        "surname": "Gilbertson",
        "ageCategory": ">60",
        "originCountry": "Guinea-Bissau",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 6
    },
    {
        "firstName": "Edwin",
        "surname": "Tollund",
        "ageCategory": "35-60",
        "originCountry": "Peru",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 14
    },
    {
        "firstName": "Kinnell",
        "surname": "Nemichand",
        "ageCategory": ">60",
        "originCountry": "Pakistan",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 33
    },
    {
        "firstName": "Sigrid",
        "surname": "Marr",
        "ageCategory": ">60",
        "originCountry": "Finland",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 4
    },
    {
        "firstName": "Doug",
        "surname": "Neff",
        "ageCategory": ">60",
        "originCountry": "Anguilla",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 23
    },
    {
        "firstName": "Elizabeth",
        "surname": "Krynsky",
        "ageCategory": "<18",
        "originCountry": "France",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 22
    },
    {
        "firstName": "Benjamin",
        "surname": "Mckelvy",
        "ageCategory": "<18",
        "originCountry": "Samoa",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 30
    },
    {
        "firstName": "Jesus",
        "surname": "Suzanne",
        "ageCategory": ">60",
        "originCountry": "El Salvador",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 31
    },
    {
        "firstName": "Shanita",
        "surname": "Phillips",
        "ageCategory": "18-35",
        "originCountry": "Angola",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 10
    },
    {
        "firstName": "Despina",
        "surname": "Lucas",
        "ageCategory": "35-60",
        "originCountry": "Slovenia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 23
    },
    {
        "firstName": "Noby",
        "surname": "Seacrist",
        "ageCategory": "18-35",
        "originCountry": "Qatar",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 26
    },
    {
        "firstName": "Melina",
        "surname": "Mcnulty",
        "ageCategory": "18-35",
        "originCountry": "Sweden",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 9
    },
    {
        "firstName": "John",
        "surname": "Mckelvy",
        "ageCategory": "35-60",
        "originCountry": "Macao",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 20
    },
    {
        "firstName": "Wyatra",
        "surname": "Bommi",
        "ageCategory": "<18",
        "originCountry": "Mauritius",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 23
    },
    {
        "firstName": "Parva",
        "surname": "Ryan",
        "ageCategory": "18-35",
        "originCountry": "Albania",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 34
    },
    {
        "firstName": "Jacalyn",
        "surname": "Manning",
        "ageCategory": "18-35",
        "originCountry": "Costa Rica",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 1
    },
    {
        "firstName": "Andrey",
        "surname": "Clore",
        "ageCategory": "35-60",
        "originCountry": "Taiwan, Province of China",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 36
    },
    {
        "firstName": "Georgia",
        "surname": "Seymour",
        "ageCategory": "18-35",
        "originCountry": "Ukraine",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 35
    },
    {
        "firstName": "Wattis",
        "surname": "Hagan",
        "ageCategory": "<18",
        "originCountry": "Sudan",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 17
    },
    {
        "firstName": "Letisha",
        "surname": "Alarie",
        "ageCategory": ">60",
        "originCountry": "Guam",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 42
    },
    {
        "firstName": "Roy",
        "surname": "Denton",
        "ageCategory": "18-35",
        "originCountry": "Panama",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 50
    },
    {
        "firstName": "Benjamin",
        "surname": "Dunlap",
        "ageCategory": ">60",
        "originCountry": "Kazakhstan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 39
    },
    {
        "firstName": "Fred",
        "surname": "Grunert",
        "ageCategory": "<18",
        "originCountry": "Bolivia (Plurinational State of)",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 21
    },
    {
        "firstName": "Corrine",
        "surname": "Brouillette",
        "ageCategory": "<18",
        "originCountry": "Papua New Guinea",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 18
    },
    {
        "firstName": "Stephanie",
        "surname": "Boyle",
        "ageCategory": "35-60",
        "originCountry": "Bosnia and Herzegovina",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 5
    },
    {
        "firstName": "Bryon",
        "surname": "Bascoe",
        "ageCategory": ">60",
        "originCountry": "Faroe Islands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 22
    },
    {
        "firstName": "Stan",
        "surname": "Fuller",
        "ageCategory": "35-60",
        "originCountry": "Panama",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 17
    },
    {
        "firstName": "Wyatra",
        "surname": "Rastogi",
        "ageCategory": "35-60",
        "originCountry": "Bermuda",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 35
    },
    {
        "firstName": "Jia",
        "surname": "Altermatt",
        "ageCategory": "<18",
        "originCountry": "Djibouti",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 31
    },
    {
        "firstName": "Brittany",
        "surname": "Bessko",
        "ageCategory": "35-60",
        "originCountry": "Tuvalu",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 46
    },
    {
        "firstName": "Cynthia",
        "surname": "Trrenkler",
        "ageCategory": "<18",
        "originCountry": "Barbados",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 36
    },
    {
        "firstName": "Eugene",
        "surname": "Crider",
        "ageCategory": ">60",
        "originCountry": "Portugal",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 5
    },
    {
        "firstName": "Miriam",
        "surname": "Arreguin",
        "ageCategory": ">60",
        "originCountry": "Ecuador",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 2
    },
    {
        "firstName": "Erika",
        "surname": "Pritchard",
        "ageCategory": "18-35",
        "originCountry": "Chile",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 21
    },
    {
        "firstName": "Gordon",
        "surname": "Kieser",
        "ageCategory": "<18",
        "originCountry": "Kyrgyzstan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 37
    },
    {
        "firstName": "Chad",
        "surname": "Hook",
        "ageCategory": "35-60",
        "originCountry": "Botswana",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 28
    },
    {
        "firstName": "Micheal",
        "surname": "Farrell",
        "ageCategory": "18-35",
        "originCountry": "Czech Republic",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 14
    },
    {
        "firstName": "Virginia",
        "surname": "Dover",
        "ageCategory": ">60",
        "originCountry": "Mexico",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 10
    },
    {
        "firstName": "Conrade",
        "surname": "Tatum",
        "ageCategory": ">60",
        "originCountry": "Vanuatu",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 38
    },
    {
        "firstName": "Jasper",
        "surname": "Potate",
        "ageCategory": ">60",
        "originCountry": "Guinea",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 3
    },
    {
        "firstName": "Jasmine",
        "surname": "Orellana",
        "ageCategory": "18-35",
        "originCountry": "Svalbard and Jan Mayen",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 29
    },
    {
        "firstName": "Jody",
        "surname": "Newell",
        "ageCategory": "18-35",
        "originCountry": "Somalia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 22
    },
    {
        "firstName": "Phuong",
        "surname": "Shelton",
        "ageCategory": ">60",
        "originCountry": "Christmas Island",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 46
    },
    {
        "firstName": "Samuel",
        "surname": "Mckee",
        "ageCategory": "35-60",
        "originCountry": "Guam",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 15
    },
    {
        "firstName": "Ida",
        "surname": "Wagner",
        "ageCategory": "18-35",
        "originCountry": "Finland",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 5
    },
    {
        "firstName": "Holli",
        "surname": "Demerath",
        "ageCategory": "<18",
        "originCountry": "Malaysia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 37
    },
    {
        "firstName": "Desmond",
        "surname": "Christiansen",
        "ageCategory": "35-60",
        "originCountry": "Canada",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 39
    },
    {
        "firstName": "Laurence",
        "surname": "Koprowski",
        "ageCategory": "18-35",
        "originCountry": "Netherlands",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 4
    },
    {
        "firstName": "James",
        "surname": "Mckelvy",
        "ageCategory": ">60",
        "originCountry": "Romania",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 23
    },
    {
        "firstName": "Aisha",
        "surname": "Khan",
        "ageCategory": ">60",
        "originCountry": "Cameroon",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 33
    },
    {
        "firstName": "Jeannine",
        "surname": "Dobbins",
        "ageCategory": "<18",
        "originCountry": "Côte d'Ivoire",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 26
    },
    {
        "firstName": "Marilynn",
        "surname": "Whitham",
        "ageCategory": "35-60",
        "originCountry": "Kyrgyzstan",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 8
    },
    {
        "firstName": "Matina",
        "surname": "Uhl",
        "ageCategory": "<18",
        "originCountry": "Virgin Islands (British)",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 34
    },
    {
        "firstName": "Jess",
        "surname": "Glean",
        "ageCategory": "<18",
        "originCountry": "Netherlands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 24
    },
    {
        "firstName": "Christopher",
        "surname": "Eugene",
        "ageCategory": "<18",
        "originCountry": "Philippines",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 48
    },
    {
        "firstName": "Tania",
        "surname": "Newell",
        "ageCategory": "35-60",
        "originCountry": "Canada",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 35
    },
    {
        "firstName": "Venus",
        "surname": "Cone",
        "ageCategory": ">60",
        "originCountry": "Saint Lucia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 11
    },
    {
        "firstName": "Kristen",
        "surname": "Madison",
        "ageCategory": "35-60",
        "originCountry": "Montenegro",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 14
    },
    {
        "firstName": "Aimee",
        "surname": "Petitti",
        "ageCategory": "18-35",
        "originCountry": "Angola",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 18
    },
    {
        "firstName": "Yolunda",
        "surname": "More",
        "ageCategory": ">60",
        "originCountry": "Jersey",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 0
    },
    {
        "firstName": "Marian",
        "surname": "Mckenzie",
        "ageCategory": "35-60",
        "originCountry": "Montserrat",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 46
    },
    {
        "firstName": "Enrique",
        "surname": "Gage",
        "ageCategory": "<18",
        "originCountry": "Portugal",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 50
    },
    {
        "firstName": "Liset",
        "surname": "Rannila",
        "ageCategory": "18-35",
        "originCountry": "Djibouti",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 4
    },
    {
        "firstName": "Damon",
        "surname": "Covel",
        "ageCategory": "18-35",
        "originCountry": "Qatar",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 50
    },
    {
        "firstName": "Linnette",
        "surname": "Willms",
        "ageCategory": "18-35",
        "originCountry": "San Marino",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 0
    },
    {
        "firstName": "Leon",
        "surname": "Entinger",
        "ageCategory": "18-35",
        "originCountry": "Faroe Islands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 0
    },
    {
        "firstName": "Jon",
        "surname": "Sprague",
        "ageCategory": "35-60",
        "originCountry": "Macao",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 10
    },
    {
        "firstName": "Teresa",
        "surname": "Nash",
        "ageCategory": "<18",
        "originCountry": "Spain",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 19
    },
    {
        "firstName": "Vinit",
        "surname": "Goodwin",
        "ageCategory": "<18",
        "originCountry": "Nigeria",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 21
    },
    {
        "firstName": "Yelena",
        "surname": "Quintana",
        "ageCategory": ">60",
        "originCountry": "Belize",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 43
    },
    {
        "firstName": "Rosa",
        "surname": "Delellis",
        "ageCategory": "<18",
        "originCountry": "Bosnia and Herzegovina",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 0
    },
    {
        "firstName": "Sajid",
        "surname": "Hughes",
        "ageCategory": "18-35",
        "originCountry": "Antigua and Barbuda",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 0
    },
    {
        "firstName": "Tina",
        "surname": "Schnell",
        "ageCategory": "<18",
        "originCountry": "Monaco",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 4
    },
    {
        "firstName": "Anwar",
        "surname": "Guilfoyle",
        "ageCategory": "35-60",
        "originCountry": "Japan",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 6
    },
    {
        "firstName": "Tauras",
        "surname": "Polovich",
        "ageCategory": ">60",
        "originCountry": "Grenada",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 9
    },
    {
        "firstName": "Glory",
        "surname": "Denbesten",
        "ageCategory": ">60",
        "originCountry": "Falkland Islands (Malvinas)",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 30
    },
    {
        "firstName": "Cynthia",
        "surname": "Boblett",
        "ageCategory": "35-60",
        "originCountry": "Bangladesh",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 37
    },
    {
        "firstName": "Joslyn",
        "surname": "Brewer",
        "ageCategory": "35-60",
        "originCountry": "Côte d'Ivoire",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 11
    },
    {
        "firstName": "Ewa",
        "surname": "Maher",
        "ageCategory": "35-60",
        "originCountry": "Comoros",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 5
    },
    {
        "firstName": "Vanessa",
        "surname": "Harris",
        "ageCategory": "18-35",
        "originCountry": "United States of America",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 15
    },
    {
        "firstName": "Tracey",
        "surname": "Parham",
        "ageCategory": "18-35",
        "originCountry": "Guam",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 17
    },
    {
        "firstName": "Randy",
        "surname": "Nguyen",
        "ageCategory": "35-60",
        "originCountry": "Myanmar",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 21
    },
    {
        "firstName": "Keith",
        "surname": "Syner",
        "ageCategory": "<18",
        "originCountry": "Nicaragua",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 40
    },
    {
        "firstName": "Augustine",
        "surname": "Mitchell",
        "ageCategory": "<18",
        "originCountry": "Bhutan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 5
    },
    {
        "firstName": "Mark",
        "surname": "Alvarez",
        "ageCategory": "<18",
        "originCountry": "Tunisia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 20
    },
    {
        "firstName": "Emir",
        "surname": "Medina",
        "ageCategory": "18-35",
        "originCountry": "Chad",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 27
    },
    {
        "firstName": "Samantha",
        "surname": "Shroff",
        "ageCategory": "35-60",
        "originCountry": "Botswana",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 37
    },
    {
        "firstName": "Tanny",
        "surname": "Kramarsky",
        "ageCategory": ">60",
        "originCountry": "Peru",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 2
    },
    {
        "firstName": "Lucious",
        "surname": "Butler",
        "ageCategory": "18-35",
        "originCountry": "Nauru",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 46
    },
    {
        "firstName": "Richmond",
        "surname": "Krebs",
        "ageCategory": "<18",
        "originCountry": "Armenia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 17
    },
    {
        "firstName": "Truefelia",
        "surname": "Garascia",
        "ageCategory": "<18",
        "originCountry": "Panama",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 12
    },
    {
        "firstName": "Ben",
        "surname": "Silverstein",
        "ageCategory": "18-35",
        "originCountry": "Israel",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 12
    },
    {
        "firstName": "Prince",
        "surname": "Campbell",
        "ageCategory": ">60",
        "originCountry": "Honduras",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 18
    },
    {
        "firstName": "Janice",
        "surname": "Christine",
        "ageCategory": "18-35",
        "originCountry": "Svalbard and Jan Mayen",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 29
    },
    {
        "firstName": "Pete",
        "surname": "Majewski",
        "ageCategory": "18-35",
        "originCountry": "Jamaica",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 38
    },
    {
        "firstName": "Lloyd",
        "surname": "Shebish",
        "ageCategory": "<18",
        "originCountry": "Cabo Verde",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 40
    },
    {
        "firstName": "Arnitra",
        "surname": "Mills",
        "ageCategory": ">60",
        "originCountry": "Norfolk Island",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 5
    },
    {
        "firstName": "Kareemah",
        "surname": "Skublics",
        "ageCategory": ">60",
        "originCountry": "Gibraltar",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 7
    },
    {
        "firstName": "Alfred",
        "surname": "Gorman",
        "ageCategory": "35-60",
        "originCountry": "Andorra",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 39
    },
    {
        "firstName": "Kyle",
        "surname": "Bodily",
        "ageCategory": ">60",
        "originCountry": "Jamaica",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 43
    },
    {
        "firstName": "Yvette",
        "surname": "Snyder",
        "ageCategory": ">60",
        "originCountry": "Bonaire, Sint Eustatius and Saba",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 44
    },
    {
        "firstName": "Kristie",
        "surname": "Bowling",
        "ageCategory": "18-35",
        "originCountry": "Uganda",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 18
    },
    {
        "firstName": "Jasper",
        "surname": "Pearlstein",
        "ageCategory": "18-35",
        "originCountry": "Myanmar",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 6
    },
    {
        "firstName": "Shawn",
        "surname": "Cahill",
        "ageCategory": "35-60",
        "originCountry": "United Arab Emirates",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 7
    },
    {
        "firstName": "Kola",
        "surname": "Cain",
        "ageCategory": "18-35",
        "originCountry": "Western Sahara",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 36
    },
    {
        "firstName": "Devon",
        "surname": "Stabile",
        "ageCategory": "18-35",
        "originCountry": "Niger",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 24
    },
    {
        "firstName": "Guadelupe",
        "surname": "Stoltenberg",
        "ageCategory": "18-35",
        "originCountry": "Moldova (Republic of)",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 28
    },
    {
        "firstName": "Terrell",
        "surname": "Dupuy",
        "ageCategory": "18-35",
        "originCountry": "Mozambique",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 32
    },
    {
        "firstName": "LuAnn",
        "surname": "Lyman",
        "ageCategory": ">60",
        "originCountry": "Montenegro",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 33
    },
    {
        "firstName": "Roland",
        "surname": "Pitts",
        "ageCategory": ">60",
        "originCountry": "Congo (Democratic Republic of the)",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 21
    },
    {
        "firstName": "Janise",
        "surname": "Frick",
        "ageCategory": "<18",
        "originCountry": "Saudi Arabia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 17
    },
    {
        "firstName": "LaShonda",
        "surname": "Boynton",
        "ageCategory": "<18",
        "originCountry": "Montenegro",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 49
    },
    {
        "firstName": "Jezus",
        "surname": "Amick",
        "ageCategory": ">60",
        "originCountry": "Tajikistan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 41
    },
    {
        "firstName": "Marsha",
        "surname": "Ravenelle",
        "ageCategory": "<18",
        "originCountry": "Netherlands",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 12
    },
    {
        "firstName": "Elisha",
        "surname": "Bently",
        "ageCategory": ">60",
        "originCountry": "Estonia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 1
    },
    {
        "firstName": "Latasha",
        "surname": "Petti",
        "ageCategory": "35-60",
        "originCountry": "Colombia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 26
    },
    {
        "firstName": "Tonya",
        "surname": "Boblett",
        "ageCategory": "35-60",
        "originCountry": "Falkland Islands (Malvinas)",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 4
    },
    {
        "firstName": "Teea",
        "surname": "Force",
        "ageCategory": "18-35",
        "originCountry": "Bahrain",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 0
    },
    {
        "firstName": "Weibin",
        "surname": "Ivanoski",
        "ageCategory": ">60",
        "originCountry": "Cabo Verde",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 7
    },
    {
        "firstName": "Tanya",
        "surname": "Hopper",
        "ageCategory": ">60",
        "originCountry": "Paraguay",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 35
    },
    {
        "firstName": "Twyonna",
        "surname": "Alarie",
        "ageCategory": "18-35",
        "originCountry": "Réunion",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 0
    },
    {
        "firstName": "Cathryn",
        "surname": "Brennan",
        "ageCategory": "35-60",
        "originCountry": "Montenegro",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 32
    },
    {
        "firstName": "Jayne",
        "surname": "Garner",
        "ageCategory": ">60",
        "originCountry": "Taiwan, Province of China",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 35
    },
    {
        "firstName": "Arzak",
        "surname": "Keirns",
        "ageCategory": "18-35",
        "originCountry": "Sierra Leone",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 3
    },
    {
        "firstName": "Terese",
        "surname": "Reviews",
        "ageCategory": "18-35",
        "originCountry": "Brunei Darussalam",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 40
    },
    {
        "firstName": "Jessley",
        "surname": "Jean",
        "ageCategory": "18-35",
        "originCountry": "Bolivia (Plurinational State of)",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 39
    },
    {
        "firstName": "Sonny",
        "surname": "Blankenship",
        "ageCategory": ">60",
        "originCountry": "Finland",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 2
    },
    {
        "firstName": "Ozma",
        "surname": "Brouillette",
        "ageCategory": "<18",
        "originCountry": "Zimbabwe",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 20
    },
    {
        "firstName": "Angelique",
        "surname": "Short",
        "ageCategory": "35-60",
        "originCountry": "Germany",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 31
    },
    {
        "firstName": "Nakesha",
        "surname": "Rutt",
        "ageCategory": ">60",
        "originCountry": "Romania",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 45
    },
    {
        "firstName": "Roberta",
        "surname": "Pierce",
        "ageCategory": "35-60",
        "originCountry": "Saint Helena, Ascension and Tristan da Cunha",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 27
    },
    {
        "firstName": "Amela",
        "surname": "Maynard",
        "ageCategory": "18-35",
        "originCountry": "El Salvador",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 17
    },
    {
        "firstName": "Yauma",
        "surname": "Hatton",
        "ageCategory": "35-60",
        "originCountry": "Anguilla",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 2
    },
    {
        "firstName": "Tylene",
        "surname": "Dunn",
        "ageCategory": "<18",
        "originCountry": "Oman",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 9
    },
    {
        "firstName": "Shaneka",
        "surname": "Johnson",
        "ageCategory": "35-60",
        "originCountry": "Mauritius",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 19
    },
    {
        "firstName": "Yiping",
        "surname": "Dickey",
        "ageCategory": ">60",
        "originCountry": "Zambia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 24
    },
    {
        "firstName": "Vasilis",
        "surname": "Rydinsky",
        "ageCategory": "18-35",
        "originCountry": "Norway",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 31
    },
    {
        "firstName": "Nicolas",
        "surname": "Slonaker",
        "ageCategory": "35-60",
        "originCountry": "Korea (Democratic People's Republic of)",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 20
    },
    {
        "firstName": "Giuseppe",
        "surname": "Ahmad",
        "ageCategory": "<18",
        "originCountry": "Rwanda",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 42
    },
    {
        "firstName": "Ingrid",
        "surname": "Moore",
        "ageCategory": "<18",
        "originCountry": "Bahrain",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 7
    },
    {
        "firstName": "Jeanette",
        "surname": "Gerela",
        "ageCategory": "<18",
        "originCountry": "Iraq",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 4
    },
    {
        "firstName": "Ghassan",
        "surname": "Gilby",
        "ageCategory": "18-35",
        "originCountry": "Kenya",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 23
    },
    {
        "firstName": "Julius",
        "surname": "Velazco",
        "ageCategory": ">60",
        "originCountry": "Bulgaria",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 38
    },
    {
        "firstName": "Loyd",
        "surname": "Kovich",
        "ageCategory": "<18",
        "originCountry": "Kazakhstan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 17
    },
    {
        "firstName": "Curtis",
        "surname": "Geddes",
        "ageCategory": ">60",
        "originCountry": "Serbia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 15
    },
    {
        "firstName": "Hilda",
        "surname": "Schuplin",
        "ageCategory": "18-35",
        "originCountry": "Uzbekistan",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 43
    },
    {
        "firstName": "Joanna",
        "surname": "Kandray",
        "ageCategory": "<18",
        "originCountry": "Madagascar",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 43
    },
    {
        "firstName": "Stacie",
        "surname": "Eichberger",
        "ageCategory": ">60",
        "originCountry": "South Sudan",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 24
    },
    {
        "firstName": "Ishna",
        "surname": "Flanigan",
        "ageCategory": "18-35",
        "originCountry": "Fiji",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 16
    },
    {
        "firstName": "Canzady",
        "surname": "Fraley",
        "ageCategory": "<18",
        "originCountry": "Sao Tome and Principe",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 17
    },
    {
        "firstName": "LaJeania",
        "surname": "Kranz",
        "ageCategory": ">60",
        "originCountry": "Spain",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 17
    },
    {
        "firstName": "Sonja",
        "surname": "Finke",
        "ageCategory": "35-60",
        "originCountry": "Honduras",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 23
    },
    {
        "firstName": "Song",
        "surname": "Peschke",
        "ageCategory": "<18",
        "originCountry": "Georgia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 46
    },
    {
        "firstName": "Harry",
        "surname": "Newell",
        "ageCategory": "<18",
        "originCountry": "Brunei Darussalam",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 14
    },
    {
        "firstName": "Leonard",
        "surname": "Gaylord",
        "ageCategory": "18-35",
        "originCountry": "Bouvet Island",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 28
    },
    {
        "firstName": "Frank",
        "surname": "Beringer",
        "ageCategory": "35-60",
        "originCountry": "Holy See",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 9
    },
    {
        "firstName": "Ludmila",
        "surname": "Doiel",
        "ageCategory": "<18",
        "originCountry": "Samoa",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 10
    },
    {
        "firstName": "Jody",
        "surname": "Chenoweth",
        "ageCategory": "35-60",
        "originCountry": "Philippines",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 22
    },
    {
        "firstName": "Stephan",
        "surname": "Guanzon",
        "ageCategory": "<18",
        "originCountry": "Martinique",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 48
    },
    {
        "firstName": "Pamela",
        "surname": "Bondy",
        "ageCategory": "<18",
        "originCountry": "Marshall Islands",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 46
    },
    {
        "firstName": "Abigail",
        "surname": "Moudry",
        "ageCategory": ">60",
        "originCountry": "Honduras",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 28
    },
    {
        "firstName": "Trinelveli",
        "surname": "Schaus",
        "ageCategory": "18-35",
        "originCountry": "Bermuda",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 25
    },
    {
        "firstName": "Natasha",
        "surname": "Mcmullin",
        "ageCategory": "35-60",
        "originCountry": "Turkmenistan",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 39
    },
    {
        "firstName": "Sarahlynn",
        "surname": "Comeau",
        "ageCategory": "35-60",
        "originCountry": "Christmas Island",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 42
    },
    {
        "firstName": "Yelena",
        "surname": "Moghadam",
        "ageCategory": "35-60",
        "originCountry": "Aruba",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 33
    },
    {
        "firstName": "Iris",
        "surname": "Terrill",
        "ageCategory": ">60",
        "originCountry": "Holy See",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 49
    },
    {
        "firstName": "Laura",
        "surname": "Jeschke",
        "ageCategory": "18-35",
        "originCountry": "Brunei Darussalam",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 33
    },
    {
        "firstName": "Mohamed",
        "surname": "Hougland",
        "ageCategory": ">60",
        "originCountry": "Greece",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 46
    },
    {
        "firstName": "Furness",
        "surname": "Kreigler",
        "ageCategory": "18-35",
        "originCountry": "Saint Lucia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 12
    },
    {
        "firstName": "Craig",
        "surname": "Chacon",
        "ageCategory": "18-35",
        "originCountry": "Madagascar",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 30
    },
    {
        "firstName": "Terrence",
        "surname": "Mccarthy",
        "ageCategory": "<18",
        "originCountry": "Greece",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 20
    },
    {
        "firstName": "Farzana",
        "surname": "Horowitz",
        "ageCategory": ">60",
        "originCountry": "French Southern Territories",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 23
    },
    {
        "firstName": "Suanne",
        "surname": "Dobbins",
        "ageCategory": "35-60",
        "originCountry": "Trinidad and Tobago",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 32
    },
    {
        "firstName": "Kumkum",
        "surname": "Scheppe",
        "ageCategory": "18-35",
        "originCountry": "Maldives",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 13
    },
    {
        "firstName": "Tonja",
        "surname": "Pritchard",
        "ageCategory": "<18",
        "originCountry": "Anguilla",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 37
    },
    {
        "firstName": "Winnie",
        "surname": "Comfort",
        "ageCategory": "18-35",
        "originCountry": "Georgia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 14
    },
    {
        "firstName": "Kehinde",
        "surname": "Steele",
        "ageCategory": "<18",
        "originCountry": "Korea (Democratic People's Republic of)",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 30
    },
    {
        "firstName": "Herbert",
        "surname": "Horowitz",
        "ageCategory": "<18",
        "originCountry": "Timor-Leste",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 30
    },
    {
        "firstName": "Guillermina",
        "surname": "Joyner",
        "ageCategory": ">60",
        "originCountry": "Belize",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 2
    },
    {
        "firstName": "Nalika",
        "surname": "Burkhardt",
        "ageCategory": ">60",
        "originCountry": "Portugal",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 31
    },
    {
        "firstName": "Wendy",
        "surname": "Chandrasekahran",
        "ageCategory": "35-60",
        "originCountry": "Belgium",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 41
    },
    {
        "firstName": "Deanna",
        "surname": "Johnston",
        "ageCategory": "35-60",
        "originCountry": "Montserrat",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 23
    },
    {
        "firstName": "Debra",
        "surname": "Cavalier",
        "ageCategory": "35-60",
        "originCountry": "Brunei Darussalam",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 23
    },
    {
        "firstName": "Joslyn",
        "surname": "Planty",
        "ageCategory": "18-35",
        "originCountry": "Guatemala",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 5
    },
    {
        "firstName": "Pete",
        "surname": "Panovich",
        "ageCategory": "18-35",
        "originCountry": "Saint Vincent and the Grenadines",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 15
    },
    {
        "firstName": "Virgis",
        "surname": "Petrie",
        "ageCategory": ">60",
        "originCountry": "Saint Lucia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 1
    },
    {
        "firstName": "Scort",
        "surname": "Presas",
        "ageCategory": "35-60",
        "originCountry": "Iraq",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 37
    },
    {
        "firstName": "Brad",
        "surname": "Jezak",
        "ageCategory": "<18",
        "originCountry": "Macedonia (the former Yugoslav Republic of)",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 43
    },
    {
        "firstName": "Hazel",
        "surname": "Schuplin",
        "ageCategory": "35-60",
        "originCountry": "Israel",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 11
    },
    {
        "firstName": "Hae-Yong",
        "surname": "Wild",
        "ageCategory": ">60",
        "originCountry": "Panama",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 2
    },
    {
        "firstName": "Keisha",
        "surname": "Nabors",
        "ageCategory": "35-60",
        "originCountry": "Ukraine",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 15
    },
    {
        "firstName": "Magdalena",
        "surname": "Campos",
        "ageCategory": "<18",
        "originCountry": "New Caledonia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 3
    },
    {
        "firstName": "Signia",
        "surname": "Tran",
        "ageCategory": "<18",
        "originCountry": "Bhutan",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 30
    },
    {
        "firstName": "Bingmei",
        "surname": "Majewski",
        "ageCategory": "<18",
        "originCountry": "Uzbekistan",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 47
    },
    {
        "firstName": "Cheryll",
        "surname": "Elmer",
        "ageCategory": "<18",
        "originCountry": "United States Minor Outlying Islands",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 0
    },
    {
        "firstName": "Cavanaugh",
        "surname": "Demarco",
        "ageCategory": "18-35",
        "originCountry": "Heard Island and McDonald Islands",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 6
    },
    {
        "firstName": "Parva",
        "surname": "Henke",
        "ageCategory": "18-35",
        "originCountry": "Portugal",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 26
    },
    {
        "firstName": "Bradley",
        "surname": "Ekekwe",
        "ageCategory": "35-60",
        "originCountry": "Congo",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 5
    },
    {
        "firstName": "Milton",
        "surname": "Wurttemberg",
        "ageCategory": "<18",
        "originCountry": "Northern Mariana Islands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 9
    },
    {
        "firstName": "Harold",
        "surname": "Bashford",
        "ageCategory": "35-60",
        "originCountry": "Portugal",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 45
    },
    {
        "firstName": "Ian",
        "surname": "Walstead",
        "ageCategory": ">60",
        "originCountry": "Paraguay",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 8
    },
    {
        "firstName": "Alesia",
        "surname": "Tubbytelly",
        "ageCategory": "35-60",
        "originCountry": "Falkland Islands (Malvinas)",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 35
    },
    {
        "firstName": "Karen",
        "surname": "Obermann",
        "ageCategory": ">60",
        "originCountry": "Canada",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 9
    },
    {
        "firstName": "Giuseppe",
        "surname": "Kreigler",
        "ageCategory": "35-60",
        "originCountry": "Belgium",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 45
    },
    {
        "firstName": "Jacob",
        "surname": "Calo",
        "ageCategory": ">60",
        "originCountry": "Western Sahara",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 16
    },
    {
        "firstName": "Napoleon",
        "surname": "Stafford",
        "ageCategory": ">60",
        "originCountry": "Israel",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 22
    },
    {
        "firstName": "Zhanna",
        "surname": "Hatton",
        "ageCategory": "35-60",
        "originCountry": "Latvia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 35
    },
    {
        "firstName": "Maira",
        "surname": "Peyton",
        "ageCategory": "35-60",
        "originCountry": "Bahrain",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 0
    },
    {
        "firstName": "Verlinda",
        "surname": "Pagnozzi",
        "ageCategory": "<18",
        "originCountry": "Nicaragua",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 29
    },
    {
        "firstName": "Shanna",
        "surname": "Proia",
        "ageCategory": "35-60",
        "originCountry": "Nicaragua",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 42
    },
    {
        "firstName": "Kate",
        "surname": "Zhu",
        "ageCategory": "<18",
        "originCountry": "San Marino",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 29
    },
    {
        "firstName": "Sharmistha",
        "surname": "Sapp",
        "ageCategory": "<18",
        "originCountry": "Cocos (Keeling) Islands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 48
    },
    {
        "firstName": "Douglass",
        "surname": "Schwartzberg",
        "ageCategory": "18-35",
        "originCountry": "Bouvet Island",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 20
    },
    {
        "firstName": "Janis",
        "surname": "Godwin",
        "ageCategory": "<18",
        "originCountry": "France",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 8
    },
    {
        "firstName": "Lisa",
        "surname": "Walls",
        "ageCategory": "<18",
        "originCountry": "Israel",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 23
    },
    {
        "firstName": "Nathaniel",
        "surname": "Griebel",
        "ageCategory": "35-60",
        "originCountry": "Korea (Republic of)",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 21
    },
    {
        "firstName": "Roberta",
        "surname": "Frederick",
        "ageCategory": ">60",
        "originCountry": "Saint Barthélemy",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 43
    },
    {
        "firstName": "Munazza",
        "surname": "Stutzman",
        "ageCategory": ">60",
        "originCountry": "Lebanon",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 37
    },
    {
        "firstName": "Annette",
        "surname": "Freund",
        "ageCategory": ">60",
        "originCountry": "Egypt",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 17
    },
    {
        "firstName": "Mallika",
        "surname": "Blankenship",
        "ageCategory": ">60",
        "originCountry": "Nauru",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 18
    },
    {
        "firstName": "Sheila",
        "surname": "Packard",
        "ageCategory": "18-35",
        "originCountry": "Micronesia (Federated States of)",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 19
    },
    {
        "firstName": "Nauman",
        "surname": "Kehr",
        "ageCategory": "35-60",
        "originCountry": "Denmark",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 45
    },
    {
        "firstName": "Yolunda",
        "surname": "Clark",
        "ageCategory": "35-60",
        "originCountry": "Ireland",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 16
    },
    {
        "firstName": "Cely",
        "surname": "Kovich",
        "ageCategory": ">60",
        "originCountry": "French Southern Territories",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 12
    },
    {
        "firstName": "Glenn",
        "surname": "Josey",
        "ageCategory": "18-35",
        "originCountry": "Japan",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 32
    },
    {
        "firstName": "Adreta",
        "surname": "Kornation",
        "ageCategory": "<18",
        "originCountry": "Belgium",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 50
    },
    {
        "firstName": "Josephine",
        "surname": "Santana",
        "ageCategory": ">60",
        "originCountry": "Mali",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 27
    },
    {
        "firstName": "Artina",
        "surname": "Delellis",
        "ageCategory": "18-35",
        "originCountry": "Saint Vincent and the Grenadines",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 50
    },
    {
        "firstName": "Gabriel",
        "surname": "Packard",
        "ageCategory": "<18",
        "originCountry": "Panama",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 24
    },
    {
        "firstName": "Miriam",
        "surname": "Gaylord",
        "ageCategory": ">60",
        "originCountry": "Norfolk Island",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 48
    },
    {
        "firstName": "Melanie",
        "surname": "Joslin",
        "ageCategory": ">60",
        "originCountry": "Antarctica",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 27
    },
    {
        "firstName": "Wanda",
        "surname": "Mcinvale",
        "ageCategory": "18-35",
        "originCountry": "Virgin Islands (British)",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 23
    },
    {
        "firstName": "Krystal",
        "surname": "Donaldson",
        "ageCategory": ">60",
        "originCountry": "Syrian Arab Republic",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 45
    },
    {
        "firstName": "Vicky",
        "surname": "Sueri",
        "ageCategory": "35-60",
        "originCountry": "Suriname",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 50
    },
    {
        "firstName": "Scort",
        "surname": "Antunes",
        "ageCategory": ">60",
        "originCountry": "Italy",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 40
    },
    {
        "firstName": "Sheri",
        "surname": "Dehaven",
        "ageCategory": "35-60",
        "originCountry": "Armenia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 32
    },
    {
        "firstName": "Rebecca",
        "surname": "Myers",
        "ageCategory": "<18",
        "originCountry": "Rwanda",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 25
    },
    {
        "firstName": "Cori",
        "surname": "Ingle",
        "ageCategory": "35-60",
        "originCountry": "Colombia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 11
    },
    {
        "firstName": "Aesha",
        "surname": "Szewczuk",
        "ageCategory": "18-35",
        "originCountry": "Zimbabwe",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 27
    },
    {
        "firstName": "Rocelyn",
        "surname": "Lees",
        "ageCategory": "35-60",
        "originCountry": "Ukraine",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 6
    },
    {
        "firstName": "Ludmila",
        "surname": "Gage",
        "ageCategory": "<18",
        "originCountry": "Christmas Island",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 46
    },
    {
        "firstName": "Latina",
        "surname": "Bastian",
        "ageCategory": "<18",
        "originCountry": "Russian Federation",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 3
    },
    {
        "firstName": "Kefeng",
        "surname": "Dunlap",
        "ageCategory": "18-35",
        "originCountry": "Montenegro",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 18
    },
    {
        "firstName": "Aminata",
        "surname": "Beverage",
        "ageCategory": "<18",
        "originCountry": "Latvia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 38
    },
    {
        "firstName": "Althea",
        "surname": "Burnett",
        "ageCategory": "35-60",
        "originCountry": "Guadeloupe",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 9
    },
    {
        "firstName": "Clare",
        "surname": "Reggio",
        "ageCategory": "18-35",
        "originCountry": "British Indian Ocean Territory",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 34
    },
    {
        "firstName": "Christopher",
        "surname": "Tinker",
        "ageCategory": "35-60",
        "originCountry": "Mozambique",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 43
    },
    {
        "firstName": "Colette",
        "surname": "Mazza",
        "ageCategory": "35-60",
        "originCountry": "British Indian Ocean Territory",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 15
    },
    {
        "firstName": "Miyanda",
        "surname": "Atheya",
        "ageCategory": "35-60",
        "originCountry": "Serbia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 21
    },
    {
        "firstName": "Veneta",
        "surname": "Ciborowski",
        "ageCategory": ">60",
        "originCountry": "Jordan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 38
    },
    {
        "firstName": "Miroslava",
        "surname": "Schemanski",
        "ageCategory": "18-35",
        "originCountry": "Bonaire, Sint Eustatius and Saba",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 45
    },
    {
        "firstName": "Sharon",
        "surname": "Lindsay",
        "ageCategory": ">60",
        "originCountry": "Guinea",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 41
    },
    {
        "firstName": "Marty",
        "surname": "Blalock",
        "ageCategory": ">60",
        "originCountry": "Tanzania, United Republic of",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 30
    },
    {
        "firstName": "Melgema",
        "surname": "Watson",
        "ageCategory": "35-60",
        "originCountry": "American Samoa",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 36
    },
    {
        "firstName": "Edith",
        "surname": "Roy",
        "ageCategory": "<18",
        "originCountry": "Nicaragua",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 1
    },
    {
        "firstName": "Wesley",
        "surname": "Pitzel",
        "ageCategory": ">60",
        "originCountry": "Christmas Island",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 6
    },
    {
        "firstName": "Oren",
        "surname": "Bruce",
        "ageCategory": "18-35",
        "originCountry": "Cyprus",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 39
    },
    {
        "firstName": "Nicolas",
        "surname": "Mooney",
        "ageCategory": "<18",
        "originCountry": "Sierra Leone",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 17
    },
    {
        "firstName": "Joan",
        "surname": "Reviews",
        "ageCategory": "<18",
        "originCountry": "Chile",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 42
    },
    {
        "firstName": "Tinesa",
        "surname": "Gladue",
        "ageCategory": ">60",
        "originCountry": "Cocos (Keeling) Islands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 11
    },
    {
        "firstName": "Jennifer",
        "surname": "Colin",
        "ageCategory": "35-60",
        "originCountry": "Saudi Arabia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 11
    },
    {
        "firstName": "Halina",
        "surname": "Sam",
        "ageCategory": ">60",
        "originCountry": "Central African Republic",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 32
    },
    {
        "firstName": "Theodore",
        "surname": "Dech",
        "ageCategory": "18-35",
        "originCountry": "Jamaica",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 33
    },
    {
        "firstName": "Yiming",
        "surname": "Waldman",
        "ageCategory": "18-35",
        "originCountry": "Indonesia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 20
    },
    {
        "firstName": "Demetrius",
        "surname": "Roth",
        "ageCategory": "<18",
        "originCountry": "Honduras",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 2
    },
    {
        "firstName": "Willie",
        "surname": "Wing",
        "ageCategory": "<18",
        "originCountry": "Finland",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 14
    },
    {
        "firstName": "Nakia",
        "surname": "Laiuppa",
        "ageCategory": "<18",
        "originCountry": "Burkina Faso",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 2
    },
    {
        "firstName": "Verna",
        "surname": "Beverage",
        "ageCategory": ">60",
        "originCountry": "Bhutan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 30
    },
    {
        "firstName": "Kefeng",
        "surname": "Whitham",
        "ageCategory": "35-60",
        "originCountry": "Bahamas",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 10
    },
    {
        "firstName": "Vivian",
        "surname": "Kirk",
        "ageCategory": ">60",
        "originCountry": "Pakistan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 17
    },
    {
        "firstName": "Trinelveli",
        "surname": "Plunkett",
        "ageCategory": "18-35",
        "originCountry": "Isle of Man",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 16
    },
    {
        "firstName": "Johanan",
        "surname": "Sherman",
        "ageCategory": "18-35",
        "originCountry": "Taiwan, Province of China",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 20
    },
    {
        "firstName": "Sherese",
        "surname": "Gardana",
        "ageCategory": "35-60",
        "originCountry": "Norway",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 50
    },
    {
        "firstName": "Ahmad",
        "surname": "Guindin",
        "ageCategory": "<18",
        "originCountry": "Guyana",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 21
    },
    {
        "firstName": "Verlinda",
        "surname": "Grubbs",
        "ageCategory": "35-60",
        "originCountry": "Viet Nam",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 13
    },
    {
        "firstName": "Joslyn",
        "surname": "Sherwood",
        "ageCategory": "35-60",
        "originCountry": "Guinea-Bissau",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 28
    },
    {
        "firstName": "Bilal",
        "surname": "Gerhard",
        "ageCategory": "35-60",
        "originCountry": "Belize",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 46
    },
    {
        "firstName": "Emilia",
        "surname": "Casey",
        "ageCategory": "35-60",
        "originCountry": "Holy See",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 45
    },
    {
        "firstName": "Loknath",
        "surname": "Fatchett",
        "ageCategory": "18-35",
        "originCountry": "Guyana",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 17
    },
    {
        "firstName": "Beverly",
        "surname": "Golaner",
        "ageCategory": "18-35",
        "originCountry": "Greenland",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 47
    },
    {
        "firstName": "Pablo",
        "surname": "Benson",
        "ageCategory": ">60",
        "originCountry": "Croatia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 46
    },
    {
        "firstName": "Aubrey",
        "surname": "Maclatchie",
        "ageCategory": "35-60",
        "originCountry": "Malta",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 13
    },
    {
        "firstName": "Charlyne",
        "surname": "Jellison",
        "ageCategory": "18-35",
        "originCountry": "Iceland",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 29
    },
    {
        "firstName": "Saima",
        "surname": "Fultz",
        "ageCategory": "35-60",
        "originCountry": "Samoa",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 45
    },
    {
        "firstName": "Signia",
        "surname": "Ulvestad",
        "ageCategory": ">60",
        "originCountry": "Korea (Republic of)",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 23
    },
    {
        "firstName": "Janeen",
        "surname": "Norris",
        "ageCategory": "18-35",
        "originCountry": "Viet Nam",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 14
    },
    {
        "firstName": "Curtis",
        "surname": "Cross",
        "ageCategory": "35-60",
        "originCountry": "Belize",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 30
    },
    {
        "firstName": "Emil",
        "surname": "Manning",
        "ageCategory": "<18",
        "originCountry": "Norway",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 46
    },
    {
        "firstName": "Yelena",
        "surname": "Siflinger",
        "ageCategory": "35-60",
        "originCountry": "Bahrain",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 26
    },
    {
        "firstName": "Angelina",
        "surname": "Kieras",
        "ageCategory": ">60",
        "originCountry": "Jordan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 23
    },
    {
        "firstName": "Patricia",
        "surname": "Hesler",
        "ageCategory": "35-60",
        "originCountry": "Norway",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 32
    },
    {
        "firstName": "Jacob",
        "surname": "Marshall",
        "ageCategory": ">60",
        "originCountry": "Chad",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 14
    },
    {
        "firstName": "Richmond",
        "surname": "Harrison",
        "ageCategory": "18-35",
        "originCountry": "Micronesia (Federated States of)",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 40
    },
    {
        "firstName": "Kurtis",
        "surname": "Robinson",
        "ageCategory": "35-60",
        "originCountry": "Russian Federation",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 5
    },
    {
        "firstName": "Vernita",
        "surname": "Nabors",
        "ageCategory": "<18",
        "originCountry": "Malawi",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 12
    },
    {
        "firstName": "LaFaye",
        "surname": "Catania",
        "ageCategory": "35-60",
        "originCountry": "Barbados",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 7
    },
    {
        "firstName": "Roya",
        "surname": "Widenmier",
        "ageCategory": "35-60",
        "originCountry": "Macedonia (the former Yugoslav Republic of)",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 9
    },
    {
        "firstName": "Puranjay",
        "surname": "Ahmad",
        "ageCategory": ">60",
        "originCountry": "Azerbaijan",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 11
    },
    {
        "firstName": "Maya",
        "surname": "Kaa",
        "ageCategory": "<18",
        "originCountry": "British Indian Ocean Territory",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 28
    },
    {
        "firstName": "Tijana",
        "surname": "Chang",
        "ageCategory": "<18",
        "originCountry": "Mali",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 39
    },
    {
        "firstName": "Carol",
        "surname": "Beringer",
        "ageCategory": "18-35",
        "originCountry": "Nepal",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 34
    },
    {
        "firstName": "Puranjay",
        "surname": "Siecke",
        "ageCategory": ">60",
        "originCountry": "Papua New Guinea",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 8
    },
    {
        "firstName": "Ammon",
        "surname": "Coffell",
        "ageCategory": "18-35",
        "originCountry": "United Kingdom of Great Britain and Northern Ireland",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 16
    },
    {
        "firstName": "Margaret",
        "surname": "Ghiselli",
        "ageCategory": "<18",
        "originCountry": "Hungary",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 50
    },
    {
        "firstName": "Biliqis",
        "surname": "Reviews",
        "ageCategory": "35-60",
        "originCountry": "Burundi",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 35
    },
    {
        "firstName": "Noor",
        "surname": "Ponthieux",
        "ageCategory": ">60",
        "originCountry": "Algeria",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 46
    },
    {
        "firstName": "Frank",
        "surname": "Siecke",
        "ageCategory": "<18",
        "originCountry": "Venezuela (Bolivarian Republic of)",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 36
    },
    {
        "firstName": "Shihong",
        "surname": "Lucas",
        "ageCategory": "18-35",
        "originCountry": "Congo (Democratic Republic of the)",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 42
    },
    {
        "firstName": "Aman",
        "surname": "Terrill",
        "ageCategory": "<18",
        "originCountry": "Lebanon",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 42
    },
    {
        "firstName": "Yolanda",
        "surname": "Guilfoyle",
        "ageCategory": "<18",
        "originCountry": "Iceland",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 10
    },
    {
        "firstName": "Dwarika",
        "surname": "Settle",
        "ageCategory": ">60",
        "originCountry": "Montserrat",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 48
    },
    {
        "firstName": "Linda",
        "surname": "Fox",
        "ageCategory": "35-60",
        "originCountry": "Czech Republic",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 42
    },
    {
        "firstName": "Darnecia",
        "surname": "Keltner",
        "ageCategory": ">60",
        "originCountry": "Costa Rica",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 38
    },
    {
        "firstName": "Aisha",
        "surname": "Maddalone",
        "ageCategory": ">60",
        "originCountry": "Virgin Islands (British)",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 43
    },
    {
        "firstName": "Paul",
        "surname": "Etheridge",
        "ageCategory": "35-60",
        "originCountry": "Jordan",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 11
    },
    {
        "firstName": "Eva",
        "surname": "Royer",
        "ageCategory": "18-35",
        "originCountry": "Brunei Darussalam",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 5
    },
    {
        "firstName": "Stephanie",
        "surname": "Beebe",
        "ageCategory": "<18",
        "originCountry": "Syrian Arab Republic",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 9
    },
    {
        "firstName": "Leticia",
        "surname": "Gleason",
        "ageCategory": "<18",
        "originCountry": "Mauritius",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 26
    },
    {
        "firstName": "Marzee",
        "surname": "Chenevert",
        "ageCategory": ">60",
        "originCountry": "Israel",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 17
    },
    {
        "firstName": "Grace",
        "surname": "Robertd",
        "ageCategory": "35-60",
        "originCountry": "Andorra",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 18
    },
    {
        "firstName": "Brian",
        "surname": "Peltier",
        "ageCategory": "<18",
        "originCountry": "Somalia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 42
    },
    {
        "firstName": "Ghaffar",
        "surname": "Pento",
        "ageCategory": "<18",
        "originCountry": "Czech Republic",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 19
    },
    {
        "firstName": "Tricia",
        "surname": "Partridge",
        "ageCategory": "<18",
        "originCountry": "Antarctica",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 31
    },
    {
        "firstName": "Ali",
        "surname": "Leonard",
        "ageCategory": "18-35",
        "originCountry": "Western Sahara",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 24
    },
    {
        "firstName": "Barbara",
        "surname": "Damiano",
        "ageCategory": ">60",
        "originCountry": "Papua New Guinea",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 35
    },
    {
        "firstName": "Tracie",
        "surname": "Sobel",
        "ageCategory": "<18",
        "originCountry": "Guinea-Bissau",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 29
    },
    {
        "firstName": "Amir",
        "surname": "Kelley",
        "ageCategory": "<18",
        "originCountry": "Palau",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 46
    },
    {
        "firstName": "Cecelia",
        "surname": "Brennan",
        "ageCategory": "18-35",
        "originCountry": "Ghana",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 13
    },
    {
        "firstName": "Fang",
        "surname": "Erica",
        "ageCategory": "<18",
        "originCountry": "Finland",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 48
    },
    {
        "firstName": "Asha",
        "surname": "Rochester",
        "ageCategory": "18-35",
        "originCountry": "Vanuatu",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 12
    },
    {
        "firstName": "Nona",
        "surname": "Martin",
        "ageCategory": "35-60",
        "originCountry": "Romania",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 42
    },
    {
        "firstName": "Sigrid",
        "surname": "Nabors",
        "ageCategory": "18-35",
        "originCountry": "Samoa",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 50
    },
    {
        "firstName": "Clarence",
        "surname": "Tran",
        "ageCategory": "35-60",
        "originCountry": "Monaco",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 37
    },
    {
        "firstName": "Weili",
        "surname": "Eckhart",
        "ageCategory": "35-60",
        "originCountry": "Brazil",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 41
    },
    {
        "firstName": "Cheryl",
        "surname": "Speck",
        "ageCategory": "18-35",
        "originCountry": "Guadeloupe",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 5
    },
    {
        "firstName": "Marina",
        "surname": "Keaton",
        "ageCategory": "18-35",
        "originCountry": "Eritrea",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 13
    },
    {
        "firstName": "Shaun",
        "surname": "Schnell",
        "ageCategory": "<18",
        "originCountry": "Iceland",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 38
    },
    {
        "firstName": "Gus",
        "surname": "Whisler",
        "ageCategory": "<18",
        "originCountry": "Saint Vincent and the Grenadines",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 11
    },
    {
        "firstName": "Nidal",
        "surname": "Snyder",
        "ageCategory": "18-35",
        "originCountry": "Lesotho",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 48
    },
    {
        "firstName": "Michael",
        "surname": "Robinson",
        "ageCategory": "35-60",
        "originCountry": "Rwanda",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 4
    },
    {
        "firstName": "Sheba",
        "surname": "Souther",
        "ageCategory": ">60",
        "originCountry": "Cocos (Keeling) Islands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 40
    },
    {
        "firstName": "Clyde",
        "surname": "Schneider",
        "ageCategory": "35-60",
        "originCountry": "Paraguay",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 19
    },
    {
        "firstName": "Clarence",
        "surname": "Pacheco",
        "ageCategory": ">60",
        "originCountry": "Ghana",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 22
    },
    {
        "firstName": "Marla",
        "surname": "Petroski",
        "ageCategory": "<18",
        "originCountry": "Chile",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 37
    },
    {
        "firstName": "Ayeola",
        "surname": "Siegel",
        "ageCategory": "<18",
        "originCountry": "Monaco",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 44
    },
    {
        "firstName": "Danka",
        "surname": "Winder",
        "ageCategory": "<18",
        "originCountry": "Dominican Republic",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 48
    },
    {
        "firstName": "Sharad",
        "surname": "York",
        "ageCategory": "35-60",
        "originCountry": "French Southern Territories",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 26
    },
    {
        "firstName": "Oren",
        "surname": "Platt",
        "ageCategory": "18-35",
        "originCountry": "Tajikistan",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 41
    },
    {
        "firstName": "Cathy",
        "surname": "Sari",
        "ageCategory": "<18",
        "originCountry": "Turks and Caicos Islands",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 24
    },
    {
        "firstName": "John",
        "surname": "Prezzavento",
        "ageCategory": "35-60",
        "originCountry": "Fiji",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 45
    },
    {
        "firstName": "Zhanna",
        "surname": "Kaa",
        "ageCategory": "18-35",
        "originCountry": "Tajikistan",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 39
    },
    {
        "firstName": "Abraham",
        "surname": "Hayes",
        "ageCategory": "35-60",
        "originCountry": "Niue",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 23
    },
    {
        "firstName": "Mirza",
        "surname": "Kramarsky",
        "ageCategory": "18-35",
        "originCountry": "Luxembourg",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 43
    },
    {
        "firstName": "Samir",
        "surname": "Stroll",
        "ageCategory": "18-35",
        "originCountry": "Anguilla",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 11
    },
    {
        "firstName": "Jezus",
        "surname": "Price",
        "ageCategory": "<18",
        "originCountry": "Mauritius",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 10
    },
    {
        "firstName": "Norma",
        "surname": "Dixon",
        "ageCategory": "<18",
        "originCountry": "Sierra Leone",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 1
    },
    {
        "firstName": "Janis",
        "surname": "Neff",
        "ageCategory": ">60",
        "originCountry": "Nigeria",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 14
    },
    {
        "firstName": "Darius",
        "surname": "Ormond",
        "ageCategory": "<18",
        "originCountry": "Lesotho",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 1
    },
    {
        "firstName": "Toula",
        "surname": "Packard",
        "ageCategory": "<18",
        "originCountry": "Bhutan",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 0
    },
    {
        "firstName": "Guy",
        "surname": "Hammant",
        "ageCategory": "35-60",
        "originCountry": "Sri Lanka",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 19
    },
    {
        "firstName": "Susi",
        "surname": "Mcinvale",
        "ageCategory": ">60",
        "originCountry": "Rwanda",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 5
    },
    {
        "firstName": "Minhajuddin",
        "surname": "Laventure",
        "ageCategory": ">60",
        "originCountry": "Iraq",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 9
    },
    {
        "firstName": "Joann",
        "surname": "Lucas",
        "ageCategory": ">60",
        "originCountry": "Morocco",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 14
    },
    {
        "firstName": "Mickey",
        "surname": "Suchland",
        "ageCategory": "<18",
        "originCountry": "Rwanda",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 43
    },
    {
        "firstName": "Kamal",
        "surname": "Collier",
        "ageCategory": ">60",
        "originCountry": "Netherlands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 5
    },
    {
        "firstName": "Nate",
        "surname": "Cone",
        "ageCategory": "18-35",
        "originCountry": "Belarus",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 0
    },
    {
        "firstName": "Jodie",
        "surname": "Bernstein",
        "ageCategory": "<18",
        "originCountry": "Syrian Arab Republic",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 26
    },
    {
        "firstName": "Nakia",
        "surname": "Tan",
        "ageCategory": ">60",
        "originCountry": "Cyprus",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 47
    },
    {
        "firstName": "Luping",
        "surname": "Loudin",
        "ageCategory": "35-60",
        "originCountry": "Iceland",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 47
    },
    {
        "firstName": "Robbie",
        "surname": "Nordby",
        "ageCategory": "18-35",
        "originCountry": "Kazakhstan",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 42
    },
    {
        "firstName": "Bryan",
        "surname": "Gardana",
        "ageCategory": ">60",
        "originCountry": "French Guiana",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 38
    },
    {
        "firstName": "Lorraine",
        "surname": "Oxman",
        "ageCategory": "35-60",
        "originCountry": "Tanzania, United Republic of",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 5
    },
    {
        "firstName": "Culveretta",
        "surname": "Trautman",
        "ageCategory": "35-60",
        "originCountry": "Burundi",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 45
    },
    {
        "firstName": "LaNisha",
        "surname": "Aviles",
        "ageCategory": "35-60",
        "originCountry": "Germany",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 45
    },
    {
        "firstName": "Hiam",
        "surname": "Fraley",
        "ageCategory": ">60",
        "originCountry": "Finland",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 27
    },
    {
        "firstName": "Eva",
        "surname": "Steele",
        "ageCategory": "18-35",
        "originCountry": "Mozambique",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 3
    },
    {
        "firstName": "Coralas",
        "surname": "Mitu",
        "ageCategory": ">60",
        "originCountry": "United States of America",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 26
    },
    {
        "firstName": "Tamika",
        "surname": "Dupuy",
        "ageCategory": ">60",
        "originCountry": "Bulgaria",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 40
    },
    {
        "firstName": "Aisha",
        "surname": "Filleul",
        "ageCategory": "<18",
        "originCountry": "Kuwait",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 16
    },
    {
        "firstName": "Holli",
        "surname": "Bearden",
        "ageCategory": "<18",
        "originCountry": "Cocos (Keeling) Islands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 10
    },
    {
        "firstName": "Gilbert",
        "surname": "Nuccio",
        "ageCategory": "<18",
        "originCountry": "Uzbekistan",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 27
    },
    {
        "firstName": "Shanna",
        "surname": "Hutchings",
        "ageCategory": "<18",
        "originCountry": "Japan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 43
    },
    {
        "firstName": "Roland",
        "surname": "Schlottman",
        "ageCategory": "<18",
        "originCountry": "El Salvador",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 23
    },
    {
        "firstName": "Karla",
        "surname": "Antunes",
        "ageCategory": "<18",
        "originCountry": "Falkland Islands (Malvinas)",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 38
    },
    {
        "firstName": "Josephine",
        "surname": "Batson",
        "ageCategory": ">60",
        "originCountry": "Tonga",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 35
    },
    {
        "firstName": "Mihai",
        "surname": "Griffeeney",
        "ageCategory": "35-60",
        "originCountry": "Tunisia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 46
    },
    {
        "firstName": "Ammon",
        "surname": "Burkland",
        "ageCategory": ">60",
        "originCountry": "Uzbekistan",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 24
    },
    {
        "firstName": "Joseph",
        "surname": "Daniello",
        "ageCategory": "<18",
        "originCountry": "Mauritius",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 21
    },
    {
        "firstName": "Huijun",
        "surname": "Feger",
        "ageCategory": "18-35",
        "originCountry": "Russian Federation",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 40
    },
    {
        "firstName": "Joy",
        "surname": "Breeland",
        "ageCategory": "35-60",
        "originCountry": "Anguilla",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 16
    },
    {
        "firstName": "Sonny",
        "surname": "Mcalevey",
        "ageCategory": "35-60",
        "originCountry": "Chile",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 1
    },
    {
        "firstName": "Frank",
        "surname": "Bartleson",
        "ageCategory": "35-60",
        "originCountry": "Saint Barthélemy",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 39
    },
    {
        "firstName": "Emilia",
        "surname": "Bryson",
        "ageCategory": "35-60",
        "originCountry": "Montenegro",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 19
    },
    {
        "firstName": "Wayne",
        "surname": "Larue",
        "ageCategory": ">60",
        "originCountry": "Mali",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 31
    },
    {
        "firstName": "Minnita",
        "surname": "Finn",
        "ageCategory": ">60",
        "originCountry": "Bolivia (Plurinational State of)",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 24
    },
    {
        "firstName": "Vida",
        "surname": "Geisbauer",
        "ageCategory": ">60",
        "originCountry": "Estonia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 6
    },
    {
        "firstName": "Brad",
        "surname": "Frame",
        "ageCategory": "18-35",
        "originCountry": "Lesotho",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 26
    },
    {
        "firstName": "Despina",
        "surname": "Puri",
        "ageCategory": "<18",
        "originCountry": "Uzbekistan",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 32
    },
    {
        "firstName": "Kameko",
        "surname": "Hawkins",
        "ageCategory": "18-35",
        "originCountry": "Romania",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 37
    },
    {
        "firstName": "Vasilis",
        "surname": "Brenner",
        "ageCategory": "35-60",
        "originCountry": "Lesotho",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 47
    },
    {
        "firstName": "Monika",
        "surname": "Devine",
        "ageCategory": ">60",
        "originCountry": "Guam",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 23
    },
    {
        "firstName": "Jerrod",
        "surname": "Little",
        "ageCategory": ">60",
        "originCountry": "Switzerland",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 48
    },
    {
        "firstName": "Reginald",
        "surname": "Chamberlain",
        "ageCategory": "<18",
        "originCountry": "Hong Kong",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 31
    },
    {
        "firstName": "Danny",
        "surname": "Llaneza",
        "ageCategory": ">60",
        "originCountry": "Montenegro",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 15
    },
    {
        "firstName": "Robert",
        "surname": "Tippit",
        "ageCategory": ">60",
        "originCountry": "Algeria",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 48
    },
    {
        "firstName": "Asher",
        "surname": "Cozad",
        "ageCategory": "<18",
        "originCountry": "Syrian Arab Republic",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 12
    },
    {
        "firstName": "Josh",
        "surname": "Ritchie",
        "ageCategory": "35-60",
        "originCountry": "Cameroon",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 36
    },
    {
        "firstName": "Kaiti",
        "surname": "Krebs",
        "ageCategory": "<18",
        "originCountry": "Fiji",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 27
    },
    {
        "firstName": "Gayle",
        "surname": "Abelson",
        "ageCategory": "18-35",
        "originCountry": "Israel",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 29
    },
    {
        "firstName": "Magdalena",
        "surname": "Smyth",
        "ageCategory": "35-60",
        "originCountry": "Western Sahara",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 30
    },
    {
        "firstName": "Josephine",
        "surname": "Drolet",
        "ageCategory": ">60",
        "originCountry": "Cameroon",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 21
    },
    {
        "firstName": "Nadirah",
        "surname": "Schatz",
        "ageCategory": ">60",
        "originCountry": "Indonesia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 45
    },
    {
        "firstName": "Haytham",
        "surname": "Peyton",
        "ageCategory": ">60",
        "originCountry": "Greece",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 43
    },
    {
        "firstName": "Walter",
        "surname": "Olejnik",
        "ageCategory": "35-60",
        "originCountry": "Poland",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 3
    },
    {
        "firstName": "Neil",
        "surname": "Llaneza",
        "ageCategory": "<18",
        "originCountry": "Holy See",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 49
    },
    {
        "firstName": "Cameron",
        "surname": "Jun",
        "ageCategory": "35-60",
        "originCountry": "Afghanistan",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 35
    },
    {
        "firstName": "Ruben",
        "surname": "Tadeu",
        "ageCategory": "35-60",
        "originCountry": "Isle of Man",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 6
    },
    {
        "firstName": "Victoria",
        "surname": "Holcombe",
        "ageCategory": "35-60",
        "originCountry": "Sudan",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 28
    },
    {
        "firstName": "Theresia",
        "surname": "Medina",
        "ageCategory": ">60",
        "originCountry": "Jersey",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 11
    },
    {
        "firstName": "Natalia",
        "surname": "Calo",
        "ageCategory": "35-60",
        "originCountry": "Fiji",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 41
    },
    {
        "firstName": "Jerry",
        "surname": "Partin",
        "ageCategory": "35-60",
        "originCountry": "Ukraine",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 11
    },
    {
        "firstName": "Ginny",
        "surname": "Ticona",
        "ageCategory": "18-35",
        "originCountry": "Turks and Caicos Islands",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 34
    },
    {
        "firstName": "Luigino",
        "surname": "Vaimauga",
        "ageCategory": "<18",
        "originCountry": "Greenland",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 16
    },
    {
        "firstName": "Furness",
        "surname": "Bookwalter",
        "ageCategory": "<18",
        "originCountry": "Chad",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 7
    },
    {
        "firstName": "Augustine",
        "surname": "Wilcox",
        "ageCategory": "18-35",
        "originCountry": "Ethiopia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 20
    },
    {
        "firstName": "Andrea",
        "surname": "Broughton",
        "ageCategory": "18-35",
        "originCountry": "Pakistan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 48
    },
    {
        "firstName": "Farhad",
        "surname": "Caruso",
        "ageCategory": "<18",
        "originCountry": "South Sudan",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 15
    },
    {
        "firstName": "Jaeho",
        "surname": "Hodgson",
        "ageCategory": "<18",
        "originCountry": "Mauritania",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 21
    },
    {
        "firstName": "Ilona",
        "surname": "Scioscia",
        "ageCategory": "35-60",
        "originCountry": "Saint Lucia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 35
    },
    {
        "firstName": "Val",
        "surname": "Bessko",
        "ageCategory": ">60",
        "originCountry": "Timor-Leste",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 26
    },
    {
        "firstName": "Mallika",
        "surname": "Petrie",
        "ageCategory": ">60",
        "originCountry": "Wallis and Futuna",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 28
    },
    {
        "firstName": "Nathaniel",
        "surname": "Lazcano",
        "ageCategory": "18-35",
        "originCountry": "Gibraltar",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 31
    },
    {
        "firstName": "Elizabeth",
        "surname": "Usgiveaway",
        "ageCategory": "<18",
        "originCountry": "Paraguay",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 18
    },
    {
        "firstName": "Melissa",
        "surname": "Clark",
        "ageCategory": ">60",
        "originCountry": "Guernsey",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 33
    },
    {
        "firstName": "Soledad",
        "surname": "Griebel",
        "ageCategory": "18-35",
        "originCountry": "Denmark",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 1
    },
    {
        "firstName": "Bobby",
        "surname": "Ferguson",
        "ageCategory": ">60",
        "originCountry": "Tonga",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 18
    },
    {
        "firstName": "Atif",
        "surname": "May",
        "ageCategory": "<18",
        "originCountry": "Poland",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 10
    },
    {
        "firstName": "Lucy",
        "surname": "Meyers",
        "ageCategory": ">60",
        "originCountry": "Swaziland",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 19
    },
    {
        "firstName": "Pauline",
        "surname": "Yarber",
        "ageCategory": "18-35",
        "originCountry": "Saint Lucia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 21
    },
    {
        "firstName": "Arnisa",
        "surname": "Easterly",
        "ageCategory": "35-60",
        "originCountry": "Saint Helena, Ascension and Tristan da Cunha",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 15
    },
    {
        "firstName": "Vernita",
        "surname": "Wurttemberg",
        "ageCategory": "<18",
        "originCountry": "Curaçao",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 16
    },
    {
        "firstName": "Jody",
        "surname": "Fultz",
        "ageCategory": "18-35",
        "originCountry": "Haiti",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 46
    },
    {
        "firstName": "Geeta",
        "surname": "Chester",
        "ageCategory": ">60",
        "originCountry": "Italy",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 28
    },
    {
        "firstName": "Mason",
        "surname": "Gerhart",
        "ageCategory": "<18",
        "originCountry": "New Zealand",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 0
    },
    {
        "firstName": "Francine",
        "surname": "Thomas",
        "ageCategory": "35-60",
        "originCountry": "Djibouti",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 1
    },
    {
        "firstName": "Terrance",
        "surname": "Trim",
        "ageCategory": ">60",
        "originCountry": "Congo",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 42
    },
    {
        "firstName": "Matt",
        "surname": "Montilla",
        "ageCategory": "35-60",
        "originCountry": "Lebanon",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 50
    },
    {
        "firstName": "Dina",
        "surname": "Burkholder",
        "ageCategory": "<18",
        "originCountry": "Seychelles",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 44
    },
    {
        "firstName": "Frank",
        "surname": "Mccarthy",
        "ageCategory": "<18",
        "originCountry": "Libya",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 28
    },
    {
        "firstName": "Racquel",
        "surname": "Arnold",
        "ageCategory": "<18",
        "originCountry": "Macao",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 14
    },
    {
        "firstName": "Cristina",
        "surname": "Hambrick",
        "ageCategory": "18-35",
        "originCountry": "Czech Republic",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 23
    },
    {
        "firstName": "Ginger",
        "surname": "Usgiveaway",
        "ageCategory": "<18",
        "originCountry": "Samoa",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 12
    },
    {
        "firstName": "LaShonda",
        "surname": "Robison",
        "ageCategory": "35-60",
        "originCountry": "Hong Kong",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 50
    },
    {
        "firstName": "Kasey",
        "surname": "Brabant",
        "ageCategory": "18-35",
        "originCountry": "Bouvet Island",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 35
    },
    {
        "firstName": "Vaidas",
        "surname": "Bruce",
        "ageCategory": ">60",
        "originCountry": "Jersey",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 0
    },
    {
        "firstName": "Leon",
        "surname": "Fitf",
        "ageCategory": ">60",
        "originCountry": "Armenia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 47
    },
    {
        "firstName": "Jody",
        "surname": "Clements",
        "ageCategory": "<18",
        "originCountry": "Cocos (Keeling) Islands",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 37
    },
    {
        "firstName": "Dorci'A",
        "surname": "Cripps",
        "ageCategory": "18-35",
        "originCountry": "Myanmar",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 21
    },
    {
        "firstName": "Terrance",
        "surname": "Lopez",
        "ageCategory": "<18",
        "originCountry": "Tajikistan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 25
    },
    {
        "firstName": "Lane",
        "surname": "Shay",
        "ageCategory": ">60",
        "originCountry": "Burkina Faso",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 6
    },
    {
        "firstName": "Soledad",
        "surname": "Welsh",
        "ageCategory": "<18",
        "originCountry": "Hong Kong",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 40
    },
    {
        "firstName": "Kash",
        "surname": "Kaiser",
        "ageCategory": "35-60",
        "originCountry": "Latvia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 8
    },
    {
        "firstName": "Rita",
        "surname": "Olsen",
        "ageCategory": "<18",
        "originCountry": "New Zealand",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 9
    },
    {
        "firstName": "Waddie",
        "surname": "Loya",
        "ageCategory": "<18",
        "originCountry": "Kenya",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 44
    },
    {
        "firstName": "Jerrod",
        "surname": "Llc",
        "ageCategory": "35-60",
        "originCountry": "Virgin Islands (British)",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 4
    },
    {
        "firstName": "Jose",
        "surname": "Joachim",
        "ageCategory": ">60",
        "originCountry": "United Kingdom of Great Britain and Northern Ireland",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 48
    },
    {
        "firstName": "Thursday",
        "surname": "Mclaurin",
        "ageCategory": "35-60",
        "originCountry": "Algeria",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 38
    },
    {
        "firstName": "Karen",
        "surname": "Bussey",
        "ageCategory": "<18",
        "originCountry": "France",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 43
    },
    {
        "firstName": "Joaquin",
        "surname": "Gunn",
        "ageCategory": "18-35",
        "originCountry": "Pakistan",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 50
    },
    {
        "firstName": "Shane",
        "surname": "Bogenschneider",
        "ageCategory": "18-35",
        "originCountry": "Guinea-Bissau",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 9
    },
    {
        "firstName": "Byron",
        "surname": "Wurttemberg",
        "ageCategory": "18-35",
        "originCountry": "Saint Kitts and Nevis",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 3
    },
    {
        "firstName": "Laconda",
        "surname": "Mundie",
        "ageCategory": ">60",
        "originCountry": "Holy See",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 33
    },
    {
        "firstName": "Heidi",
        "surname": "Crumbliss",
        "ageCategory": ">60",
        "originCountry": "Colombia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 38
    },
    {
        "firstName": "Donna",
        "surname": "Rodriguez",
        "ageCategory": "18-35",
        "originCountry": "Cambodia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 42
    },
    {
        "firstName": "Tony",
        "surname": "Trrenkler",
        "ageCategory": ">60",
        "originCountry": "Korea (Democratic People's Republic of)",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 25
    },
    {
        "firstName": "Blake",
        "surname": "Barnhorn",
        "ageCategory": "35-60",
        "originCountry": "Pakistan",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 27
    },
    {
        "firstName": "Wazir",
        "surname": "Levy",
        "ageCategory": "18-35",
        "originCountry": "Northern Mariana Islands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 32
    },
    {
        "firstName": "Cerelia",
        "surname": "Davidson",
        "ageCategory": "35-60",
        "originCountry": "Saint Vincent and the Grenadines",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 34
    },
    {
        "firstName": "Dominic",
        "surname": "Salter",
        "ageCategory": ">60",
        "originCountry": "Saint Barthélemy",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 22
    },
    {
        "firstName": "Jaqueline",
        "surname": "Isham",
        "ageCategory": ">60",
        "originCountry": "Argentina",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 16
    },
    {
        "firstName": "Tricia",
        "surname": "Peszynski",
        "ageCategory": "35-60",
        "originCountry": "Algeria",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 8
    },
    {
        "firstName": "George",
        "surname": "Hansen",
        "ageCategory": ">60",
        "originCountry": "Chile",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 24
    },
    {
        "firstName": "Dolores",
        "surname": "Grunert",
        "ageCategory": "<18",
        "originCountry": "Lesotho",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 2
    },
    {
        "firstName": "Corretta",
        "surname": "Northrop",
        "ageCategory": ">60",
        "originCountry": "Guinea",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 31
    },
    {
        "firstName": "Sherrell",
        "surname": "Rice",
        "ageCategory": ">60",
        "originCountry": "China",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 17
    },
    {
        "firstName": "Roseline",
        "surname": "Schwaderer",
        "ageCategory": "<18",
        "originCountry": "Turkmenistan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 20
    },
    {
        "firstName": "Thresa",
        "surname": "Abelson",
        "ageCategory": ">60",
        "originCountry": "Syrian Arab Republic",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 43
    },
    {
        "firstName": "Rachel",
        "surname": "Culaciati",
        "ageCategory": "<18",
        "originCountry": "Guam",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 0
    },
    {
        "firstName": "Toni",
        "surname": "Schuhmann",
        "ageCategory": "<18",
        "originCountry": "Australia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 42
    },
    {
        "firstName": "Stephan",
        "surname": "Helm",
        "ageCategory": "18-35",
        "originCountry": "Finland",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 5
    },
    {
        "firstName": "Gale",
        "surname": "Smyth",
        "ageCategory": "<18",
        "originCountry": "Cocos (Keeling) Islands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 1
    },
    {
        "firstName": "Tilena",
        "surname": "Schoenbauer",
        "ageCategory": "35-60",
        "originCountry": "Saint Barthélemy",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 19
    },
    {
        "firstName": "Marie",
        "surname": "Kimmel",
        "ageCategory": "35-60",
        "originCountry": "Martinique",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 31
    },
    {
        "firstName": "Vanita",
        "surname": "Willman",
        "ageCategory": "35-60",
        "originCountry": "Romania",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 28
    },
    {
        "firstName": "Danella",
        "surname": "Wood",
        "ageCategory": "35-60",
        "originCountry": "United States Minor Outlying Islands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 39
    },
    {
        "firstName": "Sharful",
        "surname": "Hostetler",
        "ageCategory": "35-60",
        "originCountry": "Belize",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 44
    },
    {
        "firstName": "Chad",
        "surname": "Billanti",
        "ageCategory": ">60",
        "originCountry": "Monaco",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 48
    },
    {
        "firstName": "Wei",
        "surname": "Dominique",
        "ageCategory": "35-60",
        "originCountry": "Switzerland",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 40
    },
    {
        "firstName": "Monika",
        "surname": "Khan",
        "ageCategory": ">60",
        "originCountry": "Mongolia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 13
    },
    {
        "firstName": "Cecilia",
        "surname": "Strong",
        "ageCategory": "35-60",
        "originCountry": "Egypt",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 18
    },
    {
        "firstName": "Darius",
        "surname": "Kahlig",
        "ageCategory": ">60",
        "originCountry": "Guernsey",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 9
    },
    {
        "firstName": "Louis",
        "surname": "Suchland",
        "ageCategory": "<18",
        "originCountry": "Kyrgyzstan",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 17
    },
    {
        "firstName": "Raphael",
        "surname": "Painter",
        "ageCategory": "18-35",
        "originCountry": "Czech Republic",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 42
    },
    {
        "firstName": "Bridgett",
        "surname": "Hughes",
        "ageCategory": "18-35",
        "originCountry": "Lithuania",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 37
    },
    {
        "firstName": "Sandeep",
        "surname": "Tippit",
        "ageCategory": "18-35",
        "originCountry": "United States of America",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 18
    },
    {
        "firstName": "Natalie",
        "surname": "Voss",
        "ageCategory": ">60",
        "originCountry": "Bolivia (Plurinational State of)",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 42
    },
    {
        "firstName": "Suanne",
        "surname": "Ellington",
        "ageCategory": ">60",
        "originCountry": "Virgin Islands (British)",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 19
    },
    {
        "firstName": "Tonja",
        "surname": "Cates",
        "ageCategory": ">60",
        "originCountry": "Saint Barthélemy",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 50
    },
    {
        "firstName": "Catherine",
        "surname": "Schwartzberg",
        "ageCategory": "18-35",
        "originCountry": "Viet Nam",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 29
    },
    {
        "firstName": "Shailesh",
        "surname": "Morris",
        "ageCategory": "<18",
        "originCountry": "Egypt",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 25
    },
    {
        "firstName": "Irmaa",
        "surname": "Duffy",
        "ageCategory": "<18",
        "originCountry": "United Arab Emirates",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 19
    },
    {
        "firstName": "Russell",
        "surname": "Ward",
        "ageCategory": "35-60",
        "originCountry": "Greenland",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 32
    },
    {
        "firstName": "Bob",
        "surname": "Sutliff",
        "ageCategory": "18-35",
        "originCountry": "Italy",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 15
    },
    {
        "firstName": "Laurie",
        "surname": "Altschuler",
        "ageCategory": "<18",
        "originCountry": "Slovenia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 28
    },
    {
        "firstName": "Lorena",
        "surname": "Shelton",
        "ageCategory": "18-35",
        "originCountry": "Saint Kitts and Nevis",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 42
    },
    {
        "firstName": "Lorita",
        "surname": "Langfeldt",
        "ageCategory": "18-35",
        "originCountry": "Jamaica",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 11
    },
    {
        "firstName": "Toula",
        "surname": "Gunn",
        "ageCategory": "18-35",
        "originCountry": "Nigeria",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 31
    },
    {
        "firstName": "Miriam",
        "surname": "Entinger",
        "ageCategory": "<18",
        "originCountry": "Tokelau",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 6
    },
    {
        "firstName": "Leon",
        "surname": "Aviles",
        "ageCategory": ">60",
        "originCountry": "Slovakia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 42
    },
    {
        "firstName": "Lavette",
        "surname": "Dibernardinis",
        "ageCategory": "<18",
        "originCountry": "Gabon",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 9
    },
    {
        "firstName": "Junjiang",
        "surname": "Wesley",
        "ageCategory": "18-35",
        "originCountry": "French Guiana",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 30
    },
    {
        "firstName": "Jan",
        "surname": "Cocolla",
        "ageCategory": "18-35",
        "originCountry": "Venezuela (Bolivarian Republic of)",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 24
    },
    {
        "firstName": "Stuart",
        "surname": "Walsh",
        "ageCategory": ">60",
        "originCountry": "Slovenia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 14
    },
    {
        "firstName": "Jerrod",
        "surname": "Radist",
        "ageCategory": "35-60",
        "originCountry": "Latvia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 47
    },
    {
        "firstName": "Asher",
        "surname": "Merritt",
        "ageCategory": "35-60",
        "originCountry": "Virgin Islands (U.S.)",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 10
    },
    {
        "firstName": "Doris",
        "surname": "Pointelin",
        "ageCategory": "35-60",
        "originCountry": "Eritrea",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 24
    },
    {
        "firstName": "Daydria",
        "surname": "Sundell",
        "ageCategory": "<18",
        "originCountry": "British Indian Ocean Territory",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 7
    },
    {
        "firstName": "Clarence",
        "surname": "Katz",
        "ageCategory": ">60",
        "originCountry": "Mayotte",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 2
    },
    {
        "firstName": "Elisha",
        "surname": "Loban",
        "ageCategory": "35-60",
        "originCountry": "Malaysia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 21
    },
    {
        "firstName": "Khosrow",
        "surname": "Marton",
        "ageCategory": "35-60",
        "originCountry": "Maldives",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 21
    },
    {
        "firstName": "Wayne",
        "surname": "Weissmann",
        "ageCategory": ">60",
        "originCountry": "Myanmar",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 24
    },
    {
        "firstName": "Graeme",
        "surname": "Whatley",
        "ageCategory": "<18",
        "originCountry": "Latvia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 31
    },
    {
        "firstName": "Rita",
        "surname": "Grubbs",
        "ageCategory": "18-35",
        "originCountry": "Réunion",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 0
    },
    {
        "firstName": "Meiyin",
        "surname": "Depreta",
        "ageCategory": "35-60",
        "originCountry": "Malaysia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 24
    },
    {
        "firstName": "Ritalerae",
        "surname": "Atkins",
        "ageCategory": "35-60",
        "originCountry": "Dominica",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 0
    },
    {
        "firstName": "Vida",
        "surname": "Pfeiffer",
        "ageCategory": ">60",
        "originCountry": "Libya",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 29
    },
    {
        "firstName": "Sanjay",
        "surname": "Deems",
        "ageCategory": "18-35",
        "originCountry": "British Indian Ocean Territory",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 24
    },
    {
        "firstName": "Ollie",
        "surname": "Holt",
        "ageCategory": ">60",
        "originCountry": "Isle of Man",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 25
    },
    {
        "firstName": "Jeffrey",
        "surname": "Kamdar",
        "ageCategory": "35-60",
        "originCountry": "Macedonia (the former Yugoslav Republic of)",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 28
    },
    {
        "firstName": "Pauline",
        "surname": "Forgey",
        "ageCategory": "<18",
        "originCountry": "Iran (Islamic Republic of)",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 33
    },
    {
        "firstName": "Danyell",
        "surname": "Kish",
        "ageCategory": "35-60",
        "originCountry": "Tanzania, United Republic of",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 6
    },
    {
        "firstName": "Kate",
        "surname": "Siflinger",
        "ageCategory": ">60",
        "originCountry": "Congo",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 26
    },
    {
        "firstName": "Kim",
        "surname": "Kennedy",
        "ageCategory": "<18",
        "originCountry": "Malawi",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 10
    },
    {
        "firstName": "Carl",
        "surname": "Vanatta",
        "ageCategory": "18-35",
        "originCountry": "New Zealand",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 8
    },
    {
        "firstName": "Katherine",
        "surname": "Obara",
        "ageCategory": "35-60",
        "originCountry": "Aruba",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 6
    },
    {
        "firstName": "Diana",
        "surname": "Rende",
        "ageCategory": "18-35",
        "originCountry": "Venezuela (Bolivarian Republic of)",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 32
    },
    {
        "firstName": "Josephine",
        "surname": "Krebs",
        "ageCategory": ">60",
        "originCountry": "Mozambique",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 8
    },
    {
        "firstName": "Denise",
        "surname": "Ptacek",
        "ageCategory": "<18",
        "originCountry": "American Samoa",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 6
    },
    {
        "firstName": "LaNisha",
        "surname": "Almanza",
        "ageCategory": ">60",
        "originCountry": "Eritrea",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 37
    },
    {
        "firstName": "Kyle",
        "surname": "Bristow",
        "ageCategory": ">60",
        "originCountry": "Nicaragua",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 21
    },
    {
        "firstName": "Valeria",
        "surname": "Caudill",
        "ageCategory": "18-35",
        "originCountry": "Cuba",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 5
    },
    {
        "firstName": "Glenn",
        "surname": "Landau",
        "ageCategory": ">60",
        "originCountry": "Poland",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 29
    },
    {
        "firstName": "Ilze",
        "surname": "Immormino",
        "ageCategory": "35-60",
        "originCountry": "Greenland",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 13
    },
    {
        "firstName": "Corey",
        "surname": "Lowe",
        "ageCategory": ">60",
        "originCountry": "Jamaica",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 50
    },
    {
        "firstName": "Dmitry",
        "surname": "Rager",
        "ageCategory": "<18",
        "originCountry": "Serbia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 9
    },
    {
        "firstName": "Nattakarn",
        "surname": "Hill",
        "ageCategory": "18-35",
        "originCountry": "Liberia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 7
    },
    {
        "firstName": "Isaiahretta",
        "surname": "Zuniga",
        "ageCategory": ">60",
        "originCountry": "Viet Nam",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 49
    },
    {
        "firstName": "Tony",
        "surname": "Gann",
        "ageCategory": "35-60",
        "originCountry": "Bosnia and Herzegovina",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 50
    },
    {
        "firstName": "Marie",
        "surname": "Pace",
        "ageCategory": "35-60",
        "originCountry": "Fiji",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 40
    },
    {
        "firstName": "Devon",
        "surname": "Zamora",
        "ageCategory": "<18",
        "originCountry": "Timor-Leste",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 2
    },
    {
        "firstName": "Pat",
        "surname": "Crewell",
        "ageCategory": "35-60",
        "originCountry": "Mozambique",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 26
    },
    {
        "firstName": "Reginald",
        "surname": "Reilly",
        "ageCategory": "<18",
        "originCountry": "Netherlands",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 27
    },
    {
        "firstName": "Marc",
        "surname": "Hill",
        "ageCategory": "<18",
        "originCountry": "Seychelles",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 25
    },
    {
        "firstName": "Willie",
        "surname": "Garbe",
        "ageCategory": "35-60",
        "originCountry": "Georgia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 39
    },
    {
        "firstName": "Coretta",
        "surname": "Garbe",
        "ageCategory": "<18",
        "originCountry": "Georgia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 48
    },
    {
        "firstName": "Denys",
        "surname": "Kavanaugh",
        "ageCategory": ">60",
        "originCountry": "Lesotho",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 3
    },
    {
        "firstName": "Kasey",
        "surname": "Lyden",
        "ageCategory": "18-35",
        "originCountry": "Equatorial Guinea",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 4
    },
    {
        "firstName": "Annie",
        "surname": "Prezzavento",
        "ageCategory": "<18",
        "originCountry": "Poland",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 37
    },
    {
        "firstName": "Furness",
        "surname": "Trautman",
        "ageCategory": ">60",
        "originCountry": "Virgin Islands (British)",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 44
    },
    {
        "firstName": "Nauman",
        "surname": "Schnell",
        "ageCategory": "18-35",
        "originCountry": "Cyprus",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 39
    },
    {
        "firstName": "Vaibhavi",
        "surname": "Paullin",
        "ageCategory": ">60",
        "originCountry": "Cocos (Keeling) Islands",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 23
    },
    {
        "firstName": "Michelle",
        "surname": "Martens",
        "ageCategory": "18-35",
        "originCountry": "Sint Maarten (Dutch part)",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 38
    },
    {
        "firstName": "Jeremiah",
        "surname": "Mcdonough",
        "ageCategory": ">60",
        "originCountry": "Monaco",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 13
    },
    {
        "firstName": "Kurtis",
        "surname": "Belkin",
        "ageCategory": "18-35",
        "originCountry": "Hong Kong",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 19
    },
    {
        "firstName": "Marcedia",
        "surname": "Difrancesco",
        "ageCategory": "<18",
        "originCountry": "Togo",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 16
    },
    {
        "firstName": "Camille",
        "surname": "Merritt",
        "ageCategory": "18-35",
        "originCountry": "Djibouti",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 10
    },
    {
        "firstName": "Marqueal",
        "surname": "Welchert",
        "ageCategory": "35-60",
        "originCountry": "Falkland Islands (Malvinas)",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 16
    },
    {
        "firstName": "Jezus",
        "surname": "Kiilerich",
        "ageCategory": ">60",
        "originCountry": "Colombia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 8
    },
    {
        "firstName": "Kola",
        "surname": "Golaner",
        "ageCategory": ">60",
        "originCountry": "Denmark",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 35
    },
    {
        "firstName": "Jacquie",
        "surname": "Ockerman",
        "ageCategory": "<18",
        "originCountry": "Netherlands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 26
    },
    {
        "firstName": "Allen",
        "surname": "Azzarello",
        "ageCategory": ">60",
        "originCountry": "Argentina",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 26
    },
    {
        "firstName": "Kenyatta",
        "surname": "Helm",
        "ageCategory": "18-35",
        "originCountry": "Greece",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 41
    },
    {
        "firstName": "Hope",
        "surname": "Monroe",
        "ageCategory": "<18",
        "originCountry": "Ukraine",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 20
    },
    {
        "firstName": "Daydria",
        "surname": "Patillo",
        "ageCategory": ">60",
        "originCountry": "Sudan",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 11
    },
    {
        "firstName": "Maribel",
        "surname": "Pyle",
        "ageCategory": "35-60",
        "originCountry": "Slovenia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 32
    },
    {
        "firstName": "Stephen",
        "surname": "Allen",
        "ageCategory": "<18",
        "originCountry": "Holy See",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 27
    },
    {
        "firstName": "Harry",
        "surname": "Start",
        "ageCategory": "18-35",
        "originCountry": "Hong Kong",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 0
    },
    {
        "firstName": "Natalie",
        "surname": "Cohn",
        "ageCategory": "<18",
        "originCountry": "Svalbard and Jan Mayen",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 18
    },
    {
        "firstName": "Melina",
        "surname": "Meow",
        "ageCategory": ">60",
        "originCountry": "Norfolk Island",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 22
    },
    {
        "firstName": "Woo",
        "surname": "Ziegler",
        "ageCategory": "18-35",
        "originCountry": "Saudi Arabia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 2
    },
    {
        "firstName": "Noriess",
        "surname": "Krynsky",
        "ageCategory": "<18",
        "originCountry": "Albania",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 28
    },
    {
        "firstName": "Lei",
        "surname": "Douglas",
        "ageCategory": "35-60",
        "originCountry": "South Sudan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 9
    },
    {
        "firstName": "Samir",
        "surname": "Dixon",
        "ageCategory": "18-35",
        "originCountry": "Argentina",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 50
    },
    {
        "firstName": "Aisha",
        "surname": "Calliste",
        "ageCategory": "18-35",
        "originCountry": "Greece",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 12
    },
    {
        "firstName": "Virgis",
        "surname": "Caruso",
        "ageCategory": "18-35",
        "originCountry": "Colombia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 31
    },
    {
        "firstName": "Judy",
        "surname": "Onatop",
        "ageCategory": "35-60",
        "originCountry": "Tanzania, United Republic of",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 24
    },
    {
        "firstName": "Christa",
        "surname": "Gilbertson",
        "ageCategory": "<18",
        "originCountry": "Jamaica",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 40
    },
    {
        "firstName": "Anne",
        "surname": "Kennedy",
        "ageCategory": "35-60",
        "originCountry": "Jamaica",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 40
    },
    {
        "firstName": "Larita",
        "surname": "Baxter",
        "ageCategory": "18-35",
        "originCountry": "Benin",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 6
    },
    {
        "firstName": "Susen",
        "surname": "Marrinson",
        "ageCategory": "<18",
        "originCountry": "Egypt",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 7
    },
    {
        "firstName": "Wichaya",
        "surname": "Swayngim",
        "ageCategory": "<18",
        "originCountry": "American Samoa",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 47
    },
    {
        "firstName": "Sherrye",
        "surname": "Holt",
        "ageCategory": "<18",
        "originCountry": "Malaysia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 45
    },
    {
        "firstName": "Dorci'A",
        "surname": "Seguin",
        "ageCategory": ">60",
        "originCountry": "Saint Helena, Ascension and Tristan da Cunha",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 28
    },
    {
        "firstName": "Sidney",
        "surname": "Tierney",
        "ageCategory": "<18",
        "originCountry": "Antigua and Barbuda",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 15
    },
    {
        "firstName": "Melody",
        "surname": "Zavala",
        "ageCategory": "18-35",
        "originCountry": "Algeria",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 24
    },
    {
        "firstName": "Maya",
        "surname": "Gulotta",
        "ageCategory": ">60",
        "originCountry": "Portugal",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 4
    },
    {
        "firstName": "Joe",
        "surname": "Terrill",
        "ageCategory": ">60",
        "originCountry": "Switzerland",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 18
    },
    {
        "firstName": "Lee",
        "surname": "Hettrick",
        "ageCategory": "18-35",
        "originCountry": "Kenya",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 29
    },
    {
        "firstName": "Kazi",
        "surname": "Malmfeldt",
        "ageCategory": "<18",
        "originCountry": "Bulgaria",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 35
    },
    {
        "firstName": "Axay",
        "surname": "Rager",
        "ageCategory": "35-60",
        "originCountry": "Tajikistan",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 35
    },
    {
        "firstName": "Robyn",
        "surname": "Jensen",
        "ageCategory": "35-60",
        "originCountry": "Ukraine",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 25
    },
    {
        "firstName": "Marisela",
        "surname": "Whitham",
        "ageCategory": "35-60",
        "originCountry": "Sweden",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 16
    },
    {
        "firstName": "Weili",
        "surname": "Evert",
        "ageCategory": "<18",
        "originCountry": "Trinidad and Tobago",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 40
    },
    {
        "firstName": "Vicky",
        "surname": "Mislang",
        "ageCategory": "18-35",
        "originCountry": "French Guiana",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 50
    },
    {
        "firstName": "Tony",
        "surname": "Badertscher",
        "ageCategory": ">60",
        "originCountry": "Czech Republic",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 6
    },
    {
        "firstName": "Asha",
        "surname": "Schuplin",
        "ageCategory": "35-60",
        "originCountry": "Jersey",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 10
    },
    {
        "firstName": "Earl",
        "surname": "Turich",
        "ageCategory": "<18",
        "originCountry": "Malta",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 34
    },
    {
        "firstName": "Amalia",
        "surname": "Khillah",
        "ageCategory": "<18",
        "originCountry": "Cuba",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 7
    },
    {
        "firstName": "Arnitra",
        "surname": "Walls",
        "ageCategory": "18-35",
        "originCountry": "Germany",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 14
    },
    {
        "firstName": "Marcellin",
        "surname": "Alpert",
        "ageCategory": "18-35",
        "originCountry": "Somalia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 17
    },
    {
        "firstName": "Shanna",
        "surname": "Moser",
        "ageCategory": "35-60",
        "originCountry": "Antigua and Barbuda",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 12
    },
    {
        "firstName": "Tariq",
        "surname": "Melendez",
        "ageCategory": ">60",
        "originCountry": "Belarus",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 22
    },
    {
        "firstName": "Juanito",
        "surname": "Lessenberry",
        "ageCategory": ">60",
        "originCountry": "Solomon Islands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 12
    },
    {
        "firstName": "Gordon",
        "surname": "Steward",
        "ageCategory": "18-35",
        "originCountry": "Bhutan",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 11
    },
    {
        "firstName": "Darlene",
        "surname": "Sanvick",
        "ageCategory": "18-35",
        "originCountry": "Malawi",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 45
    },
    {
        "firstName": "Josephine",
        "surname": "Lubold",
        "ageCategory": ">60",
        "originCountry": "Malawi",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 21
    },
    {
        "firstName": "Vernon",
        "surname": "Thomad",
        "ageCategory": ">60",
        "originCountry": "Mayotte",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 19
    },
    {
        "firstName": "Dan",
        "surname": "Kephart",
        "ageCategory": "<18",
        "originCountry": "Cocos (Keeling) Islands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 20
    },
    {
        "firstName": "Alesia",
        "surname": "Lyn",
        "ageCategory": "<18",
        "originCountry": "Thailand",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 34
    },
    {
        "firstName": "Adom",
        "surname": "Karneol",
        "ageCategory": "18-35",
        "originCountry": "Tunisia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 39
    },
    {
        "firstName": "Cayla",
        "surname": "Richard",
        "ageCategory": "18-35",
        "originCountry": "Slovenia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 1
    },
    {
        "firstName": "Radhe",
        "surname": "Imholtz",
        "ageCategory": "18-35",
        "originCountry": "Canada",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 42
    },
    {
        "firstName": "Lise",
        "surname": "Skublics",
        "ageCategory": ">60",
        "originCountry": "Uruguay",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 4
    },
    {
        "firstName": "Al",
        "surname": "Gillott",
        "ageCategory": ">60",
        "originCountry": "Finland",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 21
    },
    {
        "firstName": "Audrey",
        "surname": "Shanafelt",
        "ageCategory": "<18",
        "originCountry": "Nepal",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 49
    },
    {
        "firstName": "Shanstella",
        "surname": "Barnhorn",
        "ageCategory": "<18",
        "originCountry": "Albania",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 23
    },
    {
        "firstName": "Toula",
        "surname": "Catania",
        "ageCategory": ">60",
        "originCountry": "Norfolk Island",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 43
    },
    {
        "firstName": "Ginny",
        "surname": "Schwier",
        "ageCategory": ">60",
        "originCountry": "Kenya",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 22
    },
    {
        "firstName": "Tariq",
        "surname": "Levin",
        "ageCategory": "<18",
        "originCountry": "Syrian Arab Republic",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 28
    },
    {
        "firstName": "Lorena",
        "surname": "Vanatta",
        "ageCategory": "35-60",
        "originCountry": "British Indian Ocean Territory",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 10
    },
    {
        "firstName": "Inessa",
        "surname": "Flint",
        "ageCategory": "<18",
        "originCountry": "Timor-Leste",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 37
    },
    {
        "firstName": "Cenna",
        "surname": "Wagner",
        "ageCategory": ">60",
        "originCountry": "Malaysia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 36
    },
    {
        "firstName": "LuAnn",
        "surname": "Acosta",
        "ageCategory": "<18",
        "originCountry": "South Africa",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 9
    },
    {
        "firstName": "Marsha",
        "surname": "Tabor",
        "ageCategory": "18-35",
        "originCountry": "Virgin Islands (U.S.)",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 6
    },
    {
        "firstName": "Chad",
        "surname": "Bunek",
        "ageCategory": ">60",
        "originCountry": "Hungary",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 1
    },
    {
        "firstName": "Amela",
        "surname": "Romard",
        "ageCategory": "18-35",
        "originCountry": "New Caledonia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 15
    },
    {
        "firstName": "Rania",
        "surname": "Jessica",
        "ageCategory": "18-35",
        "originCountry": "Libya",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 50
    },
    {
        "firstName": "Ayse",
        "surname": "Fruscione",
        "ageCategory": "<18",
        "originCountry": "Kiribati",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 10
    },
    {
        "firstName": "Marie",
        "surname": "Erica",
        "ageCategory": "35-60",
        "originCountry": "Netherlands",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 2
    },
    {
        "firstName": "Marcedia",
        "surname": "Greene",
        "ageCategory": ">60",
        "originCountry": "Côte d'Ivoire",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 21
    },
    {
        "firstName": "Bertha",
        "surname": "Shrestha",
        "ageCategory": ">60",
        "originCountry": "Macao",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 25
    },
    {
        "firstName": "Melissa",
        "surname": "Campos",
        "ageCategory": ">60",
        "originCountry": "Zambia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 38
    },
    {
        "firstName": "Carolyn",
        "surname": "Mcduff",
        "ageCategory": "18-35",
        "originCountry": "Trinidad and Tobago",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 4
    },
    {
        "firstName": "Annabelle",
        "surname": "Kessel",
        "ageCategory": "35-60",
        "originCountry": "Falkland Islands (Malvinas)",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 22
    },
    {
        "firstName": "Rogelio",
        "surname": "Roth",
        "ageCategory": "35-60",
        "originCountry": "Romania",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 22
    },
    {
        "firstName": "Christina",
        "surname": "Severson",
        "ageCategory": "<18",
        "originCountry": "Haiti",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 45
    },
    {
        "firstName": "Javier",
        "surname": "Neville",
        "ageCategory": "18-35",
        "originCountry": "Samoa",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 22
    },
    {
        "firstName": "Kasey",
        "surname": "Hougland",
        "ageCategory": "18-35",
        "originCountry": "Paraguay",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 22
    },
    {
        "firstName": "Danielle",
        "surname": "Casariego",
        "ageCategory": "<18",
        "originCountry": "Holy See",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 37
    },
    {
        "firstName": "Julie",
        "surname": "Carpenter",
        "ageCategory": "18-35",
        "originCountry": "Estonia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 48
    },
    {
        "firstName": "Veneta",
        "surname": "Vaimauga",
        "ageCategory": "18-35",
        "originCountry": "Sierra Leone",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 9
    },
    {
        "firstName": "Hector",
        "surname": "Silva",
        "ageCategory": ">60",
        "originCountry": "Burkina Faso",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 23
    },
    {
        "firstName": "Destinee",
        "surname": "Knutson",
        "ageCategory": "35-60",
        "originCountry": "Germany",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 33
    },
    {
        "firstName": "Marvin",
        "surname": "Swartz",
        "ageCategory": "35-60",
        "originCountry": "China",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 16
    },
    {
        "firstName": "Steven",
        "surname": "Nicholson",
        "ageCategory": ">60",
        "originCountry": "Cayman Islands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 18
    },
    {
        "firstName": "Jeanneth",
        "surname": "Mohamed",
        "ageCategory": "<18",
        "originCountry": "Virgin Islands (British)",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 16
    },
    {
        "firstName": "Vasilis",
        "surname": "Etheridge",
        "ageCategory": ">60",
        "originCountry": "Croatia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 43
    },
    {
        "firstName": "Alisa",
        "surname": "Jeschke",
        "ageCategory": "18-35",
        "originCountry": "Heard Island and McDonald Islands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 39
    },
    {
        "firstName": "Judy",
        "surname": "Rooprai",
        "ageCategory": "18-35",
        "originCountry": "Colombia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 25
    },
    {
        "firstName": "Donovan",
        "surname": "Puglisi",
        "ageCategory": "18-35",
        "originCountry": "Solomon Islands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 11
    },
    {
        "firstName": "Joann",
        "surname": "Dunn",
        "ageCategory": "18-35",
        "originCountry": "Gambia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 41
    },
    {
        "firstName": "Winston",
        "surname": "Lee",
        "ageCategory": ">60",
        "originCountry": "Netherlands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 31
    },
    {
        "firstName": "Sucharitha",
        "surname": "Cann",
        "ageCategory": "18-35",
        "originCountry": "Ukraine",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 26
    },
    {
        "firstName": "Ayeola",
        "surname": "Debord",
        "ageCategory": "18-35",
        "originCountry": "Sudan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 29
    },
    {
        "firstName": "Joanne",
        "surname": "Neff",
        "ageCategory": ">60",
        "originCountry": "Croatia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 28
    },
    {
        "firstName": "Dwight",
        "surname": "Suzanne",
        "ageCategory": "35-60",
        "originCountry": "Macao",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 14
    },
    {
        "firstName": "Ishna",
        "surname": "Zamora",
        "ageCategory": "<18",
        "originCountry": "Antarctica",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 49
    },
    {
        "firstName": "Lane",
        "surname": "Pollard",
        "ageCategory": "35-60",
        "originCountry": "Åland Islands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 17
    },
    {
        "firstName": "Alana",
        "surname": "Kerkemeyer",
        "ageCategory": "35-60",
        "originCountry": "Côte d'Ivoire",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 47
    },
    {
        "firstName": "Jodie",
        "surname": "Kraenzle",
        "ageCategory": ">60",
        "originCountry": "Chile",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 18
    },
    {
        "firstName": "Robert",
        "surname": "Moccio",
        "ageCategory": "18-35",
        "originCountry": "Croatia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 38
    },
    {
        "firstName": "Janette",
        "surname": "Duffy",
        "ageCategory": "35-60",
        "originCountry": "Mongolia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 23
    },
    {
        "firstName": "Ian",
        "surname": "Kemmerling",
        "ageCategory": "18-35",
        "originCountry": "Sao Tome and Principe",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 44
    },
    {
        "firstName": "Kavita",
        "surname": "Hesler",
        "ageCategory": ">60",
        "originCountry": "Macao",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 36
    },
    {
        "firstName": "Guillermina",
        "surname": "Parsons",
        "ageCategory": ">60",
        "originCountry": "Belarus",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 29
    },
    {
        "firstName": "Lynda",
        "surname": "Kasnow",
        "ageCategory": "18-35",
        "originCountry": "Barbados",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 25
    },
    {
        "firstName": "Carmerlina",
        "surname": "Mclaurin",
        "ageCategory": "<18",
        "originCountry": "Malawi",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 28
    },
    {
        "firstName": "Hiam",
        "surname": "Earls",
        "ageCategory": "35-60",
        "originCountry": "Paraguay",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 46
    },
    {
        "firstName": "Sunil",
        "surname": "Vinton",
        "ageCategory": ">60",
        "originCountry": "Svalbard and Jan Mayen",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 47
    },
    {
        "firstName": "Kathy",
        "surname": "Stone",
        "ageCategory": "18-35",
        "originCountry": "Chad",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 34
    },
    {
        "firstName": "Constance",
        "surname": "Powers",
        "ageCategory": "35-60",
        "originCountry": "Algeria",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 32
    },
    {
        "firstName": "Nadirah",
        "surname": "Williamson",
        "ageCategory": "35-60",
        "originCountry": "Equatorial Guinea",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 21
    },
    {
        "firstName": "Emily",
        "surname": "Doll",
        "ageCategory": "<18",
        "originCountry": "Cambodia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 0
    },
    {
        "firstName": "Joyce",
        "surname": "Dabbs",
        "ageCategory": "18-35",
        "originCountry": "Netherlands",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 1
    },
    {
        "firstName": "Sharful",
        "surname": "Skiffington",
        "ageCategory": ">60",
        "originCountry": "French Guiana",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 12
    },
    {
        "firstName": "Vijayakumar",
        "surname": "Carpenter",
        "ageCategory": ">60",
        "originCountry": "Cameroon",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 24
    },
    {
        "firstName": "Kellyann",
        "surname": "Bowling",
        "ageCategory": ">60",
        "originCountry": "Malaysia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 8
    },
    {
        "firstName": "Michele",
        "surname": "Foster",
        "ageCategory": "<18",
        "originCountry": "Åland Islands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 29
    },
    {
        "firstName": "Virgis",
        "surname": "Laggan",
        "ageCategory": "<18",
        "originCountry": "Åland Islands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 3
    },
    {
        "firstName": "Adam",
        "surname": "Comfort",
        "ageCategory": "35-60",
        "originCountry": "Svalbard and Jan Mayen",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 25
    },
    {
        "firstName": "Hilda",
        "surname": "Mcdow",
        "ageCategory": ">60",
        "originCountry": "Honduras",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 34
    },
    {
        "firstName": "Darlene",
        "surname": "Gerver",
        "ageCategory": "35-60",
        "originCountry": "Northern Mariana Islands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 27
    },
    {
        "firstName": "Myra",
        "surname": "Pachler",
        "ageCategory": ">60",
        "originCountry": "Netherlands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 1
    },
    {
        "firstName": "Francis",
        "surname": "Schacher",
        "ageCategory": "35-60",
        "originCountry": "Colombia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 23
    },
    {
        "firstName": "Albert",
        "surname": "Chaudary",
        "ageCategory": "35-60",
        "originCountry": "Trinidad and Tobago",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 49
    },
    {
        "firstName": "Gertrude",
        "surname": "Alarie",
        "ageCategory": "18-35",
        "originCountry": "Thailand",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 33
    },
    {
        "firstName": "Kerrissa",
        "surname": "Bjurback",
        "ageCategory": ">60",
        "originCountry": "South Georgia and the South Sandwich Islands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 3
    },
    {
        "firstName": "Felicia",
        "surname": "Crompton",
        "ageCategory": "18-35",
        "originCountry": "Heard Island and McDonald Islands",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 21
    },
    {
        "firstName": "Syed",
        "surname": "Tippetts",
        "ageCategory": "35-60",
        "originCountry": "Palestine, State of",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 1
    },
    {
        "firstName": "Gabriel",
        "surname": "Grubbs",
        "ageCategory": ">60",
        "originCountry": "Mayotte",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 36
    },
    {
        "firstName": "Maira",
        "surname": "Webster",
        "ageCategory": "35-60",
        "originCountry": "Slovenia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 5
    },
    {
        "firstName": "Jayne",
        "surname": "Foxen",
        "ageCategory": ">60",
        "originCountry": "Belarus",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 47
    },
    {
        "firstName": "Felix",
        "surname": "Frutos",
        "ageCategory": "<18",
        "originCountry": "Belgium",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 24
    },
    {
        "firstName": "Aroterick",
        "surname": "Bessey",
        "ageCategory": "18-35",
        "originCountry": "Djibouti",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 5
    },
    {
        "firstName": "Fransisca",
        "surname": "Khillah",
        "ageCategory": ">60",
        "originCountry": "Barbados",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 3
    },
    {
        "firstName": "Moses",
        "surname": "Raj",
        "ageCategory": "18-35",
        "originCountry": "Gibraltar",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 31
    },
    {
        "firstName": "Carmen",
        "surname": "Cory",
        "ageCategory": "18-35",
        "originCountry": "Mali",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 26
    },
    {
        "firstName": "Armando",
        "surname": "Hostetler",
        "ageCategory": "<18",
        "originCountry": "Chad",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 46
    },
    {
        "firstName": "Corazon",
        "surname": "Mccarley",
        "ageCategory": ">60",
        "originCountry": "Austria",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 43
    },
    {
        "firstName": "Dawn",
        "surname": "Darbonne",
        "ageCategory": "35-60",
        "originCountry": "Nepal",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 46
    },
    {
        "firstName": "Ali",
        "surname": "Tuggle",
        "ageCategory": "18-35",
        "originCountry": "Gambia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 29
    },
    {
        "firstName": "Verna",
        "surname": "Hefner",
        "ageCategory": "18-35",
        "originCountry": "Armenia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 41
    },
    {
        "firstName": "Gerarld",
        "surname": "White",
        "ageCategory": ">60",
        "originCountry": "Congo",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 19
    },
    {
        "firstName": "Guillaume",
        "surname": "Marshall",
        "ageCategory": ">60",
        "originCountry": "Bosnia and Herzegovina",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 23
    },
    {
        "firstName": "Bernadette",
        "surname": "Stalinski",
        "ageCategory": "<18",
        "originCountry": "Italy",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 12
    },
    {
        "firstName": "Effram",
        "surname": "Ortiz",
        "ageCategory": "35-60",
        "originCountry": "Guadeloupe",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 15
    },
    {
        "firstName": "Chandra",
        "surname": "Evans",
        "ageCategory": ">60",
        "originCountry": "Mayotte",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 17
    },
    {
        "firstName": "Aman",
        "surname": "Price",
        "ageCategory": ">60",
        "originCountry": "Poland",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 39
    },
    {
        "firstName": "Yaw",
        "surname": "Davila",
        "ageCategory": "18-35",
        "originCountry": "Indonesia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 30
    },
    {
        "firstName": "Sherrell",
        "surname": "Jeschke",
        "ageCategory": ">60",
        "originCountry": "Saint Pierre and Miquelon",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 43
    },
    {
        "firstName": "Kristy",
        "surname": "Partin",
        "ageCategory": "18-35",
        "originCountry": "Chad",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 1
    },
    {
        "firstName": "Sandeep",
        "surname": "Hellman",
        "ageCategory": "35-60",
        "originCountry": "French Southern Territories",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 3
    },
    {
        "firstName": "Lynda",
        "surname": "Kerr",
        "ageCategory": "18-35",
        "originCountry": "Virgin Islands (U.S.)",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 50
    },
    {
        "firstName": "Kavita",
        "surname": "Rainwater",
        "ageCategory": ">60",
        "originCountry": "Turks and Caicos Islands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 2
    },
    {
        "firstName": "Latrese",
        "surname": "Casey",
        "ageCategory": "18-35",
        "originCountry": "Samoa",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 48
    },
    {
        "firstName": "Sabrina",
        "surname": "Wall",
        "ageCategory": "<18",
        "originCountry": "Armenia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 29
    },
    {
        "firstName": "Randy",
        "surname": "Krasowski",
        "ageCategory": "<18",
        "originCountry": "French Polynesia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 0
    },
    {
        "firstName": "Liset",
        "surname": "Robichaud",
        "ageCategory": "35-60",
        "originCountry": "Tunisia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 49
    },
    {
        "firstName": "Clint",
        "surname": "Benson",
        "ageCategory": "18-35",
        "originCountry": "Mexico",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 17
    },
    {
        "firstName": "Usha",
        "surname": "Lohr",
        "ageCategory": ">60",
        "originCountry": "Mali",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 6
    },
    {
        "firstName": "Takita",
        "surname": "Roy",
        "ageCategory": "<18",
        "originCountry": "Nigeria",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 30
    },
    {
        "firstName": "Carmerlina",
        "surname": "Nye",
        "ageCategory": "<18",
        "originCountry": "Bouvet Island",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 29
    },
    {
        "firstName": "Hugh",
        "surname": "Avila",
        "ageCategory": ">60",
        "originCountry": "Guinea",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 48
    },
    {
        "firstName": "Olivia",
        "surname": "Callahan",
        "ageCategory": "35-60",
        "originCountry": "Virgin Islands (British)",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 19
    },
    {
        "firstName": "Brendan",
        "surname": "Robinson",
        "ageCategory": "<18",
        "originCountry": "Timor-Leste",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 30
    },
    {
        "firstName": "Mohammed",
        "surname": "Mauro",
        "ageCategory": "<18",
        "originCountry": "Iran (Islamic Republic of)",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 28
    },
    {
        "firstName": "Ammon",
        "surname": "Partin",
        "ageCategory": "18-35",
        "originCountry": "Heard Island and McDonald Islands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 38
    },
    {
        "firstName": "Jack",
        "surname": "Butler",
        "ageCategory": ">60",
        "originCountry": "Romania",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 12
    },
    {
        "firstName": "Femi",
        "surname": "Cappellini",
        "ageCategory": "35-60",
        "originCountry": "Christmas Island",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 19
    },
    {
        "firstName": "Cheryll",
        "surname": "Monroe",
        "ageCategory": ">60",
        "originCountry": "India",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 40
    },
    {
        "firstName": "Ofelia",
        "surname": "Gonzalez",
        "ageCategory": ">60",
        "originCountry": "Cabo Verde",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 19
    },
    {
        "firstName": "Annie",
        "surname": "Robichaud",
        "ageCategory": "35-60",
        "originCountry": "British Indian Ocean Territory",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 0
    },
    {
        "firstName": "Vivian",
        "surname": "Gray",
        "ageCategory": "18-35",
        "originCountry": "Angola",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 37
    },
    {
        "firstName": "Letisha",
        "surname": "Garascia",
        "ageCategory": "<18",
        "originCountry": "Eritrea",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 32
    },
    {
        "firstName": "Earl",
        "surname": "Hougland",
        "ageCategory": "<18",
        "originCountry": "Eritrea",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 34
    },
    {
        "firstName": "Whitney",
        "surname": "Forsyth",
        "ageCategory": "<18",
        "originCountry": "Falkland Islands (Malvinas)",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 28
    },
    {
        "firstName": "Sabrina",
        "surname": "Creason",
        "ageCategory": "18-35",
        "originCountry": "Guinea-Bissau",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 42
    },
    {
        "firstName": "Qazzafi",
        "surname": "Ockerman",
        "ageCategory": "35-60",
        "originCountry": "Rwanda",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 43
    },
    {
        "firstName": "Jasmin",
        "surname": "Kranz",
        "ageCategory": "35-60",
        "originCountry": "Korea (Republic of)",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 43
    },
    {
        "firstName": "Patrick",
        "surname": "Tran",
        "ageCategory": "18-35",
        "originCountry": "Saint Pierre and Miquelon",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 38
    },
    {
        "firstName": "Rich",
        "surname": "Hydle",
        "ageCategory": "18-35",
        "originCountry": "Montserrat",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 5
    },
    {
        "firstName": "Ratikorn",
        "surname": "Mosher",
        "ageCategory": "35-60",
        "originCountry": "Curaçao",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 5
    },
    {
        "firstName": "Diane",
        "surname": "Fouts",
        "ageCategory": "<18",
        "originCountry": "Togo",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 6
    },
    {
        "firstName": "Karita",
        "surname": "Ravenelle",
        "ageCategory": "<18",
        "originCountry": "Congo (Democratic Republic of the)",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 22
    },
    {
        "firstName": "Yvonne",
        "surname": "Ulvestad",
        "ageCategory": "35-60",
        "originCountry": "Bangladesh",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 36
    },
    {
        "firstName": "Claudia",
        "surname": "Marrinson",
        "ageCategory": "35-60",
        "originCountry": "Paraguay",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 46
    },
    {
        "firstName": "Miroslava",
        "surname": "Culp",
        "ageCategory": "18-35",
        "originCountry": "Guatemala",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 34
    },
    {
        "firstName": "Dewey",
        "surname": "Meaney",
        "ageCategory": "35-60",
        "originCountry": "Bhutan",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 32
    },
    {
        "firstName": "Bern",
        "surname": "Campbell",
        "ageCategory": ">60",
        "originCountry": "Palau",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 17
    },
    {
        "firstName": "Marguerite",
        "surname": "Petitti",
        "ageCategory": "18-35",
        "originCountry": "Norfolk Island",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 34
    },
    {
        "firstName": "Forest",
        "surname": "Anderson",
        "ageCategory": ">60",
        "originCountry": "Azerbaijan",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 39
    },
    {
        "firstName": "Gertrude",
        "surname": "Kunselman",
        "ageCategory": "18-35",
        "originCountry": "Somalia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 45
    },
    {
        "firstName": "David",
        "surname": "Kornation",
        "ageCategory": ">60",
        "originCountry": "Svalbard and Jan Mayen",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 22
    },
    {
        "firstName": "Ganesh",
        "surname": "Zeigler",
        "ageCategory": "<18",
        "originCountry": "Turkmenistan",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 36
    },
    {
        "firstName": "Cathryn",
        "surname": "Kavanaugh",
        "ageCategory": ">60",
        "originCountry": "Syrian Arab Republic",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 29
    },
    {
        "firstName": "Anne",
        "surname": "Dellabadia",
        "ageCategory": "35-60",
        "originCountry": "Mozambique",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 32
    },
    {
        "firstName": "Teresita",
        "surname": "Cappellini",
        "ageCategory": "35-60",
        "originCountry": "Åland Islands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 30
    },
    {
        "firstName": "LaRoyce",
        "surname": "Crete",
        "ageCategory": "35-60",
        "originCountry": "Estonia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 13
    },
    {
        "firstName": "Alla",
        "surname": "Brestar",
        "ageCategory": "<18",
        "originCountry": "Tokelau",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 26
    },
    {
        "firstName": "Ruben",
        "surname": "Gray",
        "ageCategory": "<18",
        "originCountry": "Swaziland",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 17
    },
    {
        "firstName": "Patrina",
        "surname": "Taylor",
        "ageCategory": "<18",
        "originCountry": "Croatia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 22
    },
    {
        "firstName": "Joan",
        "surname": "Salval",
        "ageCategory": ">60",
        "originCountry": "Solomon Islands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 7
    },
    {
        "firstName": "Darci",
        "surname": "Mcmenamin",
        "ageCategory": "<18",
        "originCountry": "Hungary",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 15
    },
    {
        "firstName": "Hanne",
        "surname": "Toffoli",
        "ageCategory": "35-60",
        "originCountry": "Seychelles",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 45
    },
    {
        "firstName": "Rupa",
        "surname": "Renzi",
        "ageCategory": "35-60",
        "originCountry": "Uruguay",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 20
    },
    {
        "firstName": "Saim",
        "surname": "Hodgin",
        "ageCategory": "<18",
        "originCountry": "Tunisia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 49
    },
    {
        "firstName": "Anissia",
        "surname": "Stockett",
        "ageCategory": "<18",
        "originCountry": "Curaçao",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 20
    },
    {
        "firstName": "Esperanza",
        "surname": "Rollins",
        "ageCategory": "18-35",
        "originCountry": "Slovakia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 15
    },
    {
        "firstName": "Ruben",
        "surname": "Larrabee",
        "ageCategory": "<18",
        "originCountry": "Madagascar",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 27
    },
    {
        "firstName": "Katina",
        "surname": "Marr",
        "ageCategory": "<18",
        "originCountry": "Congo",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 40
    },
    {
        "firstName": "Crystal",
        "surname": "Schemanski",
        "ageCategory": ">60",
        "originCountry": "Bulgaria",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 50
    },
    {
        "firstName": "Frances",
        "surname": "Shanoski",
        "ageCategory": "35-60",
        "originCountry": "Mozambique",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 41
    },
    {
        "firstName": "Asher",
        "surname": "Mitu",
        "ageCategory": "<18",
        "originCountry": "Bahamas",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 15
    },
    {
        "firstName": "Wayne",
        "surname": "Goodman",
        "ageCategory": "35-60",
        "originCountry": "Malaysia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 22
    },
    {
        "firstName": "Brett",
        "surname": "Schwartzberg",
        "ageCategory": ">60",
        "originCountry": "Colombia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 14
    },
    {
        "firstName": "Alan",
        "surname": "Longmire",
        "ageCategory": "<18",
        "originCountry": "Cameroon",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 10
    },
    {
        "firstName": "Colleen",
        "surname": "Pierce",
        "ageCategory": ">60",
        "originCountry": "Afghanistan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 4
    },
    {
        "firstName": "Lauri",
        "surname": "Deno",
        "ageCategory": ">60",
        "originCountry": "Honduras",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 38
    },
    {
        "firstName": "Ahila",
        "surname": "Mcglaughlin",
        "ageCategory": ">60",
        "originCountry": "Suriname",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 14
    },
    {
        "firstName": "Saima",
        "surname": "Flores",
        "ageCategory": ">60",
        "originCountry": "Belize",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 19
    },
    {
        "firstName": "Susana",
        "surname": "Mcintyre",
        "ageCategory": "18-35",
        "originCountry": "Korea (Democratic People's Republic of)",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 43
    },
    {
        "firstName": "Ian",
        "surname": "Heppelmann",
        "ageCategory": ">60",
        "originCountry": "Uruguay",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 1
    },
    {
        "firstName": "Bharat",
        "surname": "Mcgarity",
        "ageCategory": "<18",
        "originCountry": "Sudan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 18
    },
    {
        "firstName": "Emced",
        "surname": "Hoffman",
        "ageCategory": "18-35",
        "originCountry": "French Polynesia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 16
    },
    {
        "firstName": "Pele",
        "surname": "Landrum",
        "ageCategory": ">60",
        "originCountry": "Mexico",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 50
    },
    {
        "firstName": "Roxanne",
        "surname": "Flanagan",
        "ageCategory": "18-35",
        "originCountry": "Georgia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 22
    },
    {
        "firstName": "Cathleen",
        "surname": "Stevens",
        "ageCategory": "<18",
        "originCountry": "Maldives",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 37
    },
    {
        "firstName": "Jasper",
        "surname": "Cox",
        "ageCategory": "35-60",
        "originCountry": "French Polynesia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 46
    },
    {
        "firstName": "Glenderee",
        "surname": "Higdon",
        "ageCategory": "<18",
        "originCountry": "Nepal",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 49
    },
    {
        "firstName": "Kurtis",
        "surname": "Corkett",
        "ageCategory": "35-60",
        "originCountry": "Curaçao",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 40
    },
    {
        "firstName": "Natasha",
        "surname": "Anderes",
        "ageCategory": "<18",
        "originCountry": "Singapore",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 26
    },
    {
        "firstName": "Vicky",
        "surname": "Ghormley",
        "ageCategory": "<18",
        "originCountry": "Somalia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 40
    },
    {
        "firstName": "Verna",
        "surname": "Muzyka",
        "ageCategory": "35-60",
        "originCountry": "Palestine, State of",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 10
    },
    {
        "firstName": "Kehinde",
        "surname": "Liao",
        "ageCategory": "35-60",
        "originCountry": "Montserrat",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 50
    }
];

export default data;
