const meise = extendContent(UnitType, "meise", {
    load() {
        this.super$load();
        this.region = Core.atlas.find(this.name);
    }
});

meise.abilities.add(new RepairFieldAbility(10, 60 * 5, 100));
meise.abilities.add(new ForceFieldAbility(80, 0.8, 1000, 50 * 6));

meise.constructor = () => { 
    const unit = extend(UnitWaterMove, {});

    return unit
}