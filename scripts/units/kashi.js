const kashi = extendContent(UnitType, "kashi", {
    load() {
        this.super$load();
        this.region = Core.atlas.find(this.name);
    }
});

kashi.abilities.add(new RepairFieldAbility(17, 60 * 4, 150));

kashi.constructor = () => { 
    const unit = extend(UnitWaterMove, {});

    return unit
}