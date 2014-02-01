/**
* @jsx React.DOM
*/
var CommentBox = React.createClass({
  mixins: [Events],
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
