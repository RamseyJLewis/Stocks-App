# Stocks App: Create an app where users can anaalize and chart and log stocks to make more eductaed decisicons

# Username ramseyjlewis
# Password password123

## Goals: 
* A user can make an acccount login into that account and add stocks to there portfolio and track and store & delete at will them.

## User Stories:
* As an stock investor I want to use the Stocks App for infomation tracking of a portfolio I already have and ossibly use they account to make fake portolios so I can test my theroioes of the market without risking actuall monney 
* As a student I want to use this to learn about they stock amrket and how trends of the news effect market movement and vice versa
* As a parent I want to use this to teach my children about how stocks work  
* As a teracher I want to use this to display different companies in our class account and show why threre stock values are what they are and how that can chnage month by month

# PAGES ---
* [✓] Create a wireframe
* [✓] Craete a database
* [✓] Create  React Applocation# 
* [✓] Connect Database and React Page
* [] Create a Login page
 * [] Connect Databased and Login Page to have accounts
* [] Create a Landing Page
    * [] Connect API and get infotmation showing up in screen
    * [] be able to edit database from this screen just the raw infomation 
    * [] Craete a nav bar 
    * [] Create basic shapes of page -- box for stock chart -- box for stock list -- news area at botom -- top movers section at the top 
    * [] stock chart shold have buttons of 1day 1 month 3 months 1 year 5 years
    * [] based on frist stock in database create a line chart of the 5 years of history of that stock
    * [] based on frist stock in database create a news section using the stocks key word and put it in the news area
    * [] based on top movers display a moving screen and if the top mover is lower than it was at open display percent in red if its higher or even display in green
* [] Create a Potfolio Page
* [] de able to see information of each stock and 
* [] 
* [] 
* [] 
* [] Create a News Page 

# LOGIN
# LANDING
# PORTOLFIO 
# NEWS 

# LOGIN PAGE TASKS

Create a database  of users that logs username and passwords and with that information also has there porfolio list "stocks" []
 * Be able to loging[] 
 * Be able to creare a new account in database[]
 * House that in  a simple design ref fima desing[]

                                
                                
# LONGIN PAGE REACH REACH
 * MAKE BACKGROUND OF LOGING HAVE REAL TIME REND LINES OF THE NASDAQ AND DOW JONES BLURRED OUT[]


# LANDING PAGE
* Connect API and DATABASE []
* Create a nav bar with SizeUp News & My Portolio links []
* crate a top movers section an have infromation running though it later  read figma []
* chart a stock with a line chart of 1 month []
# Stocks-App

CREATE TABLE accounts (
	user_id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
        last_login TIMESTAMP 
);

CREATE TABLE users (
    user_id serial PRIMARY KEY,
    username VARCHAR ( 50 ) UNIQUE NOT NULL,
    password VARCHAR ( 50 ) UNIQUE NOT NULL
)

CREATE TABLE portfolios (
    portfolios_id serial PRIMARY KEY,
    user_id INT ,
    stockcodes VARCHAR ( 50 ) UNIQUE NOT NULL,
    portfolioname VARCHAR ( 50 ) UNIQUE NOT NULL,
    CONSTRAINT fk_user_id
        FOREIGN KEY(user_id)
        REFERENCES users(user_id)
)

INSERT INTO  users(username, password)
VALUES('John Snow','wolves123');

INSERT INTO  portfolios(user_id, stockcodes, portfolioname)
VALUES(1,'QQQ,ABC','CASTLEBUY');