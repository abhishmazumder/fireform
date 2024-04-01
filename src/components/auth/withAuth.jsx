import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
      if (!user && !loading) {
        navigate("/auth/login");
      }
    }, [user, loading, navigate]);

    if (loading) return <div>Loading...</div>;

    if (!user) return null;

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
