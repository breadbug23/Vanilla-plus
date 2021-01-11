const plastaniumroomba = extendContent(UnitType, "plastaniumroomba", {
    load() {
        this.super$load();
        this.region = Core.atlas.find(this.name);
    }
});

plastaniumroomba.defaultController = () => new MinerAI()

plastaniumroomba.constructor = () => { 
    const unit = extend(LegsUnit, {});

    return unit
}