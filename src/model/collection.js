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
    async readWithAttributes(att,item_id){
        if(item_id){
            let itemFound=await this.model.findOne({where:{id:item_id},attributes:att});
            return itemFound;
        }else{
            let itemFound=await this.model.findAll({attributes:att});
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
    async readWithRelation(model,id){
        if(id){
            let record = await this.model.findOne({
                where: { id:id },
                include: {all:true},
            });
            return record;

    }
    let record = await this.model.findAll({
        include: {all:true},
    });
    return record;
    }
    async readAllThingsNestdRelations(model,model2,model3,id,att1,att2,att3,att4){

    let record = await this.model.findOne({
        where: {
            id: id,
        },
        attributes:att1,
        include: {
            model: model,
            attributes:att2,
            include: {
                model: model2,
                attributes:att3,
                include: {
                    model: model3,
                    attributes:att4,
                },
            },
        },
        });

    return record;
    }

}
module.exports=Collection