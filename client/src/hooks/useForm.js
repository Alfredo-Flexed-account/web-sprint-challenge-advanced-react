// write your custom hook here to control your checkout form
const UseForm = () => {
    const [firstName, setFirstName]= useInput("");
    const [lastName, setLastName]= useInput("");
    const [address, setAddress]= useInput("");
    const [city, setCity]= useInput("");
    const [citystate, setCityState]= useInput("");
    const [zip, setZip]= useInput("");
  
    const resetValues = e => {
        e.preventDefault();
        setFirstName("");
        setLastName("");
        setAddress("");
        setCity("");
        setCityState("");
        setZip("");

      };

      return (
          <div>
        <form onSubmit={resetValues}/>
          <input
            className="username-text"
            id="username"
            name="username"
            onChange={e => handleUsername(e.target.value)}
            placeholder="Username"
            type="text"
            value={username}
           />
           </div>
      )
    // = useState([{
    // firstName: "",
    // lastName: "",
    // address: "",
    // city: "",
    // state: "",
    // zip: "",
    // }]);
    

   
}

export default UseForm;