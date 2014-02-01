/**
* @jsx React.DOM
*/
var Counter = React.createClass({
  mixins: [Events],
  getInitialState: function () {
    var stateObject,
        count = this.props.count,
        limit = this.props.limit;
    stateObject = this.getInnerState(count, limit);
    return stateObject;
  },
  getInnerState: function (count, limit) {
    var localLimit = limit || this.state.limit || 0;
    var localCount = count || this.state.count || 0;
    localCount = (localLimit < localCount) ? localLimit: localCount;
    return {
      limit: localLimit,
      count: localCount
    };
  },
  componentWillMount: function () {
    var self = this;
    self.on('update:limit', function (limit) {
      var stateObject = self.getInnerState(null, limit);

      this.setState(stateObject);
    });
  },
  componentDidUpdate: function () {
    this.trigger('counter:update', this.state.count);
//    this.trigger('limit:update', this.state.limit);
 //   console.log('arguments', arguments, this.state.count)
  },
  componentWillUnmount: function () {
    this.off('new:limit');
  },

  counterPlus: function (e) {
    var limit = this.state.limit;
    var newCount = this.state.count + 1;
    if (newCount <= limit) {
        this.setState({count: newCount});
    }
//    console.log('counter plus')
  },
  counterMinus: function (e) {
    var limit = this.state.limit;
    var newCount = this.state.count - 1;
    if (newCount <= limit) {
        this.setState({count: newCount});
    }
 //   console.log('counter minus -')
  },

  changer: function (e) {
    var value = e.target.value;
    this.setState({count: value});
  },
  render: function() {
    return (
      <div>
        <span onClick={this.counterPlus}>+</span>
          <input type="text" onChange={this.changer} ref="counter" value={this.state.count} ></input>
        <span onClick={this.counterMinus}>-</span>
      </div>
    );
  }
});
