

class Form extends React.Component {
  constructor(){
  	super()
  	this.state = {    
      question: "",
      question2: "", 
      question3: "",
      question4: ""
  	}
    this.handleChange = this.handleChange.bind(this)
 }
  
  handleChange(event) {
    const {type, name, value, checked} = event.target
    type === "checkbox" ? this.setState({[name]:checked}) : this.setState({[name]: value})
  }   
      

  render() {
    return(
    <FormComponent handleChange={this.handleChange} elements={this.state}/>
    )}
}





function FormComponent(props) {
	return (

  	  <main className="main">
  	    <form className="form">

  	     

          <h3 className="form-header">I like the visual design of this simulation and believe it is quite accurate to a real 
          life smartphone</h3>
          <label>
            <input type="radio" name="question" value="disagree" checked={props.elements.question === "disagree"} onChange={props.handleChange} />
            Disagree
          </label>                
          <label>
            <input type="radio" name="question" value="agree" checked={props.elements.question === "agree"} onChange={props.handleChange} />
            Agree
          </label>  
          <label>
            <input type="radio" name="question" value="strAgree" checked={props.elements.question === "strAgree"} onChange={props.handleChange} />
            Strongly Agree
          </label>      
                                    
          <hr />

          <h3 className="form-header">I believe this simulation is quite accurate in presenting a part of the functionalities and behavior 
          of a real life smartphone</h3>
          <label>
            <input type="radio" name="question2" value="disagree2" checked={props.elements.question2 === "disagree2"} onChange={props.handleChange} />
            Disagree
          </label>                
          <label>
            <input type="radio" name="question2" value="agree2" checked={props.elements.question2 === "agree2"} onChange={props.handleChange} />
            Agree
          </label>  
          <label>
            <input type="radio" name="question2" value="strAgree2" checked={props.elements.question2 === "strAgree2"} onChange={props.handleChange} />
            Strongly Agree
          </label>      
              
         <hr />

          <h3 className="form-header">I believe some of the functionalities (including the code itself) and/or visuals (including css) in this 
          simulation can be improved to enhance the simulating and programming experience further.</h3>
          <label>
            <input type="radio" name="question3" value="disagree3" checked={props.elements.question3 === "disagree3"} onChange={props.handleChange} />
            Disagree
          </label>                
          <label>
            <input type="radio" name="question3" value="agree3" checked={props.elements.question3 === "agree3"} onChange={props.handleChange} />
            Agree
          </label>  
          <label>
            <input type="radio" name="question3" value="strAgree3" checked={props.elements.question3 === "strAgree3"} onChange={props.handleChange} />
            Strongly Agree
          </label>        
         
           <hr />

          <h3 className="form-header">I believe that this simulation can be further expanded and become more "realistic" as a smartphone 
          simulation by adding back-end and server side development</h3>
          <label>
            <input type="radio" name="question4" value="disagree4" checked={props.elements.question4 === "disagree4"} onChange={props.handleChange} />
            Disagree
          </label>                
          <label>
            <input type="radio" name="question4" value="agree4" checked={props.elements.question4 === "agree4"} onChange={props.handleChange} />
            Agree
          </label>  
          <label>
            <input type="radio" name="question4" value="strAgree4" checked={props.elements.question4 === "strAgree4"} onChange={props.handleChange} />
            Strongly Agree
          </label>      
              
         <hr />


        <button>Submit</button>

        </form>

      </main>
    
    )
}



const domContainer = document.querySelector('#reactQ');

ReactDOM.render(<Form />, domContainer);