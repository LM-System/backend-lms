'use strict'
class Collection{
    constructor(model){
        this.model=model
    }
    async create(obj){
        let itemCreated=await this.model.create(obj);
        return itemCreated;
    }
    async read(item_id){
        if(item_id){
            let itemFound=await this.model.findOne({where:{id:item_id}});
            return itemFound;
        }else{
            let itemFound=await this.model.findAll();
            return itemFound;
        }
    }
    async update(obj,item_id){
        let foundItem = await this.model.findOne({ where: { id: item_id } });
        let itemUpdated=await foundItem.update(obj);
        return itemUpdated;
    }
    async delete(item_id){
        let itemDeleted=await this.model.destroy({where:{id:item_id}});
        return itemDeleted;
    }
    // async oneToMAny(id,model){
    //     let record = await this.model.findOne({
    //         where: { id },
    //         include: model,
    //     });
    //     return record;
    // }

}
module.exports=Collection