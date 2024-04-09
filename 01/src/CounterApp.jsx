import { useState } from "react";

function CounterApp() {
   const [count, setCount] = useState(0);
   const [downcount, setDowncount] = useState(20);

   const increase = function () {
      if (count < 20) {
         setCount(count + 1);
      }
   };

   const decrease = function () {
      if (downcount > 0) {
         setDowncount(downcount - 1);
      }
   };

   return (
      <div>
         <h2>counter</h2>
         <button onClick={increase}>{count}</button>
         <button onClick={decrease}>{downcount}</button>
      </div>
   );
}

export default CounterApp;
