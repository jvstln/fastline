"use client";
import { ListChecksIcon, ShieldCheckIcon, ShieldPlusIcon } from "lucide-react";
import { motion, stagger } from "motion/react";
import { appearVariants, appearViewport, MotionImage } from "@/lib/motion.util";
import { cn } from "@/lib/utils";
import accessControlAndMobilePatrolsImage from "@/public/images/access-control-and-mobile-patrols.webp";
import securityGuardServicesImage from "@/public/images/security-guard-services.webp";
import securityGuardTrainingAndCertificationImage from "@/public/images/security-guard-training-and-certification.webp";
import securityRiskAssessmentAndStrategyPlanningImage from "@/public/images/security-risk-assessment-and-strategy-planning.webp";
import { SectionHeading } from "../hero";
import {
  GraduateShieldIcon,
  LockedScanIcon,
  SecurityGuardIcon,
  TriangleSearchIcon,
} from "../icons";
import { Badge } from "../ui/badge";

const operations = [
  {
    title: "Security Guard Deployment",
    content:
      "Professionally trained and licensed guards are deployed to residential, commercial, and industrial sites. Our personnel are disciplined, alert, and equipped to handle routine security duties as well as high-risk situations with confidence.",
    icon: SecurityGuardIcon,
    image: securityGuardServicesImage,
  },
  {
    title: "Access Control & Mobile Patrols",
    content:
      "We manage entry and exit points while conducting routine and random patrols to deter unauthorized access and potential threats. Our teams monitor movement, enforce site protocols, and maintain a visible security presence to ensure continuous protection and rapid response across secured locations.",
    icon: LockedScanIcon,
    image: accessControlAndMobilePatrolsImage,
  },
  {
    title: "Security Guard Training & Certification",
    content:
      "Our expert personnel offers industry-focused training that equips personnel and client teams with the knowledge and skills to act decisively in emergencies and uphold safety standards. Key programs include Safety Training, Security Guard Training, and IED Awareness & Emergency Drills.",
    icon: GraduateShieldIcon,
    image: securityGuardTrainingAndCertificationImage,
  },
];

const riskSolutions = [
  {
    title: "Vulnerability & Threat Assessments",
    content:
      "We evaluate your facility, operations, and surroundings to identify security gaps and safety risks. Each assessment delivers practical, prioritized recommendations to strengthen your protection strategy.",
    icon: TriangleSearchIcon,
  },
  {
    title: "Security Planning & Advisory",
    content:
      "Based on assessment findings, we develop tailored security plans outlining recommended controls, personnel requirements, and response protocols aligned with your risk profile.",
    icon: ShieldPlusIcon,
  },
  {
    title: "Compliance & Risk Mitigation Support",
    content:
      "Our team supports the implementation of recommended measures to reduce risk exposure and align security practices with industry and regulatory expectations.",
    icon: ListChecksIcon,
  },
];

export const SecurityOperations = () => {
  return (
    <>
      <section className="overflow-hidden" id={"security-operations"}>
        <div className="container mx-auto">
          <SectionHeading
            title={
              <>
                <span className="text-primary">Protection</span> You Can Rely On
              </>
            }
            subtitle="From trained guards to strict access control and security guard training, we deliver dependable, on-ground security tailored to your environment."
            badge={
              <Badge>
                <ShieldCheckIcon />
                MANNED SECURITY SERVICES
              </Badge>
            }
          />

          <div className="mt-25 flex flex-col items-center gap-25">
            {operations.map((operation, i) => (
              <motion.div
                initial="initial"
                whileInView="animate"
                transition={{ delayChildren: stagger(0.1), delay: i * 0.2 }}
                variants={appearVariants}
                viewport={appearViewport}
                key={operation.title}
                className="flex max-w-230.5 gap-8 rounded-sm p-4 max-md:flex-col md:p-8"
                style={{
                  boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.16)",
                }}
              >
                <MotionImage
                  src={operation.image}
                  alt={operation.title}
                  variants={appearVariants}
                  className={cn(
                    "size-full w-full rounded-xs object-cover md:-my-13 md:w-72.25",
                  )}
                />
                <motion.div variants={appearVariants}>
                  <h3 className="mb-3 flex items-center gap-2.5 font-bold text-lg md:text-xl">
                    <operation.icon className="size-8 rounded bg-primary/5 p-1 text-primary" />
                    {operation.title}
                  </h3>
                  <p className="text-justify max-md:text-[15px]">
                    {operation.content}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk and compliance solutions */}
      <section
        className="overflow-hidden bg-blue-50/50"
        id={"risk-and-compliance-solutions"}
      >
        <div className="container mx-auto">
          <SectionHeading
            title={
              <>
                Stay <span className="text-primary">Secure</span>. Stay{" "}
                <span className="text-primary">Compliant</span>
              </>
            }
            subtitle="We identify risks, close security gaps, and help you meet regulatory
							standards through audits, assessments, and strategic planning."
            badge={
              <Badge>
                <ShieldCheckIcon />
                SECURITY RISK ASSESSMENT &amp; STRATEGIC PLANNING
              </Badge>
            }
          />
          <div className="mt-15 flex gap-10 max-md:flex-col lg:gap-22">
            <div className="flex max-w-127.75 justify-center">
              <MotionImage
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.3, once: true }}
                src={securityRiskAssessmentAndStrategyPlanningImage}
                alt="Risk and Compliance Solutions"
                className="-mb-10 -ml-10 w-full object-contain"
              />
            </div>
            <div className="flex flex-1 flex-col gap-8">
              {riskSolutions.map((solution, i) => (
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  transition={{ delayChildren: stagger(0.1), delay: i * 0.2 }}
                  variants={appearVariants}
                  viewport={appearViewport}
                  key={solution.title}
                  className="rounded p-8 shadow-md"
                >
                  <motion.h3
                    variants={appearVariants}
                    className="mb-3 flex items-center gap-3 font-bold text-lg"
                  >
                    <solution.icon className="size-8 rounded bg-primary/5 p-1 text-primary" />
                    {solution.title}
                  </motion.h3>
                  <motion.p variants={appearVariants} className="text-justify">
                    {solution.content}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
