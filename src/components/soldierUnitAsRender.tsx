/** This component is used to add a defender or attacker unit to the battle ground array and giving the unit the initial stats */

import React, { useState, useEffect } from "react";
import { getSecondaryButtonStyles } from "../customStyles";
import SmallSwords from "../img/Other/SmallSwords.png";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { pink } from "@mui/material/colors";
import Button from "@mui/material/Button";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

import WarriorAtt from "../img/Attackers/Warrior.png";
import ArcherAtt from "../img/Attackers/Archer.png";
import RiderAtt from "../img/Attackers/Rider.png";
import DefenderAtt from "../img/Attackers/Defender.png";
import SwordsmanAtt from "../img/Attackers/Swordsman.png";
import CatapultAtt from "../img/Attackers/Catapult.png";
import KnightAtt from "../img/Attackers/Knight.png";
import GiantAtt from "../img/Attackers/Giant.png";
import BattleshipAtt from "../img/Attackers/Battleship.png";
import BoatAtt from "../img/Attackers/Boat.png";
import ShipAtt from "../img/Attackers/Ship.png";
import AmphibianAtt from "../img/Attackers/Amphibian.png";
import TridentionAtt from "../img/Attackers/Tridention.png";
import SharkAtt from "../img/Attackers/Shark.png";
import PufferAtt from "../img/Attackers/Puffer.png";
import JellyAtt from "../img/Attackers/Jelly.png";
import CrabAtt from "../img/Attackers/Crab.png";
import PolytaurAtt from "../img/Attackers/Polytaur.png";
import NavalonAtt from "../img/Attackers/Navalon.png";
import DragonEggAtt from "../img/Attackers/Dragon Egg.png";
import BabyDragonAtt from "../img/Attackers/Baby Dragon.png";
import FireDragonAtt from "../img/Attackers/Fire Dragon.png";
import MooniAtt from "../img/Attackers/Mooni.png";
import IceArcherAtt from "../img/Attackers/Ice Archer.png";
import BattleSledAtt from "../img/Attackers/Battle Sled.png";
import IceFortressAtt from "../img/Attackers/Ice Fortress.png";
import GaamiAtt from "../img/Attackers/Gaami.png";
import HexapodAtt from "../img/Attackers/Hexapod.png";
import KitonAtt from "../img/Attackers/Kiton.png";
import PhychiAtt from "../img/Attackers/Phychi.png";
import RaychiAtt from "../img/Attackers/Raychi.png";
import ShamanAtt from "../img/Attackers/Shaman.png";
import ExidaAtt from "../img/Attackers/Exida.png";
import DoomuxAtt from "../img/Attackers/Doomux.png";
import CentipedeAtt from "../img/Attackers/Centipede.png";
import SegmentAtt from "../img/Attackers/Segment.png";
import MindBenderAtt from "../img/Attackers/Mind Bender.png";
import NatureBunnyAtt from "../img/Attackers/Nature Bunny.png";
import DaggerAtt from "../img/Attackers/Dagger.png";
import DinghyAtt from "../img/Attackers/Dinghy.png";
import CloakAtt from "../img/Attackers/Cloak.png";
import PirateAtt from "../img/Attackers/Pirate.png";
import RaftAtt from "../img/Attackers/Raft.png";
import ScoutAtt from "../img/Attackers/Scout.png";
import RammerAtt from "../img/Attackers/Rammer.png";
import BomberAtt from "../img/Attackers/Bomber.png";
import JuggernautAtt from "../img/Attackers/Juggernaut.png";

