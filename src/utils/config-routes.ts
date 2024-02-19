export interface Route {
    login: string;
    logout: string;
    plants: {
        getAll: string;
    };
}

const configRoutes: Route = {
    login: import.meta.env.VITE_API_ROUTE_LOGIN || '/login',
    logout: import.meta.env.VITE_API_ROUTE_LOGOUT || '/logout',
    plants: {
        getAll: import.meta.env.VITE_API_ROUTE_PLANTS_GET_ALL || '/plants'
    }
};

export default configRoutes;