# billEasyLibrary
----------------------
# 1. clone repository in vs code by 'git clone https://github.com/rajatsah95/billEasyLibrary.git'
# 2. install dependencies by 'npm i'
# 3. create .env file inside billEasyLibrary folder and then add variable 'MONGODB_URL' for mongodb storage and variable 'JWT_SECRET' for json web token as key in it.
# 4. run server by 'npm run start'
# 5. use below api for billEasyLibrary

------------
# Auth
------------

# Signup
---------
POST/    http://localhost:5000/billEasyLibrary/auth/signup

body
{
	"name":"l",
	"email":"l@gmail.com",
	"password":"123"
}

# Login
----------
POST/    http://localhost:5000/billEasyLibrary/auth/login

body
{
	"email":"l@gmail.com",
	"password":"123"
}

-----------
# Book
-----------

# Create
----------
POST/    http://localhost:5000/billEasyLibrary/book

body
{
	"title":"To Kill a Mockingbird",
	"author":"Harper Lee",
	"genre":"Fantasy"
}

headers
token as 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzgwMDhiMGQxMmFhM2MxMThhYTAxMyIsImVtYWlsIjoiYUBnbWFpbC5jb20iLCJpYXQiOjE3NDg1MDEwMTYsImV4cCI6MTc0ODUwNDYxNn0.4byosUPVdIv9XLUf2bckeI1o-JLVUJlPIuo_QVXFHCM'

# Update
-----------
PUT/     http://localhost:5000/billEasyLibrary/book/:id

body
{
	"title":"To Kill a Mockingbird 2",
	"author":"Harper Lee 2"
}

path parameter
id  as  '683803b1aa5bca19b20c67be'

headers
token as 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzgwMDhiMGQxMmFhM2MxMThhYTAxMyIsImVtYWlsIjoiYUBnbWFpbC5jb20iLCJpYXQiOjE3NDg1MDEwMTYsImV4cCI6MTc0ODUwNDYxNn0.4byosUPVdIv9XLUf2bckeI1o-JLVUJlPIuo_QVXFHCM'

# Delete
----------
DELETE/    http://localhost:5000/billEasyLibrary/book/:id

path parameter
id  as  '683803b1aa5bca19b20c67be'

headers
token as 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzgwMDhiMGQxMmFhM2MxMThhYTAxMyIsImVtYWlsIjoiYUBnbWFpbC5jb20iLCJpYXQiOjE3NDg1MDEwMTYsImV4cCI6MTc0ODUwNDYxNn0.4byosUPVdIv9XLUf2bckeI1o-JLVUJlPIuo_QVXFHCM'

# getAllBook
--------------
GET/       http://localhost:5000/billEasyLibrary/book

query parameters
pageNumber    1
pageSize      10
author        J.R.R. Tolkien
genre         Fantasy

# getBookByIdWithReviewAndRating
----------------------------------
GET/       http://localhost:5000/billEasyLibrary/book/:id

query parameters
pageNumber     1
pageSize       5

path parameter
id  as  '683803b1aa5bca19b20c67be'

# getBookBySearch
-------------------
GET/       http://localhost:5000/billEasyLibrary/search

query parameters
searchText     Tolkien

-----------
# Review
-----------

# Create
----------
POST/      http://localhost:5000/billEasyLibrary/book/:id/review

path parameter
id  as  '683803b1aa5bca19b20c67be'

body
{
	"review":"b"
}

headers
token as 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzgwMDhiMGQxMmFhM2MxMThhYTAxMyIsImVtYWlsIjoiYUBnbWFpbC5jb20iLCJpYXQiOjE3NDg1MDEwMTYsImV4cCI6MTc0ODUwNDYxNn0.4byosUPVdIv9XLUf2bckeI1o-JLVUJlPIuo_QVXFHCM'

# Update
-----------
PUT/       http://localhost:5000/billEasyLibrary/review/:id

path parameter
id  as  '683803b1aa5bca19b20c67be'

body
{
	"review":"aa"
}

headers
token as 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzgwMDhiMGQxMmFhM2MxMThhYTAxMyIsImVtYWlsIjoiYUBnbWFpbC5jb20iLCJpYXQiOjE3NDg1MDEwMTYsImV4cCI6MTc0ODUwNDYxNn0.4byosUPVdIv9XLUf2bckeI1o-JLVUJlPIuo_QVXFHCM'

# Delete
----------
DELETE/    http://localhost:5000/billEasyLibrary/review/:id

path parameter
id  as  '683803b1aa5bca19b20c67be'

headers
token as 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzgwMDhiMGQxMmFhM2MxMThhYTAxMyIsImVtYWlsIjoiYUBnbWFpbC5jb20iLCJpYXQiOjE3NDg1MDEwMTYsImV4cCI6MTc0ODUwNDYxNn0.4byosUPVdIv9XLUf2bckeI1o-JLVUJlPIuo_QVXFHCM'

-----------
# Rating
-----------

# Create
----------
POST/    http://localhost:5000/billEasyLibrary/book/:id/rating

path parameter
id  as  '683803b1aa5bca19b20c67be'

body
{
	"rating":3
}

headers
token as 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzgwMDhiMGQxMmFhM2MxMThhYTAxMyIsImVtYWlsIjoiYUBnbWFpbC5jb20iLCJpYXQiOjE3NDg1MDEwMTYsImV4cCI6MTc0ODUwNDYxNn0.4byosUPVdIv9XLUf2bckeI1o-JLVUJlPIuo_QVXFHCM'


# Update
-----------
PUT/         http://localhost:5000/billEasyLibrary/rating/:id

path parameter
id  as  '683803b1aa5bca19b20c67be'

body
{
	"rating":6
}

headers
token as 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzgwMDhiMGQxMmFhM2MxMThhYTAxMyIsImVtYWlsIjoiYUBnbWFpbC5jb20iLCJpYXQiOjE3NDg1MDEwMTYsImV4cCI6MTc0ODUwNDYxNn0.4byosUPVdIv9XLUf2bckeI1o-JLVUJlPIuo_QVXFHCM'

# Delete
----------
DELETE/      http://localhost:5000/billEasyLibrary/rating/:id

path parameter
id  as  '683803b1aa5bca19b20c67be'

headers
token as 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzgwMDhiMGQxMmFhM2MxMThhYTAxMyIsImVtYWlsIjoiYUBnbWFpbC5jb20iLCJpYXQiOjE3NDg1MDEwMTYsImV4cCI6MTc0ODUwNDYxNn0.4byosUPVdIv9XLUf2bckeI1o-JLVUJlPIuo_QVXFHCM'
