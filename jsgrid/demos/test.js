(function() {

    var db = {

        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                //return (!filter.school_name || client.school_name.indexOf(filter.Name) > -1);
                return(true);
            });
        },

        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };

    window.db = db;


    db.countries = [
        { Name: "", Id: 0 },
        { Name: "United States", Id: 1 },
        { Name: "Canada", Id: 2 },
        { Name: "United Kingdom", Id: 3 },
        { Name: "France", Id: 4 },
        { Name: "Brazil", Id: 5 },
        { Name: "China", Id: 6 },
        { Name: "Russia", Id: 7 }
    ];

    db.clients = [
        {
            "Name": "Otto Clay",
            "Age": 61,
            "Country": 6,
            "Address": "Ap #897-1459 Quam Avenue",
            "Married": false
        },
        {
            "Name": "Connor Johnston",
            "Age": 73,
            "Country": 7,
            "Address": "Ap #370-4647 Dis Av.",
            "Married": false
        },
        {
            "Name": "Lacey Hess",
            "Age": 29,
            "Country": 7,
            "Address": "Ap #365-8835 Integer St.",
            "Married": false
        },
        {
            "Name": "Timothy Henson",
            "Age": 78,
            "Country": 1,
            "Address": "911-5143 Luctus Ave",
            "Married": false
        },
        {
            "Name": "Ramona Benton",
            "Age": 43,
            "Country": 5,
            "Address": "Ap #614-689 Vehicula Street",
            "Married": true
        },
        {
            "Name": "Ezra Tillman",
            "Age": 51,
            "Country": 1,
            "Address": "P.O. Box 738, 7583 Quisque St.",
            "Married": true
        },
        {
            "Name": "Dante Carter",
            "Age": 59,
            "Country": 1,
            "Address": "P.O. Box 976, 6316 Lorem, St.",
            "Married": false
        },
        {
            "Name": "Christopher Mcclure",
            "Age": 58,
            "Country": 1,
            "Address": "847-4303 Dictum Av.",
            "Married": true
        },
        {
            "Name": "Ruby Rocha",
            "Age": 62,
            "Country": 2,
            "Address": "5212 Sagittis Ave",
            "Married": false
        },
        {
            "Name": "Imelda Hardin",
            "Age": 39,
            "Country": 5,
            "Address": "719-7009 Auctor Av.",
            "Married": false
        },
        {
            "Name": "Jonah Johns",
            "Age": 28,
            "Country": 5,
            "Address": "P.O. Box 939, 9310 A Ave",
            "Married": false
        },
        {
            "Name": "Herman Rosa",
            "Age": 49,
            "Country": 7,
            "Address": "718-7162 Molestie Av.",
            "Married": true
        },
        {
            "Name": "Arthur Gay",
            "Age": 20,
            "Country": 7,
            "Address": "5497 Neque Street",
            "Married": false
        },
        {
            "Name": "Xena Wilkerson",
            "Age": 63,
            "Country": 1,
            "Address": "Ap #303-6974 Proin Street",
            "Married": true
        },
        {
            "Name": "Lilah Atkins",
            "Age": 33,
            "Country": 5,
            "Address": "622-8602 Gravida Ave",
            "Married": true
        },
        {
            "Name": "Malik Shepard",
            "Age": 59,
            "Country": 1,
            "Address": "967-5176 Tincidunt Av.",
            "Married": false
        },
        {
            "Name": "Keely Silva",
            "Age": 24,
            "Country": 1,
            "Address": "P.O. Box 153, 8995 Praesent Ave",
            "Married": false
        },
        {
            "Name": "Hunter Pate",
            "Age": 73,
            "Country": 7,
            "Address": "P.O. Box 771, 7599 Ante, Road",
            "Married": false
        },
        {
            "Name": "Mikayla Roach",
            "Age": 55,
            "Country": 5,
            "Address": "Ap #438-9886 Donec Rd.",
            "Married": true
        },
        {
            "Name": "Upton Joseph",
            "Age": 48,
            "Country": 4,
            "Address": "Ap #896-7592 Habitant St.",
            "Married": true
        },
        {
            "Name": "Jeanette Pate",
            "Age": 59,
            "Country": 2,
            "Address": "P.O. Box 177, 7584 Amet, St.",
            "Married": false
        },
        {
            "Name": "Kaden Hernandez",
            "Age": 79,
            "Country": 3,
            "Address": "366 Ut St.",
            "Married": true
        },
        {
            "Name": "Kenyon Stevens",
            "Age": 20,
            "Country": 3,
            "Address": "P.O. Box 704, 4580 Gravida Rd.",
            "Married": false
        },
        {
            "Name": "Jerome Harper",
            "Age": 31,
            "Country": 5,
            "Address": "2464 Porttitor Road",
            "Married": false
        },
        {
            "Name": "Jelani Patel",
            "Age": 36,
            "Country": 2,
            "Address": "P.O. Box 541, 5805 Nec Av.",
            "Married": true
        },
        {
            "Name": "Keaton Oconnor",
            "Age": 21,
            "Country": 1,
            "Address": "Ap #657-1093 Nec, Street",
            "Married": false
        },
        {
            "Name": "Bree Johnston",
            "Age": 31,
            "Country": 2,
            "Address": "372-5942 Vulputate Avenue",
            "Married": false
        },
        {
            "Name": "Maisie Hodges",
            "Age": 70,
            "Country": 7,
            "Address": "P.O. Box 445, 3880 Odio, Rd.",
            "Married": false
        },
        {
            "Name": "Kuame Calhoun",
            "Age": 39,
            "Country": 2,
            "Address": "P.O. Box 609, 4105 Rutrum St.",
            "Married": true
        },
        {
            "Name": "Carlos Cameron",
            "Age": 38,
            "Country": 5,
            "Address": "Ap #215-5386 A, Avenue",
            "Married": false
        },
        {
            "Name": "Fulton Parsons",
            "Age": 25,
            "Country": 7,
            "Address": "P.O. Box 523, 3705 Sed Rd.",
            "Married": false
        },
        {
            "Name": "Wallace Christian",
            "Age": 43,
            "Country": 3,
            "Address": "416-8816 Mauris Avenue",
            "Married": true
        },
        {
            "Name": "Caryn Maldonado",
            "Age": 40,
            "Country": 1,
            "Address": "108-282 Nonummy Ave",
            "Married": false
        },
        {
            "Name": "Whilemina Frank",
            "Age": 20,
            "Country": 7,
            "Address": "P.O. Box 681, 3938 Egestas. Av.",
            "Married": true
        },
        {
            "Name": "Emery Moon",
            "Age": 41,
            "Country": 4,
            "Address": "Ap #717-8556 Non Road",
            "Married": true
        },
        {
            "Name": "Price Watkins",
            "Age": 35,
            "Country": 4,
            "Address": "832-7810 Nunc Rd.",
            "Married": false
        },
        {
            "Name": "Lydia Castillo",
            "Age": 59,
            "Country": 7,
            "Address": "5280 Placerat, Ave",
            "Married": true
        },
        {
            "Name": "Lawrence Conway",
            "Age": 53,
            "Country": 1,
            "Address": "Ap #452-2808 Imperdiet St.",
            "Married": false
        },
        {
            "Name": "Kalia Nicholson",
            "Age": 67,
            "Country": 5,
            "Address": "P.O. Box 871, 3023 Tellus Road",
            "Married": true
        },
        {
            "Name": "Brielle Baxter",
            "Age": 45,
            "Country": 3,
            "Address": "Ap #822-9526 Ut, Road",
            "Married": true
        },
        {
            "Name": "Valentine Brady",
            "Age": 72,
            "Country": 7,
            "Address": "8014 Enim. Road",
            "Married": true
        },
        {
            "Name": "Rebecca Gardner",
            "Age": 57,
            "Country": 4,
            "Address": "8655 Arcu. Road",
            "Married": true
        },
        {
            "Name": "Vladimir Tate",
            "Age": 26,
            "Country": 1,
            "Address": "130-1291 Non, Rd.",
            "Married": true
        },
        {
            "Name": "Vernon Hays",
            "Age": 56,
            "Country": 4,
            "Address": "964-5552 In Rd.",
            "Married": true
        },
        {
            "Name": "Allegra Hull",
            "Age": 22,
            "Country": 4,
            "Address": "245-8891 Donec St.",
            "Married": true
        },
        {
            "Name": "Hu Hendrix",
            "Age": 65,
            "Country": 7,
            "Address": "428-5404 Tempus Ave",
            "Married": true
        },
        {
            "Name": "Kenyon Battle",
            "Age": 32,
            "Country": 2,
            "Address": "921-6804 Lectus St.",
            "Married": false
        },
        {
            "Name": "Gloria Nielsen",
            "Age": 24,
            "Country": 4,
            "Address": "Ap #275-4345 Lorem, Street",
            "Married": true
        },
        {
            "Name": "Illiana Kidd",
            "Age": 59,
            "Country": 2,
            "Address": "7618 Lacus. Av.",
            "Married": false
        },
        {
            "Name": "Adria Todd",
            "Age": 68,
            "Country": 6,
            "Address": "1889 Tincidunt Road",
            "Married": false
        },
        {
            "Name": "Kirsten Mayo",
            "Age": 71,
            "Country": 1,
            "Address": "100-8640 Orci, Avenue",
            "Married": false
        },
        {
            "Name": "Willa Hobbs",
            "Age": 60,
            "Country": 6,
            "Address": "P.O. Box 323, 158 Tristique St.",
            "Married": false
        },
        {
            "Name": "Alexis Clements",
            "Age": 69,
            "Country": 5,
            "Address": "P.O. Box 176, 5107 Proin Rd.",
            "Married": false
        },
        {
            "Name": "Akeem Conrad",
            "Age": 60,
            "Country": 2,
            "Address": "282-495 Sed Ave",
            "Married": true
        },
        {
            "Name": "Montana Silva",
            "Age": 79,
            "Country": 6,
            "Address": "P.O. Box 120, 9766 Consectetuer St.",
            "Married": false
        },
        {
            "Name": "Kaseem Hensley",
            "Age": 77,
            "Country": 6,
            "Address": "Ap #510-8903 Mauris. Av.",
            "Married": true
        },
        {
            "Name": "Christopher Morton",
            "Age": 35,
            "Country": 5,
            "Address": "P.O. Box 234, 3651 Sodales Avenue",
            "Married": false
        },
        {
            "Name": "Wade Fernandez",
            "Age": 49,
            "Country": 6,
            "Address": "740-5059 Dolor. Road",
            "Married": true
        },
        {
            "Name": "Illiana Kirby",
            "Age": 31,
            "Country": 2,
            "Address": "527-3553 Mi Ave",
            "Married": false
        },
        {
            "Name": "Kimberley Hurley",
            "Age": 65,
            "Country": 5,
            "Address": "P.O. Box 637, 9915 Dictum St.",
            "Married": false
        },
        {
            "Name": "Arthur Olsen",
            "Age": 74,
            "Country": 5,
            "Address": "887-5080 Eget St.",
            "Married": false
        },
        {
            "Name": "Brody Potts",
            "Age": 59,
            "Country": 2,
            "Address": "Ap #577-7690 Sem Road",
            "Married": false
        },
        {
            "Name": "Dillon Ford",
            "Age": 60,
            "Country": 1,
            "Address": "Ap #885-9289 A, Av.",
            "Married": true
        },
        {
            "Name": "Hannah Juarez",
            "Age": 61,
            "Country": 2,
            "Address": "4744 Sapien, Rd.",
            "Married": true
        },
        {
            "Name": "Vincent Shaffer",
            "Age": 25,
            "Country": 2,
            "Address": "9203 Nunc St.",
            "Married": true
        },
        {
            "Name": "George Holt",
            "Age": 27,
            "Country": 6,
            "Address": "4162 Cras Rd.",
            "Married": false
        },
        {
            "Name": "Tobias Bartlett",
            "Age": 74,
            "Country": 4,
            "Address": "792-6145 Mauris St.",
            "Married": true
        },
        {
            "Name": "Xavier Hooper",
            "Age": 35,
            "Country": 1,
            "Address": "879-5026 Interdum. Rd.",
            "Married": false
        },
        {
            "Name": "Declan Dorsey",
            "Age": 31,
            "Country": 2,
            "Address": "Ap #926-4171 Aenean Road",
            "Married": true
        },
        {
            "Name": "Clementine Tran",
            "Age": 43,
            "Country": 4,
            "Address": "P.O. Box 176, 9865 Eu Rd.",
            "Married": true
        },
        {
            "Name": "Pamela Moody",
            "Age": 55,
            "Country": 6,
            "Address": "622-6233 Luctus Rd.",
            "Married": true
        },
        {
            "Name": "Julie Leon",
            "Age": 43,
            "Country": 6,
            "Address": "Ap #915-6782 Sem Av.",
            "Married": true
        },
        {
            "Name": "Shana Nolan",
            "Age": 79,
            "Country": 5,
            "Address": "P.O. Box 603, 899 Eu St.",
            "Married": false
        },
        {
            "Name": "Vaughan Moody",
            "Age": 37,
            "Country": 5,
            "Address": "880 Erat Rd.",
            "Married": false
        },
        {
            "Name": "Randall Reeves",
            "Age": 44,
            "Country": 3,
            "Address": "1819 Non Street",
            "Married": false
        },
        {
            "Name": "Dominic Raymond",
            "Age": 68,
            "Country": 1,
            "Address": "Ap #689-4874 Nisi Rd.",
            "Married": true
        },
        {
            "Name": "Lev Pugh",
            "Age": 69,
            "Country": 5,
            "Address": "Ap #433-6844 Auctor Avenue",
            "Married": true
        },
        {
            "Name": "Desiree Hughes",
            "Age": 80,
            "Country": 4,
            "Address": "605-6645 Fermentum Avenue",
            "Married": true
        },
        {
            "Name": "Idona Oneill",
            "Age": 23,
            "Country": 7,
            "Address": "751-8148 Aliquam Avenue",
            "Married": true
        },
        {
            "Name": "Lani Mayo",
            "Age": 76,
            "Country": 1,
            "Address": "635-2704 Tristique St.",
            "Married": true
        },
        {
            "Name": "Cathleen Bonner",
            "Age": 40,
            "Country": 1,
            "Address": "916-2910 Dolor Av.",
            "Married": false
        },
        {
            "Name": "Sydney Murray",
            "Age": 44,
            "Country": 5,
            "Address": "835-2330 Fringilla St.",
            "Married": false
        },
        {
            "Name": "Brenna Rodriguez",
            "Age": 77,
            "Country": 6,
            "Address": "3687 Imperdiet Av.",
            "Married": true
        },
        {
            "Name": "Alfreda Mcdaniel",
            "Age": 38,
            "Country": 7,
            "Address": "745-8221 Aliquet Rd.",
            "Married": true
        },
        {
            "Name": "Zachery Atkins",
            "Age": 30,
            "Country": 1,
            "Address": "549-2208 Auctor. Road",
            "Married": true
        },
        {
            "Name": "Amelia Rich",
            "Age": 56,
            "Country": 4,
            "Address": "P.O. Box 734, 4717 Nunc Rd.",
            "Married": false
        },
        {
            "Name": "Kiayada Witt",
            "Age": 62,
            "Country": 3,
            "Address": "Ap #735-3421 Malesuada Avenue",
            "Married": false
        },
        {
            "Name": "Lysandra Pierce",
            "Age": 36,
            "Country": 1,
            "Address": "Ap #146-2835 Curabitur St.",
            "Married": true
        },
        {
            "Name": "Cara Rios",
            "Age": 58,
            "Country": 4,
            "Address": "Ap #562-7811 Quam. Ave",
            "Married": true
        },
        {
            "Name": "Austin Andrews",
            "Age": 55,
            "Country": 7,
            "Address": "P.O. Box 274, 5505 Sociis Rd.",
            "Married": false
        },
        {
            "Name": "Lillian Peterson",
            "Age": 39,
            "Country": 2,
            "Address": "6212 A Avenue",
            "Married": false
        },
        {
            "Name": "Adria Beach",
            "Age": 29,
            "Country": 2,
            "Address": "P.O. Box 183, 2717 Nunc Avenue",
            "Married": true
        },
        {
            "Name": "Oleg Durham",
            "Age": 80,
            "Country": 4,
            "Address": "931-3208 Nunc Rd.",
            "Married": false
        },
        {
            "Name": "Casey Reese",
            "Age": 60,
            "Country": 4,
            "Address": "383-3675 Ultrices, St.",
            "Married": false
        },
        {
            "Name": "Kane Burnett",
            "Age": 80,
            "Country": 1,
            "Address": "759-8212 Dolor. Ave",
            "Married": false
        },
        {
            "Name": "Stewart Wilson",
            "Age": 46,
            "Country": 7,
            "Address": "718-7845 Sagittis. Av.",
            "Married": false
        },
        {
            "Name": "Charity Holcomb",
            "Age": 31,
            "Country": 6,
            "Address": "641-7892 Enim. Ave",
            "Married": false
        },
        {
            "Name": "Kyra Cummings",
            "Age": 43,
            "Country": 4,
            "Address": "P.O. Box 702, 6621 Mus. Av.",
            "Married": false
        },
        {
            "Name": "Stuart Wallace",
            "Age": 25,
            "Country": 7,
            "Address": "648-4990 Sed Rd.",
            "Married": true
        },
        {
            "Name": "Carter Clarke",
            "Age": 59,
            "Country": 6,
            "Address": "Ap #547-2921 A Street",
            "Married": false
        }
    ];

    db.users = [
        {
            "ID": "x",
            "Account": "A758A693-0302-03D1-AE53-EEFE22855556",
            "Name": "Carson Kelley",
            "RegisterDate": "2002-04-20T22:55:52-07:00"
        },
        {
            "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
            "Name": "Prescott Griffin",
            "RegisterDate": "2011-02-22T05:59:55-08:00"
        },
        {
            "Account": "06FAAD9A-5114-08F6-D60C-961B2528B4F0",
            "Name": "Amir Saunders",
            "RegisterDate": "2014-08-13T09:17:49-07:00"
        },
        {
            "Account": "EED7653D-7DD9-A722-64A8-36A55ECDBE77",
            "Name": "Derek Thornton",
            "RegisterDate": "2012-02-27T01:31:07-08:00"
        },
        {
            "Account": "2A2E6D40-FEBD-C643-A751-9AB4CAF1E2F6",
            "Name": "Fletcher Romero",
            "RegisterDate": "2010-06-25T15:49:54-07:00"
        },
        {
            "Account": "3978F8FA-DFF0-DA0E-0A5D-EB9D281A3286",
            "Name": "Thaddeus Stein",
            "RegisterDate": "2013-11-10T07:29:41-08:00"
        },
        {
            "Account": "658DBF5A-176E-569A-9273-74FB5F69FA42",
            "Name": "Nash Knapp",
            "RegisterDate": "2005-06-24T09:11:19-07:00"
        },
        {
            "Account": "76D2EE4B-7A73-1212-F6F2-957EF8C1F907",
            "Name": "Quamar Vega",
            "RegisterDate": "2011-04-13T20:06:29-07:00"
        },
        {
            "Account": "00E46809-A595-CE82-C5B4-D1CAEB7E3E58",
            "Name": "Philip Galloway",
            "RegisterDate": "2008-08-21T18:59:38-07:00"
        },
        {
            "Account": "C196781C-DDCC-AF83-DDC2-CA3E851A47A0",
            "Name": "Mason French",
            "RegisterDate": "2000-11-15T00:38:37-08:00"
        },
        {
            "Account": "5911F201-818A-B393-5888-13157CE0D63F",
            "Name": "Ross Cortez",
            "RegisterDate": "2010-05-27T17:35:32-07:00"
        },
        {
            "Account": "B8BB78F9-E1A1-A956-086F-E12B6FE168B6",
            "Name": "Logan King",
            "RegisterDate": "2003-07-08T16:58:06-07:00"
        },
        {
            "Account": "06F636C3-9599-1A2D-5FD5-86B24ADDE626",
            "Name": "Cedric Leblanc",
            "RegisterDate": "2011-06-30T14:30:10-07:00"
        },
        {
            "Account": "FE880CDD-F6E7-75CB-743C-64C6DE192412",
            "Name": "Simon Sullivan",
            "RegisterDate": "2013-06-11T16:35:07-07:00"
        },
        {
            "Account": "BBEDD673-E2C1-4872-A5D3-C4EBD4BE0A12",
            "Name": "Jamal West",
            "RegisterDate": "2001-03-16T20:18:29-08:00"
        },
        {
            "Account": "19BC22FA-C52E-0CC6-9552-10365C755FAC",
            "Name": "Hector Morales",
            "RegisterDate": "2012-11-01T01:56:34-07:00"
        },
        {
            "Account": "A8292214-2C13-5989-3419-6B83DD637D6C",
            "Name": "Herrod Hart",
            "RegisterDate": "2008-03-13T19:21:04-07:00"
        },
        {
            "Account": "0285564B-F447-0E7F-EAA1-7FB8F9C453C8",
            "Name": "Clark Maxwell",
            "RegisterDate": "2004-08-05T08:22:24-07:00"
        },
        {
            "Account": "EA78F076-4F6E-4228-268C-1F51272498AE",
            "Name": "Reuben Walter",
            "RegisterDate": "2011-01-23T01:55:59-08:00"
        },
        {
            "Account": "6A88C194-EA21-426F-4FE2-F2AE33F51793",
            "Name": "Ira Ingram",
            "RegisterDate": "2008-08-15T05:57:46-07:00"
        },
        {
            "Account": "4275E873-439C-AD26-56B3-8715E336508E",
            "Name": "Damian Morrow",
            "RegisterDate": "2015-09-13T01:50:55-07:00"
        },
        {
            "Account": "A0D733C4-9070-B8D6-4387-D44F0BA515BE",
            "Name": "Macon Farrell",
            "RegisterDate": "2011-03-14T05:41:40-07:00"
        },
        {
            "Account": "B3683DE8-C2FA-7CA0-A8A6-8FA7E954F90A",
            "Name": "Joel Galloway",
            "RegisterDate": "2003-02-03T04:19:01-08:00"
        },
        {
            "Account": "01D95A8E-91BC-2050-F5D0-4437AAFFD11F",
            "Name": "Rigel Horton",
            "RegisterDate": "2015-06-20T11:53:11-07:00"
        },
        {
            "Account": "F0D12CC0-31AC-A82E-FD73-EEEFDBD21A36",
            "Name": "Sylvester Gaines",
            "RegisterDate": "2004-03-12T09:57:13-08:00"
        },
        {
            "Account": "874FCC49-9A61-71BC-2F4E-2CE88348AD7B",
            "Name": "Abbot Mckay",
            "RegisterDate": "2008-12-26T20:42:57-08:00"
        },
        {
            "Account": "B8DA1912-20A0-FB6E-0031-5F88FD63EF90",
            "Name": "Solomon Green",
            "RegisterDate": "2013-09-04T01:44:47-07:00"
        }
     ];


    db.meishu = [
{"schoolCode":10002,"school_name":"中国人民大学","plan":2,"person":2,"score":601,"position":5},
{"schoolCode":10010,"school_name":"北京化工大学","plan":16,"person":16,"score":506,"position":3453},
{"schoolCode":10011,"school_name":"北京工商大学","plan":5,"person":5,"score":494,"position":5322},
{"schoolCode":10022,"school_name":"北京林业大学","plan":30,"person":30,"score":541,"position":629},
{"schoolCode":10057,"school_name":"天津科技大学","plan":6,"person":6,"score":498,"position":4708},
{"schoolCode":10058,"school_name":"天津工业大学","plan":5,"person":5,"score":504,"position":3784},
{"schoolCode":10070,"school_name":"天津财经大学","plan":6,"person":6,"score":504,"position":3758},
{"schoolCode":10094,"school_name":"河北师范大学","plan":3,"person":3,"score":486,"position":6928},
{"schoolCode":10149,"school_name":"沈阳化工大学","plan":5,"person":5,"score":446,"position":17925},
{"schoolCode":10152,"school_name":"大连工业大学","plan":6,"person":6,"score":497,"position":4810},
{"schoolCode":10183,"school_name":"吉林大学","plan":6,"person":6,"score":512,"position":2684},
{"schoolCode":10212,"school_name":"黑龙江大学","plan":28,"person":28,"score":494,"position":5372},
{"schoolCode":10214,"school_name":"哈尔滨理工大学","plan":14,"person":14,"score":491,"position":5968},
{"schoolCode":10240,"school_name":"哈尔滨商业大学","plan":12,"person":12,"score":472,"position":10258},
{"schoolCode":10247,"school_name":"同济大学","plan":4,"person":4,"score":595,"position":11},
{"schoolCode":10259,"school_name":"上海应用技术大学","plan":7,"person":7,"score":502,"position":4092},
{"schoolCode":10285,"school_name":"苏州大学","plan":4,"person":4,"score":546,"position":477},
{"schoolCode":10286,"school_name":"东南大学","plan":4,"person":4,"score":569,"position":107},
{"schoolCode":10290,"school_name":"中国矿业大学","plan":5,"person":5,"score":516,"position":2306},
{"schoolCode":10300,"school_name":"南京信息工程大学","plan":9,"person":9,"score":510,"position":2977},
{"schoolCode":10327,"school_name":"南京财经大学","plan":5,"person":5,"score":500,"position":4408},
{"schoolCode":10341,"school_name":"浙江农林大学","plan":10,"person":10,"score":497,"position":4859},
{"schoolCode":10384,"school_name":"厦门大学","plan":5,"person":5,"score":569,"position":113},
{"schoolCode":10385,"school_name":"华侨大学","plan":10,"person":10,"score":509,"position":3065},
{"schoolCode":10390,"school_name":"集美大学","plan":3,"person":3,"score":508,"position":3245},
{"schoolCode":10394,"school_name":"福建师范大学","plan":9,"person":9,"score":514,"position":2486},
{"schoolCode":10407,"school_name":"江西理工大学","plan":4,"person":4,"score":487,"position":6866},
{"schoolCode":10410,"school_name":"江西农业大学","plan":5,"person":5,"score":483,"position":7653},
{"schoolCode":10414,"school_name":"江西师范大学","plan":12,"person":12,"score":500,"position":4278},
{"schoolCode":10416,"school_name":"上饶师范学院","plan":7,"person":7,"score":465,"position":12238},
{"schoolCode":10417,"school_name":"宜春学院","plan":11,"person":11,"score":477,"position":8937},
{"schoolCode":10418,"school_name":"赣南师范大学","plan":11,"person":11,"score":485,"position":7248},
{"schoolCode":10421,"school_name":"江西财经大学","plan":22,"person":22,"score":497,"position":4775},
{"schoolCode":10427,"school_name":"济南大学","plan":8,"person":8,"score":505,"position":3572},
{"schoolCode":10445,"school_name":"山东师范大学","plan":8,"person":8,"score":498,"position":4714},
{"schoolCode":10459,"school_name":"郑州大学","plan":10,"person":10,"score":503,"position":3828},
{"schoolCode":10462,"school_name":"郑州轻工业学院","plan":60,"person":60,"score":476,"position":9173},
{"schoolCode":10463,"school_name":"河南工业大学","plan":6,"person":6,"score":487,"position":6846},
{"schoolCode":10486,"school_name":"武汉大学","plan":12,"person":12,"score":570,"position":103},
{"schoolCode":10487,"school_name":"华中科技大学","plan":17,"person":17,"score":559,"position":227},
{"schoolCode":10488,"school_name":"武汉科技大学","plan":18,"person":18,"score":499,"position":4529},
{"schoolCode":10489,"school_name":"长江大学","plan":8,"person":8,"score":480,"position":8404},
{"schoolCode":10490,"school_name":"武汉工程大学","plan":9,"person":9,"score":497,"position":4868},
{"schoolCode":10491,"school_name":"中国地质大学(武汉)","plan":8,"person":8,"score":556,"position":289},
{"schoolCode":10495,"school_name":"武汉纺织大学","plan":24,"person":24,"score":486,"position":7080},
{"schoolCode":10497,"school_name":"武汉理工大学","plan":13,"person":13,"score":533,"position":998},
{"schoolCode":10500,"school_name":"湖北工业大学","plan":17,"person":17,"score":504,"position":3747},
{"schoolCode":10511,"school_name":"华中师范大学","plan":15,"person":15,"score":536,"position":857},
{"schoolCode":10512,"school_name":"湖北大学","plan":10,"person":10,"score":504,"position":3675},
{"schoolCode":10514,"school_name":"黄冈师范学院","plan":11,"person":11,"score":479,"position":8553},
{"schoolCode":10520,"school_name":"中南财经政法大学","plan":10,"person":10,"score":513,"position":2626},
{"schoolCode":10523,"school_name":"湖北美术学院","plan":3,"person":3,"score":504,"position":3681},
{"schoolCode":10525,"school_name":"湖北汽车工业学院","plan":2,"person":2,"score":467,"position":11755},
{"schoolCode":10533,"school_name":"中南大学","plan":8,"person":8,"score":543,"position":578},
{"schoolCode":10534,"school_name":"湖南科技大学","plan":6,"person":6,"score":490,"position":6220},
{"schoolCode":10536,"school_name":"长沙理工大学","plan":6,"person":6,"score":508,"position":3196},
{"schoolCode":10537,"school_name":"湖南农业大学","plan":14,"person":14,"score":493,"position":5539},
{"schoolCode":10542,"school_name":"湖南师范大学","plan":6,"person":6,"score":508,"position":3262},
{"schoolCode":10551,"school_name":"湖南科技学院","plan":19,"person":19,"score":471,"position":10689},
{"schoolCode":10555,"school_name":"南华大学","plan":3,"person":3,"score":506,"position":3500},
{"schoolCode":10560,"school_name":"汕头大学","plan":119,"person":119,"score":516,"position":2291},
{"schoolCode":10564,"school_name":"华南农业大学","plan":404,"person":404,"score":518,"position":2096},
{"schoolCode":10566,"school_name":"广东海洋大学","plan":58,"person":58,"score":500,"position":4335},
{"schoolCode":10574,"school_name":"华南师范大学","plan":119,"person":119,"score":534,"position":982},
{"schoolCode":10576,"school_name":"韶关学院","plan":221,"person":221,"score":481,"position":8149},
{"schoolCode":10577,"school_name":"惠州学院","plan":190,"person":190,"score":490,"position":6055},
{"schoolCode":10578,"school_name":"韩山师范学院","plan":189,"person":189,"score":480,"position":8225},
{"schoolCode":10579,"school_name":"岭南师范学院","plan":177,"person":177,"score":487,"position":6834},
{"schoolCode":10580,"school_name":"肇庆学院","plan":315,"person":315,"score":486,"position":6902},
{"schoolCode":10582,"school_name":"嘉应学院","plan":140,"person":140,"score":480,"position":8412},
{"schoolCode":10586,"school_name":"广州美术学院","plan":65,"person":65,"score":542,"position":592},
{"schoolCode":10588,"school_name":"广东技术师范学院","plan":222,"person":222,"score":495,"position":5115},
{"schoolCode":10590,"school_name":"深圳大学","plan":277,"person":277,"score":528,"position":1276},
{"schoolCode":10592,"school_name":"广东财经大学","plan":184,"person":184,"score":505,"position":3550},
{"schoolCode":10595,"school_name":"桂林电子科技大学","plan":16,"person":16,"score":476,"position":9285},
{"schoolCode":10596,"school_name":"桂林理工大学","plan":6,"person":6,"score":480,"position":8419},
{"schoolCode":10606,"school_name":"玉林师范学院","plan":25,"person":25,"score":477,"position":9121},
{"schoolCode":10610,"school_name":"四川大学","plan":29,"person":29,"score":541,"position":648},
{"schoolCode":10611,"school_name":"重庆大学","plan":11,"person":11,"score":537,"position":820},
{"schoolCode":10621,"school_name":"成都信息工程大学","plan":5,"person":5,"score":495,"position":5130},
{"schoolCode":10635,"school_name":"西南大学","plan":3,"person":3,"score":532,"position":1057},
{"schoolCode":10636,"school_name":"四川师范大学","plan":24,"person":24,"score":501,"position":4191},
{"schoolCode":10640,"school_name":"内江师范学院","plan":7,"person":7,"score":470,"position":10867},
{"schoolCode":10642,"school_name":"重庆文理学院","plan":4,"person":4,"score":480,"position":8288},
{"schoolCode":10649,"school_name":"乐山师范学院","plan":5,"person":5,"score":463,"position":12884},
{"schoolCode":10656,"school_name":"西南民族大学","plan":9,"person":9,"score":489,"position":6236},
{"schoolCode":10673,"school_name":"云南大学","plan":9,"person":9,"score":511,"position":2821},
{"schoolCode":10674,"school_name":"昆明理工大学","plan":10,"person":10,"score":486,"position":6953},
{"schoolCode":10677,"school_name":"西南林业大学","plan":5,"person":5,"score":483,"position":7671},
{"schoolCode":10702,"school_name":"西安工业大学","plan":2,"person":2,"score":473,"position":10080},
{"schoolCode":10704,"school_name":"西安科技大学","plan":4,"person":4,"score":490,"position":6196},
{"schoolCode":10708,"school_name":"陕西科技大学","plan":5,"person":5,"score":501,"position":4255},
{"schoolCode":10710,"school_name":"长安大学","plan":10,"person":10,"score":511,"position":2852},
{"schoolCode":10718,"school_name":"陕西师范大学","plan":10,"person":10,"score":515,"position":2389},
{"schoolCode":10723,"school_name":"渭南师范学院","plan":2,"person":2,"score":452,"position":16135},
{"schoolCode":10731,"school_name":"兰州理工大学","plan":10,"person":10,"score":474,"position":9688},
{"schoolCode":10732,"school_name":"兰州交通大学","plan":2,"person":2,"score":473,"position":10000},
{"schoolCode":10822,"school_name":"广东白云学院","plan":420,"person":420,"score":443,"position":18853},
{"schoolCode":10894,"school_name":"景德镇学院","plan":4,"person":4,"score":485,"position":7204},
{"schoolCode":10895,"school_name":"萍乡学院","plan":2,"person":2,"score":473,"position":10111},
{"schoolCode":10918,"school_name":"黄淮学院","plan":3,"person":3,"score":461,"position":13342},
{"schoolCode":10919,"school_name":"平顶山学院","plan":5,"person":5,"score":446,"position":17938},
{"schoolCode":10920,"school_name":"湖北理工学院","plan":12,"person":12,"score":481,"position":8094},
{"schoolCode":11075,"school_name":"三峡大学","plan":6,"person":6,"score":478,"position":8755},
{"schoolCode":11078,"school_name":"广州大学","plan":280,"person":280,"score":510,"position":2983},
{"schoolCode":11079,"school_name":"成都学院","plan":16,"person":16,"score":488,"position":6547},
{"schoolCode":11100,"school_name":"海南热带海洋学院","plan":2,"person":2,"score":477,"position":8968},
{"schoolCode":11104,"school_name":"华北科技学院","plan":3,"person":3,"score":476,"position":9240},
{"schoolCode":11106,"school_name":"广州航海学院","plan":240,"person":240,"score":479,"position":8508},
{"schoolCode":11318,"school_name":"江西科技师范大学","plan":12,"person":12,"score":480,"position":8333},
{"schoolCode":11319,"school_name":"南昌工程学院","plan":8,"person":8,"score":478,"position":8756},
{"schoolCode":11342,"school_name":"湖南工程学院","plan":10,"person":10,"score":485,"position":7169},
{"schoolCode":11347,"school_name":"仲恺农业工程学院","plan":220,"person":220,"score":492,"position":5603},
{"schoolCode":11349,"school_name":"五邑大学","plan":188,"person":110（江门市外）,"score":493,"position":5530},
{"schoolCode":null,"school_name":"","plan":null,"person":78（江门市内）,"score":486,"position":7052},
{"schoolCode":11354,"school_name":"梧州学院","plan":20,"person":20,"score":462,"position":13047},
{"schoolCode":11393,"school_name":"昆明学院","plan":2,"person":2,"score":475,"position":9537},
{"schoolCode":11400,"school_name":"西安培华学院","plan":2,"person":2,"score":443,"position":18791},
{"schoolCode":11415,"school_name":"中国地质大学(北京)","plan":2,"person":2,"score":567,"position":136},
{"schoolCode":11418,"school_name":"北京城市学院","plan":8,"person":8,"score":480,"position":8215},
{"schoolCode":11458,"school_name":"上海电机学院","plan":5,"person":5,"score":454,"position":15444},
{"schoolCode":11508,"school_name":"新余学院","plan":3,"person":3,"score":474,"position":9908},
{"schoolCode":11545,"school_name":"电子科技大学中山学院","plan":110,"person":110,"score":467,"position":11732},
{"schoolCode":11546,"school_name":"广西科技师范学院","plan":5,"person":5,"score":459,"position":13854},
{"schoolCode":11556,"school_name":"文山学院","plan":5,"person":5,"score":455,"position":15127},
{"schoolCode":11647,"school_name":"浙江传媒学院","plan":43,"person":43,"score":508,"position":3208},
{"schoolCode":11656,"school_name":"广东石油化工学院","plan":53,"person":53,"score":478,"position":8844},
{"schoolCode":11731,"school_name":"贵州商学院","plan":4,"person":4,"score":448,"position":17215},
{"schoolCode":11799,"school_name":"重庆工商大学","plan":20,"person":20,"score":493,"position":5575},
{"schoolCode":11800,"school_name":"汉口学院","plan":4,"person":4,"score":460,"position":13750},
{"schoolCode":11837,"school_name":"桂林旅游学院","plan":12,"person":12,"score":471,"position":10708},
{"schoolCode":11845,"school_name":"广东工业大学","plan":351,"person":351,"score":510,"position":2936},
{"schoolCode":11846,"school_name":"广东外语外贸大学","plan":20,"person":20,"score":513,"position":2568},
{"schoolCode":11847,"school_name":"佛山科学技术学院","plan":118,"person":118,"score":489,"position":6348},
{"schoolCode":12048,"school_name":"南京特殊教育师范学院","plan":5,"person":5,"score":481,"position":8142},
{"schoolCode":12056,"school_name":"南通理工学院","plan":10,"person":9,"score":430,"position":22902},
{"schoolCode":12059,"school_name":"广东培正学院","plan":243,"person":243,"score":451,"position":16454},
{"schoolCode":12303,"school_name":"湖南涉外经济学院","plan":17,"person":17,"score":438,"position":20398},
{"schoolCode":12308,"school_name":"海口经济学院","plan":5,"person":5,"score":423,"position":24951},
{"schoolCode":12310,"school_name":"武昌理工学院","plan":4,"person":4,"score":456,"position":14955},
{"schoolCode":12574,"school_name":"广东东软学院","plan":420,"person":420,"score":441,"position":19418},
{"schoolCode":12587,"school_name":"上海立达学院","plan":2,"person":0,"score":-,"position":-},
{"schoolCode":12604,"school_name":"湖南工业大学科技学院","plan":12,"person":12,"score":456,"position":14790},
{"schoolCode":12617,"school_name":"华南理工大学广州学院","plan":260,"person":260,"score":465,"position":12320},
{"schoolCode":12618,"school_name":"广州大学华软软件学院","plan":441,"person":441,"score":449,"position":16955},
{"schoolCode":12619,"school_name":"中山大学南方学院","plan":192,"person":192,"score":435,"position":21335},
{"schoolCode":12621,"school_name":"广东财经大学华商学院","plan":302,"person":302,"score":439,"position":20136},
{"schoolCode":12622,"school_name":"广东海洋大学寸金学院","plan":540,"person":540,"score":428,"position":23471},
{"schoolCode":12623,"school_name":"华南农业大学珠江学院","plan":448,"person":169,"score":421,"position":25527},
{"schoolCode":12650,"school_name":"南华大学船山学院","plan":1,"person":1,"score":449,"position":16918},
{"schoolCode":12662,"school_name":"吉首大学张家界学院","plan":5,"person":5,"score":423,"position":24956},
{"schoolCode":12668,"school_name":"广东技术师范学院天河学院","plan":90,"person":90,"score":463,"position":12737},
{"schoolCode":12715,"school_name":"西京学院","plan":5,"person":5,"score":430,"position":22868},
{"schoolCode":12766,"school_name":"江西工程学院","plan":2,"person":2,"score":462,"position":13073},
{"schoolCode":12810,"school_name":"安徽文达信息工程学院","plan":4,"person":4,"score":449,"position":16967},
{"schoolCode":13001,"school_name":"宁波大红鹰学院","plan":8,"person":1,"score":477,"position":8927},
{"schoolCode":13177,"school_name":"北京师范大学珠海分校","plan":109,"person":109,"score":492,"position":5657},
{"schoolCode":13238,"school_name":"湖北工业大学工程技术学院","plan":2,"person":2,"score":440,"position":19802},
{"schoolCode":13239,"school_name":"武汉工程大学邮电与信息工程学院","plan":10,"person":4,"score":432,"position":22247},
{"schoolCode":13328,"school_name":"云南大学旅游文化学院","plan":33,"person":18,"score":421,"position":25528},
{"schoolCode":13330,"school_name":"云南师范大学商学院","plan":30,"person":17,"score":421,"position":25511},
{"schoolCode":13333,"school_name":"云南艺术学院文华学院","plan":31,"person":31,"score":440,"position":19728},
{"schoolCode":13434,"school_name":"江西理工大学应用科学学院","plan":10,"person":10,"score":449,"position":17039},
{"schoolCode":13435,"school_name":"景德镇陶瓷大学科技艺术学院","plan":24,"person":24,"score":465,"position":12354},
{"schoolCode":13436,"school_name":"江西农业大学南昌商学院","plan":6,"person":6,"score":441,"position":19482},
{"schoolCode":13438,"school_name":"江西师范大学科学技术学院","plan":6,"person":6,"score":453,"position":15685},
{"schoolCode":13439,"school_name":"赣南师范大学科技学院","plan":24,"person":24,"score":461,"position":13282},
{"schoolCode":13441,"school_name":"江西财经大学现代经济管理学院","plan":4,"person":4,"score":421,"position":25524},
{"schoolCode":13469,"school_name":"厦门大学嘉庚学院","plan":11,"person":11,"score":484,"position":7335},
{"schoolCode":13471,"school_name":"集美大学诚毅学院","plan":3,"person":3,"score":473,"position":9988},
{"schoolCode":13524,"school_name":"北海艺术设计学院","plan":128,"person":128,"score":460,"position":13638},
{"schoolCode":13599,"school_name":"大连艺术学院","plan":16,"person":16,"score":468,"position":11334},
{"schoolCode":13607,"school_name":"吉林动画学院","plan":15,"person":15,"score":491,"position":5940},
{"schoolCode":13625,"school_name":"云南师范大学文理学院","plan":6,"person":2,"score":429,"position":23148},
{"schoolCode":13630,"school_name":"北京工商大学嘉华学院","plan":6,"person":3,"score":445,"position":18230},
{"schoolCode":13632,"school_name":"上海视觉艺术学院","plan":10,"person":10,"score":512,"position":2762},
{"schoolCode":13639,"school_name":"广西科技大学鹿山学院","plan":30,"person":30,"score":438,"position":20415},
{"schoolCode":13641,"school_name":"广西师范大学漓江学院","plan":2,"person":2,"score":452,"position":16161},
{"schoolCode":13642,"school_name":"广西师范学院师园学院","plan":6,"person":6,"score":426,"position":24073},
{"schoolCode":13644,"school_name":"桂林电子科技大学信息科技学院","plan":20,"person":20,"score":434,"position":21671},
{"schoolCode":13645,"school_name":"桂林理工大学博文管理学院","plan":36,"person":36,"score":429,"position":23175},
{"schoolCode":13656,"school_name":"广东工业大学华立学院","plan":200,"person":200,"score":452,"position":16152},
{"schoolCode":13657,"school_name":"广州大学松田学院","plan":235,"person":235,"score":452,"position":16019},
{"schoolCode":13660,"school_name":"天津商业大学宝德学院","plan":5,"person":2,"score":423,"position":24933},
{"schoolCode":13665,"school_name":"电子科技大学成都学院","plan":5,"person":5,"score":454,"position":15500},
{"schoolCode":13667,"school_name":"广州商学院","plan":284,"person":284,"score":434,"position":21557},
{"schoolCode":13669,"school_name":"四川传媒学院","plan":7,"person":7,"score":488,"position":6642},
{"schoolCode":13672,"school_name":"四川工商学院","plan":5,"person":5,"score":460,"position":13570},
{"schoolCode":13675,"school_name":"北京理工大学珠海学院","plan":389,"person":389,"score":472,"position":10261},
{"schoolCode":13684,"school_name":"吉林大学珠海学院","plan":285,"person":285,"score":472,"position":10274},
{"schoolCode":13687,"school_name":"中国传媒大学南广学院","plan":8,"person":8,"score":498,"position":4721},
{"schoolCode":13714,"school_name":"广州工商学院","plan":340,"person":205,"score":421,"position":25507},
{"schoolCode":13719,"school_name":"广东科技学院","plan":450,"person":283,"score":420,"position":25782},
{"schoolCode":13720,"school_name":"广东理工学院","plan":300,"person":300,"score":437,"position":20600},
{"schoolCode":13774,"school_name":"豫章师范学院","plan":3,"person":3,"score":461,"position":13262},
{"schoolCode":13811,"school_name":"琼台师范学院","plan":8,"person":8,"score":479,"position":8603},
{"schoolCode":13844,"school_name":"东莞理工学院城市学院","plan":288,"person":288,"score":447,"position":17578},
{"schoolCode":13892,"school_name":"三亚学院","plan":20,"person":20,"score":468,"position":11390},
{"schoolCode":13895,"school_name":"燕京理工学院","plan":8,"person":8,"score":431,"position":22583},
{"schoolCode":13898,"school_name":"北京科技大学天津学院","plan":4,"person":3,"score":443,"position":18888},
{"schoolCode":13902,"school_name":"中山大学新华学院","plan":148,"person":148,"score":443,"position":18911},
{"schoolCode":13903,"school_name":"四川大学锦城学院","plan":15,"person":15,"score":466,"position":11883},
{"schoolCode":13988,"school_name":"江苏师范大学科文学院","plan":6,"person":6,"score":453,"position":15810},
{"schoolCode":14038,"school_name":"天津大学仁爱学院","plan":6,"person":6,"score":456,"position":14986},
{"schoolCode":14043,"school_name":"四川文化艺术学院","plan":5,"person":5,"score":455,"position":15084},
{"schoolCode":14278,"school_name":"广东第二师范学院","plan":288,"person":288,"score":497,"position":4769},
{"schoolCode":14327,"school_name":"北京电影学院现代创意媒体学院","plan":9,"person":9,"score":464,"position":12583},
{"schoolCode":14389,"school_name":"成都师范学院","plan":5,"person":5,"score":484,"position":7392},
{"schoolCode":14434,"school_name":"山西传媒学院","plan":6,"person":6,"score":477,"position":9099},
{"schoolCode":19004,"school_name":"北京交通大学(威海校区)","plan":3,"person":3,"score":482,"position":7961},
{"schoolCode":80016,"school_name":"广东技术师范学院(与广州番禺职业技术学院协同培养)","plan":25,"person":25,"score":475,"position":9430}
];



}());