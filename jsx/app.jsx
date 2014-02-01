/**
* @jsx React.DOM
*/
var commentBox = React.renderComponent(
  <CommentBox />,
  document.getElementById('content')
);

var genderSwitcher = React.renderComponent(
  <GenderSwitcher />,
  document.querySelector('.jsGenderSwitcher')
);

var adultNames = [{
  name: 'Vasya',
  surname: 'Pupkin',
  gender: 'm'
}, {
  name: 'Petya',
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
var nameViews = React.renderComponent(
  <NameViews />,
  document.querySelector('.jsNameViews')
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
  nameViews.trigger('update:count', count);
});
//extend(commentBox, Events)
commentBox.on('sho', function () {
  console.log('sho hso');
});
//commentBox.trigger('sho');
