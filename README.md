# Express Wallet App
## Motivation
I wanted to create nodejs-mongo express app that supports concurrent requests

## This Project Includes
* Database Seeding
* Jwt Token Autthentication
* api to fetch balance with multiple currencies
* api to transfer sums of some currency between users
* unit test using `jest` & `supertest` packages

## How To Run
* You must have mongodb server installed on your machine
* create .env file and set variables like following:
```
DB=mongodb://localhost/your-db-name
secret=your-very-sercretly-secret
SEED=true
```
* Install dependecies: ```npm i```
* run in dev mode: ```npm run start-dev```

## Run Tests
* to run tests: ```npm test```
