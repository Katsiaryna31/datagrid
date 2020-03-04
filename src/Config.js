const data = [
    {
        "firstName": "Jennifer",
        "surname": "Peters",
        "ageCategory": "18-35",
        "originCountry": "Niue",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 46
    },
    {
        "firstName": "Christel",
        "surname": "Tarbox",
        "ageCategory": "35-60",
        "originCountry": "New Zealand",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 35
    },
    {
        "firstName": "Leilani",
        "surname": "Bubel",
        "ageCategory": "<18",
        "originCountry": "Ecuador",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 44
    },
    {
        "firstName": "Valesa",
        "surname": "Clay",
        "ageCategory": "<18",
        "originCountry": "Haiti",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 23
    },
    {
        "firstName": "Derrick",
        "surname": "Slonaker",
        "ageCategory": "<18",
        "originCountry": "Uzbekistan",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 48
    },
    {
        "firstName": "Madonna",
        "surname": "Vita",
        "ageCategory": "<18",
        "originCountry": "Italy",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 35
    },
    {
        "firstName": "Greg",
        "surname": "Mcdonough",
        "ageCategory": "18-35",
        "originCountry": "Switzerland",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 25
    },
    {
        "firstName": "Cheryll",
        "surname": "Mcmillan",
        "ageCategory": ">60",
        "originCountry": "Falkland Islands (Malvinas)",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 48
    },
    {
        "firstName": "Gene",
        "surname": "Nixon",
        "ageCategory": "<18",
        "originCountry": "Congo (Democratic Republic of the)",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 7
    },
    {
        "firstName": "Matina",
        "surname": "Rizk",
        "ageCategory": "18-35",
        "originCountry": "Lebanon",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 3
    },
    {
        "firstName": "Oren",
        "surname": "Mauro",
        "ageCategory": "18-35",
        "originCountry": "Azerbaijan",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 37
    },
    {
        "firstName": "Brent",
        "surname": "Galapon",
        "ageCategory": ">60",
        "originCountry": "Gabon",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 26
    },
    {
        "firstName": "Tracie",
        "surname": "Palterman",
        "ageCategory": ">60",
        "originCountry": "Sint Maarten (Dutch part)",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 19
    },
    {
        "firstName": "Harpal",
        "surname": "Rizk",
        "ageCategory": "<18",
        "originCountry": "Ethiopia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 6
    },
    {
        "firstName": "Amanda",
        "surname": "Marrinson",
        "ageCategory": "35-60",
        "originCountry": "Colombia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 13
    },
    {
        "firstName": "Ade",
        "surname": "Buxton",
        "ageCategory": "35-60",
        "originCountry": "Peru",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 23
    },
    {
        "firstName": "Carlos",
        "surname": "Willis",
        "ageCategory": "<18",
        "originCountry": "San Marino",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 43
    },
    {
        "firstName": "Arif",
        "surname": "Wuertz",
        "ageCategory": "18-35",
        "originCountry": "Korea (Republic of)",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 9
    },
    {
        "firstName": "Natasha",
        "surname": "Rehnke",
        "ageCategory": "35-60",
        "originCountry": "Saint Vincent and the Grenadines",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 7
    },
    {
        "firstName": "Amit",
        "surname": "Loya",
        "ageCategory": "<18",
        "originCountry": "Cyprus",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 26
    },
    {
        "firstName": "Emily",
        "surname": "Mueske",
        "ageCategory": "35-60",
        "originCountry": "Estonia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 25
    },
    {
        "firstName": "Wenjie",
        "surname": "Bruce",
        "ageCategory": "35-60",
        "originCountry": "Belize",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 3
    },
    {
        "firstName": "Michele",
        "surname": "Towers",
        "ageCategory": "18-35",
        "originCountry": "Zimbabwe",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 32
    },
    {
        "firstName": "Bonnie",
        "surname": "Rovito",
        "ageCategory": "18-35",
        "originCountry": "Armenia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 2
    },
    {
        "firstName": "KaShaun",
        "surname": "Pitzel",
        "ageCategory": "<18",
        "originCountry": "Bahamas",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 49
    },
    {
        "firstName": "Gill",
        "surname": "Kleb",
        "ageCategory": "<18",
        "originCountry": "French Southern Territories",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 6
    },
    {
        "firstName": "Kim",
        "surname": "Hough",
        "ageCategory": "18-35",
        "originCountry": "Japan",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 38
    },
    {
        "firstName": "Darnecia",
        "surname": "Masimore",
        "ageCategory": "<18",
        "originCountry": "Argentina",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 21
    },
    {
        "firstName": "Adreta",
        "surname": "Costa",
        "ageCategory": "35-60",
        "originCountry": "Cyprus",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 14
    },
    {
        "firstName": "Jacquie",
        "surname": "Short",
        "ageCategory": "35-60",
        "originCountry": "Iceland",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 49
    },
    {
        "firstName": "Jay",
        "surname": "Wong",
        "ageCategory": "<18",
        "originCountry": "Qatar",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 33
    },
    {
        "firstName": "Tefera",
        "surname": "Akins",
        "ageCategory": "35-60",
        "originCountry": "Romania",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 23
    },
    {
        "firstName": "Stephan",
        "surname": "Broughton",
        "ageCategory": "35-60",
        "originCountry": "Namibia",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 31
    },
    {
        "firstName": "Curtis",
        "surname": "Odonoghue",
        "ageCategory": ">60",
        "originCountry": "Djibouti",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 0
    },
    {
        "firstName": "Alice",
        "surname": "Herbert",
        "ageCategory": ">60",
        "originCountry": "Equatorial Guinea",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 6
    },
    {
        "firstName": "Thorne",
        "surname": "Schlottman",
        "ageCategory": "35-60",
        "originCountry": "Uzbekistan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 4
    },
    {
        "firstName": "Stuart",
        "surname": "Stewart",
        "ageCategory": "18-35",
        "originCountry": "Guinea-Bissau",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 40
    },
    {
        "firstName": "Cristina",
        "surname": "Oshins",
        "ageCategory": "18-35",
        "originCountry": "Sierra Leone",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 13
    },
    {
        "firstName": "Lisa",
        "surname": "Lucas",
        "ageCategory": "35-60",
        "originCountry": "Benin",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 42
    },
    {
        "firstName": "Leovigildo",
        "surname": "Everly",
        "ageCategory": "18-35",
        "originCountry": "Bahrain",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 37
    },
    {
        "firstName": "Moses",
        "surname": "Kahle",
        "ageCategory": "35-60",
        "originCountry": "Israel",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 25
    },
    {
        "firstName": "Marlissa",
        "surname": "Haugland",
        "ageCategory": "35-60",
        "originCountry": "Samoa",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 50
    },
    {
        "firstName": "Demetrius",
        "surname": "Uhl",
        "ageCategory": "18-35",
        "originCountry": "Albania",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 50
    },
    {
        "firstName": "Ericka",
        "surname": "Stone",
        "ageCategory": "35-60",
        "originCountry": "Montenegro",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 33
    },
    {
        "firstName": "Greg",
        "surname": "Robison",
        "ageCategory": "18-35",
        "originCountry": "Åland Islands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 32
    },
    {
        "firstName": "Alexandra",
        "surname": "Bednarsh",
        "ageCategory": "18-35",
        "originCountry": "Greenland",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 21
    },
    {
        "firstName": "Christa",
        "surname": "Sawyer",
        "ageCategory": "18-35",
        "originCountry": "Palestine, State of",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 28
    },
    {
        "firstName": "Richmond",
        "surname": "Jessica",
        "ageCategory": "<18",
        "originCountry": "Netherlands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 19
    },
    {
        "firstName": "Coty",
        "surname": "Shaffer",
        "ageCategory": "35-60",
        "originCountry": "Colombia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 8
    },
    {
        "firstName": "Jackie",
        "surname": "Levey",
        "ageCategory": "18-35",
        "originCountry": "Equatorial Guinea",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 29
    },
    {
        "firstName": "Veronica",
        "surname": "Zhu",
        "ageCategory": "<18",
        "originCountry": "Antigua and Barbuda",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 17
    },
    {
        "firstName": "Jess",
        "surname": "Charleston",
        "ageCategory": "<18",
        "originCountry": "South Sudan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 38
    },
    {
        "firstName": "Gerarld",
        "surname": "Reddick",
        "ageCategory": ">60",
        "originCountry": "Kiribati",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 19
    },
    {
        "firstName": "Jacquie",
        "surname": "Haga",
        "ageCategory": "35-60",
        "originCountry": "Korea (Republic of)",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 25
    },
    {
        "firstName": "Tae",
        "surname": "Weiler",
        "ageCategory": "18-35",
        "originCountry": "Serbia",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 12
    },
    {
        "firstName": "Giuseppe",
        "surname": "Gaby",
        "ageCategory": "35-60",
        "originCountry": "Panama",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 11
    },
    {
        "firstName": "Sherese",
        "surname": "Baligian",
        "ageCategory": "35-60",
        "originCountry": "Cocos (Keeling) Islands",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 9
    },
    {
        "firstName": "Vernell",
        "surname": "Theiss",
        "ageCategory": ">60",
        "originCountry": "Equatorial Guinea",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 4
    },
    {
        "firstName": "Monica",
        "surname": "Keirns",
        "ageCategory": ">60",
        "originCountry": "Cocos (Keeling) Islands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 41
    },
    {
        "firstName": "Halina",
        "surname": "Hudgens",
        "ageCategory": ">60",
        "originCountry": "Netherlands",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 9
    },
    {
        "firstName": "Rita",
        "surname": "Cozad",
        "ageCategory": ">60",
        "originCountry": "Romania",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 5
    },
    {
        "firstName": "Anuj",
        "surname": "Steuernagel",
        "ageCategory": "<18",
        "originCountry": "Ukraine",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 11
    },
    {
        "firstName": "Paula",
        "surname": "Richards",
        "ageCategory": ">60",
        "originCountry": "Andorra",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 40
    },
    {
        "firstName": "Shahriar",
        "surname": "Mcgarity",
        "ageCategory": "18-35",
        "originCountry": "Gabon",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 49
    },
    {
        "firstName": "Jenny",
        "surname": "Little",
        "ageCategory": "35-60",
        "originCountry": "Macedonia (the former Yugoslav Republic of)",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 35
    },
    {
        "firstName": "Emil",
        "surname": "Walters",
        "ageCategory": "18-35",
        "originCountry": "South Georgia and the South Sandwich Islands",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 27
    },
    {
        "firstName": "Shailesh",
        "surname": "Nimick",
        "ageCategory": "18-35",
        "originCountry": "Croatia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 22
    },
    {
        "firstName": "Morticia",
        "surname": "Mcmyne",
        "ageCategory": "18-35",
        "originCountry": "South Sudan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 43
    },
    {
        "firstName": "Carmerlina",
        "surname": "Lacrosse",
        "ageCategory": ">60",
        "originCountry": "Zimbabwe",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 0
    },
    {
        "firstName": "Nitin",
        "surname": "Ortiz",
        "ageCategory": "<18",
        "originCountry": "Nicaragua",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 41
    },
    {
        "firstName": "Darnecia",
        "surname": "Colon",
        "ageCategory": "18-35",
        "originCountry": "United Arab Emirates",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 21
    },
    {
        "firstName": "Arturo",
        "surname": "Bright",
        "ageCategory": ">60",
        "originCountry": "Palestine, State of",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 17
    },
    {
        "firstName": "Sheng",
        "surname": "Daniel",
        "ageCategory": ">60",
        "originCountry": "Bolivia (Plurinational State of)",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 11
    },
    {
        "firstName": "Arvid",
        "surname": "Lacrosse",
        "ageCategory": "18-35",
        "originCountry": "Sierra Leone",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 32
    },
    {
        "firstName": "Sanjeev",
        "surname": "Altschuler",
        "ageCategory": ">60",
        "originCountry": "Australia",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 11
    },
    {
        "firstName": "Nathaniel",
        "surname": "Laiuppa",
        "ageCategory": "18-35",
        "originCountry": "Wallis and Futuna",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 10
    },
    {
        "firstName": "Mila",
        "surname": "Lamorella",
        "ageCategory": "35-60",
        "originCountry": "New Zealand",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 2
    },
    {
        "firstName": "Erik",
        "surname": "Dartmann",
        "ageCategory": "18-35",
        "originCountry": "Slovenia",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 34
    },
    {
        "firstName": "Vanita",
        "surname": "Dauk",
        "ageCategory": "35-60",
        "originCountry": "Sudan",
        "visitedCountry": "China",
        "positiveCoronavirus": true,
        "contactsPeople": 36
    },
    {
        "firstName": "Steve",
        "surname": "Murphy",
        "ageCategory": "<18",
        "originCountry": "Finland",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 20
    },
    {
        "firstName": "Janice",
        "surname": "Glover",
        "ageCategory": "35-60",
        "originCountry": "Sierra Leone",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 39
    },
    {
        "firstName": "Almina",
        "surname": "Carson",
        "ageCategory": "<18",
        "originCountry": "Seychelles",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 47
    },
    {
        "firstName": "Chari",
        "surname": "Caudill",
        "ageCategory": "18-35",
        "originCountry": "Iraq",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 15
    },
    {
        "firstName": "Ayanna",
        "surname": "Severson",
        "ageCategory": "18-35",
        "originCountry": "Nicaragua",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 29
    },
    {
        "firstName": "Rodney",
        "surname": "Gage",
        "ageCategory": "18-35",
        "originCountry": "Mali",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 44
    },
    {
        "firstName": "Anli",
        "surname": "Hefner",
        "ageCategory": "<18",
        "originCountry": "Jersey",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 20
    },
    {
        "firstName": "Judy",
        "surname": "Knight",
        "ageCategory": "18-35",
        "originCountry": "Montserrat",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 43
    },
    {
        "firstName": "Phuong",
        "surname": "Reeder",
        "ageCategory": "35-60",
        "originCountry": "Central African Republic",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 28
    },
    {
        "firstName": "Jeanette",
        "surname": "Derucher",
        "ageCategory": "18-35",
        "originCountry": "Mayotte",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 19
    },
    {
        "firstName": "Twyonna",
        "surname": "Mueske",
        "ageCategory": "35-60",
        "originCountry": "Hong Kong",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 14
    },
    {
        "firstName": "Kevin",
        "surname": "Downing",
        "ageCategory": ">60",
        "originCountry": "Mayotte",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 46
    },
    {
        "firstName": "Wendy",
        "surname": "Swanson",
        "ageCategory": ">60",
        "originCountry": "Virgin Islands (British)",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 46
    },
    {
        "firstName": "Valery",
        "surname": "Short",
        "ageCategory": "35-60",
        "originCountry": "Benin",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 42
    },
    {
        "firstName": "Tauras",
        "surname": "Kahle",
        "ageCategory": "<18",
        "originCountry": "Bhutan",
        "visitedCountry": "Iran",
        "positiveCoronavirus": false,
        "contactsPeople": 25
    },
    {
        "firstName": "Kareemah",
        "surname": "Greene",
        "ageCategory": "<18",
        "originCountry": "Jordan",
        "visitedCountry": "Italy",
        "positiveCoronavirus": false,
        "contactsPeople": 10
    },
    {
        "firstName": "Stacie",
        "surname": "Polovich",
        "ageCategory": "<18",
        "originCountry": "Belize",
        "visitedCountry": "Iran",
        "positiveCoronavirus": true,
        "contactsPeople": 35
    },
    {
        "firstName": "Huijun",
        "surname": "Mann",
        "ageCategory": "<18",
        "originCountry": "Virgin Islands (U.S.)",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 39
    },
    {
        "firstName": "Nakia",
        "surname": "Reddick",
        "ageCategory": "<18",
        "originCountry": "Libya",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 15
    },
    {
        "firstName": "Victor",
        "surname": "Belisario",
        "ageCategory": "35-60",
        "originCountry": "Cameroon",
        "visitedCountry": "China",
        "positiveCoronavirus": false,
        "contactsPeople": 32
    },
    {
        "firstName": "Cassandra",
        "surname": "Blackwell",
        "ageCategory": "18-35",
        "originCountry": "Thailand",
        "visitedCountry": "Italy",
        "positiveCoronavirus": true,
        "contactsPeople": 23
    }
];

export default data;
