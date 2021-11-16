// import React from 'react';
// import { Route, Navigate, RouteProps } from 'react-router-dom';

// interface IPrivateRouteProps {
//   isLoggedIn: boolean;
//   children: React.ReactNode;
// }
// const PrivateRoute = ({
//   isLoggedIn,
//   children,
//   ...rest
// }: IPrivateRouteProps) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isLoggedIn ? (
//           children
//         ) : (
//           <Navigate
//             to={{
//               pathname: '/signin',
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };

const PrivateRoute = () => <div>Private Route</div>;

export default PrivateRoute;
