const routes = {
  applicationsDetails: {
    mask: "/repos/:id",
    create: (id) => `/repos/${id}`,
  },
};

export default routes;
