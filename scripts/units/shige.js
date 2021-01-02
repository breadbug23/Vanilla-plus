const shige = extendContent(UnitType, "shige", {
    load() {
        this.super$load();
        this.region = Core.atlas.find(this.name);
    }
});

shige.abilities.add(new RepairFieldAbility(10, 60 * 5, 75));

shige.constructor = () => { 
    const unit = extend(UnitWaterMove, {});

    return unit
}