// *******************  GreeterMessage *******************
var GreeterMessage = React.createClass({

  render: function() {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello React Greeter {name}!!</h1>
        <p>{message + "!!"}</p>
      </div>
    )
  }
})

// *******************  GreeterForm *******************
var GreeterForm = React.createClass({

  onFormSubmit: function(e) {
      e.preventDefault();

      var nameRef = this.refs.name;
      var name = nameRef.value;
      var message = this.refs.message.value;

      if (name.length > 0)
      {
        nameRef.value = "";
        this.props.onNewName(name);
      }

      if (message.length > 0)
      {
        this.refs.message.value = "";
        this.props.onNewMessage(message);
      }

      //alert(name);  // debugging
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" placeholder="Enter Name" ref="name"/>
        <input type="textarea" placeholder="Enter Message" ref="message"/>
        <button>Submit Form</button>
      </form>
    );
  }
})

// *******************  Greeter *******************
var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: "React",
      message: "my default message"
    };
  },
  getInitialState: function(){
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewName: function(name){
    //alert("Name: " + name);
      this.setState({
        name: name
      });
  },
  handleNewMessage: function(message){
      //alert("message: " + message);
      this.setState({
        message: message
      });
  },
  render: function(){
    var name = this.state.name
    var message = this.state.message + " " + name;

    //alert("Name: " + name + "  " + "message: " + message);

    return(
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/>
      </div>
    );
  }
});

var firstName = "Jack";
ReactDOM.render(
  <Greeter name={firstName} message="hello neighbor "/>,
  document.getElementById("app")
);
