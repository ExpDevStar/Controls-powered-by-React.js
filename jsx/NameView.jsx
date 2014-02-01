/**
* @jsx React.DOM
*/
var NameView = React.createClass({
    render: function () {
        return (
            <div>  
                {this.props.name} {' '} {this.props.surname} {' '} 
                <GenderSwitcher gender={this.props.gender} />
            </div>
        )
    }
});