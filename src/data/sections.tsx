import { type ReactElement, useState } from "react";
import { Section } from "@/components/templates";
import { FullWidthLayout } from "@/components/layouts";
import { Heading } from "@/components/molecules/Heading";
import { Paragraph } from "@/components/molecules/Paragraph";
import { MathBlock } from "@/components/molecules/MathBlock";
import { Glossary } from "@/components/annotations/Glossary";
import { UnitCircleVisualization } from "@/components/visualizations/UnitCircleVisualization";
import { InlineStepper } from "@/components/atoms/InlineStepper";

/**
 * Unit Circle Lesson Content
 */
const UnitCircleLesson = () => {
    const [phase, setPhase] = useState(45);

    return (
        <>
            {/* Title */}
            <Section id="title" padding="lg">
                <Heading level={1}>The Unit Circle</Heading>
                <Heading level={2} className="text-muted-foreground font-normal mt-1">
                    Trigonometry Review
                </Heading>
            </Section>

            {/* Introduction */}
            <Section id="introduction">
                <Paragraph>
                    We saw in the previous section that the{" "}
                    <Glossary
                        term="unit circle"
                        definition="A circle with a radius of exactly one unit, centered at the origin (0,0) of a coordinate system."
                        relatedTerms={["radius", "origin", "coordinate system"]}
                    />{" "}
                    is a circle with a radius of one, and{" "}
                    <Glossary
                        term="sine"
                        definition="A trigonometric function that gives the y-coordinate of a point on the unit circle for a given angle."
                        color="#22c55e"
                        bgColor="rgba(34, 197, 94, 0.1)"
                        relatedTerms={["cosine", "tangent"]}
                    />{" "}
                    and{" "}
                    <Glossary
                        term="cosine"
                        definition="A trigonometric function that gives the x-coordinate of a point on the unit circle for a given angle."
                        color="#ef4444"
                        bgColor="rgba(239, 68, 68, 0.1)"
                        relatedTerms={["sine", "tangent"]}
                    />{" "}
                    are defined in terms of periodic movement around the unit circle.
                </Paragraph>
            </Section>

            {/* Phase explanation */}
            <Section id="phase-explanation">
                <Paragraph>
                    We measure distances around the unit circle in terms of{" "}
                    <Glossary
                        term="phase"
                        definition="The angle between a rotating line and the x-axis, measured in degrees or radians."
                        color="#9333ea"
                        bgColor="rgba(147, 51, 234, 0.1)"
                        relatedTerms={["angle", "degrees", "radians"]}
                    />
                    . The phase can be thought of as the angle between our rotating line and the x-axis.
                    We can express the phase in either{" "}
                    <Glossary
                        term="degrees"
                        definition="A unit of angle measurement where a full circle is divided into 360 equal parts."
                        relatedTerms={["radians", "angle"]}
                    />{" "}
                    or{" "}
                    <Glossary
                        term="radians"
                        definition="A unit of angle measurement based on the radius of a circle. One radian is the angle where the arc length equals the radius. A full circle is 2π radians."
                        relatedTerms={["degrees", "pi"]}
                    />
                    .<sup>1</sup>
                </Paragraph>
            </Section>

            {/* Coordinates explanation */}
            <Section id="coordinates-explanation">
                <Paragraph>
                    For any given point on the unit circle, the{" "}
                    <span style={{ color: "#22c55e", fontWeight: 500 }}>y-coordinate</span>{" "}
                    of the point is given by the{" "}
                    <span style={{ color: "#22c55e", fontWeight: 500 }}>sine</span>{" "}
                    of the phase, and the{" "}
                    <span style={{ color: "#ef4444", fontWeight: 500 }}>x-coordinate</span>{" "}
                    is given by{" "}
                    <span style={{ color: "#ef4444", fontWeight: 500 }}>cosine</span>{" "}
                    of the phase. You can fiddle with the slider below to better understand
                    the relationship between the unit circle, sine, cosine, and phase.
                </Paragraph>
            </Section>

            {/* Interactive Figure */}
            <Section id="figure-1" padding="lg">
                <div className="max-w-2xl mx-auto">
                    <p className="text-sm text-muted-foreground mb-2 text-center font-medium">
                        Figure 1. The Unit Circle
                    </p>
                    <UnitCircleVisualization
                        phase={phase}
                        onPhaseChange={setPhase}
                    />
                </div>
            </Section>

            {/* SOHCAHTOA Section */}
            <Section id="sohcahtoa">
                <Paragraph>
                    If you're willing to recall some high school trigonometry, you'll probably
                    remember that sine and cosine were defined using the mnemonic{" "}
                    <strong>SOHCAHTOA</strong>,
                </Paragraph>

                <ul className="list-none space-y-2 my-4 pl-4">
                    <li>
                        <span style={{ color: "#22c55e", fontWeight: 600 }}>S</span>ine is{" "}
                        <span style={{ color: "#22c55e", fontWeight: 600 }}>O</span>pposite over{" "}
                        <span style={{ color: "#3b82f6", fontWeight: 600 }}>H</span>ypotenuse
                    </li>
                    <li>
                        <span style={{ color: "#ef4444", fontWeight: 600 }}>C</span>osine is{" "}
                        <span style={{ color: "#ef4444", fontWeight: 600 }}>A</span>djacent over{" "}
                        <span style={{ color: "#3b82f6", fontWeight: 600 }}>H</span>ypotenuse
                    </li>
                    <li>
                        <span style={{ fontWeight: 600 }}>T</span>angent is{" "}
                        <span style={{ color: "#22c55e", fontWeight: 600 }}>O</span>pposite over{" "}
                        <span style={{ color: "#ef4444", fontWeight: 600 }}>A</span>djacent
                    </li>
                </ul>
            </Section>

            {/* Lines explanation */}
            <Section id="lines-explanation">
                <Paragraph>
                    Recall further that{" "}
                    <span style={{ color: "#22c55e", fontWeight: 500 }}>opposite</span>{" "}
                    refers to the length of the vertical or{" "}
                    <span style={{ color: "#22c55e", fontWeight: 500 }}>green line</span>, and{" "}
                    <span style={{ color: "#ef4444", fontWeight: 500 }}>adjacent</span>{" "}
                    refers to the length of the horizontal or{" "}
                    <span style={{ color: "#ef4444", fontWeight: 500 }}>red line</span>.
                </Paragraph>
            </Section>

            {/* Equations */}
            <Section id="equations">
                <MathBlock equation="\sin(\text{phase}) = \frac{\color{green}\text{opposite}}{\color{blue}\text{hypotenuse}}" />
                <MathBlock equation="\cos(\text{phase}) = \frac{\color{red}\text{adjacent}}{\color{blue}\text{hypotenuse}}" />
            </Section>

            {/* Hypotenuse = 1 explanation */}
            <Section id="hypotenuse-explanation">
                <Paragraph>
                    In the case of the unit circle, the length of the{" "}
                    <span style={{ color: "#3b82f6", fontWeight: 500 }}>hypotenuse</span>{" "}
                    (<span style={{ color: "#3b82f6", fontWeight: 500 }}>blue line</span>) is always equal to{" "}
                    <strong>one</strong>, making our equations pretty trivial.
                </Paragraph>
            </Section>

            {/* Simplified equations */}
            <Section id="simplified-equations">
                <MathBlock equation="\sin(\text{phase}) = \frac{\text{opposite}}{1} = \text{opposite}" />
                <MathBlock equation="\cos(\text{phase}) = \frac{\text{adjacent}}{1} = \text{adjacent}" />
            </Section>

            {/* Footnote */}
            <Section id="footnote" padding="lg">
                <div className="border-t border-border pt-4 mt-4">
                    <p className="text-sm text-muted-foreground">
                        <sup>1</sup> There are 360 degrees in a circle, and 2π radians.
                        Radians are a much purer way to measure distances around the circle.
                        We find it normal to think of a circle as containing 360 degrees,
                        but this is an Earth-centric, historical, and non-universal notion.
                        Humans have settled on the number 360 because it's nicely divisible,
                        and happens to be quite close to the number of days in a year.
                        When our alien overlords arrive from a different solar system,
                        they'll understand radians but not degrees because radians are
                        defined purely in terms of distances around the unit-circle.
                    </p>
                </div>
            </Section>
        </>
    );
};

export const sections: ReactElement[] = [
    <FullWidthLayout key="unit-circle-lesson" maxWidth="xl">
        <UnitCircleLesson />
    </FullWidthLayout>
];
