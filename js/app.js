var initialDogs = [
  {
    clickCount: 0,
    dogName: 'Freddy',
    imgSrc: 'img/freddy-dog.jpg',
    dogNicknames: ['The Springwood Barker']
  },
  {
    clickCount: 0,
    dogName: 'Lily',
    imgSrc: 'img/walrus-dog.jpg',
    dogNicknames: ['Odobenus Canines']
  },
  {
    clickCount: 0,
    dogName: 'Mira',
    imgSrc: 'img/mira.jpg',
    dogNicknames: ['The Mastermind Behind Silent Hill']
  }
];

 var Dog = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.dogName = ko.observable(data.dogName);
    this.dogNicknames = ko.observableArray(data.dogNicknames);
    this.dogLevel = ko.computed(function() {
    var clicks = this.clickCount();
    if (clicks < 2) {
      return 'pupper';
    } else if (clicks < 5) {
      return 'doggo';
    } else if (clicks < 15) {
      return 'old doggo';
    } else {
      return 'RIP doggo';
    }
  }, this);
  this.imgSrc = ko.observable(data.imgSrc);
}

var ViewModel = function() {
  var self = this;

  this.dogList = ko.observableArray([]);
  initialDogs.forEach(function(dogItem){
    self.dogList.push( new Dog(dogItem) );
  });

  this.currentDog = ko.observable( this.dogList()[0] );

  this.selectDog = function(clickCount) {
    self.currentDog(clickCount);
  };

  this.incrementCounter = function() {
      self.currentDog().clickCount(self.currentDog().clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel());
