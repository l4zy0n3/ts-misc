print("Hello")
a = {
	"name": "John",
	"age": 30,
	"job": "Programmer",
	"city": "New York",
	"state": "New York",
	"country": "USA",
}
print(a)
print(a["name"])
print(a["age"])
print(a["job"])
print(a["city"])
print(a["state"])
print(a["country"])
print(a["name"] + " is " + str(a["age"]) + " years old.")
print(a["name"] + " is " + str(a["age"]) + " years old. He is a " + a["job"] + " and lives in " + a["city"] + ", " + a["state"] + ".")