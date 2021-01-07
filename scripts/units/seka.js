const seka = extendContent(UnitType, "seka", {
    load() {
        this.super$load();
        this.region = Core.atlas.find(this.name);
    }
});

seka.abilities.add(new RepairFieldAbility(10, 60 * 5, 100));
seka.abilities.add(new StatusFieldAbility(StatusEffects.overclock, 60 * 6, 60 * 6, 60));

seka.constructor = () => { 
    const unit = extend(UnitWaterMove, {});

    return unit
}