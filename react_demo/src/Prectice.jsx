export const Prectice = () => {
  const Students = [1];
  return (
    <>
      <h1> Interview </h1>
      {/* <p>{Students.length && "Students Not Found"}</p> */}
      <p>Number Of Students : {Students.length}</p>
      {/* Solution : React Doesn't render anything if the condition is false 
      it mean our answer is come to 0 so React doesn't anything print */}
      <p>
        Number Of Students : {Students.length === 0 && "Students Not Found"}{" "}
        {/* It mean this is return Falsy Value
        so Dose not print anything */}
      </p>

      {/* Solution 1: */}
      <p>
        Number Of Students : {Students.length != 0 ? "Students Not Found" : 0}
      </p>

      {/* Solution 2: */}
      <p>Number Of Students : {Students.length || 0}</p>
    </>
  );
};

export const App = () => {
  // return (
  // You Can't One more component return in JavaScript
  // but You can Component value add in Array with Key and Pair to store and return
  // but It's complicate so You will use to return <> write component code <> this is absulutly right
  // Method 1 :
  // <>
  //   <h1>Welcome to My First React App!</h1>
  //   <div className="card">
  //     <p>Hello! I am learning React</p>
  //     <button onClick={() => alert("You clicked the button!")}>
  //       Click me!
  //     </button>
  //   </div>
  // </>
  // Method 2 :
  // <React.Fragment>
  //   <h1>Welcome to My First React App!</h1>
  //   <div className="card">
  //     <p>Hello! I am learning React</p>
  //     <button onClick={() => alert("You clicked the button!")}>
  //       Click me!
  //     </button>
  //   </div>
  // </React.Fragment>
  // Method 3 :
  // <Fragment>
  //   <h1>Welcome to My First React App!</h1>
  //   <div className="card">
  //     <p>Hello! I am learning React</p>
  //     <button onClick={() => alert("You clicked the button!")}>
  //       Click me!
  //     </button>
  //   </div>
  // </Fragment>
  // );
};

// -----------------------------------------------------------------------------------------------------------------------------------------------------
// Using this Varibale to get Data

// export const NetFlix = () => {
//   const name = "Stranger Things";
//   const rating = "8.7/10";
//   const summary =
//     "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.";
//   const genre = "Drama, Fantasy, Horror";
//   const age = 17;

//   if (age <= 18) {
//     return (
//       <>
//         <div>
//           <img
//             src="https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg"
//             alt="Stranger Things"
//             style={{ width: "300px" }}
//           />
//         </div>
//         <h2>Name : {name}</h2>
//         <h3>Rating : {rating}</h3>
//         <p>summary : {summary}</p>
//         <p>Genre : {genre}</p>
//         <button>Not Available</button>
//         <br></br>
//         <br></br>
//       </>
//     );
//   }
//   return (
//     <>
//       <div>
//         <img
//           src="https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg"
//           alt="Stranger Things"
//           style={{ width: "300px" }}
//         />
//       </div>
//       <h2>Name : {name}</h2>
//       <h3>Rating : {rating}</h3>
//       <p>summary : {summary}</p>
//       <p>Genre : {genre}</p>
//       <button>Watch Now</button>
//     </>
//   );
// };

// // -----------------------------------------------------------------------------------------------------------------------------------------------------

// // Using Object to get Data

// export const NetFlix2 = () => {
//   const netflix = {
//     name: "Stranger Things",
//     rating: "8.7/10",
//     summary:
//       "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
//     genre: "Drama, Fantasy, Horror",
//     age: 17,
//   };

//   if (netflix.age <= 16) {
//     return (
//       <>
//         <div>
//           <img
//             src="https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg"
//             alt="Stranger Things"
//             style={{ width: "300px" }}
//           ></img>
//         </div>
//         <h2>Name : {netflix.name}</h2>
//         <h3>Rating : {netflix.rating}</h3>
//         <p>summary : {netflix.summary}</p>
//         <p>Genre : {netflix.genre}</p>
//         <button>Not Available</button>
//       </>
//     );
//   }

//   return (
//     <>
//       <div>
//         <img
//           src="https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg"
//           alt="Stranger Things"
//           style={{ width: "300px" }}
//         ></img>
//       </div>
//       <h2>Nameexport const NetFlix = () => {
//   const name = "Stranger Things";
//   const rating = "8.7/10";
//   const summary =
//     "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.";
//   const genre = "Drama, Fantasy, Horror";
//   const age = 17;

