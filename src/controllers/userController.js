const create = (req, res, next) => {
    res.json('create user')
}

const getById = (req, res, next) => {
    const { id } = req.params
    res.json(`get user ${id} data`)
}

const getAll = (req, res, next) => {
    res.json('get users data')
}

const updateById = (req, res, next) => {
    const { id } = req.params
    res.json(`update user ${id} data`)
}

const deleteById = (req, res, next) => {
    const { id } = req.params
    res.json(`delete user ${id} data`)
}

module.exports = { create, getById, getAll, updateById, deleteById }