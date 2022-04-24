# Assignment


## To run enter the following commands

#### npm install
#### To start the application use "npm run dev / npm start / node src" inside the root folder
#### To run tests 'npm run test'

#### Application runs on http://localhost:3000/api/v1

#### To add commodity 
#### POST http://localhost:3000/api/v1/cmdty
#### {cmdtyID, cmdtyName}
#### Get all cmdties GET http://localhost:3000/api/v1/cmdty

#### To add market
#### POST http://localhost:3000/api/v1/market
#### {marketID, marketName, marketType}
#### Get all markets GET http://localhost:3000/api/v1/market

#### Add reports
#### POST http://localhost:3000/api/v1/report
#### {userID, cmdtyID, cmdtyName, marketID, marketName, marketType, price, priceUnit, convFactor}
#### To fetch report GET http://localhost:3000/api/v1/report
#### {reportID}
