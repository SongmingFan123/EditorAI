// jest.mock('firebase/auth', () => {
//   const mockSignInWithEmailAndPassword = jest.fn();
//   const mockOnAuthStateChanged = jest.fn();

//   return {
//     getAuth: jest.fn(() => ({
//       currentUser: null,
//       signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
//       onAuthStateChanged: mockOnAuthStateChanged,
//     })),
//     signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
//     createUserWithEmailAndPassword: jest.fn(),
//     onAuthStateChanged: (callback) => {
//       if (typeof callback === 'function') {
//         callback(null); /
//       }
//       return jest.fn(); 
//     },
//     updateProfile: jest.fn(),
//     updatePassword: jest.fn(),
//   };
// });

// import React from 'react';
// import { AuthProvider, useAuth } from 'app/context/AuthContext'; 
// import * as firebaseAuth from 'firebase/auth';
// import '@testing-library/jest-dom';
// import { render, fireEvent, act, screen } from '@testing-library/react';

// describe('AuthProvider', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it('initializes with no user authenticated', () => {
//     const TestComponent = () => {
//       const { user } = useAuth();
//       return <div>{user ? user.email : "No User"}</div>;
//     };

//     render(
//       <AuthProvider>
//         <TestComponent />
//       </AuthProvider>
//     );

//     expect(screen.getByText("No User")).toBeInTheDocument();
//   });

//   it('can sign in a user', async () => {
//     const userCredentials = { user: { uid: '123', email: 'test@example.com' } };
//     const authInstance = firebaseAuth.getAuth();
//     authInstance.signInWithEmailAndPassword.mockResolvedValue(userCredentials);
  
//     const TestComponent = () => {
//       const { signIn, user } = useAuth();
//       return (
//         <div>
//           {user ? user.email : "No User"}
//           <button onClick={() => signIn('test@example.com', 'password')}>Sign In</button>
//         </div>
//       );
//     };

//     render(
//       <AuthProvider>
//         <TestComponent />
//       </AuthProvider>
//     );

//     await act(async () => {
//       fireEvent.click(screen.getByText("Sign In"));
//     });

//     expect(authInstance.signInWithEmailAndPassword).toHaveBeenCalledWith(
//       'test@example.com',
//       'password'
//     );
//     expect(await screen.findByText("test@example.com")).toBeInTheDocument();
//   });
// });
