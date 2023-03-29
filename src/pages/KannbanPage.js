import Card from "../components/UI/Card";
import Container from "../components/UI/Container";
import DragAndDrop from "../components/Kanban/DragAndDrop";
import classes from "./KannbanPage.module.css";
const Kannban = () => {
  return (
    <Container>
      <Card cardType="container">
        <div className={classes.eyebrow}>
          <h2>Tasks</h2>
          <button className="btn-dark">+ New Task</button>
        </div>
        <DragAndDrop></DragAndDrop>
      </Card>
    </Container>
  );
};
export default Kannban;
