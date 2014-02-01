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
        var nameViews = this.props.data.map(function (person) {
            return <NameView name={person.name} surname={person.surname} gender={person.gender} />
        });
        return (
            <div className="nameViews">
                {nameViews}
            </div>
        );
    }
});
