import {motion, MotionValue} from 'framer-motion';
import {useCelestialStyles} from './useCelestialStyles';
import {CelestialCore} from './CelestialCore';
import {CelestialGlow} from './CelestialGlow';

interface CelestialBodyProps {
    y: MotionValue<string>;
    scale: MotionValue<number>;
    progress: MotionValue<number>;
}

export function CelestialBody({y, scale, progress}: CelestialBodyProps) {
    const {celestialColor, glowOpacity, glowSize} = useCelestialStyles(progress);

    return (
        <motion.div
            className="fixed left-1/2 pointer-events-none will-change-transform"
            style={{y, scale, x: '-50%'}}
        >
            <div className="relative w-[40vw] aspect-square">
                <div className="absolute inset-0 transform-gpu">
                    <CelestialGlow
                        celestialColor={celestialColor}
                        glowOpacity={glowOpacity}
                        glowSize={glowSize}
                    />
                </div>
                <CelestialCore celestialColor={celestialColor}/>
            </div>
        </motion.div>
    );
}