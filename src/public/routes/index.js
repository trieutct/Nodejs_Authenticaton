import UserRouter from "./user.js";
import StudentRouter from "./student.js";
const routes = (app) => {
  app.use("/user", UserRouter);
  app.use("/student", StudentRouter);
  app.get("/", (req, res) => {
    res.render("new", {
      isShow: false,
      helpers: {
        message() {
          return "SUCCES";
        },
        noti() {
          return "ERROR";
        },
      },
    });
  });
};

export default routes;
