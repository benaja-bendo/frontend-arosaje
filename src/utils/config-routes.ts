export interface Route {
    login: string;
    logout: string;
    plants: {
        getAll: string;
        show: (id: number) => string;
    };
}

const configRoutes: Route = {
    login: import.meta.env.VITE_API_ROUTE_LOGIN || '/login',
    logout: import.meta.env.VITE_API_ROUTE_LOGOUT || '/logout',
    plants: {
        getAll: import.meta.env.VITE_API_ROUTE_PLANTS_GET_ALL || '/plants',
        show: (id: number) =>`/plants/${id}`
    }
};

export default configRoutes;