import Css from "./ExploreContainer.module.css";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = (props: ContainerProps) => (
  <div className={Css.container}>
    <strong>{props.name}</strong>
    <p>
      Explore{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://ionicframework.com/docs/components"
      >
        UI Components
      </a>
    </p>
  </div>
);

export default ExploreContainer;