import WarriorDef from "../img/Defenders/Warrior.png";
import ArcherDef from "../img/Defenders/Archer.png";
import RiderDef from "../img/Defenders/Rider.png";
import DefenderDef from "../img/Defenders/Defender.png";
import SwordsmanDef from "../img/Defenders/Swordsman.png";
import CatapultDef from "../img/Defenders/Catapult.png";
import KnightDef from "../img/Defenders/Knight.png";
import GiantDef from "../img/Defenders/Giant.png";
import BattleshipDef from "../img/Defenders/Battleship.png";
import BoatDef from "../img/Defenders/Boat.png";
import ShipDef from "../img/Defenders/Ship.png";
import AmphibianDef from "../img/Defenders/Amphibian.png";
import TridentionDef from "../img/Defenders/Tridention.png";
import SharkDef from "../img/Defenders/Shark.png";
import PufferDef from "../img/Defenders/Puffer.png";
import JellyDef from "../img/Defenders/Jelly.png";
import CrabDef from "../img/Defenders/Crab.png";
import PolytaurDef from "../img/Defenders/Polytaur.png";
import NavalonDef from "../img/Defenders/Navalon.png";
import DragonEggDef from "../img/Defenders/Dragon Egg.png";
import BabyDragonDef from "../img/Defenders/Baby Dragon.png";
import FireDragonDef from "../img/Defenders/Fire Dragon.png";
import MooniDef from "../img/Defenders/Mooni.png";
import IceArcherDef from "../img/Defenders/Ice Archer.png";
import BattleSledDef from "../img/Defenders/Battle Sled.png";
import IceFortressDef from "../img/Defenders/Ice Fortress.png";
import GaamiDef from "../img/Defenders/Gaami.png";
import HexapodDef from "../img/Defenders/Hexapod.png";
import KitonDef from "../img/Defenders/Kiton.png";
import PhychiDef from "../img/Defenders/Phychi.png";
import RaychiDef from "../img/Defenders/Raychi.png";
import ShamanDef from "../img/Defenders/Shaman.png";
import ExidaDef from "../img/Defenders/Exida.png";
import DoomuxDef from "../img/Defenders/Doomux.png";
import CentipedeDef from "../img/Defenders/Centipede.png";
import SegmentDef from "../img/Defenders/Segment.png";
import MindBenderDef from "../img/Defenders/Mind Bender.png";
import NatureBunnyDef from "../img/Defenders/Nature Bunny.png";
import DaggerDef from "../img/Defenders/Dagger.png";
import DinghyDef from "../img/Defenders/Dinghy.png";
import CloakDef from "../img/Defenders/Cloak.png";
import PirateDef from "../img/Defenders/Pirate.png";
import RaftDef from "../img/Defenders/Raft.png";
import ScoutDef from "../img/Defenders/Scout.png";
import RammerDef from "../img/Defenders/Rammer.png";
import BomberDef from "../img/Defenders/Bomber.png";
import JuggernautDef from "../img/Defenders/Juggernaut.png";

// Same Props as before
type SoldierUnitAsRenderProps = {
    id: number;
    typeUnit: string;
    team: string;
    healthMax: number;
    healthBefore: number;
    healthAfter?: number;
    attack?: number;
    defence?: number;
    veteran: boolean;
    wallBonus: boolean;
    defenceBonus: boolean;
    safeBonus: boolean;
    poisonedBonus: boolean;
    becamePoisonedBonus: boolean;
    boostedBonus: boolean;
    splashDamage: boolean;
    explodeDamage: boolean;
    shipUnit: boolean;
    OnDelete?: any;
    OnUpdateHitpoints?: any;
    OnIncreaseHitpoints?: any;
    OnDecreaseHitpoints?: any;
    OnVeteranBonus?: any;
    OnDefenceBonus?: any;
    OnWallBonus?: any;
    OnSafeBonus?: any;
    OnPoisonedBonus?: any;
    OnBoostedBonus?: any;
    OnShipUnit?: any;
    OnSplashDamage: any;
    OnExplodeDamage: any;
};

