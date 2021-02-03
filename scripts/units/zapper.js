const zapper = extend(UnitType, "zapper", {
	draw(unit){
		this.super$draw(unit);
		Draw.rect("vanilla-+-zapper-orb", unit.x, unit.y, Time.time * 12);
		Draw.rect("vanilla-+-zapper-orb-outline", unit.x, unit.y, Time.time * 12);
	}
});
zapper.constructor = () => extend(UnitEntity, {});
