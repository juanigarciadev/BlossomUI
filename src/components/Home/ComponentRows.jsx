import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Alert } from "../UI/Alerts/Alert";
import { AvatarInfo } from "../UI/Avatar/Avatar";
import { Badge } from "../UI/Badges/Badge";
import { Button } from "../UI/Buttons/Button";
import { Input, Switch } from "../UI/Forms/Forms";
import { KbdShortcut } from "../UI/KBD/Kbd";
import { Pagination } from "../UI/Pagination/Pagination";
import { ProgressBar } from "../UI/Progress/ProgressBar";
import { Rating } from "../UI/Rating/Rating";
import { Spinner } from "../UI/Spinners/Spinner";
import { Stepper } from "../UI/Stepper/Stepper";
import { Toast } from "../UI/Toasts/Toast";

const photo = "https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg";

const PaginationDemo = () => {
  const [page, setPage] = useState(3);
  return <Pagination page={page} total={8} onChange={setPage} />;
};

const RatingDemo = () => {
  const [value, setValue] = useState(4);
  return <Rating value={value} onChange={setValue} showValue />;
};

const StepperDemo = () => {
  const [current, setCurrent] = useState(1);
  const steps = [{ title: "Account" }, { title: "Profile" }, { title: "Done" }];
  return (
    <div className="flex items-center gap-4">
      <div className="shrink-0"><Stepper steps={steps} current={current} onStepClick={setCurrent} /></div>
      <Button color="secondary" className="shrink-0" onClick={() => setCurrent((c) => (c + 1) % (steps.length + 1))}>
        {current >= steps.length ? "Reset" : "Next"}
      </Button>
    </div>
  );
};

const SwitchDemo = () => <Switch label="Dark mode" defaultChecked />;

const rows = [
  [
    <Alert color="green" variant="accent" showIcon>Your changes were saved.</Alert>,
    <div className="flex gap-2"><Badge color="red">Badge</Badge><Badge color="purple" outlined rounded>Outlined</Badge><Badge color="green">Done</Badge></div>,
    <Toast color="dark" actionLabel="Undo">Item deleted</Toast>,
    <div className="flex gap-2"><Button color="purple">Purple</Button><Button color="yellow" rounded>Yellow</Button></div>,
  ],
  [
    <div className="w-60"><Input placeholder="you@example.com" /></div>,
    <SwitchDemo />,
    <RatingDemo />,
    <div className="w-56"><ProgressBar value={68} size="lg" showValueInside /></div>,
  ],
  [
    <AvatarInfo src={photo} name="Katherine Hoffman" description="Active now" status="online" />,
    <KbdShortcut keys={["Ctrl", "K"]} relief />,
    <PaginationDemo />,
    <StepperDemo />,
    <Spinner />,
  ],
];

// The outer rows go to the right and the middle one to the left while the page scrolls.
const directions = [1, -1, 1];
const TRAVEL = 360;

const Row = ({ items, direction, progress, reduce }) => {
  const x = useTransform(progress, [0, 1], direction > 0 ? [0, TRAVEL] : [TRAVEL, 0]);
  const loop = [...items, ...items, ...items];
  const ref = useRef(null);

  // The repeated copies only fill the strip: keep them out of the tab order and away from screen readers.
  useEffect(() => {
    ref.current?.querySelectorAll("[data-copy] :is(a, button, input, select, textarea, [tabindex])").forEach((el) => el.setAttribute("tabindex", "-1"));
  }, []);

  return (
    <motion.div ref={ref} style={{ x: reduce ? 0 : x, marginLeft: -TRAVEL - 200 }} className="flex w-max gap-4 will-change-transform">
      {loop.map((item, i) => (
        <div
          key={i}
          {...(i >= items.length ? { "data-copy": "", "aria-hidden": true } : {})}
          className="flex shrink-0 items-center rounded-2xl border border-neutral-200 bg-white/70 px-5 py-4 dark:border-neutral-700 dark:bg-neutral-800/60"
        >
          {item}
        </div>
      ))}
    </motion.div>
  );
};

/** Three strips of usable components that slide sideways as the page scrolls: outer ones right, middle one left. */
const ComponentRows = () => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section
      ref={ref}
      aria-label="Component examples"
      className="ml-[calc(50%-50vw)] flex w-screen max-w-none shrink-0 flex-col gap-4 overflow-hidden py-6 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
    >
      {rows.map((items, i) => (
        <Row key={i} items={items} direction={directions[i]} progress={scrollYProgress} reduce={reduce} />
      ))}
    </section>
  );
};

export default ComponentRows;
