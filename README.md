# laravel-vue-test app


## Install dependencies 

````
npm install 

````

### Install Laravel and composer 

do composer update to run laravel

## Connect the data to MYSQL
Should define the mysql credentials in the .env file 

## Start the client and server 


````
npm run dev

php artisan serve
````

## Start cypress test

run the below commands

```
npx cypress open 

```
## Unit Test

Unit test are located in the test folder inside the unit test directory there are two unit test one is for AuthControllerTest.php which contains php unit test for registration and Login.test.js which is unit test for vue there is correlation between jest and cypress test

Inorder to run php unit test execute the below command 

```
./vendor/bin/phpunit tests

```

Inorder to run the vue js test execute the command 

```
npm run test
```

