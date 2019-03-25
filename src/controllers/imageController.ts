import * as mongoose from 'mongoose';
import { ImageSchema } from '../models/imageModel';
import { Request, Response } from 'express';

const Image = mongoose.model('Image', ImageSchema);
export class ImageController {

  public createImage(req: Request, res: Response) {
    let newImage = new Image(req.body);

    newImage.save((err, image) => {
      if (err) {
        res.send(err);
      }
      res
        .status(201)
        .json(image);
    });
  }

  public getAllImages(req: Request, res: Response) {
    Image.find(
      {},
      (err, images) => {
        res.json(images);
      }
    );
  }

  public getImageById(req: Request, res: Response) {
    const {imageId} = req.params;
    Image.findOne(
      {_id: imageId},
      (err, image) => {
        if (err) {
          res
            .status(404)
            .json({
              error: {
                messege: `Could not find image with id [${imageId}]`,
                code: 404
              }
            })
        }
        res.json(image);
      }
    )
  }

  public updateImageById(req: Request, res: Response) {
    Image.findOneAndUpdate(
      {_id: req.params.imageId},
      req.body,
      {new: true},
      (err, image) => {
        if (err) {
          res
            .status(400)
            .send(err);
        }
        res.json(image);
      }
    )
  }

  public deleteImageById(req: Request, res: Response) {
    Image.findOneAndDelete(
      {_id: req.params.imageId},
      (err, image) => {
        if (err) {
          res
            .status(400)
            .send(err);
        }
        res.json(image);
      }
    )
  }
}