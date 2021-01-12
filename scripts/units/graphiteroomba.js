const graphiteroomba = extendContent(UnitType, "graphiteroomba", {
    load() {
        this.super$load();
        this.region = Core.atlas.find(this.name);
    }
});

graphiteroomba.defaultController = () => new MinerAI()

graphiteroomba.constructor = () => { 
    const unit = extend(UnitWaterMove, {});

    return unit
}