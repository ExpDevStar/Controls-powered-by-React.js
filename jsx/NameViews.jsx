/**
* @jsx React.DOM
*/

var emptyPerson = {
    name: '',
    surname: '',
    gender: ''
};
var NameViews = React.createClass({
    mixins: [Events],
    getInitialState: function () {
        var personList = this.props.data;
        return {
            data: personList
        };
    },
    componentWillMount: function () {
        this.on('update:count', function (count) {
            var personList = this.state.data;
            var personLength = personList.length;
            var lengthDiff = count - personLength;
            if (lengthDiff > 0) {
                for (var i = 0; i < lengthDiff; i++) {
                    personList.push(emptyPerson);
                }
            } else if (lengthDiff < 0) {
                personList = personList.slice(lengthDiff - personLength);
            } else {

            }
            this.setState({
                data: personList
            });
            console.log('NameViews', count);
        });
    },
    render: function () {
        var nameViews = this.state.data.map(function (person) {
            return <NameView name={person.name} surname={person.surname} gender={person.gender} />
        });
        return (
            <div className="nameViews">
                {nameViews}
            </div>
        );
    }
});
