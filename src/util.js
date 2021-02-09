//STYLES AND ANIMATION
import styled from 'styled-components';
import { motion } from 'framer-motion';

//RATING STAR IMG
import star from './img/yellow_star.png';
//VISION ICONS
import anemo from './img/anemo.png';
import cryo from './img/cryo.png';
import dendro from './img/dendro.png';
import electro from './img/electro.png';
import geo from './img/geo.png';
import hydro from './img/hydro.png';
import pyro from './img/pyro.png';
//MATERIALS ICONS
import dvalinsClaw from './img/dvalins_claw.png';
import dvalinsPlume from './img/dvalins_plume.png';
import dvalinsSigh from './img/dvalins_sigh.png';
import ringOfBoreas from './img/ring_of_boreas.png';
import shadowOfTheWarrior from './img/shadow_of_the_warrior.png';
import shardOfAFoulLegacy from './img/shard_of_a_foul_legacy.png';
import spiritLocketOfBoreas from './img/spirit_locket_of_boreas.png';
import tailOfBoreas from './img/tail_of_boreas.png';
import tuskOfMonocerosCaeli from './img/tusk_of_monoceros_caeli.png';
import hurricaneSeed from './img/hurricane_seed.png';
import hoarfrostCore from './img/hoarfrost_core.png';
import lightningPrism from './img/lightning_prism.png';
import basaltPillar from './img/basalt_pillar.png';
import cleansingHeart from './img/cleansing_heart.png';
import everflameSeed from './img/everflame_seed.png';
import vtSliver from './img/vt_sliver.png';
import vtFragment from './img/vt_fragment.png';
import vtChunk from './img/vt_chunk.png';
import vtGemstone from './img/vt_gemstone.png';
import sjSliver from './img/sj_sliver.png';
import sjFragment from './img/sj_fragment.png';
import sjChunk from './img/sj_chunk.png';
import sjGemstone from './img/sj_gemstone.png';
import vaSliver from './img/va_sliver.png';
import vaFragment from './img/va_fragment.png';
import vaChunk from './img/va_chunk.png';
import vaGemstone from './img/va_gemstone.png';
import ptSliver from './img/pt_sliver.png';
import ptFragment from './img/pt_fragment.png';
import ptChunk from './img/pt_chunk.png';
import ptGemstone from './img/pt_gemstone.png';
import vlSliver from './img/vl_sliver.png';
import vlFragment from './img/vl_fragment.png';
import vlChunk from './img/vl_chunk.png';
import vlGemstone from './img/vl_gemstone.png';
import aaSliver from './img/aa_sliver.png';
import aaFragment from './img/aa_fragment.png';
import aaChunk from './img/aa_chunk.png';
import aaGemstone from './img/aa_gemstone.png';
import bdSliver from './img/bd_sliver.png';
import bdFragment from './img/bd_fragment.png';
import bdChunk from './img/bd_chunk.png';
import bdGemstone from './img/bd_gemstone.png';
import slime from './img/slime_concentrate.png';
import hilichurlMasks from './img/stained_mask.png';
import hilichurlArrowheads from './img/weathered_arrowhead.png';
import samachurlScrolls from './img/forbidden_curse_scroll.png';
import treasureHoardersInsignia from './img/golden_raven_insignia.png';
import fatuiInsignias from './img/lieutenants_insignia.png';
import whopperflowerNectar from './img/energy_nectar.png';
import hilichurlHorns from './img/black_crystal_horn.png';
import leyLine from './img/ley_line_sprout.png';
import boneShards from './img/fossilized_bone_shard.png';
import mistGrass from './img/mist_grass_wick.png';
import fatuiKnives from './img/inspectors_sacrificial_knife.png';
import chaosParts from './img/chaos_core.png';
import wanderersAdvice from './img/wanderers_advice.png';
import adventurersExperience from './img/adventurers_experience.png';
import herosWit from './img/heros_wit.png';
import enhancementOre from './img/enhancement_ore.png';
import fineEnhancementOre from './img/fine_enhancement_ore.png';
import mysticEnhancementOre from './img/mystic_enhancement_ore.png';
import callaLily from './img/calla_lily.png';
import cecilia from './img/cecilia.png';
import dandelionSeed from './img/dandelion_seed.png';
import philanemoMushroom from './img/philanemo_mushroom.png';
import smallLampGrass from './img/small_lamp_grass.png';
import valberry from './img/valberry.png';
import windwheelAster from './img/windwheel_aster.png';
import wolfhook from './img/wolfhook.png';
import corLapis from './img/cor_lapis.png';
import glazeLily from './img/glaze_lily.png';
import jueyunChili from './img/jueyun_chili.png';
import noctilucousJade from './img/noctilucous_jade.png';
import qingxin from './img/qingxin.png';
import silkFlower from './img/silk_flower.png';
import starconch from './img/starconch.png';
import violetgrass from './img/violetgrass.png';
import freedom from './img/book_freedom.png';
import resistance from './img/book_resistance.png';
import ballad from './img/book_ballad.png';
import prosperity from './img/book_prosperity.png';
import diligence from './img/book_diligence.png';
import bookGold from './img/book_gold.png';


