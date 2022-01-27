const routes = {
  applicationsDetails: {
    mask: "/applications/:id",
    create: (id) => `/applications/${id}`,
  },
};

export default routes;
