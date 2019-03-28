show dbs
use places
show collections
db.restaurants.find().pretty()
db.restaurants.find({}, { "restaurant_id": 1, "name": 1, "_id": 0, "borough": 1, "cousine": 1 })
db.restaurants.find({}, { "restaurant_id": 1, "name": 1, "_id": 0, "borough": 1, "address.zipcode": 1 })
db.restaurants.find({ "borough": "Bronx" })
db.restaurants.find({ "borough": "Bronx" }).count()
db.restaurants.find({ "borough": "Brooklyn", "cuisine": "Steak" }).pretty()
db.restaurants.find({ "grades.score": { $gt: 90 } } )
db.restaurants.find({ "grades.score": { $gt: 90 } } ).count()
db.restaurants.find({ "grades.score": { $gte: 70 }, "cuisine": { $ne: "Bakery" } }).pretty()
db.restaurants.find({ "grades.score": { $gte: 70 }, "cuisine": { $ne: "Bakery" } }).count()
db.restaurants.find({ "grades.grade": "A", "cuisine": { $ne: "Chinese"}, "borough": { $ne: "Manhattan"}  })
db.restaurants.find({ "grades.grade": "A", "cuisine": { $ne: "Chinese"}, "borough": { $ne: "Manhattan"}  }).count()
db.restaurants.updateMany({"cuisine": "American "}, { $set: { "cuisine": "American" } })
db.restaurants.updateOne({"name": "Morris Park Bake Shop"}, { $set: { "address.street": "Calle falsa 123" } })
db.restaurants.deleteOne({"address.zipcode": "10466"})
db.restaurants.deleteMany({"address.zipcode": "10466"})



// Companies:
mongo 
show dbs
use crunch
show collectionsdb.companies.find()
> db.companies.find( {"name": "Facebook"}).count()
> db.companies.find( {"category_code": "web"}).count()
> db.companies.find( {category_code: "web"}, {name:1, _id:0}).count()
> db.companies.find( {name: "Twitter"}, {name:1, category_code:1, founded_year:1})
> db.companies.find( {category_code: "web"}, { name:1, category_code: 1, _id:0}).limit(50)
> db.companies.find({category_code: "enterprise", founded_year: 2005}, {name: 1, category_code: 1, founded_year: 1} )
> db.companies.find({$or: [{founded_year: 2000}, {number_of_employees: 20}]}, {name:1, _id:0, number_of_employees:1, founded_year:1}).sort({number_of_employees:-1})
> db.companies.find({$nor: [{category_code: "web"}, {category_code: "social"}]}, {name:1, _id:0, category_
code:1}).limit(20)
> db.companies.find({found_month: {$ne: 6 }}, {name:1, _id:0, found_month:1}).skip(50)
> db.companies.find({number_of_employees:50, category_code:{$ne: "web"}},  {name:1, _id:0, category_code:1, number_of_employees:1})
>db.companies.find({founded_day:1, $nor: [{number_of_employees:50}, {category_code:"web"}]},{name:1, _id:0, founded_day:1}).limit(5)
> db.companies.find({"acquisition.price_amount": 40000000}, {name:1, _id:0}).sort({name: 1})
db.companies.find({"acquisition.acquired_year": 2014, "acquisition.acquired_month": 1},{name:1, _id:0, acquisition:1}).pretty()
