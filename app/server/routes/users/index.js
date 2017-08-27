import express from 'express';
import { sendTask } from 'app/server/routes/users/utils';
import { Task } from 'app/server/db/user-schema';

const router = express.Router();

router.get('/', (req, res) => {
    sendTask(res);
});

router.post('/', (req, res) => {
    const { 
        name,
        description,
        dateCreated,
        dateUpdate
    } = req.body;

    const task = new Task({
        name,
        description,
        dateCreated,
        dateUpdate
    });

    task.save((err) => {
        sendTask(res);
    });
});

router.delete('/', (req, res) => {
    const _id = req.body._id;

    Task.remove({ _id }, err => {
        sendTask(res);
    });
});

router.put('/', (req, res) => {
    const {_id, description, name, dateUpdate } = req.body;

    Task.findByIdAndUpdate( _id,
        {
            $set:{
                description,
                name,
                dateUpdate
            }
        },
        (err) =>{
            sendTask(res);
        }
    );
});

export default router;
