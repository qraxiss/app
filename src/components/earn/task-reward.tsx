import { Row, Col } from "react-bootstrap";

const data = [
  {
    title: "Refer a friend /// 100 xp",
    description: "Invite your frinends to join Shopcek.",
    action: "Invite",
  },
  {
    title: "Refer a friend /// 100 xp",
    description: "Invite your frinends to join Shopcek.",
    action: "Invite",
  },
  {
    title: "Refer a friend /// 100 xp",
    description: "Invite your frinends to join Shopcek.",
    action: "Invite",
  },
  {
    title: "Refer a friend /// 100 xp",
    description: "Invite your frinends to join Shopcek.",
    action: "Invite",
  },
  {
    title: "Refer a friend /// 100 xp",
    description: "Invite your frinends to join Shopcek.",
    action: "Invite",
  },
  {
    title: "Refer a friend /// 100 xp",
    description: "Invite your frinends to join Shopcek.",
    action: "Invite",
  },
  {
    title: "Refer a friend /// 100 xp",
    description: "Invite your frinends to join Shopcek.",
    action: "Invite",
  },
  {
    title: "Refer a friend /// 100 xp",
    description: "Invite your frinends to join Shopcek.",
    action: "Invite",
  },
];

interface TaskProps {
  title: string;
  description: string;
  action: string;
}

export function Task({ title, description, action }: TaskProps) {
  return (
    <div className="">
      <div className="task">
        <div className="text">
          <h5 className="my-2">{title}</h5>
          <p>{description}</p>
        </div>
        <button className="invite-button">{action}</button>
      </div>
    </div>
  );
}

export const TaskRewards = () => {
  return (
    <section className="section pb-0 task-rewards">
      <div className="top-container mx-2">
        <h1 className="quests-heading">Quests</h1>
        <Row>
          <Col lg={6} xs={12}>
            {data.slice(0, 4).map((item) => {
              return <Row>{Task(item)}</Row>;
            })}
          </Col>

          <Col lg={6} xs={12}>
            {data.slice(4, 8).map((item) => {
              return <Row>{Task(item)}</Row>;
            })}
          </Col>
        </Row>
      </div>
    </section>
  );
};
