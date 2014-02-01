/**
* @jsx React.DOM
*/
var commentBox = React.renderComponent(
  <CommentBox />,
  document.getElementById('content')
);


var adultNames = [{
  name: 'Vasya',
  surname: 'Pupkin',
  gender: 'm'
}, {
  name: 'Mileena',
  surname: 'Pupkin',
  gender: 'f'
}, {
  name: 'Kolya',
  surname: 'Pupkin',
  gender: 'm'
}];

var childNames = [{
  name: 'PR',
  surname: 'Pupkin',
  gender: 'm'
}, {
  name: 'Mex',
  surname: 'Pupkin',
  gender: 'f'
}];

var infantNames = [{
  name: 'Aaron',
  surname: 'Pupkin',
  gender: 'm'
}, {
  name: 'Paul',
  surname: 'Pupkin',
  gender: 'f'
}, {
  name: 'Heisenberg',
  surname: 'Pupkin',
  gender: 'm'
}, {
  name: 'Bryan',
  surname: 'Cranston',
  gender: 'f'
}];
var adultViews = React.renderComponent(
  <NameViews data={adultNames} />,
  document.querySelector('.jsAdultViews')
);


var childViews = React.renderComponent(
  <NameViews data={childNames} />,
  document.querySelector('.jsChildViews')
);

var infantViews = React.renderComponent(
  <NameViews data={infantNames} />,
  document.querySelector('.jsInfantViews')
);


var adultCounter = React.renderComponent(
  <Counter limit="10" count={adultNames.length} />,
  document.querySelector('.jsAdultCounter')
);

var childCounter = React.renderComponent(
  <Counter limit="10" count={childNames.length} />,
  document.querySelector('.jsChildCounter')
);
var infantCounter = React.renderComponent(
  <Counter limit={adultNames.length} count={infantNames.length} />,
  document.querySelector('.jsInfantCounter')
);
adultCounter.on('counter:update', function (count) {
  adultViews.trigger('update:count', count);
  infantCounter.trigger('update:limit', count);
});
childCounter.on('counter:update', function (count) {
  childViews.trigger('update:count', count);
});
infantCounter.on('counter:update', function (count) {
  infantViews.trigger('update:count', count);
});
//extend(commentBox, Events)
commentBox.on('sho', function () {
  console.log('sho hso');
});
//commentBox.trigger('sho');
