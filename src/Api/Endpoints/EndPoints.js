

export const endpoints = {
    auth: {
      login: "user/login",
    },
    cms: {
      allproducts: "viewproducts",
      create: "product/create",
      details: "product/details",
      update: "product/update",
      remove: "product/remove"
    },
  };
  
  export const successNotifications = [
    endpoints.auth.registration,
    endpoints.auth.login,
    endpoints.cms.allproducts,
    endpoints.cms.create,
    endpoints.cms.details,
    endpoints.cms.update,
    endpoints.cms.remove,
  ];
  