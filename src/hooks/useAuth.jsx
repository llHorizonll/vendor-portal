/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
	const [user, setUser] = useLocalStorage("user", userData);
	const navigate = useNavigate();

	const login = async (data, nextPage = "/") => {
		setUser(data);
		navigate(nextPage, { replace: true });
	};

	const logout = () => {
		setUser(null);
		navigate("/", { replace: true });
	};

	const value = useMemo(
		() => ({
			user,
			login,
			logout,
		}),
		[user],
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	return useContext(AuthContext);
};

AuthProvider.propTypes = {
	children: PropTypes.object,
	userData: PropTypes.string,
}
