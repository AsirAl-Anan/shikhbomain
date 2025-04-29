import { createContext, useContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword as firebaseCreateUser,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  sendEmailVerification as firebaseSendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../firebase/firebase.init.js"

// Create the authentication context
export const AuthContext = createContext(null);

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Auth Provider Component
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const auth = getAuth(app);
  
  // Reset error state
  const clearError = () => setError(null);
  
  // Create user with email and password
  const createUserWithEmailAndPassword = async (email, password) => {
    clearError();
    try {
      const userCredential = await firebaseCreateUser(auth, email, password);
      return userCredential.user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };
  
  // Sign in with email and password
  const signInWithEmailAndPassword = async (email, password) => {
    clearError();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };
  
  // Sign up using popup (Google, GitHub, Facebook)
  const signupWithPopup = async (providerName) => {
    clearError();
    try {
      let authProvider;
      
      if (providerName === "google") {
        authProvider = new GoogleAuthProvider();
      } else if (providerName === "github") {
        authProvider = new GithubAuthProvider();
      } else if (providerName === "facebook") {
        authProvider = new FacebookAuthProvider();
      } else {
        // Default to Google
        authProvider = new GoogleAuthProvider();
      }
      
      const result = await signInWithPopup(auth, authProvider);
      return result.user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };
  
  // Login using popup (same as signup but with different name for clarity)
  const loginWithPopup = async (provider) => {
    return signupWithPopup(provider);
  };
  
  // Send email verification
  const sendEmailVerification = async () => {
    clearError();
    if (!auth.currentUser) {
      setError("No user is currently signed in");
      throw new Error("No user is currently signed in");
    }
    
    try {
      await firebaseSendEmailVerification(auth.currentUser);
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };
  
  // Reset password
  const resetPassword = async (email) => {
    clearError();
    try {
      await sendPasswordResetEmail(auth, email);
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };
  
  // Logout user
  const logout = async () => {
    clearError();
    try {
      await signOut(auth);
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };
  
  // Listen for auth state changes and reload user to get fresh emailVerified status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Reload user to get fresh data like emailVerified status
        user.reload().then(() => {
          setCurrentUser(auth.currentUser);
          setLoading(false);
        }).catch(err => {
          console.error("Error reloading user:", err);
          setCurrentUser(user);
          setLoading(false);
        });
      } else {
        setCurrentUser(null);
        setLoading(false);
      }
    });
    
    // Cleanup subscription
    return unsubscribe;
  }, [auth]);
  
  // Context value
  const value = {
    currentUser,
    loading,
    error,
    clearError,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signupWithPopup,
    loginWithPopup,
    sendEmailVerification,
    resetPassword,
    logout
  };
  
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;