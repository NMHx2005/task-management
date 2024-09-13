const Task = require("../../models/task.model");

// [GET] /tasks
module.exports.index = async (req, res) => {
    const find = {
        deleted: false
    };

    // Lọc theo trạng thái
    const status = req.query.status;
    if (status) {
        find.status = status;
    }
    // Hết Lọc theo trạng thái
    const tasks = await Task.find(find);
    
    res.json(tasks);
}

// [GET] /tasks/detail/:id
module.exports.detail = async (req, res) => {
    try {
        const id = req.params.id;
    
        const task = await Task.findOne({
            _id: id,
            deleted: false
        })
        res.json(task);
    } catch (error) {
        res.json({
            message: "Not Found"
        })
    }
}