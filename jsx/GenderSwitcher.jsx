/**
* @jsx React.DOM
*/
var GenderSwitcher = React.createClass({
  mixins: [Events],
  componentWillMount: function () {
  },
  componentDidUpdate: function () {
  },
  handleGenderClick: function (e) {
    var target = e.target;
    var value = target.dataset.gender;
    this.setState({male: value == 'm', female: value == 'f'});
//    console.log('target', value);
  },
  getInitialState: function () {
    var isMale = (this.props.gender == 'm') ? true : false,
        isFemale = (this.props.gender == 'm') ? false : true;
    return {male: isMale, female: isFemale};
  },
  render: function () {
    return (
      <span onClick={this.handleGenderClick}>
        <span className={this.state.male ? 'activeGender' : ''} ref="male" data-gender="m">m</span>
        <span className={this.state.female ? 'activeGender' : ''} ref="female" data-gender="f">f</span>
      </span>
    );
  }
});
