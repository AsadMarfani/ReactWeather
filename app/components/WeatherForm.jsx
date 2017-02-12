var React = require('react');

var WeatherForm = React.createClass({
	_onFormSubmit: function(e){
		e.preventDefault();
		var location  = this.refs.location.value;
		if(location.length > 0) {
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
},
	render:  function(){
		return(
			<form onSubmit = {this._onFormSubmit}>
				<input type="search" ref = "location" placeholder = "Search Weather By City"/>
				<button className = "button expanded hollow">Get Weather</button>
			</form>
		);
	}

});

module.exports = WeatherForm;