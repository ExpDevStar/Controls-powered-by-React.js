/**
* @jsx React.DOM
*/
var Counter = React.createClass({
  mixins: [Events],
  getInitialState: function () {

    var limit = this.props.limit,
        count = this.props.count;
    count = (limit < count) ? limit: count;
    return {
        limit: limit,
        count: count
    };
  },
  updateLimit: function (count, limit) {
    var localLimit = limit || this.props.limit;
    var localCount = count || this.props.count;
    localCount = (localLimit < localCount) ? localLimit: localCount;
    return {
        limit: localLimit,
        count: localCount
    };
  },
  componentWillMount: function () {
    this.on('new:limit', function (limit) {
      count = (limit < count) ? limit: count;
      this.setState({
        count: count,
        limit: limit
      });
    });
  },
  componentDidUpdate: function () {
    this.trigger('counter:update', this.state.count);
    this.trigger('limit:update', this.state.limit);
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
