// import React, { createContext, useState, useEffect } from "react";
// import { app } from "../../Base";

// export const GlobalContext = createContext();

// export const GlobalProvider = ({ children }) => {
//   const [current, setCurrent] = useState([]);

//   useEffect(() => {
//     app.auth().onAuthStateChanged((user) => {
//       setCurrent(user);
//       console.log(user);
//     });
//   }, []);

//   return (
//     <GlobalContext.Provider
//       value={{
//         current,
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };
