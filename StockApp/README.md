OBJECTIVE: Create an app where users can anaalize and chart and log stocks to make more eductaed decisicons

PAGES:
LOGIN
LANDING
PORTOLFIO 
NEWS 

                                                    LOGIN PAGE TASKS

Create a database  of users that logs username and passwords and with that information also has there porfolio list "stocks" []
 Be able to loging[] 
 Be able to creare a new account in database[]
 House that in  a simple design ref fima desing[]

                                
                                
                                            LONGIN PAGE REACH REACH
 MAKE BACKGROUND OF LOGING HAVE REAL TIME REND LINES OF THE NASDAQ AND DOW JONES BLURRED OUT[]


                                                            LANDING PAGE
Connect API and DATABASE []
Create a nav bar with SizeUp News & My Portolio links []
crate a top movers section an have infromation running though it later  read figma []
chart a stock with a line chart of 1 month []
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