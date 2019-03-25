import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ImageSchema = new Schema(
    {
        title: {
            type: String,
            required: 'Enter a title'
        },
        description: {
            type: String,
            required: 'Enter a description'
        },
        imageURL: {
            type: String,
            required: 'Provide an URL for an image'
        }
    },
    {
        timestamps: true
    }

);