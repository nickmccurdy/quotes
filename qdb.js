Quotes = new Meteor.Collection("quotes");
Quotes.attachSchema(new SimpleSchema({
  body: {
    type: String,
    label: "Body",
    autoform: {
      rows: 6
    }
  },
  description: {
    type: String,
    label: "Description",
    optional: true,
    autoform: {
      rows: 2
    }
  }
}));

if (Meteor.isClient) {
  Template.quotes.helpers({
    quotes: function () {
      return Quotes.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
