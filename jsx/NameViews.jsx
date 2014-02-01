/**
* @jsx React.DOM
*/

var NameViews = React.createClass({
    mixins: [Events],
    componentWillMount: function () {
        this.on('update:count', function (count) {
            console.log('NameViews', count);
        });
    },
    render: function () {
        return (
            <div>Name Views</div>
        );
    }
});