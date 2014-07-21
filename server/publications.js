/* ---------------------------------------------------- +/

## Publications ##

All publications-related code. 

/+ ---------------------------------------------------- */

// Publish all items

Meteor.publish('allItems', function() {
  return Items.find();
});

Meteor.publish('adwave', function() {
  return Adwave.find();
});

Meteor.publish('latexonecolround', function() {
  return Latexonecolround.find();
});

Meteor.publish('adwrap', function() {
  return Adwrap.find();
});

Meteor.publish('roundballoons', function() {
  return Roundballoons.find();
});

Meteor.publish('heartballoons', function() {
  return Heartballoons.find();
});

Meteor.publish('quicklinkround', function() {
  return Quicklinkround.find();
});

Meteor.publish('threecolourplus', function() {
  return Threecolourplus.find();
});

Meteor.publish('twocolourballoons', function() {
  return Twocolourballoons.find();
});

Meteor.publish('charges', function() {
  return Charges.find();
});


// Publish a single item

Meteor.publish('singleItem', function(id) {
  return Items.find(id);
});