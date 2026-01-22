import { useState } from 'react';
import { Mafs, Coordinates, Circle, Line, Point, Text, vec } from 'mafs';
import { Slider } from '@/components/atoms/ui/slider';

interface UnitCircleVisualizationProps {
    /** Controlled phase value in degrees (0-360) */
    phase?: number;
    /** Callback when phase changes */
    onPhaseChange?: (phase: number) => void;
}

/**
 * Interactive Unit Circle Visualization
 *
 * Shows:
 * - Unit circle (radius = 1)
 * - Rotating point based on phase
 * - Sine (green/vertical), Cosine (red/horizontal), Hypotenuse (blue)
 * - Real-time values display
 * - Phase slider control
 */
export const UnitCircleVisualization: React.FC<UnitCircleVisualizationProps> = ({
    phase: controlledPhase,
    onPhaseChange,
}) => {
    const [internalPhase, setInternalPhase] = useState(45);

    const isControlled = controlledPhase !== undefined;
    const phase = isControlled ? controlledPhase : internalPhase;

    const handlePhaseChange = (newPhase: number) => {
        if (!isControlled) {
            setInternalPhase(newPhase);
        }
        onPhaseChange?.(newPhase);
    };

    // Convert degrees to radians
    const phaseRad = (phase * Math.PI) / 180;

    // Calculate point on circle
    const x = Math.cos(phaseRad);
    const y = Math.sin(phaseRad);

    // Format display values
    const sinValue = y.toFixed(3);
    const cosValue = x.toFixed(3);
    const radians = (phase * Math.PI / 180).toFixed(2);

    return (
        <div className="w-full">
            <div className="rounded-xl overflow-hidden border border-border bg-white">
                <Mafs
                    height={400}
                    viewBox={{ x: [-1.8, 1.8], y: [-1.8, 1.8] }}
                    preserveAspectRatio="contain"
                >
                    <Coordinates.Cartesian
                        xAxis={{ lines: 0.5 }}
                        yAxis={{ lines: 0.5 }}
                    />

                    {/* Unit Circle */}
                    <Circle
                        center={[0, 0]}
                        radius={1}
                        strokeStyle="solid"
                        strokeOpacity={0.6}
                        fillOpacity={0}
                        color="#888"
                    />

                    {/* Cosine line (Adjacent - Red/Horizontal) */}
                    <Line.Segment
                        point1={[0, 0]}
                        point2={[x, 0]}
                        color="#ef4444"
                        weight={4}
                    />

                    {/* Sine line (Opposite - Green/Vertical) */}
                    <Line.Segment
                        point1={[x, 0]}
                        point2={[x, y]}
                        color="#22c55e"
                        weight={4}
                    />

                    {/* Hypotenuse (Blue) */}
                    <Line.Segment
                        point1={[0, 0]}
                        point2={[x, y]}
                        color="#3b82f6"
                        weight={3}
                    />

                    {/* Arc showing the angle */}
                    {phase > 0 && (
                        <Circle
                            center={[0, 0]}
                            radius={0.25}
                            strokeStyle="solid"
                            color="#9333ea"
                            weight={2}
                            fillOpacity={0.1}
                        />
                    )}

                    {/* Point on circle */}
                    <Point
                        x={x}
                        y={y}
                        color="#3b82f6"
                    />

                    {/* Origin point */}
                    <Point
                        x={0}
                        y={0}
                        color="#666"
                    />

                    {/* Labels */}
                    <Text
                        x={x / 2}
                        y={-0.15}
                        size={14}
                        color="#ef4444"
                    >
                        cos
                    </Text>

                    <Text
                        x={x + 0.15}
                        y={y / 2}
                        size={14}
                        color="#22c55e"
                    >
                        sin
                    </Text>

                    {/* Coordinate display near point */}
                    <Text
                        x={x + (x >= 0 ? 0.2 : -0.35)}
                        y={y + (y >= 0 ? 0.15 : -0.15)}
                        size={12}
                        color="#374151"
                    >
                        ({cosValue}, {sinValue})
                    </Text>
                </Mafs>
            </div>

            {/* Controls and Values */}
            <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-medium text-muted-foreground min-w-[50px]">Phase</span>
                    <Slider
                        value={[phase]}
                        onValueChange={(values) => handlePhaseChange(values[0])}
                        min={0}
                        max={360}
                        step={1}
                        className="flex-1"
                    />
                    <span className="text-sm font-mono min-w-[80px] text-right">
                        {phase}° ({radians}π)
                    </span>
                </div>

                {/* Value Display */}
                <div className="flex gap-6 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#22c55e]"></span>
                        <span className="text-muted-foreground">sin(θ) =</span>
                        <span className="font-mono font-medium">{sinValue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#ef4444]"></span>
                        <span className="text-muted-foreground">cos(θ) =</span>
                        <span className="font-mono font-medium">{cosValue}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnitCircleVisualization;
