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

      var updates = {};

      if (name.length > 0)
      {
        nameRef.value = "";
        // this.props.onNewName(name);
        updates.name = name;
      }

      if (message.length > 0)
      {
        this.refs.message.value = "";
        // this.props.onNewMessage(message);
        updates.message = message;
      }

      this.props.onNewData(updates);

      //alert(name);  // debugging
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>

        <div><input type="text" placeholder="Enter Name" ref="name"/></div>
        <div><input type="textarea" placeholder="Enter Message" ref="message"/></div>
        <div><button>Submit Form</button></div>
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
  handleNewData: function(updates){
    //alert("Name: " + name);
      this.setState(updates);
  },
  /*
  handleNewMessage: function(message){
      //alert("message: " + message);
      this.setState({
        message: message
      });
  },
  */
  render: function(){
    var name = this.state.name
    var message = this.state.message + ", " + name;

    //alert("Name: " + name + "  " + "message: " + message);

    return(
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

var firstName = "Jack";
ReactDOM.render(
  <Greeter name={firstName} message="hello neighbor "/>,
  document.getElementById("app")
);
