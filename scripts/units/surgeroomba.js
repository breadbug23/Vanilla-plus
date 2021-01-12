const surgeroomba = extendContent(UnitType, "surgeroomba", {
    load() {
        this.super$load();
        this.region = Core.atlas.find(this.name);
    }
});

surgeroomba.defaultController = () => new MinerAI()

surgeroomba.constructor = () => { 
    const unit = extend(Unit, {});

    return unit
}