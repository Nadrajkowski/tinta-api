import {Application, Request, Response, NextFunction} from "express";
import {ImageController} from '../controllers/imageController';
import * as express from 'express';
import dummyAuth from '../middlewares/dummyAuth';

class ImageRoutes  {       

  private imageController: ImageController = new ImageController();
  private router: express.Router = express.Router();

  constructor() {        
    this.setupAuth();
    this.setupBasePaths();
    this.setupPathsById()
  }

  private setupBasePaths() {
    this.router.route('/')
      .get(this.imageController.getAllImages)
      .post(this.imageController.createImage);
  }

  private setupPathsById() {
    this.router.route('/:imageId')
      .get(this.imageController.getImageById)
      .put(this.imageController.updateImageById)
      .delete(this.imageController.deleteImageById);
  }

  private setupAuth() {
    // this.router.use(dummyAuth.auth);
  }

  public getRouter() {
    return this.router;
  }
}

export default new ImageRoutes();