const create = (req, res, next) => {
    res.json('create rate')
}

const getById = (req, res, next) => {
    const { id } = req.params
    res.json(`get rate ${id} data`)
}

const getAll = (req, res, next) => {
    res.json('get rates data')
}

const updateById = (req, res, next) => {
    const { id } = req.params
    res.json(`update rate ${id} data`)
}

const deleteById = (req, res, next) => {
    const { id } = req.params
    res.json(`delete rate ${id} data`)
}

module.exports = { create, getById, getAll, updateById, deleteById }