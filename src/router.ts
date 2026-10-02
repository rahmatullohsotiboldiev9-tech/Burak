import express from "express";
import memberController from "./controllers/member.controller";
const router = express.Router();

router.post("/signup", memberController.signup);
router.post("/login", memberController.login);

export default router;

// import express from "express";
// const router = express.Router();
// import memberController from "./controllers/member.controller";
// import routerAdmin from "./router-Admin";


// router
//     .post("/signup", memberController.signup);

// router
//     .post("/login", memberController.Login);

// export default router