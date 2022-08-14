const create = (req, res, next) => {
    res.json('create recipe')
}

const getById = (req, res, next) => {
    const { id } = req.params
    res.json(`get recipe ${id} data`)
}

const getAll = (req, res, next) => {
    res.json('get recipes data')
}

const updateById = (req, res, next) => {
    const { id } = req.params
    res.json(`update recipe ${id} data`)
}

const deleteById = (req, res, next) => {
    const { id } = req.params
    res.json(`delete recipe ${id} data`)
}

module.exports = { create, getById, getAll, updateById, deleteById }