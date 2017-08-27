import { Task } from 'app/server/db/user-schema';

export function sendTask(res) {
    Task.find((err, results) => {
        res.send({ tasks: results });
    });
}
