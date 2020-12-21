import axios from 'axios'

axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        // Nothing for now
        return config;
    }, function (error) {
        // Do something with request error
        // Nothing for now
        return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        // Do something with response error
        if (error.response.status) {
            switch (error.response.status) {
                case 400:
                    // TODO
                    break;
                case 401:
                    console.log("session expired");
                    break;
                case 403:
                    console.log("session expired");
                    // router.replace({
                    //   path: "/login",
                    //   query: { redirect: router.currentRoute.fullPath }
                    // });
                    break;
                case 404:
                    console.log('page not exist');
                    break;
                case 502:
                    // TODO
                    // setTimeout(() => {
                    //    router.replace({
                    //      path: "/login",
                    //      query: {
                    //        redirect: router.currentRoute.fullPath
                    //      }
                    //    });
                    //  }, 1000);
                    break;
            }
            return Promise.reject(error.response);
        }
        return Promise.reject(error);
});