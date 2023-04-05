class CrudRepo {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const res = await this.model.create(data);
      return res;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
    }
  }
  async destroy(id) {
    try {
      const res = await this.model.findByIdAndDelete(id);
      return res;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
    }
  }
  get(id) {
    try {
      const res = this.model.findById(id).populate({ path: "likes" });
      return res;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
    }
  }
  async getAll(id) {
    try {
      const res = await this.model.find({});
      return res;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
    }
  }
  async update(id, data) {
    try {
      const res = await this.model.findByIdAndUpdate(id, data, { new: true });
      return res;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
    }
  }
}

export default CrudRepo;
