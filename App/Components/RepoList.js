var React = require('react-native');

var {
  Text,
  View,
  StyleSheet
} = React;

class RepoList extends React.Component{
  render() {
    return (
      <View>
        <Text>This is the RepoList</Text>
        <Text> {this.props.repoList} </Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

module.exports = RepoList;