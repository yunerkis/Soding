import mongoose from 'mongoose';

export const Task = mongoose.model('Task', {
    name: String,
    description: String,
    dateCreated: Date,
    dateUpdate: Date
});