const SoldierUnitAsRender = (props: SoldierUnitAsRenderProps) => {
    const [isToggleOnVeteran, setIsToggleOnVeteran] = useState(props.veteran);
    const [isToggleOnSafe, setIsToggleOnSafe] = useState(props.safeBonus);
    const [isToggleOnDefence, setIsToggleOnDefence] = useState(
        props.defenceBonus
    );
    const [isToggleOnWall, setIsToggleOnWall] = useState(props.wallBonus);
    const [isToggleOnPoisoned, setIsToggleOnPoisoned] = useState(
        props.poisonedBonus
    );
    const [isBecamePoisoned, setIsBecamePoisoned] = useState(
        props.becamePoisonedBonus
    );
    const [isToggleOnBoosted, setIsToggleOnBoosted] = useState(
        props.boostedBonus
    );
    const [isToggleOnShipUnit, setIsToggleOnShipUnit] = useState(
        props.shipUnit
    );
    const [isToggleOnSplashDamage, setIsToggleOnSplashDamage] = useState(
        props.splashDamage
    );
    const [isToggleOnExplodeDamage, setIsToggleOnExplodeDamage] = useState(
        props.explodeDamage
    );
    const [isToggleVisibleTypeUnit, setIsToggleVisibleTypeUnit] = useState(
        props.typeUnit
    );
    const [isToggleVisibleTeam, setIsToggleVisibleTeam] = useState(props.team);
    const [isToggleVisibleShipUnit, setIsToggleVisibleShipUnit] = useState(
        props.shipUnit
    );
    const [healthMaxShipUnit, setHealthMaxShipUnit] = useState(props.healthMax);
    const [healthInputField, setHealthInputField] = useState(
        props.healthBefore
    );
    const [healthBeforeAsState, setHealthBeforeAsState] = useState(
        props.healthBefore
    );
    const [healthAfterAsState, setHealthAfterAsState] = useState(
        props.healthAfter ?? props.healthBefore
    );

    useEffect(() => setIsToggleOnVeteran(props.veteran), [props.veteran]);
    useEffect(() => setIsToggleOnSafe(props.safeBonus), [props.safeBonus]);
    useEffect(
        () => setIsToggleOnDefence(props.defenceBonus),
        [props.defenceBonus]
    );
    useEffect(() => setIsToggleOnWall(props.wallBonus), [props.wallBonus]);
    useEffect(
        () => setIsToggleOnPoisoned(props.poisonedBonus),
        [props.poisonedBonus]
    );
    useEffect(
        () => setIsToggleOnBoosted(props.boostedBonus),
        [props.boostedBonus]
    );
    useEffect(
        () => setIsToggleOnSplashDamage(props.splashDamage),
        [props.splashDamage]
    );
    useEffect(
        () => setIsToggleOnExplodeDamage(props.explodeDamage),
        [props.explodeDamage]
    );
    useEffect(() => setIsToggleOnShipUnit(props.shipUnit), [props.shipUnit]);
    useEffect(
        () => setIsBecamePoisoned(props.becamePoisonedBonus),
        [props.becamePoisonedBonus]
    );
    useEffect(() => setIsToggleVisibleTeam(props.team), [props.team]);
    useEffect(
        () => setIsToggleVisibleTypeUnit(props.typeUnit),
        [props.typeUnit]
    );
    useEffect(
        () => setIsToggleVisibleShipUnit(props.shipUnit),
        [props.shipUnit]
    );
    useEffect(() => setHealthMaxShipUnit(props.healthMax), [props.healthMax]);
    useEffect(
        () => setHealthInputField(props.healthBefore),
        [props.healthBefore]
    );
    useEffect(
        () => setHealthBeforeAsState(props.healthBefore),
        [props.healthBefore]
    );
    useEffect(
        () => setHealthAfterAsState(props.healthAfter ?? props.healthBefore),
        [props.healthAfter, props.healthBefore]
    );

    const handleClickSplashDamage = () => {
        setIsToggleOnSplashDamage(!isToggleOnSplashDamage);
        console.log("Unit does splash damage");
    };
    const handleClickExplodeDamage = () => {
        setIsToggleOnExplodeDamage(!isToggleOnExplodeDamage);
        console.log("Unit does explode damage");
    };
    const handleClickVeteranBonus = () => {
        setIsToggleOnVeteran(!isToggleOnVeteran);
        console.log("Unit is veteran");
    };
    const handleClickShipUnit = () => {
        setHealthMaxShipUnit(props.healthMax);
    };
    const handleClickSafeBonus = () => {
        setIsToggleOnSafe(!isToggleOnSafe);
        console.log("Unit is safe");
    };
    const handleClickBoostedBonus = () => {
        setIsToggleOnBoosted(!isToggleOnBoosted);
        console.log("Unit is boosted");
    };
    const handleClickDefenceBonus = () => {
        let defVal = !isToggleOnDefence;
        setIsToggleOnDefence(defVal);
        if (defVal) {
            setIsToggleOnPoisoned(false);
            setIsToggleOnWall(false);
        }
        console.log("Unit has defence bonus");
    };
    const handleClickWallBonus = () => {
        let wallVal = !isToggleOnWall;
        setIsToggleOnWall(wallVal);
        if (wallVal) {
            setIsToggleOnPoisoned(false);
            setIsToggleOnDefence(false);
        }
        console.log("Unit has wall bonus");
    };
    const handleClickPoisonedBonus = () => {
        let poisVal = !isToggleOnPoisoned;
        setIsToggleOnPoisoned(poisVal);
        if (poisVal) {
            setIsToggleOnWall(false);
            setIsToggleOnDefence(false);
        }
        console.log("Unit is poisoned");
    };
    const handleHitpointsChange = (healthBeforeManualInput: any) => {
        setHealthInputField(parseInt(healthBeforeManualInput));
        console.log("Hitpoints are now: " + healthBeforeManualInput);
        props.OnUpdateHitpoints(props.id, props.team, healthBeforeManualInput);
    };
    const handleKeyDown = (e: any) => {
        if (e.key === "Enter") handleHitpointsChange(e.target.value);
    };
    const handleFocus = (event: any) => {
        event.target.select();
    };
    const displayHealthAfter = () => {
        return healthAfterAsState;
    };
    const unitImages: { [key: string]: { [key: string]: string } } = {
        Attackers: {
            Warrior: WarriorAtt,
            Archer: ArcherAtt,
            Rider: RiderAtt,
            Defender: DefenderAtt,
            Swordsman: SwordsmanAtt,
            Catapult: CatapultAtt,
            Knight: KnightAtt,
            Giant: GiantAtt,
            Battleship: BattleshipAtt,
            MindBender: MindBenderAtt,
            NatureBunny: NatureBunnyAtt,
            Boat: BoatAtt,
            Ship: ShipAtt,
            Amphibian: AmphibianAtt,
            Tridention: TridentionAtt,
            Shark: SharkAtt,
            Puffer: PufferAtt,
            Jelly: JellyAtt,
            Crab: CrabAtt,
            Polytaur: PolytaurAtt,
            Navalon: NavalonAtt,
            DragonEgg: DragonEggAtt,
            BabyDragon: BabyDragonAtt,
            FireDragon: FireDragonAtt,
            Mooni: MooniAtt,
            IceArcher: IceArcherAtt,
            BattleSled: BattleSledAtt,
            IceFortress: IceFortressAtt,
            Gaami: GaamiAtt,
            Hexapod: HexapodAtt,
            Kiton: KitonAtt,
            Phychi: PhychiAtt,
            Raychi: RaychiAtt,
            Shaman: ShamanAtt,
            Exida: ExidaAtt,
            Doomux: DoomuxAtt,
            Centipede: CentipedeAtt,
            Segment: SegmentAtt,
            Dagger: DaggerAtt,
            Cloak: CloakAtt,
            Dinghy: DinghyAtt,
            Pirate: PirateAtt,
            Raft: RaftAtt,
            Scout: ScoutAtt,
            Rammer: RammerAtt,
            Bomber: BomberAtt,
            Juggernaut: JuggernautAtt,
        },
        Defenders: {
            Warrior: WarriorDef,
            Archer: ArcherDef,
            Rider: RiderDef,
            Defender: DefenderDef,
            Swordsman: SwordsmanDef,
            Catapult: CatapultDef,
            Knight: KnightDef,
            Giant: GiantDef,
            Battleship: BattleshipDef,
            MindBender: MindBenderDef,
            NatureBunny: NatureBunnyDef,
            Boat: BoatDef,
            Ship: ShipDef,
            Amphibian: AmphibianDef,
            Tridention: TridentionDef,
            Shark: SharkDef,
            Puffer: PufferDef,
            Jelly: JellyDef,
            Crab: CrabDef,
            Polytaur: PolytaurDef,
            Navalon: NavalonDef,
            DragonEgg: DragonEggDef,
            BabyDragon: BabyDragonDef,
            FireDragon: FireDragonDef,
            Mooni: MooniDef,
            IceArcher: IceArcherDef,
            BattleSled: BattleSledDef,
            IceFortress: IceFortressDef,
            Gaami: GaamiDef,
            Hexapod: HexapodDef,
            Kiton: KitonDef,
            Phychi: PhychiDef,
            Raychi: RaychiDef,
            Shaman: ShamanDef,
            Exida: ExidaDef,
            Doomux: DoomuxDef,
            Centipede: CentipedeDef,
            Segment: SegmentDef,
            Dagger: DaggerDef,
            Cloak: CloakDef,
            Dinghy: DinghyDef,
            Pirate: PirateDef,
            Raft: RaftDef,
            Scout: ScoutDef,
            Rammer: RammerDef,
            Bomber: BomberDef,
            Juggernaut: JuggernautDef,
        },
    };

    const displayIcon = (typeUnit: string, team: string) => {
        return unitImages[team][typeUnit] || SmallSwords;
    };

    const soldierUnitImageStyle = (team: string) => {
        const style = {
            height: "40px",
            width: "30px",
            objectFit: "contain",
            WebkitAppearance: "none",
            marginRight: 5,
            marginLeft: 5,
            borderRadius: 5,
            marginBottom: 5,
            marginTop: 5,
        } as React.CSSProperties;
        if (team === "Defenders") style.transform = "scaleX(-1)";
        return style;
    };

    const makeInvisibleVeteranBonus = (unitType: string) => {
        if (
            [
                "Ship",
                "Boat",
                "Navalon",
                "Giant",
                "MindBender",
                "NatureBunny",
                "Crab",
                "DragonEgg",
                "BabyDragon",
                "FireDragon",
                "Mooni",
                "Gaami",
                "Shaman",
                "Centipede",
                "Segment",
                "Cloak",
                "Dinghy",
                "Battleship",
                "Raft",
                "Scout",
                "Rammer",
                "Bomber",
                "Pirate",
                "Juggernaut",
            ].includes(unitType)
        ) {
            return { display: "none" };
        }
        return { display: "visible" };
    };
    const makeInvisibleShipUnit = (shipUnit: boolean) => {
        return shipUnit ? { display: "visible" } : { display: "none" };
    };
    const makeInvisibleSplashDamage = (unitType: string, team: string) => {
        if (
            (unitType === "FireDragon" && team === "Attackers") ||
            (unitType === "Bomber" && team === "Attackers") ||
            (unitType === "Juggernaut" && team === "Attackers")
        ) {
            return { display: "visible" };
        }
        return { display: "none" };
    };
    const makeInvisibleExplodeDamage = (unitType: string, team: string) => {
        if (
            (unitType === "Doomux" && team === "Attackers") ||
            (unitType === "Raychi" && team === "Attackers")
        ) {
            return { display: "visible" };
        }
        return { display: "none" };
    };
    const makeInvisibleDefenceBonus = (team: string) => {
        return team === "Attackers"
            ? { display: "none" }
            : { display: "visible" };
    };
    const makeInvisibleWallBonus = (team: string, unitType: string) => {
        if (
            team === "Defenders" &&
            [
                "Warrior",
                "Archer",
                "Defender",
                "Knight",
                "Rider",
                "Tridention",
                "Polytaur",
                "IceArcher",
                "Amphibian",
            ].includes(unitType)
        ) {
            return { display: "visible" };
        }
        return { display: "none" };
    };
    const makeInvisibleSafeBonus = (team: string) => {
        return team === "Defenders"
            ? { display: "none" }
            : { display: "visible" };
    };
    const makeInvisibleBoostedBonus = (team: string) => {
        return team === "Defenders"
            ? { display: "none" }
            : { display: "visible" };
    };
    const makeInvisiblePoisonedBonus = (team: string) => {
        return team === "Attackers"
            ? { display: "none" }
            : { display: "visible" };
    };

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    marginBottom: -4,
                }}
            >
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                        src={displayIcon(props.typeUnit, props.team)}
                        alt="Soldier"
                        style={soldierUnitImageStyle(props.team)}
                    />
                    <span>
                        <label
                            htmlFor={props.team + props.id + "HitpointField"}
                        >
                            <input
                                id={props.team + props.id + "HitpointField"}
                                name={props.team + props.id + "HitpointField"}
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                value={healthInputField}
                                onChange={(e) =>
                                    setHealthInputField(
                                        parseInt(e.target.value)
                                    )
                                }
                                onBlur={(e) =>
                                    handleHitpointsChange(e.target.value)
                                }
                                onKeyDown={handleKeyDown}
                                style={{ width: 38 }}
                                maxLength={2}
                                onFocus={handleFocus}
                            />
                        </label>
                    </span>
                    <span style={{ fontWeight: "bold" }}>
                        <ArrowForwardIcon /> {displayHealthAfter()}
                    </span>
                </div>
                <IconButton
                    onClick={() => props.OnDelete(props.id, props.team)}
                    style={{
                        marginRight: "5%",
                        padding: "0",
                        justifyContent: "flex-end",
                    }}
                    disableRipple
                    sx={{ "&:hover": { backgroundColor: "transparent" } }}
                >
                    <CancelPresentationIcon
                        fontSize="large"
                        sx={{ color: pink[500], m: -0.5 }}
                    />
                </IconButton>
            </div>
            <IconButton
                onClick={() => props.OnIncreaseHitpoints(props.id, props.team)}
            >
                <AddBoxIcon color="success" />
            </IconButton>
            <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                    props.OnVeteranBonus(
                        props.id,
                        props.team,
                        props.typeUnit,
                        props.veteran
                    );
                    handleClickVeteranBonus();
                }}
                style={{
                    ...makeInvisibleVeteranBonus(isToggleVisibleTypeUnit),
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.1,
                    color: "#A9A9A9",
                    ...(isToggleOnVeteran && { color: "##ce93d8" }),
                }}
            >
                {isToggleOnVeteran ? <b>vet</b> : "vet"}
            </Button>
            <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                    props.OnShipUnit(
                        props.id,
                        props.team,
                        props.typeUnit,
                        props.shipUnit
                    );
                    handleClickShipUnit();
                }}
                style={{
                    ...makeInvisibleShipUnit(isToggleVisibleShipUnit),
                    ...getSecondaryButtonStyles(),
                }}
                sx={{ marginRight: 0.1 }}
            >
                mx{props.healthMax}
            </Button>
            <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={() => {
                    props.OnSplashDamage(
                        props.id,
                        props.team,
                        props.typeUnit,
                        props.splashDamage
                    );
                    handleClickSplashDamage();
                }}
                style={{
                    ...makeInvisibleSplashDamage(
                        isToggleVisibleTypeUnit,
                        isToggleVisibleTeam
                    ),
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.1,
                    color: "#A9A9A9",
                    ...(isToggleOnSplashDamage && { color: "##ce93d8" }),
                }}
            >
                {isToggleOnSplashDamage ? <b>splsh</b> : "splsh"}
            </Button>
            <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={() => {
                    props.OnExplodeDamage(
                        props.id,
                        props.team,
                        props.typeUnit,
                        props.explodeDamage
                    );
                    handleClickExplodeDamage();
                }}
                style={{
                    ...makeInvisibleExplodeDamage(
                        isToggleVisibleTypeUnit,
                        isToggleVisibleTeam
                    ),
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.1,
                    color: "#A9A9A9",
                    ...(isToggleOnExplodeDamage && { color: "##ce93d8" }),
                }}
            >
                {isToggleOnExplodeDamage ? <b>xpld</b> : "xpld"}
            </Button>
            <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                    props.OnDefenceBonus(
                        props.id,
                        props.team,
                        props.typeUnit,
                        props.defenceBonus
                    );
                    handleClickDefenceBonus();
                }}
                style={{
                    ...makeInvisibleDefenceBonus(isToggleVisibleTeam),
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.25,
                    color: "#A9A9A9",
                    ...(isToggleOnDefence && { color: "##ce93d8" }),
                }}
            >
                {isToggleOnDefence ? <b>def</b> : "def"}
            </Button>
            <br />
            <IconButton
                onClick={() => props.OnDecreaseHitpoints(props.id, props.team)}
            >
                <IndeterminateCheckBoxIcon sx={{ color: pink[500] }} />
            </IconButton>
            <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                    props.OnWallBonus(
                        props.id,
                        props.team,
                        props.typeUnit,
                        props.wallBonus
                    );
                    handleClickWallBonus();
                }}
                style={{
                    ...makeInvisibleWallBonus(
                        isToggleVisibleTeam,
                        isToggleVisibleTypeUnit
                    ),
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.1,
                    color: "#A9A9A9",
                    ...(isToggleOnWall && { color: "##ce93d8" }),
                }}
            >
                {isToggleOnWall ? <b>wall</b> : "wall"}
            </Button>
            <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                    props.OnPoisonedBonus(
                        props.id,
                        props.team,
                        props.typeUnit,
                        props.poisonedBonus
                    );
                    handleClickPoisonedBonus();
                }}
                style={{
                    ...makeInvisiblePoisonedBonus(isToggleVisibleTeam),
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.25,
                    color: isToggleOnPoisoned
                        ? "##CE93D8"
                        : isBecamePoisoned
                          ? "#008000"
                          : "#A9A9A9",
                }}
            >
                {isToggleOnPoisoned ? <b>pois</b> : "pois"}
            </Button>
            <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                    props.OnSafeBonus(
                        props.id,
                        props.team,
                        props.typeUnit,
                        props.safeBonus
                    );
                    handleClickSafeBonus();
                }}
                style={{
                    ...makeInvisibleSafeBonus(isToggleVisibleTeam),
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.1,
                    color: "#A9A9A9",
                    ...(isToggleOnSafe && { color: "##ce93d8" }),
                }}
            >
                {isToggleOnSafe ? <b>safe</b> : "safe"}
            </Button>
            <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                    props.OnBoostedBonus(
                        props.id,
                        props.team,
                        props.typeUnit,
                        props.boostedBonus
                    );
                    handleClickBoostedBonus();
                }}
                style={{
                    ...makeInvisibleBoostedBonus(isToggleVisibleTeam),
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.25,
                    color: "#A9A9A9",
                    ...(isToggleOnBoosted && { color: "##ce93d8" }),
                }}
            >
                {isToggleOnBoosted ? <b>bst</b> : "bst"}
            </Button>
        </div>
    );
};
export default SoldierUnitAsRender;
