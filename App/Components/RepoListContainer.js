var React = require('react-native');
var api = require('../Utils/api');
var RepoList = require('./RepoList')

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} = React;

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      repository:'',
      isLoading:false,
      error:false
    }
  }

  handleChange(event){
    this.setState({
      repository: event.nativeEvent.text
    })
  }

  handleSubmit(){
    // update our indicatorIOS spinner
    this.setState({
      isLoading: true
    });
    api.getRepo(this.state.repository)
      .then((res) => {
        if(res.total_count === 0){
          this.setState({
            error: 'Repository not found',
            isLoading: false
          })
        } else {
          this.props.navigator.push({
            title: "Repository",
            component: RepoList,
            passProps: {repoList: res}
          });
          this.setState({
            isLoading: false,
            error: false,
            repository: ''
          })
        }
      });
  }

  render() {
    return(
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Search for a Github Repository </Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.repository}
          onChange={this.handleChange.bind(this)} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white">
          <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>
      </View>
      )
  }
};

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#6D3551'
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
    fontFamily:'Avenir Next',
    fontWeight:"500",
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 20,
    fontFamily:'Avenir Next',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

module.exports = Main;