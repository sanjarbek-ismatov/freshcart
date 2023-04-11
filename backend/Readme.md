How to request to backend?
>First of all you must download /assets/eCommerce.sql and import it to your database
>Then go /assets/config.php and look for HOSTNAME,USERNAME,PASSWORD,DATABASE_NAME 
>and replace them with you database hostname,login,password and database name

Methods

# addProduct 

To add product you need to send
- productName
- token
- cost
- img1 (1st image of product)
- img2 (2nd image of product)
- img3 (3rd image of product)
- description
- category
- weight

>Token is user's token that we gave when user logged in
>if there is any problem tell us aout it


# signup
To sign up you need to send
- name
- username
- phone
- email
- password


# login
We need
- email
- password

to login user 


# getAllProducts
For this just send /getAllProducts and you'll reach result


# getInfoProduct
To get info about product we need 
- id (Product id)


# getProfileInfo 
For this we need
- token
that we gave during login or signup


# getProductsByUser
For this we need
- token
that we gave during login or signup


# deleteProduct
For this we need
- product id
- token(user's token)


# deleteAccount
For this we need 
- token


#search
To search product you have to send
- query


# updateProfile
To update profile you've to send
- name
- username
- password
- token
- email
- city
- phone


# loginAdmin
To login admin panel you need to send
- login
- password


# addCategory
To add category you have to send
- token
- category name
- slug


>Only admin can add new categories so that
>you must send admin's token 

Example for slug
``` 
maishiy-texnika
```
>if category name is "Maishiy texnika" you must give it as slug like above


#getCategory
To get category send /getCategory
