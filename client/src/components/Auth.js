import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://mud-backend-ddlp.herokuapp.com/api/';

axios.interceptors.request.use(
    function (options) {
        options.headers.authorization = localStorage.getItem('key');
        return options;
    },
    function (error) {
        return Promise.reject(error)
    }
);

export default function (Component) {
    return class Authenticated extends React.Component {
        render() {
            const key = localStorage.getItem('key');
            const notLoggedIn = <div>Please Login!</div>;
            return (
            <div>
                {key ? <Component {... this.props} /> : notLoggedIn}
            </div>
            )
        }
    }
}