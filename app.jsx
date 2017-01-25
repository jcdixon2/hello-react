var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: "React",
      message: "my simple message"
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
    return(
      <div>
        <h1>Hello React Greeter {name}!!</h1>
        <p>{this.props.message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var firstName = "Jack";
ReactDOM.render(
  <Greeter name={firstName} message="hello jack"/>,
  document.getElementById("app")
);
