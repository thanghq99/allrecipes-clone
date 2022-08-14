const create = (req, res, next) => {
    res.json('create review')
}

const getById = (req, res, next) => {
    const { id } = req.params
    res.json(`get review ${id} data`)
}

const getAll = (req, res, next) => {
    res.json('get reviews data')
}

const updateById = (req, res, next) => {
    const { id } = req.params
    res.json(`update review ${id} data`)
}

const deleteById = (req, res, next) => {
    const { id } = req.params
    res.json(`delete review ${id} data`)
}

module.exports = { create, getById, getAll, updateById, deleteById }