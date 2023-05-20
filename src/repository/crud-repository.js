class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async get(modelId) {
        try {
            console.log(modelId, this.model);
            const response = await this.model.findByPk(modelId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async delete(modelId) {
        try {
            await this.model.destroy({
                where: {
                    id: modelId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async update(modelId, data) {
        try {
            const entity = await this.model.findByPk(modelId);
            for(const [key, value] of Object.entries(data)) {
                entity[key] = value;
            }
            entity.save();
            return entity;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

};

module.exports = CrudRepository;