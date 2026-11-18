use companyDB

db.employees.insertMany([
  { _id: 1, name: "Anil", dept: "IT", city: "Chennai", salary: 60000, skills: ["MongoDB", "Python"] },
  { _id: 2, name: "Bhavana", dept: "HR", city: "Mumbai", salary: 45000, skills: ["Excel", "Communication"] },
  { _id: 3, name: "Charan", dept: "IT", city: "Chennai", salary: 75000, skills: ["Java", "MongoDB"] },
  { _id: 4, name: "Deepa", dept: "Finance", city: "Pune", salary: 52000, skills: ["Excel", "Tally"] },
  { _id: 5, name: "Eshan", dept: "IT", city: "Bengaluru", salary: 68000, skills: ["Python", "Docker"] },
  { _id: 6, name: "Farida", dept: "HR", city: "Delhi", salary: 40000, skills: ["Excel", "Communication", "Recruitment"] },
  { _id: 7, name: "Gokul", dept: "Finance", city: "Chennai", salary: 58000, skills: ["Tally", "Excel"] },
  { _id: 8, name: "Hema", dept: "IT", city: "Pune", salary: 82000, skills: ["MongoDB", "Kubernetes"] }
])

db.employees.find({ dept: "IT" }).explain("executionStats")

db.employees.createIndex({ dept: 1 })

db.employees.find({ dept: "IT" }).explain("executionStats")

db.employees.createIndex({ dept: 1, salary: -1 })

db.employees.find({ dept: "IT" }).sort({ salary: -1 }).explain("executionStats")

db.employees.createIndex({ skills: 1 })

db.employees.find({ skills: "MongoDB" }).explain("executionStats")

db.runCommand({
  collMod: "employees",
  index: {
    name: "skills_1",
    hidden: true
  }
})

db.employees.find({ skills: "MongoDB" }).explain("executionStats")

db.runCommand({
  collMod: "employees",
  index: {
    name: "skills_1",
    hidden: false
  }
})

db.employees.find({ skills: "MongoDB" }).explain("executionStats")

db.employees.createIndex({ city: 1 }, { unique: true })

db.employees.createIndex({ name: 1 }, { unique: true })

db.employees.getIndexes()
