var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Login = require('Login');
var Examples = require('Examples');

//Load Foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//Load Custom CSS
require('style-loader!css-loader!sass-loader!ApplicationStyles');

ReactDOM.render(
    <Router history = {hashHistory}>
    	<Route path = '/' component = {Main}>
    		<IndexRoute component = {Weather}/>
    		<Route path = "about" component = {About}/>
    		<Route path = "examples" component = {Examples}/>
    		<Route path  = "login" component = {Login}/>
    	</Route>
    </Router>,
    document.getElementById('app')
);
