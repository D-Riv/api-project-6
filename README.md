# NextBinge-api

# Description

Checkout a list of all your favorite shows from around the world. Includes shows from multiple networks with an extensive list of details to make sure your next pick is worth binge watching!

### Built With

- JavaScript
- Node.JS
- MongoDB/Mongoose
- Express

### Deployment

To deploy the api utilize the link below.
[Use this link to my project!](https://api-project-6.herokuapp.com/index)

## Endpoints

Get a list of all tv shows

```
GET /index
```

Get a list of all shows with a particular rating

```
GET /rating/:rating
```

Get a list of all shows on a specific network

```
GET /network/:network
```

Get a details on one of your favorite shows

```
GET /show/:show
```

Submit a show that you dont see in the list

```
POST /submit
```

**Methods** : `GET, POST`

**Auth required** : No

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Endpoint example**

```
GET /rating/6.5
```

For a request to pull all tv shows with a rating of 6.5. List of all matching ratings will appear.

```json

        "show": {
            "rating": {
                "average": 6.5
            },
            "network": {
                "name": "CBS"
            },
            "image": {
                "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
                "original": "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
            },
            "id": 1,
            "url": "http://www.tvmaze.com/shows/1/under-the-dome",
            "name": "Under the Dome",
            "language": "English",
            "new": [],
            "genres": [
                {
                    "_id": "5e627898824dbe0c8a125d82"
                }
            ],
            "premiered": "2013-06-24T00:00:00.000Z"
        },
        "_id": "5e627898824dbe0c8a125d81",
        "__v": 0
    },
```

### Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to me.

### Versioning

We use git/github for version control.For other versions check the repository. :)

### Authors

Dennis A. Rivera

### License

This project is licensed under the MIT License - see the LICENSE.md file for details