//MATERIALS TO IMG CONVERSION
export const materialsToImageConverter = (material) => {
    switch (material) {
        case "dvalin's-claw":
            return dvalinsClaw;
        case "dvalin's-plume":
            return dvalinsPlume;
        case "dvalin's-sigh":
            return dvalinsSigh;
        case "ring-of-boreas":
            return ringOfBoreas;
        case "shadow-of-the-warrior":
            return shadowOfTheWarrior;
        case "shard-of-a-foul-legacy":
            return shardOfAFoulLegacy;
        case "spirit-locket-of-boreas":
            return spiritLocketOfBoreas;
        case "tail-of-boreas":
            return tailOfBoreas;
        case "tusk-of-monoceros-caeli":
            return tuskOfMonocerosCaeli;
        case "hurricane-seed":
            return hurricaneSeed;
        case "hoarfrost-core":
            return hoarfrostCore;
        case "lightning-prism":
            return lightningPrism;
        case "basalt-pillar":
            return basaltPillar;
        case "cleansing-heart":
            return cleansingHeart;
        case "everflame-seed":
            return everflameSeed;
        case "vayuda-turquoise-sliver":
            return vtSliver;
        case "vayuda-turquoise-fragment":
            return vtFragment;
        case "vayuda-turquoise-chunk":
            return vtChunk;
        case "vayuda-turquoise-gemstone":
            return vtGemstone;
        case "shivada-jade-sliver":
            return sjSliver;
        case "shivada-jade-fragment":
            return sjFragment;
        case "shivada-jade-chunk":
            return sjChunk;
        case "shivada-jade-gemstone":
            return sjGemstone;
        case "vajrada-amethyst-sliver":
            return vaSliver;
        case "vajrada-amethyst-fragment":
            return vaFragment;
        case "vajrada-amethyst-chunk":
            return vaChunk;
        case "vajrada-amethyst-gemstone":
            return vaGemstone;
        case "prithiva-topaz-sliver":
            return ptSliver;
        case "prithiva-topaz-fragment":
            return ptFragment;
        case "prithiva-topaz-chunk":
            return ptChunk;
        case "prithiva-topaz-gemstone":
            return ptGemstone;
        case "varunada-lazurite-sliver":
            return vlSliver;
        case "varunada-lazurite-fragment":
            return vlFragment;
        case "varunada-lazurite-chunk":
            return vlChunk;
        case "varunada-lazurite-gemstone":
            return vlGemstone;
        case "agnidus-agate-sliver":
            return aaSliver;
        case "agnidus-agate-fragment":
            return aaFragment;
        case "agnidus-agate-chunk":
            return aaChunk;
        case "agnidus-agate-gemstone":
            return aaGemstone;
        case "brilliant-diamond-sliver":
            return bdSliver;
        case "brilliant-diamond-fragment":
            return bdFragment;
        case "brilliant-diamond-chunk":
            return bdChunk;
        case "brilliant-diamond-gemstone":
            return bdGemstone;
        case "slime":
            return slime;
        case "hilichurl-masks":
            return hilichurlMasks;
        case "hilichurl-arrowheads":
            return hilichurlArrowheads;
        case "samachurl-scrolls":
            return samachurlScrolls;
        case "treasure-hoarder-insignias":
            return treasureHoardersInsignia;
        case "fatui-insignias":
            return fatuiInsignias;
        case "whopperflower-nectar":
            return whopperflowerNectar;
        case "hilichurl-horns":
            return hilichurlHorns;
        case "ley-line":
            return leyLine;
        case "bone-shards":
            return boneShards;
        case "mist-grass":
            return mistGrass;
        case "fatui-knives":
            return fatuiKnives;
        case "chaos-parts":
            return chaosParts;
        case "wanderer's-advice":
            return wanderersAdvice;
        case "adventurer's-experience":
            return adventurersExperience;
        case "hero's-wit":
            return herosWit;
        case "enhancement-ore":
            return enhancementOre;
        case "fine-enhancement-ore":
            return fineEnhancementOre;
        case "mystic-enhancement-ore":
            return mysticEnhancementOre;
        case "calla-lily":
            return callaLily;
        case "cecilia":
            return cecilia;
        case "dandelion-seed":
            return dandelionSeed;
        case "philanemo-mushroom":
            return philanemoMushroom;
        case "small-lamp-grass":
            return smallLampGrass;
        case "valberry":
            return valberry;
        case "windwheel-aster":
            return windwheelAster;
        case "wolfhook":
            return wolfhook;
        case "cor-lapis":
            return corLapis;
        case "glaze-lily":
            return glazeLily;
        case "jueyun-chili":
            return jueyunChili;
        case "noctilucous-jade":
            return noctilucousJade;
        case "qingxin":
            return qingxin;
        case "silk-flower":
            return silkFlower;
        case "starconch":
            return starconch;
        case "violetgrass":
            return violetgrass;
        case "freedom":
            return freedom;
        case "resistance":
            return resistance;
        case "ballad":
            return ballad;
        case "prosperity":
            return prosperity;
        case "diligence":
            return diligence;
        case "gold":
            return bookGold;
        default:
            return "image missing";
    }
}

