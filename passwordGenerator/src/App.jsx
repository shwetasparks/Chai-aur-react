import { useState, useCallback, useEffect ,useRef} from "react";

function App() {
   const [length, setLength] = useState(8);
   const [numAllowed, setNumAllowed] = useState(false);
   const [charAllowed, setCharAllowed] = useState(false);
   const [password, setPassword] = useState("");

  //  ref hook
const passwordRef=useRef(null)



   const passwordGenerator = useCallback(() => {
      let pass = "";
      let str = "ABCDEFabcdef";
      if (numAllowed) str += "1234567890";
      if (charAllowed) str += "!@#%^&*()";

      for (let i = 0; i < length; i++) {
         let char = Math.floor(Math.random() * str.length)+1;
         pass += str.charAt(char);
      }
      setPassword(pass);
   }, [length, numAllowed, charAllowed ,setPassword]);

   const copyPasswordToClick=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,9);
    window.navigator.clipboard.writeText(password)},[password])

   useEffect(() => {
    passwordGenerator()
   }, [length, numAllowed, charAllowed, passwordGenerator]);
   function handleLengthChange(e) {
      setLength(e.target.value);
   }

   return (
      <div>
         <div>
            <input type="text" value={password} placeholder="password" ref={passwordRef} />
            <button onClick={copyPasswordToClick}>Copy</button>
         </div>
         <div>
            <div>
               <input
                  type="range"
                  min={6}
                  max={100}
                  value={length}
                  onChange={handleLengthChange}
               />
               <label>length:{length}</label>
            </div>
            {/* number */}
            <div>
               <input
                  type="checkbox"
                  checked={numAllowed}
                  onChange={() => setNumAllowed((prev) => !prev)}
               />

               <label>numbers</label>

               {/* char */}
               <input
                  type="checkbox"
                  checked={charAllowed}
                  onChange={() => setCharAllowed((prev) => !prev)}
               />
               <label>char</label>
            </div>
         </div>
      </div>
   );
}

export default App;
