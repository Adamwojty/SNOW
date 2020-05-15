// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addItem, removeItem } from './actions';

// import styles from './App.module.scss';

// const App = () => {
//   const cart = useSelector((state) => state.cart);
//   console.log(cart);
//   const dispatch = useDispatch();

//   useEffect(() => {});
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <div>
//         <button onClick={() => dispatch(addItem('drzewo', 'lorem ipsum dolo res'))}>drzewo</button>
//       </div>
//       <div>
//         <button onClick={() => dispatch(addItem('kwiat', 'lorem ipsum dolo res'))}>kwiat</button>
//       </div>
//       <div>
//         <div className={styles.list__div}>
//           <ul>
//             {cart.map((item) => (
//               <li>
//                 {item.title}
//                 <button onClick={() => dispatch(removeItem(item.id))}>X</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;