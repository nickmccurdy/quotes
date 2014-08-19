Quotes = new Meteor.Collection("quotes");
Quotes.attachSchema(new SimpleSchema({
  body: {
    type: String,
    label: "Body"
  },
  description: {
    type: String,
    label: "Description",
    optional: true
  }
}));

if (Meteor.isClient) {
  Template.quotes.quotes = function () {
    return Quotes.find({});
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
