import bball from './images/planets/bball.gif';
import behind from './images/planets/behind.gif';
import jamcentral from './images/planets/jamcentral.gif';
import jump from './images/planets/jump.gif';
import junior from './images/planets/junior.gif';
import lineup from './images/planets/lineup.gif';
import lunartunes from './images/planets/lunartunes.gif';
import pressbox from './images/planets/pressbox.gif';
import sitemap from './images/planets/sitemap.gif';
import souvenirs from './images/planets/souvenirs.gif';
import studiostore from './images/planets/studiostore.gif';
import bballActive from './images/planets/bball--active.gif';
import jamcentralActive from './images/planets/jamcentral--active.gif';
import jumpActive from './images/planets/jump--active.gif';
import lunartunesActive from './images/planets/lunartunes--active.gif';
import pressboxActive from './images/planets/pressbox--active.gif';
import sitemapActive from './images/planets/sitemap--active.gif';
// TODO : Add these paths
import behindActive from './images/planets/behind.gif';
import juniorActive from './images/planets/junior.gif';
import lineupActive from './images/planets/lineup.gif';
import souvenirsActive from './images/planets/souvenirs.gif';
import studiostoreActive from './images/planets/studiostore.gif';

export const colors = {
    secondary: '#fefe08'
};

export const planetPaths = [
    ['Press Box Shuttle', pressbox, pressboxActive],
    ['Jam Central', jamcentral, jamcentralActive],
    ['Planet B-Ball', bball, bballActive],
    ['Lunar Tunes', lunartunes, lunartunesActive],
    ['The Lineup', lineup, lineupActive],
    ['Jump Station', jump, jumpActive],
    ['Junior Jam', junior, juniorActive],
    ['Warner Studio Store', studiostore, studiostoreActive],
    ['Stellar Souvenirs', souvenirs, souvenirsActive],
    ['Site Map', sitemap, sitemapActive],
    ['Behind the Jam', behind, behindActive]
];

export const planetWiggleMap = {
    0: [60, 40],
    1: [50, 10],
    2: [40, -0],
    3: [20, 30],
    4: [-20, 30],
    5: [50, 15],
    6: [-20, 20],
    7: [20, 20],
    8: [60, -20],
    9: [50, 20],
    10: [50, 0]
};