//RATING NUMBER TO STARS CONVERSION
export const visionTextToImageConverter = (vision) => {
    switch (vision) {
        case 'Anemo':
            return anemo;
        case 'Cryo':
            return cryo;
        case 'Dendro':
            return dendro;
        case 'Electro':
            return electro;
        case 'Geo':
            return geo;
        case 'Hydro':
            return hydro;
        case 'Pyro':
            return pyro;
        default:
            return 'image missing';
    }
}

//TITLE CASE
export const titleCase = (word) => (word[0].toUpperCase() + word.slice(1));

//STRING CONVERSION
export const stringToDisplay = (incoming_string) => {
    if (incoming_string === 'traveler-anemo') {
        return 'TravelerA'
    } else if (incoming_string === 'traveler-geo') {
        return 'TravelerG'
    } else {
        return incoming_string.split(/-|_/).map(word => titleCase(word)).join(' ');
    }
}

//RATING CONVERSION
export const rarityConversion = (key, value) => {
    if (key === 'rarity' || key === 'max_rarity') {
        
        const totalStars = []
        
        for (let i = 1; i <= value; i++){
            totalStars.push(star)
        }
        return (
            <div className='starsContainer'>
                {totalStars.map((item, i) => <img src={item} alt ='star' key={i}></img>)}
            </div>
        );
    } else {
        return value;
    }
}


//REUSABLE STYLES
export const dataContainerStyles = styled(motion.div)`
    width: 80%;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 2rem;
    background: rgb(149,149,149); /* Old browsers */
    background: -moz-linear-gradient(-45deg, rgba(149,149,149,1) 0%, rgba(13,13,13,1) 46%, rgba(1,1,1,1) 50%, rgba(10,10,10,1) 53%, rgba(78,78,78,1) 76%, rgba(56,56,56,1) 87%, rgba(27,27,27,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg, rgba(149,149,149,1) 0%,rgba(13,13,13,1) 46%,rgba(1,1,1,1) 50%,rgba(10,10,10,1) 53%,rgba(78,78,78,1) 76%,rgba(56,56,56,1) 87%,rgba(27,27,27,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg, rgba(149,149,149,0.5) 0%,rgba(13,13,13,0.5) 46%,rgba(1,1,1,0.5) 50%,rgba(10,10,10,0.5) 53%,rgba(78,78,78,0.5) 76%,rgba(56,56,56,0.5) 87%,rgba(27,27,27,0.5) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#959595', endColorstr='#1b1b1b',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    box-shadow: 2px 2px 50px rgba(69, 69, 69, 0.5);
    backdrop-filter: blur(15px);
`
    