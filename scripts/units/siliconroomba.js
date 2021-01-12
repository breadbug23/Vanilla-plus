const siliconroomba = extendContent(UnitType, "siliconroomba", {
    load() {
        this.super$load();
        this.region = Core.atlas.find(this.name);
    }
});

siliconroomba.defaultController = () => new MinerAI()

siliconroomba.constructor = () => { 
    const unit = extend(MechUnit, {});

    return unit
}