import styled from 'react-emotion';
import { keys, times, mergeAll } from 'ramda';
import { planetPaths } from '../../settings';

const FADE_TRANSITION_TIME = 80;

// We want the planets to leave the screen bottom first.
// We'll use the n-th child to target them
const numberOfPlanets = keys(planetPaths).length;
const childSelectors = mergeAll(
    times(
        i => ({
            [`.Home__navigation > *:nth-child(${numberOfPlanets - i}) a`]: {
                transitionDelay: `${FADE_TRANSITION_TIME * i * 0.6}ms`
            }
        }),
        numberOfPlanets
    )
);

export const Container = styled('div')({
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '.transition-exit-active &': {
        '.Home__logo': {
            opacity: 0,
            transition: `opacity ${FADE_TRANSITION_TIME}ms`
        },
        '.Home__navigation > * a': {
            opacity: 0,
            transform: 'translateY(200px)',
            transition: `transform 320ms ease-in, opacity 520ms`
        },
        ...childSelectors
    }
});