//   if (age <= 18) {
//     return (
//       <>
//         <div>
//           <img
//             src="https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg"
//             alt="Stranger Things"
//             style={{ width: "300px" }}
//           />
//         </div>
//         <h2>Name : {name}</h2>
//         <h3>Rating : {rating}</h3>
//         <p>summary : {summary}</p>
//         <p>Genre : {genre}</p>
//         <button>Not Available</button>
//         <br></br>
//         <br></br>
//       </>
//     );
//   }
//   return (
//     <>
//       <div>
//         <img
//           src="https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg"
//           alt="Stranger Things"
//           style={{ width: "300px" }}
//         />
//       </div>
//       <h2>Name : {name}</h2>
//       <h3>Rating : {rating}</h3>
//       <p>summary : {summary}</p>
//       <p>Genre : {genre}</p>
//       <button>Watch Now</button>
//     </>
//   );
// };

// // -----------------------------------------------------------------------------------------------------------------------------------------------------

// First Way
// // Using Object to get Data

// export const NetFlix2 = () => {
//   const netflix = {
//     name: "Stranger Things",
//     rating: "8.7/10",
//     summary:
//       "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
//     genre: "Drama, Fantasy, Horror",
//     age: 17,
//   };

//   if (netflix.age <= 16) {
//     return (
//       <>
//         <div>
//           <img
//             src="https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg"
//             alt="Stranger Things"
//             style={{ width: "300px" }}
//           ></img>
//         </div>
//         <h2>Name : {netflix.name}</h2>
//         <h3>Rating : {netflix.rating}</h3>
//         <p>summary : {netflix.summary}</p>
//         <p>Genre : {netflix.genre}</p>
//         <button>Not Available</button>
//       </>
//     );
//   }

//   return (
//     <>
//       <div>
//         <img
//           src="https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg"
//           alt="Stranger Things"
//           style={{ width: "300px" }}
//         ></img>
//       </div>
//       <h2>Name : {netflix.name}</h2>
//       <h3>Rating : {netflix.rating}</h3>
//       <p>summary : {netflix.summary}</p>
//       <p>Genre : {netflix.genre}</p>
//       <button>Watch Now</button>
//       <br></br>
//       <br></br>
//     </>
//   );
// }; : {netflix.name}</h2>
//       <h3>Rating : {netflix.rating}</h3>
//       <p>summary : {netflix.summary}</p>
//       <p>Genre : {netflix.genre}</p>
//       <button>Watch Now</button>
//       <br></br>
//       <br></br>
//     </>
//   );
// };

// -----------------------------------------------------------------------------------------------------------------------------------------------------

// Second Way

// But this violates DRY (do not repeat your self);

// export const NetFlix3 = () => {
//   const netflix = {
//     name: "Stranger Things",
//     rating: "8.7/10",
//     summary:
//       "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
//     genre: "Drama, Fantasy, Horror",
//     age: 18,
//   };

//   return (
//     <>
//       <div>
//         <img
//           src="https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg"
//           alt="Stranger Things"
//           style={{ width: "300px" }}
//         ></img>
//       </div>
//       <h2>Name : {netflix.name}</h2>
//       <h3>Rating : {netflix.rating}</h3>
//       <p>summary : {netflix.summary}</p>
//       <p>Genre : {netflix.genre}</p>
//       <button>{netflix.age >= 18 ? "Watch Now" : "Not Available"}</button>
//     </>
//   );
// };

// -----------------------------------------------------------------------------------------------------------------------------------------------------

// Thired Way

// Some time you might have very complex if condition, for that there are some solution

// export const NetFlix4 = () => {
//   const netflix = {
//     name: "Stranger Things",
//     rating: "8.7/10",
//     summary:
//       "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
//     genre: "Drama, Fantasy, Horror",
//     age: 18,
//   };
//   let canWatch = "Not Available";

//   if (netflix.age >= 18) {
//     canWatch = "Watch Now";
//   }

//   return (
//     <>
//       <div>
//         <img
//           src="https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg"
//           alt="Stranger Things"
//           style={{ width: "300px" }}
//         ></img>
//       </div>
//       <h2>Name : {netflix.name}</h2>
//       <h3>Rating : {netflix.rating}</h3>
//       <p>summary : {netflix.summary}</p>
//       <p>Genre : {netflix.genre}</p>
//       <button>{canWatch}</button>
//     </>
//   );
// };

// -----------------------------------------------------------------------------------------------------------------------------------------------------

// Fourth Way
export const NetFlix5 = () => {
  const netflix = {
    name: "Stranger Things",
    rating: "8.7/10",
    summary:
      "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
    genre: "Drama, Fantasy, Horror",
    age: 18,
  };
  const canWatch = () => {
    if (netflix.age >= 18) return "Watch Now";
    return "Not Available";
  };

  return (
    <>
      <div>
        <img
          src="https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg"
          alt="Stranger Things"
          style={{ width: "300px" }}
        ></img>
      </div>
      <h2>Name : {netflix.name}</h2>
      <h3>Rating : {netflix.rating}</h3>
      <p>summary : {netflix.summary}</p>
      <p>Genre : {netflix.genre}</p>
      <button>{canWatch()}</button>
    </>
  );
};
