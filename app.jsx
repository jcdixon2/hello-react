var GreeterMessage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Some H1</h1>
        <p>Some paragraph</p>
      </div>
    )
  }
})

var GreeterForm = React.createClass({
  render: function() {
    return (
    <form onSubmit={this.onButtonClick}>
      <input type="text" ref="name"/>
      <button>Set Name</button>
    </form>
  );
  }
})

var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: "React",
      message: "my default message"
    };
  },
  getInitialState: function(){
    return {
      name: this.props.name
    };
  },
  onButtonClick: function(e){
    e.preventDefault();

    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = "";
    //alert(name);  // debugging

    // Don't change the state is the name field is empty
    if (typeof name === "string" && name.length > 0)
    {
      this.setState({
        name: name
      });
    }
  },
  render: function(){
    var name = this.state.name
    var message = this.props.message + name;

    return(
      <div>
        <h1>Hello React Greeter {name}!!</h1>
        <p>{message + "!!"}</p>

        <GreeterMessage/>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>

        <GreeterForm/>
      </div>
    );
  }
});

var firstName = "Jack";
ReactDOM.render(
  <Greeter name={firstName} message="hello neighbor "/>,
  document.getElementById("app")
);
