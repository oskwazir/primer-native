/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var RepoListContainer = require('./App/Components/RepoListContainer');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;

var githubstars = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
      style={styles.container}
        initialRoute={{
          title: 'Github Stars',
          component: RepoListContainer 
        }} />
    );
  }
});

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#E3E1DC'
  },
});

AppRegistry.registerComponent('githubstars', () => githubstars);
