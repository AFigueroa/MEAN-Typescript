import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const HeroSchema = new Schema({
    id: Schema.ObjectId,
    name: {
        type: String,
        required: 'Enter a name'
    }
});
