export interface Route {
    login: string;
    logout: string;
    register: string;
    plants: {
        getAll: string;
        create: string;
        show: (id: number) => string;
        me: (id: number) => string;
        delete: (id: number) => string;
    };
    demand: {
        create: (id: number) => string;
    };
    conversations: {
        getAll: string;
        show: (id: number) => string;
        create: string;
        sendMessage: string;
    }
}

const configRoutes: Route = {
    login: import.meta.env.VITE_API_ROUTE_LOGIN || '/login',
    logout: import.meta.env.VITE_API_ROUTE_LOGOUT || '/logout',
    register: import.meta.env.VITE_API_ROUTE_REGISTER || '/register',
    plants: {
        getAll: import.meta.env.VITE_API_ROUTE_PLANTS_GET_ALL || '/plants',
        create: import.meta.env.VITE_API_ROUTE_PLANTS_CREATE || '/plants',
        show: (id: number) => `/plants/${id}`,
        me: (id: number) => `/plants/me/${id}`,
        delete: (id: number) => `/plants/${id}`,
    },
    demand: {
        create: (id: number) => `/plants/${id}/demands`,
    },
    conversations: {
        getAll: import.meta.env.VITE_API_ROUTE_CONVERSATIONS_GET_ALL || '/conversations',
        show: (id: number) => `/conversations/${id}`,
        create: import.meta.env.VITE_API_ROUTE_CONVERSATIONS_CREATE || '/conversations',
        sendMessage: import.meta.env.VITE_API_ROUTE_CONVERSATIONS_SEND_MESSAGE || '/messages/create',
    }
};

export default configRoutes;