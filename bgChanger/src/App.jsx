import { useState } from "react";
function App() {
   const [color, setColor] = useState("pink");

   //  function redColor() {
   //     setColor("red");
   //  }
   //  function greenColor() {
   //     setColor("green");
   //  }
   //  function blueColor() {
   //     setColor("blue");
   //  }

   return (
      <div className="w-full h-screen " style={{ backgroundColor: color }}>
         <div
            style={{
               backgroundColor: "transparent",
               margin: "10px 20px",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}>
            <button
               onClick={() => setColor("red")}
               style={{
                  backgroundColor: "red",
                  alignItems: "center",
                  margin: "10px 20px",
                  height: "50px",
                  width: "70px",
                  border: "20px",
                  borderColor: "black",
               }}>
               red
            </button>

            <button
               onClick={() => setColor("green")}
               style={{
                  backgroundColor: "olive",
                  alignItems: "center",
                  margin: "10px 20px",
                  height: "50px",
                  width: "70px",
                  border: "20px",
                  borderColor: "black",
               }}>
               green
            </button>
            <button
               onClick={() => setColor("blue")}
               style={{
                  backgroundColor: "green",
                  alignItems: "center",
                  margin: "10px 20px",
                  height: "50px",
                  width: "70px",
                  border: "20px",
                  borderColor: "black",
               }}>
               blue
            </button>
         </div>
      </div>
   );
}
export default App;
