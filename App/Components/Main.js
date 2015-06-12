var React = require('react-native');

var {
  View,
  Text,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#E3E1DC'
  }
});

class Main extends React.Component{
  render() {
    return(
      <View style={styles.mainContainer}>
      <Text> Testing the Router </Text>
      </View>
      )
  }
};

module.exports = Main;