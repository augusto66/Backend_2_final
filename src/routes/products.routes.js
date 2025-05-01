import { Router } from "express";
import { productDao } from "../persistence/mongo/dao/product.dao.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { editProductSchema } from "../schemas/products.schema.js";
import { productsController } from "../controllers/products.controllers.js";

const router = Router();

router.get("/", productsController.getAllProducts);

router.get("/:pid", productsController.getOneProducts);

router.delete("/:pid", productsController.deleteOneProducts);

router.put("/",validateSchema(editProductSchema),productsController.putProducts);

router.post("/", productsController.postProducts);

export default router;
