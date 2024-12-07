import {motion, useScroll, useTransform} from 'framer-motion';
import {useEffect, useState} from 'react';
import {getClosestGradient} from '../utils/gradientUtils';
import {rgbToString} from '../utils/colorUtils';
import {CelestialBody} from './CelestialBody';
import {Color} from '../utils/types';

interface SkyProps {
    children: React.ReactNode;
}

export function Sky({children}: SkyProps) {
    const {scrollYProgress} = useScroll();
    const [currentGradient, setCurrentGradient] = useState<Color[]>(getClosestGradient(12));

    useEffect(() => {
        return scrollYProgress.onChange(value => {
            const hour = 12 + (value * 12);
            setCurrentGradient(getClosestGradient(hour));
        });
    }, [scrollYProgress]);

    const celestialY = useTransform(
        scrollYProgress,
        [0, 1],
        ['0vh', '100%']
    );

    const celestialScale = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [1, 1.5, 2.5]
    );

    return (
        <div className="relative min-h-screen overflow-hidden">
            <motion.div
                className="fixed inset-0 transition-colors duration-1000"
                style={{
                    background: `linear-gradient(180deg, 
            ${rgbToString(currentGradient[0].r, currentGradient[0].g, currentGradient[0].b)},
            ${rgbToString(currentGradient[1].r, currentGradient[1].g, currentGradient[1].b)},
            ${rgbToString(currentGradient[2].r, currentGradient[2].g, currentGradient[2].b)},
            ${rgbToString(currentGradient[3].r, currentGradient[3].g, currentGradient[3].b)}
          )`
                }}
            />

            <CelestialBody
                y={celestialY}
                scale={celestialScale}
                progress={scrollYProgress}
            />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}