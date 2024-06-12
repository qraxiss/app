import {
  LoginToEarn,
  NameService,
  StayHereToEarn,
  TaskRewards,
} from "components/earn";
import { Container, Row, Col } from "react-bootstrap";

export const Earn = () => {
  return (
    <section className="section pt-20">
      <Container fluid className="container-custom section-background ">
        <NameService />
        <LoginToEarn />
        <StayHereToEarn />
        <TaskRewards />
      </Container>
    </section>
  );
};
