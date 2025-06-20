import { Router } from "express";
import { createCategory, deleteCategory, getListCategory, getDetailCategory, updateCategory, softDeleteCategory } from "./category.controller.js";
import validBodyRequest from './../../common/middlewares/validBodyRequest';
import categorySchema from "./category.schema.js";

const categoryRoutes = Router()

categoryRoutes.get("/",getListCategory)
categoryRoutes.get("/:id",getDetailCategory)
categoryRoutes.post("/",createCategory)
categoryRoutes.patch("/:id",updateCategory)
categoryRoutes.delete("/:id",deleteCategory)

categoryRoutes.delete("/soft-delete/:id", softDeleteCategory)

categoryRoutes.use(validBodyRequest(categorySchema))
categoryRoutes.post("/", createCategory)
categoryRoutes.patch("/:id", updateCategory)

export default categoryRoutes