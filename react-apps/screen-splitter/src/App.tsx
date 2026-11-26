import SplitScreen from "./components/splitscreen";

export interface ContentProps {
  title: string;
}

const LeftContent = ({ title }: ContentProps) => (
  <div style={{ backgroundColor: "lightblue" }}>{title}</div>
);

const RightContent = ({ title }: ContentProps) => (
  <div style={{ backgroundColor: "lightcoral" }}>{title}</div>
);

export default function App() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftContent title="Left content" />
      <RightContent title="Right content" />
    </SplitScreen>
  );
}
