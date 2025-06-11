// Generate a random CSRF token
const generateCSRFToken = () => {
	return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

// Store the CSRF token in localStorage
const setCSRFToken = () => {
	const token = generateCSRFToken();
	localStorage.setItem("csrfToken", token);
	return token;
};

// Get the stored CSRF token
const getCSRFToken = () => {
	return localStorage.getItem("csrfToken");
};

// Add CSRF token to headers
const getCSRFHeaders = () => {
	const token = getCSRFToken();
	return {
		"X-CSRF-Token": token,
		"Content-Type": "application/json",
	};
};

// Validate CSRF token
const validateCSRFToken = (token) => {
	const storedToken = getCSRFToken();
	return token === storedToken;
};

export { setCSRFToken, getCSRFToken, getCSRFHeaders, validateCSRFToken };
