Schemas = {};

Schemas.customerSchema = new SimpleSchema({
  name: {
    type: String,
    index: 1,
    unique: true
  },
  age: {
    type: Number,
    optional: true
  }
});

Collections = {};

Customers = Collections.Customers = new Mongo.Collection("Customers");
Customers.attachSchema(Schemas.customerSchema);

