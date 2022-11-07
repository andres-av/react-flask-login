const getState = ({ getStore, getActions, setStore }) => {
	return {
	    store: {
			authenticated: false,
		},
		actions: {
			registerUser: (email, password) => {
				fetch(process.env.BACKEND_URL + "/api/register", {
				  method: "POST",
				  body: JSON.stringify({
					email,
					password,
				  }),
				  headers: {
					"Content-Type": "application/json",
				  },
				})
				  .then((resp) => resp.json())
				  .then((data) => console.log(data));
				  
			  },
			  login: (email, password) => {
				fetch(process.env.BACKEND_URL + "/api/login", {
				  method: "POST",
				  body: JSON.stringify({
					email: email,
					password: password,
				  }),
		
				  headers: {
					"Content-Type": "application/json",
				  },
				})
				  .then((resp) => {
					if (resp.status == 200) {
					  setStore({
						authenticated: true,
					  });
					} else {
					  throw new Error("Invalid Password");
					}
					return resp.json();
				  })
				  .then((data) => localStorage.setItem("token", data.token))
				  .catch((error) => alert(error));
			  },
			  logout: () => {
				const store = getStore();
				if ((store.authenticated = true)) {
				  setStore({
					authenticated: false,
				  });
				  localStorage.removeItem("token");
				}
			},
		},
	};
};

export default getState;
